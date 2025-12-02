import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { SelectRemoteComponent } from './select-remote.component';

describe('SelectRemoteComponent', () => {
  let component: SelectRemoteComponent;
  let fixture: ComponentFixture<SelectRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRemoteComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.placeholder).toBe('Selecione uma opção');
    expect(component.valueProperty).toBe('id');
    expect(component.labelProperty).toBe('name');
    expect(component.searchProperty).toBe('name');
    expect(component.multiple).toBe(false);
    expect(component.clearable).toBe(true);
    expect(component.disabled).toBe(false);
    expect(component.searchable).toBe(true);
    expect(component.minSearchLength).toBe(0);
    expect(component.debounceTime).toBe(300);
    expect(component.pageSize).toBe(20);
  });

  it('should toggle dropdown when clicked', () => {
    expect(component.isOpen).toBe(false);
    component.toggleDropdown();
    expect(component.isOpen).toBe(true);
    component.toggleDropdown();
    expect(component.isOpen).toBe(false);
  });

  it('should clear selection', () => {
    component.selectedValue = 'test';
    component.clear();
    expect(component.selectedValue).toBe(null);
  });

  it('should handle multiple selection', () => {
    component.multiple = true;
    const option = { value: 1, label: 'Test Option' };
    
    component.onSelect(option);
    expect(component.selectedValues).toContain(1);
    
    component.onSelect(option);
    expect(component.selectedValues).not.toContain(1);
  });

  it('should handle single selection', () => {
    const option = { value: 1, label: 'Test Option' };
    
    component.onSelect(option);
    expect(component.selectedValue).toBe(1);
    expect(component.isOpen).toBe(false);
  });
});