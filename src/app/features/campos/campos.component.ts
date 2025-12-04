import { ChangeDetectorRef, Component, Injector, signal } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { CategoryQuartosModel } from 'src/app/shared/models/categoryQuartos.model';
import { HoteisAllModel } from 'src/app/shared/models/hoteisAll.model';
import { CategoryQuartosService } from 'src/app/shared/services/category.quartos.service';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { MenubarService } from 'src/app/shared/services/menubar.service';

@Component({
  selector: 'app-campos',
  standalone: false,
  templateUrl: './campos.component.html',
  styleUrl: './campos.component.scss'
})
export class CamposComponent extends ComponentBase{

  hotelId = signal<string | null>(null);
  filteredHoteis = signal<HoteisAllModel[]>([]);
  categories = signal<any[]>([]);
  showContent = signal<boolean>(false);

  campoNumber = signal<number | null>(null);
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
  currentStep = 1;
  steps = [
    { number: 1, title: 'Contexto', description: 'Hoteis disponíveis' },
    { number: 2, title: 'Campo', description: 'Campos customizados' },
    { number: 3, title: 'Edição', description: 'Edição dos campos' }
  ];

  override ngOnInit(): void {
    super.ngOnInit();
    this.doGetAllHoteis();
  }

  doGetAllHoteis(){
    this.hotelService.doGetUserIdHoteis().subscribe({
      next: (result) => {
        this.filteredHoteis.set(result.data || []);
      },
    });
  }

  onHotelSelecionado(hotelId: string){
    console.log('Hotel selecionado:', hotelId);
    this.hotelId.set(hotelId);
    this.showContent.set(true);
    console.log('showContent definido como:', this.showContent());
    this.goToStep(2);
  }
  campoNumberChange(campoNumber: number | null){
    this.campoNumber.set(campoNumber);
    this.goToStep(3);
  }
  onValidaCadastro(atual: number): boolean{
    if(atual == 1){
       if (
            this.hotelId() == null 
          ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 2){
       if (
            this.campoNumber() == null 
          ) {
            return false;
          }else{
            return true;
          }
    }else{
        // Validação para banheiro e TV - opcionais
        return false;
    }
  }

  goToStep(step: number) {
      this.currentStep = step;
  }

  isStepCompleted(step: number): boolean {
    return this.onValidaCadastro(step);
  }
}
