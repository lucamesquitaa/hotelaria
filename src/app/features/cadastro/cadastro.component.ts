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


  onValidaCadastro(atual: number): boolean{
    if(atual == 1){
       if (
            !this.itemCadastro?.name ||
            !this.itemCadastro.cnpj ||
            !this.itemCadastro.url ||
            !this.itemCadastro.razao ||
            this.itemCadastro?.category == 0
          ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 2){
        if (
            !this.itemCadastro?.nomeRep ||
            !this.itemCadastro.cpfRep ||
            !this.itemCadastro.telRep ||
            !this.itemCadastro.emailRep
          ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 3){
        if (
            !this.itemCadastro?.address ||
            !this.itemCadastro.number ||
            !this.itemCadastro.city ||
            !this.itemCadastro.cep
          ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 4){
        if (
            !this.itemCadastro?.description ||
            !this.itemCadastro.lobby ||
            !this.itemCadastro.diff ||
            this.itemCadastro.child == undefined ||
            this.itemCadastro.pets == undefined
          ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 5){
        if (  
            this.itemCadastro.coffee == undefined ||
            this.itemCadastro.wifi == undefined  ||
            this.itemCadastro.swimming == undefined  ||
            this.itemCadastro.cleaning == undefined  ||
            this.itemCadastro.gym == undefined 
        ) {
            return false;
          }else{
            return true;
          }
    }else if(atual == 6){
       
            return true;
          
    }else{
      return false;
    }
  }

  goToStep(step: number) {
      this.currentStep = step;
  }

  isStepCompleted(step: number): boolean {
    return this.onValidaCadastro(step);
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
          
    this.showLoading();
    this.hotelService.doPostHotel(this.itemCadastro, this.hotelId).subscribe({
      next: (response) => {
        this.toastr.success('Cadastro atualizado com sucesso.');
      },
      error: (error) => {
        this.toastr.error(error.error.mensagem || error.error.excecaoMensagem || "Erro no servidor.");
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }
}
