import { Component, Inject, inject, Injector, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, DetalhesModel, Photo } from 'src/app/shared/models/hotel.model';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent extends ComponentBase implements OnInit {
  itemCadastro: DetalhesModel = {} as DetalhesModel;

  currentStep: number = 1;

  constructor(public override injector: Injector) {
    super(injector);
    

  }

  override ngOnInit(): void {
    super.ngOnInit();
  
  }


  onNextCadastro(atual: number){
    if(atual === 1){
       if (
            !this.itemCadastro.name ||
            !this.itemCadastro.cnpj ||
            !this.itemCadastro.razao ||
            !this.itemCadastro.category
          ) {
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
    }
    this.currentStep++;
    this.itemCadastro = { ...this.itemCadastro };
  }
  onPreviousCadastro(){

    this.currentStep--;
    this.itemCadastro = { ...this.itemCadastro };
  }
}
