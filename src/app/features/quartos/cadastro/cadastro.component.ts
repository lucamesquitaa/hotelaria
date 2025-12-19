import { Component, Inject, inject, Injector, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { QuartosModel, RoomBedDTO } from 'src/app/shared/models/quartos.model';
import { QuartosService } from 'src/app/shared/services/quartos.service';
import { MenubarService } from 'src/app/shared/services/menubar.service';
import { ResponseApi } from 'src/app/shared/models/response.api';
import { CategoryQuartosService } from 'src/app/shared/services/category.quartos.service';
import { CategoryQuartosModel } from 'src/app/shared/models/categoryQuartos.model';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroQuartoComponent extends ComponentBase implements OnInit {
  itemCadastro: QuartosModel = {} as QuartosModel;

  acceptTerms1: boolean = false;
  acceptTerms2: boolean = false;

  categorys: any[] = [];
  beds: RoomBedDTO[] = [];
  
  
  apiUrlCategoryQuartos!: string;
  currentStep: number = 1;

  quartoId!: string | null;

  hotelId!: string ;
  imagens: File[] = [];

  errorList: string[] = [];
  
  // Armazena o estado de conclusão de cada step
  completedSteps: Set<number> = new Set<number>();

  steps = [
    { number: 1, title: 'Informações Básicas', description: 'Dados básicos do quarto' },
    { number: 2, title: 'Comodidades', description: 'Comodidades e serviços' },
    { number: 3, title: 'Imagens', description: 'Fotos do quarto' },
    { number: 4, title: 'Conclusão', description: 'Finalizar cadastro' }
  ];

  constructor(
    public override injector: Injector, 
    private quartosService: QuartosService,
    public menubarService: MenubarService,
    public categoryQuartosService: CategoryQuartosService,
  ) {
    super(injector);
    

  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.quartoId = this.activatedRoute.snapshot.paramMap.get('quartoId');
    this.hotelId = this.cookieService.get('hotel_id');
    
    // Inicializar beds como array vazio se não existir
    if (!this.itemCadastro.beds) {
      this.itemCadastro.beds = [];
    }
    
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.quartoId = params.get('quartoId');
      this.apiUrlCategoryQuartos = "http://localhost:8080/api/CategoryQuarto/" + this.hotelId;
      if (this.quartoId && this.hotelId) {
        this.showLoading();
        this.quartosService.GetQuartoById(this.quartoId).subscribe({
          next: (response: ResponseApi<QuartosModel>) => {
                if (response.data) {
                  this.itemCadastro = response.data;
                  console.log("Quarto carregado para edição:", this.itemCadastro);
                  
                  this.beds = this.itemCadastro.beds || [];
                  
                  this.categorys = this.itemCadastro.category.map((cat: CategoryQuartosModel) => ({
                    label: cat.name,
                    value: cat.id
                  }));
                }
              },
              error: (err: any) => {
                console.error('Erro ao buscar quarto:', err);
                this.hideLoading();
              },
              complete: () => {
                this.hideLoading();
              }
            });
      }
    });
  }

  onValidaCadastro(atual: number): boolean{
    if(atual == 1){
       // Limpa erros anteriores para validar novamente
        this.errorList = [];
        
        // Valida Nome Fantasia
        if(!this.itemCadastro?.name || this.itemCadastro.name.trim() === ''){
            this.errorList.push('O campo Nome do quarto é obrigatório.');
        }
        
        // Valida description 
        if (!this.itemCadastro?.description || this.itemCadastro.description.trim() === '') { 
            this.errorList.push('O campo descrição é obrigatório.');
        }
        
        // Valida maxOcupation
        if (!this.itemCadastro?.maxOcupation || this.itemCadastro.maxOcupation == 0) { 
            this.errorList.push('O campo ocupação máxima é obrigatório.');
        }
        
        // Valida área
        if (!this.itemCadastro?.areaSize || this.itemCadastro.description.trim() === '' || this.itemCadastro.areaSize == '0') { 
            this.errorList.push('O campo área é obrigatório.');
        }else if(isNaN(Number(this.itemCadastro.areaSize))){
            this.errorList.push('O campo área deve ser um número válido.');
        }
        
        // Valida Categoria
        if (!this.categorys || this.categorys.length === 0) { 
            this.errorList.push('O campo Categoria é obrigatório.');
        }
        
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;
    }else if(atual == 2){
        if(
          !this.beds || this.beds.length === 0 ||
          !this.itemCadastro.diff ||
          !this.itemCadastro.bathProducts ||
          !this.itemCadastro.typeTv
        ) // Limpa erros anteriores para validar novamente
        this.errorList = [];
        
        // Valida Camas
        if(!this.beds || this.beds?.length === 0){
            this.errorList.push('O campo Tipos de Cama é obrigatório.');
        }
        
        // Valida diff 
        if (!this.itemCadastro?.diff || this.itemCadastro.diff.trim() === '') { 
            this.errorList.push('O campo Diferenciais é obrigatório.');
        }
      
        
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;
    }else if(atual == 3){
        // images
        return true;
    }else if(atual == 4){
        // Validação final - termos aceitos
        if (this.acceptTerms1 == undefined || this.acceptTerms1 == false) { 
            this.errorList.push('O campo termos de cadastro é obrigatório.');
        }

        if( this.acceptTerms2 == undefined || this.acceptTerms2 == false) {
            this.errorList.push('O campo política de privacidade é obrigatório.');
        }
        
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;
    }else{
      return false;
    }
  }

  goToStep(step: number) {
    if(this.onValidaCadastro(this.currentStep)) {
      // Marca o step atual como completo antes de avançar
      this.completedSteps.add(this.currentStep);
      this.currentStep = step;
    }else if(this.completedSteps.has(this.currentStep)){
      this.completedSteps.delete(this.currentStep);
    }
  }

  isStepCompleted(step: number): boolean {
    // Verifica apenas se o step está no Set de steps completos
    return this.completedSteps.has(step);
  }


  onFileSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    if (files.length > 10) {
      alert('Você pode selecionar no máximo 10 imagens!');
    } else {
      this.imagens = files;
      // Converter arquivos para URLs ou base64 se necessário
      // Por enquanto mantendo como está para compatibilidade
    }
  }
  onCadastrarTipoQuarto(event: any) {
    console.log(event);
    this.showLoading();
    this.categoryQuartosService.doPostCategoryQuarto(event, this.hotelId).subscribe({
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error?.mensagem || error.error?.excecaoMensagem || "Erro no servidor.");
        this.categorys = [];
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }

    });
  }

  onCadastrarComodidade() {
    // Funcionalidade para cadastrar nova comodidade
    alert('Funcionalidade para cadastrar nova comodidade seria implementada aqui!');
    
    // Exemplo de implementação:
    // this.router.navigate(['/admin/comodidades/novo']);
    // ou
    // this.openModalCadastroComodidade();
  }

  onConcluirCadastro(){
    const hotelId = this.cookieService.get('hotel_id');
    if (!hotelId) {
      alert('Hotel ID não encontrado.');
      return;
    }
    this.itemCadastro.category = this.categorys.map((cat: any) => ({
      id: cat.value,
      name: cat.label
    }));
    
    // Converte bedType para enum numérico
    this.itemCadastro.beds = this.beds.map((bed) => ( {
      quantity: bed.quantity,
      bedType: Number(bed.bedType)
    }));

    console.log('Camas convertidas:', this.itemCadastro.beds);
    
    // Converte strings para booleans
    this.itemCadastro.refund = this.itemCadastro.refund == "true" || this.itemCadastro.refund === true;
    this.itemCadastro.freeze = this.itemCadastro.freeze == "true" || this.itemCadastro.freeze === true;
    this.itemCadastro.vault = this.itemCadastro.vault == "true" || this.itemCadastro.vault === true;
    this.itemCadastro.telephone = this.itemCadastro.telephone == "true" || this.itemCadastro.telephone === true;
    this.itemCadastro.coffee = this.itemCadastro.coffee == "true" || this.itemCadastro.coffee === true;
    this.itemCadastro.wifi = this.itemCadastro.wifi == "true" || this.itemCadastro.wifi === true;
    this.itemCadastro.fridge = this.itemCadastro.fridge == "true" || this.itemCadastro.fridge === true;
    this.itemCadastro.cleaning = this.itemCadastro.cleaning == "true" || this.itemCadastro.cleaning === true;
    this.itemCadastro.varanda = this.itemCadastro.varanda == "true" || this.itemCadastro.varanda === true;
    this.itemCadastro.bathroom = this.itemCadastro.bathroom == "true" || this.itemCadastro.bathroom === true;
    this.itemCadastro.tv = this.itemCadastro.tv == "true" || this.itemCadastro.tv === true;
    
  
    this.showLoading();
    this.quartosService.doPostPutQuarto(this.itemCadastro, hotelId).subscribe({
      next: (response: ResponseApi) => {
        this.toastr.success('Quarto cadastrado com sucesso.');
        this.router.navigate(['/admin']);
      },
      error: (error: any) => {
        this.toastr.error(error.error?.mensagem || error.error?.excecaoMensagem || "Erro no servidor.");
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }

  addBed() {
    if (!this.beds) {
      this.beds = [];
    }
    this.beds.push({ bedType: 0, quantity: 1 });
  }

  removeBed(index: number) {
    if (this.beds && this.beds.length > 0) {
      this.beds.splice(index, 1);
    }
  }

}
