import { Component, Input, Output, EventEmitter, OnInit, forwardRef, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SelectOption {
  value: any;
  label: string;
}

@Component({
  selector: 'app-select-remote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-remote.component.html',
  styleUrls: ['./select-remote.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectRemoteComponent),
      multi: true
    }
  ]
})
export class SelectRemoteComponent implements OnInit, ControlValueAccessor {
  @Input() apiUrl: string = '';
  @Input() placeholder: string = 'Selecione uma opção';
  @Input() valueProperty: string = 'id';
  @Input() labelProperty: string = 'name';
  @Input() searchProperty: string = 'name';
  @Input() multiple: boolean = false;
  @Input() clearable: boolean = true;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() searchable: boolean = true;
  @Input() minSearchLength: number = 0;
  @Input() debounceTime: number = 300;
  @Input() pageSize: number = 20;
  @Input() additionalParams: any = {};
  @Input() showAddButton: boolean = false;
  @Input() addButtonTooltip: string = 'Adicionar novo item';
  @Input() maxVisibleTags: number = 3;

  @Output() selectionChange = new EventEmitter<any>();
  @Output() addNew = new EventEmitter<string>();

  options: SelectOption[] = [];
  filteredOptions: SelectOption[] = [];
  selectedValue: any = null;
  selectedValues: any[] = [];
  searchTerm: string = '';
  isLoading: boolean = false;
  isOpen: boolean = false;
  currentPage: number = 1;
  hasMore: boolean = true;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  ngOnInit() {
    this.loadInitialData();
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    if (this.multiple) {
      this.selectedValues = Array.isArray(value) ? value : [];
    } else {
      this.selectedValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Load initial data
  loadInitialData() {
    if (!this.apiUrl) return;
    
    this.isLoading = true;
    const params = {
      page: 1,
      limit: this.pageSize,
      ...this.additionalParams
    };

    this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Erro ao carregar dados:', error);
        return of({ data: [], total: 0 });
      })
    ).subscribe(response => {
      this.options = this.mapResponseToOptions(response.data || response);
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = response.total > this.pageSize;
    });
  }

  // Handle search input
  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.onSearch(target.value);
  }

  // Search functionality
  onSearch(term: string) {
    this.searchTerm = term;
    
    if (term.length < this.minSearchLength) {
      this.filteredOptions = [...this.options];
      return;
    }

    this.isLoading = true;
    this.currentPage = 1;

    const params = {
      [this.searchProperty]: term,
      page: this.currentPage,
      limit: this.pageSize,
      ...this.additionalParams
    };

    this.http.get<any>(this.apiUrl, { params }).pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      switchMap(() => this.http.get<any>(this.apiUrl, { params })),
      catchError(error => {
        console.error('Erro na pesquisa:', error);
        return of({ data: [], total: 0 });
      })
    ).subscribe(response => {
      this.options = this.mapResponseToOptions(response.data || response);
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = response.total > this.pageSize;
    });
  }

  // Load more data for pagination
  loadMore() {
    if (!this.hasMore || this.isLoading) return;

    this.isLoading = true;
    this.currentPage++;

    const params = {
      [this.searchProperty]: this.searchTerm,
      page: this.currentPage,
      limit: this.pageSize,
      ...this.additionalParams
    };

    this.http.get<any>(this.apiUrl, { params }).pipe(
      catchError(error => {
        console.error('Erro ao carregar mais dados:', error);
        return of({ data: [], total: 0 });
      })
    ).subscribe(response => {
      const newOptions = this.mapResponseToOptions(response.data || response);
      this.options = [...this.options, ...newOptions];
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = this.options.length < response.total;
    });
  }

  // Map API response to select options
  private mapResponseToOptions(data: any[]): SelectOption[] {
    return data.map(item => ({
      value: item[this.valueProperty],
      label: item[this.labelProperty]
    }));
  }

  // Get available options (filters out already selected items in multiple mode)
  getAvailableOptions(): SelectOption[] {
    if (!this.multiple) {
      return this.filteredOptions;
    }
    
    // Filtra as opções removendo as já selecionadas
    return this.filteredOptions.filter(option => {
      return !this.selectedValues.some(value => {
        // Se o valor é um objeto do tipo SelectOption
        if (typeof value === 'object' && value !== null) {
          // Verifica se tem a propriedade 'value' (SelectOption)
          if ('value' in value) {
            return value.value === option.value;
          }
          // Senão, verifica pelo valueProperty
          return value[this.valueProperty] === option.value;
        }
        // Se é um valor simples, compara diretamente
        return value === option.value;
      });
    });
  }

  // Handle selection
  onSelect(option: SelectOption) {
    if (this.multiple) {
      // Verifica se já está selecionado
      const isAlreadySelected = this.selectedValues.some(value => {
        if (typeof value === 'object' && value !== null) {
          // Verifica se tem a propriedade 'value' (SelectOption)
          if ('value' in value) {
            return value.value === option.value;
          }
          // Senão, verifica pelo valueProperty
          return value[this.valueProperty] === option.value;
        }
        return value === option.value;
      });
      
      // Não permite selecionar novamente se já estiver selecionado
      if (isAlreadySelected) {
        return;
      }
      
      this.selectedValues.push(option);
      this.onChange(this.selectedValues);
      this.selectionChange.emit(this.selectedValues);
    } else {
      this.selectedValue = option;
      this.onChange(this.selectedValue);
      this.selectionChange.emit(this.selectedValue);
      this.isOpen = false;
    }
    this.onTouched();
  }

  // Toggle dropdown
  toggleDropdown() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.options.length === 0) {
      this.loadInitialData();
    }
  }

  // Close dropdown
  closeDropdown() {
    this.isOpen = false;
    this.onTouched();
  }

  // Clear selection
  clear() {
    if (this.multiple) {
      this.selectedValues = [];
      this.onChange(this.selectedValues);
      this.selectionChange.emit(this.selectedValues);
    } else {
      this.selectedValue = null;
      this.onChange(this.selectedValue);
      this.selectionChange.emit(this.selectedValue);
    }
  }

  // Check if option is selected
  isSelected(option: SelectOption): boolean {
    if (this.multiple) {
      if (!Array.isArray(this.selectedValues)) return false;
      
      return this.selectedValues.some(value => {
        if (typeof value === 'object' && value !== null) {
          // Verifica se tem a propriedade 'value' (SelectOption)
          if ('value' in value) {
            return value.value === option.value;
          }
          // Senão, verifica pelo valueProperty
          return value[this.valueProperty] === option.value;
        }
        // Se é um valor simples, compara diretamente
        return value === option.value;
      });
    }
    
    // Para seleção simples
    if (typeof this.selectedValue === 'object' && this.selectedValue !== null) {
      if ('value' in this.selectedValue) {
        return this.selectedValue.value === option.value;
      }
      return this.selectedValue[this.valueProperty] === option.value;
    }
    return this.selectedValue === option.value;
  }

  // Get selected label for display
  getSelectedLabel(): string {
    if (this.multiple) {
      if (!Array.isArray(this.selectedValues) || this.selectedValues.length === 0) {
        return this.placeholder;
      }
      if (this.selectedValues.length === 1) {
        const option = this.options.find(opt => opt.value === this.selectedValues[0]);
        return option ? option.label : this.selectedValues[0];
      }
      return `${this.selectedValues.length} itens selecionados`;
    } else {
      if (!this.selectedValue) return this.placeholder;
      const option = this.options.find(opt => opt.value === this.selectedValue);
      return option ? option.label : this.selectedValue;
    }
  }

  // TrackBy function for ngFor performance
  trackByValue(index: number, option: SelectOption): any {
    return option.value;
  }

  // Handle add new button click
  onAddNew() {
    this.addNew.emit(this.searchTerm);
    this.onSearch(this.searchTerm);
  }

  // Get selected options as tags for display
  getSelectedTags(): SelectOption[] {
    if (!this.multiple || !this.selectedValues || !Array.isArray(this.selectedValues)) {
      return [];
    }
    
    const visibleTags = this.selectedValues.slice(0, this.maxVisibleTags);
    return visibleTags.map(value => {
      // Se o valor já é um objeto
      if (typeof value === 'object' && value !== null) {
        // Se já é um SelectOption (tem 'value' e 'label')
        if ('value' in value && 'label' in value) {
          return value;
        }
        
        // Se tem as propriedades customizadas (valueProperty e labelProperty)
        const extractedValue = value[this.valueProperty];
        const extractedLabel = value[this.labelProperty] || value.label || value?.toString() || '';
        
        return {
          value: extractedValue,
          label: extractedLabel
        };
      }
      
      // Senão, busca nas opções carregadas
      const option = this.options.find(opt => opt.value === value);
      return option || { value, label: value?.toString() || '' };
    });
  }

  // Remove a specific tag by its value
  removeTagByValue(value: any) {
    if (!this.multiple || !Array.isArray(this.selectedValues)) return;
    
    const index = this.selectedValues.findIndex(item => {
      if (typeof item === 'object' && item !== null) {
        // Verifica se tem a propriedade 'value' (SelectOption)
        if ('value' in item) {
          return item.value === value;
        }
        // Senão, verifica pelo valueProperty
        return item[this.valueProperty] === value;
      }
      // Se é um valor simples, compara diretamente
      return item === value;
    });
    
    if (index > -1) {
      this.selectedValues.splice(index, 1);
      this.onChange(this.selectedValues);
      this.selectionChange.emit(this.selectedValues);
    }
  }

  // Remove a specific tag (kept for backward compatibility)
  removeTag(value: any) {
    this.removeTagByValue(value);
  }

  // Handle clicks outside the component
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
}