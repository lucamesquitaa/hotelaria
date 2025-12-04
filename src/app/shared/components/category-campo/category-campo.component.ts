import { ChangeDetectorRef, Component, Injector, Input, signal } from '@angular/core';
import { CategoryQuartosModel } from '../../models/categoryQuartos.model';
import { HoteisAllModel } from '../../models/hoteisAll.model';
import { CategoryQuartosService } from '../../services/category.quartos.service';
import { HotelService } from '../../services/hotel.service';
import { MenubarService } from '../../services/menubar.service';
import { ComponentBase } from '../component.base';

@Component({
  selector: 'app-category-campo',
  standalone: false,
  templateUrl: './category-campo.component.html',
  styleUrl: './category-campo.component.scss'
})
export class CategoryCampoComponent extends ComponentBase{
  @Input() hotelId!: string | null;
  filteredHoteis = signal<HoteisAllModel[]>([]);
  categories = signal<any[]>([]);
  showContent = signal<boolean>(false);

  newCategoryName: string = '';

   constructor(
    public override injector: Injector, 
    private categoryQuartosService: CategoryQuartosService,
    public menubarService: MenubarService,
    public hotelService: HotelService,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadCategories();
  }

  loadCategories(): void {
    const id = this.hotelId;
    if (!id) return;
    this.categoryQuartosService.doGetCategoryQuartosByHotelId(id).subscribe(categories => {
      this.categories.set(categories.data || []);
    });
  }

  onDeleteCategory(categoryId: string): void {
    if (!categoryId) return;
    this.categoryQuartosService.doDeleteCategoryQuarto(categoryId).subscribe({
      next: () => {
        this.loadCategories();
        this.toastr.success(`Item removido com sucesso!`);
      },
      error: (err: any) => {
        console.error('Erro ao deletar categoria:', err.message);
        this.toastr.error(`Erro ao remover item!`,  err.message);
      }
    });
  }
  onPostCategory(): void {

    const hotelId = this.hotelId;
    if (!hotelId || !this.newCategoryName) return;

    var newCategory: CategoryQuartosModel = {
      name: this.newCategoryName
    };

    this.categoryQuartosService.doPostCategoryQuarto(newCategory, hotelId).subscribe({
      next: () => {
        this.loadCategories();
        this.newCategoryName = '';
        this.toastr.success(`Item adicionado com sucesso!`);
      },
      error: (err: any) => {
        this.toastr.error(`Erro ao adicionar item.`,  err.message);
        console.error('Erro ao adicionar categoria:', err.message);
      }
    });
  }
}
