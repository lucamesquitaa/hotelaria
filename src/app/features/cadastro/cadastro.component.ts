import { Component, Inject, inject, Injector, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, DetalhesModel, DetalhesModelByManager, Photo } from 'src/app/shared/models/hotel.model';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { MenubarService } from 'src/app/shared/services/menubar.service';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent extends ComponentBase implements OnInit {
  itemCadastro: DetalhesModelByManager = {} as DetalhesModelByManager;

  acceptTerms1: boolean = false;
  acceptTerms2: boolean = false;

  category!: number ;

  currentStep: number = 1;

  hotelId!: string | null;

  imagens: File[] = [];

  errorList: string[] = [];
  
  // Armazena o estado de conclusão de cada step
  completedSteps: Set<number> = new Set<number>();

  steps = [
    { number: 1, title: 'Informações Básicas', description: 'Dados básicos do hotel' },
    { number: 2, title: 'Representante Legal', description: 'Dados do responsável' },
    { number: 3, title: 'Endereço', description: 'Localização do hotel' },
    { number: 4, title: 'Informações Complementares', description: 'Detalhes adicionais' },
    { number: 5, title: 'Serviços', description: 'Comodidades oferecidas' },
    { number: 6, title: 'Imagens', description: 'Fotos do hotel' },
    { number: 7, title: 'Conclusão', description: 'Finalizar cadastro' }
  ];

  constructor(
    public override injector: Injector, 
    private hotelService: HotelService,
    public menubarService: MenubarService
  ) {
    super(injector);
    

  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.hotelId = this.activatedRoute.snapshot.paramMap.get('hotelId');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
    
      if (this.hotelId) {
        this.showLoading();
        this.hotelService.doGetHotelByManager(this.hotelId).subscribe({
          next: (item) => {
                if (item.data) {
                  this.itemCadastro = item.data;
                }
                console.log("item cadastro:");
                console.log(item);
              },
              error: (err) => {
                console.error('Erro ao buscar coordenadas:', err);
                this.hideLoading();
              },
              complete: () => {
                this.hideLoading();
              }
            });
      }
    });
  }

  onchangeURL()
  {
    if(this.itemCadastro.name){
      let url = this.itemCadastro.name.toLowerCase();
      url = url.replace(/ /g, '-');
      this.itemCadastro.url = url;
    }
  }

  onValidaCadastro(atual: number): boolean{
  
    if(atual === 1){
        // Limpa erros anteriores para validar novamente
        this.errorList = [];
        
        // Valida Nome Fantasia
        if(!this.itemCadastro?.name || this.itemCadastro.name.trim() === ''){
            this.errorList.push('O campo Nome Fantasia é obrigatório.');
        }
        
        // Valida CNPJ 
        if (!this.itemCadastro?.cnpj || this.itemCadastro.cnpj.trim() === '') { 
            this.errorList.push('O campo CNPJ é obrigatório.');
        }else if(this.itemCadastro.cnpj.length != 14){
            this.errorList.push('O campo CNPJ deve conter 14 dígitos.');
        }
        
        // Valida URL
        if (!this.itemCadastro?.url || this.itemCadastro.url.trim() === '') { 
            this.errorList.push('O campo URL é obrigatório.');
        }
        
        // Valida Razão Social
        if (!this.itemCadastro?.razao || this.itemCadastro.razao.trim() === '') { 
            this.errorList.push('O campo Razão Social é obrigatório.');
        }
        
        // Valida Categoria
        if (this.itemCadastro.category == undefined) { 
            this.errorList.push('O campo Categoria é obrigatório.');
        }
        
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;

    }else if(atual === 2){
        // Valida Nome Representante
        this.errorList = [];
        if(!this.itemCadastro?.nomeRep || this.itemCadastro.nomeRep.trim() === ''){
            this.errorList.push('O campo Nome do Representante é obrigatório.');
        }
        // Valida CPF Representante
        if(!this.itemCadastro?.cpfRep || this.itemCadastro.cpfRep.trim() === ''){
            this.errorList.push('O campo CPF do Representante é obrigatório.');
        }else if(this.itemCadastro.cpfRep.length != 11){
            this.errorList.push('O campo CPF deve conter 11 dígitos.');
        }

        // Valida Telefone Representante
        if(!this.itemCadastro?.telRep || this.itemCadastro.telRep.trim() === ''){
            this.errorList.push('O campo Telefone do Representante é obrigatório.');
        }else if(this.itemCadastro.telRep.length != 12){
            this.errorList.push('O campo Telefone deve conter 12 dígitos.');
        }

        // Valida Email Representante
        if(!this.itemCadastro?.emailRep || this.itemCadastro.emailRep.trim() === ''){
            this.errorList.push('O campo Email do Representante é obrigatório.');
        }


       // Retorna true se não houver erros
         if(this.errorList.length === 0)
         return true;
        else
         return false;

    }else if(atual === 3){
       
        this.errorList = [];

        // Valida endereço
        if(!this.itemCadastro?.address || this.itemCadastro.address.trim() === ''){
            this.errorList.push('O campo Endereço é obrigatório.');
        }
        // Valida número
        if(!this.itemCadastro?.number || this.itemCadastro.number.trim() === ''){
            this.errorList.push('O campo Número é obrigatório.');
        }
        // Valida cidade
        if(!this.itemCadastro?.city || this.itemCadastro.city.trim() === ''){
            this.errorList.push('O campo Cidade é obrigatório.');
        }
        // Valida CEP
        if(!this.itemCadastro?.cep || this.itemCadastro.cep.trim() === ''){
            this.errorList.push('O campo CEP é obrigatório.');
        }else if(this.itemCadastro.cep.length != 8){
            this.errorList.push('O campo CEP deve conter 8 dígitos.');
        }
        
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;
          
    }else if(atual === 4){
      // Valida Descrição e outros campos
        this.errorList = [];

        if(!this.itemCadastro?.description || this.itemCadastro.description.trim() === ''){
            this.errorList.push('O campo Descrição é obrigatório.');
        } 
        // Valida Lobby
        if(!this.itemCadastro?.lobby || this.itemCadastro.lobby.trim() === ''){
            this.errorList.push('O campo Lobby é obrigatório.');
        }
        // Valida Diferenciais
        if(!this.itemCadastro?.diff || this.itemCadastro.diff.trim() === ''){
            this.errorList.push('O campo Diferenciais é obrigatório.');
        }
        // Valida Child
        if(this.itemCadastro.child == undefined){
            this.errorList.push('O campo Aceita Crianças é obrigatório.');
        }
        // Valida Pets
        if(this.itemCadastro.pets == undefined){
            this.errorList.push('O campo Aceita Pets é obrigatório.');
        }
        // Retorna true se não houver erros
         if(this.errorList.length === 0)
         return true;
        else
         return false;
          
    }else if(atual === 5){
        // Valida Coffee 
        this.errorList = [];
        if(this.itemCadastro.coffee == undefined){
            this.errorList.push('O campo Café da manhã é obrigatório.');
        }
        // Valida Wifi
        if(this.itemCadastro.wifi == undefined){
            this.errorList.push('O campo Wifi é obrigatório.');
        }
        // Valida Swimming
        if(this.itemCadastro.swimming == undefined){
            this.errorList.push('O campo Piscina é obrigatório.');
        }
        // Valida Cleaning
        if(this.itemCadastro.cleaning == undefined){
            this.errorList.push('O campo Serviço de limpeza é obrigatório.');
        }
        // Valida Gym
        if(this.itemCadastro.gym == undefined){
            this.errorList.push('O campo Academia é obrigatório.');
        }
        // Retorna true se não houver erros
        if(this.errorList.length === 0)
         return true;
        else
         return false;
     
    }else if(atual === 6){
      return true;
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
    }
  }
  concluirCadastro(){
    if (!this.acceptTerms1 || !this.acceptTerms2 ) {
            alert('Você deve aceitar os termos para continuar!');
            return;
    }
    if (!this.itemCadastro) {
      alert('Dados do cadastro estão incompletos.');
      return;
    }
    
    //os itens booleanos devem ser convertidos de string para boolean
    this.itemCadastro.child = this.itemCadastro.child == "true";
    this.itemCadastro.pets = this.itemCadastro.pets == "true";
    this.itemCadastro.coffee = this.itemCadastro.coffee == "true" ;
    this.itemCadastro.wifi = this.itemCadastro.wifi == "true" ;
    this.itemCadastro.swimming = this.itemCadastro.swimming == "true" ;
    this.itemCadastro.cleaning = this.itemCadastro.cleaning == "true" ;
    this.itemCadastro.gym = this.itemCadastro.gym == "true" ;

    this.showLoading();
    this.hotelService.doPostHotel(this.itemCadastro, this.hotelId).subscribe({
      next: (response) => {
        this.toastr.success('Cadastro atualizado com sucesso.');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.mensagem || error.error.excecaoMensagem || "Erro no servidor.");
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }
}
