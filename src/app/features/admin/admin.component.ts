import { Component, Inject, inject, Injector, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { HotelService } from 'src/app/shared/services/hotel.service';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent extends ComponentBase implements OnInit {

  hotel: any;

  filteredHoteis: any[] = [];

  hoteis!: any[];

/**
 *
 */
constructor(public override injector: Injector, private hotelService: HotelService) {
  super(injector);
  
}

override ngOnInit(): void {
  this.hotelService.doGetAllHoteis().subscribe({
    next: (result) => {
      this.hoteis = result;
      this.filteredHoteis = this.hoteis;
    },
  });
}

  formGroupAdmin: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    child: new FormControl('', [Validators.required]),
    pet: new FormControl('', [Validators.required]),
    tax: new FormControl(''),
    id: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    num: new FormControl('', [Validators.required]),
    comp: new FormControl(''),
    checkPraia: new FormControl(false),
    checkCentro: new FormControl(false),
    checkAeroporto: new FormControl(false),
    checkRodoviria: new FormControl(false),
    checkHospitais: new FormControl(false),
    checkCafe: new FormControl(false),
    checkWifi: new FormControl(false),
    checkPiscina: new FormControl(false),
    checkLimpeza: new FormControl(false),
    checkAcademia: new FormControl(false),
    fotos: new FormArray([]),
  });

  private modalService = inject(NgbModal);
  
  openLg(content: TemplateRef<any>, id?: string) {
    if (id) {
      this.hotelService.doGetHotelId(id).subscribe({
        next: (result) => {
          this.formGroupAdmin.patchValue({
            name: result[0].name,
            desc: result[0].description,
            category: result[0].category ,
            child: result[0].child == true ? 1 : 2,
            pet: result[0].pets == true ? 1 : 2,
            tax: result[0].petsTax,
            id: result[0].id,
            cep: result[0].cep,
            endereco: result[0].address,
            num: result[0].number,
            comp: result[0].complement,
            checkPraia: result[0].beach,
            checkCentro: result[0].downtown,
            checkAeroporto: result[0].airpot,
            checkRodoviria: result[0].highway,
            checkHospitais: result[0].hospital,
            checkCafe: result[0].coffee,
            checkWifi: result[0].wifi,
            checkPiscina: result[0].swimming,
            checkLimpeza: result[0].cleaning,
            checkAcademia: result[0].gym
          });
          this.fotos.clear();
          if (result[0].photos && Array.isArray(result[0].photos)) {
            for (const photo of result[0].photos) {
              this.fotos.push(new FormControl(photo.url));
            }
          }
          this.modalService.open(content, { size: 'lg' });
        }
      });
    }else{
      this.modalService.open(content, { size: 'lg' });
    }
  }

  onCadastraSubmit(formGroup: FormGroup) {
    if(formGroup) {
      
      this.formGroupAdmin.reset();
      this.fotos.clear();
      return;
    }
  }

  formatter = (result: any) => result.name.toUpperCase() + " (" + result.id + ")";
  
    search: OperatorFunction<string, readonly any[]> = (text$: Observable<any>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((term) =>
          term === ''
            ? []
            : this.hoteis.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
        ),
      );

  onHotelSelecionado() {
    if(!this.hotel) {
      this.filteredHoteis = this.hoteis;
      return;
    }
    this.filteredHoteis = this.hoteis.map((v) => this.hotel.name === v.name ? v : null).filter((v) => v !== null);
  }

  get fotos(): FormArray {
    return this.formGroupAdmin.get('fotos') as FormArray;
  }

  addFoto() {
    this.fotos.push(new FormControl(''));
  }
  removeFoto(index: number) {
    this.fotos.removeAt(index);
  }
}
