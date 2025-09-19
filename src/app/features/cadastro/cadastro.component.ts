import { Component, Inject, inject, Injector, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, DetalhesModel, DetalhesModelByManager, Photo } from 'src/app/shared/models/hotel.model';
import { HotelService } from 'src/app/shared/services/hotel.service';

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

  constructor(public override injector: Injector, private hotelService: HotelService) {
    super(injector);
    

  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.hotelId = this.activatedRoute.snapshot.paramMap.get('hotelId');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
      if (this.hotelId) {
        this.hotelService.doGetHotelByManager(this.hotelId).subscribe({
          next: (item) => {
                this.itemCadastro = item;
                console.log(this.itemCadastro);
              },
              error: (err) => {
                console.error('Erro ao buscar coordenadas:', err);
              },
              complete: () => {
                this.hideLoading();
              }
            });
      }
    });
  }


  onNextCadastro(atual: number){
    if(atual === 1){
       if (
            !this.itemCadastro.name ||
            !this.itemCadastro.cnpj ||
            !this.itemCadastro.url ||
            !this.itemCadastro.razao ||
            this.itemCadastro.category == 0
          ) {
            console.log(this.itemCadastro.category);
            alert('Preencha todos os campos');
            return;
          }
    }else if(atual === 2){
        if (
            !this.itemCadastro.nomeRep ||
            !this.itemCadastro.cpfRep ||
            !this.itemCadastro.telRep ||
            !this.itemCadastro.emailRep
          ) {
            alert('Preencha todos os campos');
            return;
          }
    }else if(atual === 3){
        if (
            !this.itemCadastro.address ||
            !this.itemCadastro.number ||
            !this.itemCadastro.city ||
            !this.itemCadastro.cep
          ) {
            alert('Preencha todos os campos');
            return;
          }
    }else if(atual === 4){
        if (
            !this.itemCadastro.description ||
            !this.itemCadastro.lobby ||
            !this.itemCadastro.diff ||
            !this.itemCadastro.child ||
            !this.itemCadastro.pets
          ) {
            alert('Preencha todos os campos');
            return;
          }
    }else if(atual === 6){
        if (this.imagens.length === 0) {
            alert('Selecione ao menos uma imagem!');
            return;
          }
    }

    this.currentStep++;
    this.itemCadastro = { ...this.itemCadastro };
  }
  onPreviousCadastro(){

    this.currentStep--;
    this.itemCadastro = { ...this.itemCadastro };
  }

  onFileSelected(event: any) {
    const files = Array.from(event.target.files) as File[];
    if (files.length > 10) {
      alert('Você pode selecionar no máximo 10 imagens!');
    } else {
      this.imagens = files;
    }
  }
  onConcluirCadastro(){
    if (!this.acceptTerms1 || !this.acceptTerms2 ) {
            alert('Você deve aceitar os termos para continuar!');
            return;
          }
          
    this.showLoading();
    this.hotelService.doPostHotel(this.itemCadastro, this.hotelId).subscribe({
      next: (response) => {
        this.toastr.success('Cadastro atualizado com sucesso.');
      },
      error: (error) => {
        this.toastr.error('Erro ao concluir cadastro.');
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }
}
