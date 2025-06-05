import { Component, Inject, inject, Injector, OnInit, resolveForwardRef, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { Contact, Photo } from 'src/app/shared/models/hotel.model';
import { HotelService } from 'src/app/shared/services/hotel.service';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent extends ComponentBase implements OnInit {

  hotel: any;

  idHotel?: string;

  filteredHoteis: any[] = [];

  hoteis!: any[];

  detalhesModelId!: string | undefined;

/**
 *
 */
constructor(public override injector: Injector, private hotelService: HotelService) {
  super(injector);
  
}

override ngOnInit(): void {
  this.doGetAllHoteis();

   // Atualiza o campo url conforme o nome é digitado
  this.formGroupAdmin.get('name')?.valueChanges.subscribe((value: string) => {
    if (value) {
      const url = value
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
        .replace(/[^a-z0-9]+/g, '-') // substitui por hífen
        .replace(/(^-|-$)/g, ''); // remove hífens do início/fim
      this.formGroupAdmin.get('url')?.setValue(url, { emitEvent: false });
    } else {
      this.formGroupAdmin.get('url')?.setValue('', { emitEvent: false });
    }
  });
}

doGetAllHoteis(){
  this.hotelService.doGetAllHoteis().subscribe({
    next: (result) => {
      this.hoteis = result;
      this.filteredHoteis = this.hoteis;
      this.idHotel = undefined;
    },
  });
}

  formGroupAdmin: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    rede: new FormControl(''),
    city: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    child: new FormControl('', [Validators.required]),
    pet: new FormControl('', [Validators.required]),
    tax: new FormControl(''),
    url: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    endereco: new FormControl('', [Validators.required]),
    num: new FormControl('', [Validators.required]),
    comp: new FormControl(''),
    lobby: new FormControl('', [Validators.required]),
    diff: new FormControl('', [Validators.required]),
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
    contatos: new FormArray([]),
  });

  private modalService = inject(NgbModal);
  
  openLg(content: TemplateRef<any>, id?: string) {
    if (id) {
      this.idHotel = id;
      this.hotelService.doGetHotelId(id).subscribe({
        next: (result) => {
          this.formGroupAdmin.patchValue({
            name: result[0].name,
            rede: result[0].rede,
            city: result[0].city,
            desc: result[0].description,
            category: result[0].category ,
            child: result[0].child == true ? 1 : 2,
            pet: result[0].pets == true ? 1 : 2,
            tax: result[0].petsTax,
            url: result[0].url,
            cep: result[0].cep,
            endereco: result[0].address,
            num: result[0].number,
            comp: result[0].complement,
            lobby: result[0].lobby,
            diff: result[0].diff,
            checkPraia: result[0].beach,
            checkCentro: result[0].downtown,
            checkAeroporto: result[0].airpot,
            checkRodoviria: result[0].highway,
            checkHospitais: result[0].hospital,
            checkCafe: result[0].coffee == true ? 1 : 2,
            checkWifi: result[0].wifi == true ? 1 : 2,
            checkPiscina: result[0].swimming == true ? 1 : 2,
            checkLimpeza: result[0].cleaning == true ? 1 : 2,
            checkAcademia: result[0].gym == true ? 1 : 2
          });
          this.fotos.clear();
          if (result[0].photos && Array.isArray(result[0].photos)) {
            for (const photo of result[0].photos) {
              this.fotos.push(new FormGroup({
                url: new FormControl(photo.url ?? ''),
                alt: new FormControl(photo.alt ?? ''),
                stared: new FormControl(photo.stared ?? false)
              }));
            }
          }
          this.contatos.clear();
          if (result[0].contacts && Array.isArray(result[0].contacts)) {
            for (const contact of result[0].contacts) {
              this.contatos.push(new FormGroup({
                name:  new FormControl(contact.name ?? ''),
                contact: new FormControl(contact.contact ?? ''),
              }));
            }
          }
          this.modalService.open(content, { size: 'lg' });
        }
      });
    }else{
      this.cancelModal();
      this.modalService.open(content, { size: 'lg' });
    }
  }

  onCadastraSubmit(formGroup: FormGroup) {
    if(formGroup) {
      this.hotelService.doPostHotel({
        name: formGroup.value.name,
        rede: formGroup.value.rede ?? '',
        city: formGroup.value.city,
        url: formGroup.value.url,
        description: formGroup.value.desc,
        category: formGroup.value.category,
        child: formGroup.value.child == '1',
        pets: formGroup.value.pet == '1',
        petsTax: formGroup.value.tax ?? 0,
        cep: formGroup.value.cep,
        address: formGroup.value.endereco,
        number: formGroup.value.num,
        complement: formGroup.value.comp ?? '',
        lobby: formGroup.value.lobby,
        diff: formGroup.value.diff,
        beach: formGroup.value.checkPraia,
        downtown: formGroup.value.checkCentro,
        airpot: formGroup.value.checkAeroporto,
        highway: formGroup.value.checkRodoviria,
        hospital: formGroup.value.checkHospitais,
        coffee: formGroup.value.checkCafe == '1',
        wifi: formGroup.value.checkWifi == '1',
        swimming: formGroup.value.checkPiscina == '1',
        cleaning: formGroup.value.checkLimpeza == '1',
        gym: formGroup.value.checkAcademia == '1', 
        photos: this.fotos.value.map((photo: Photo | null) => ({
          url: photo?.url ?? '',
          alt: photo?.alt ?? '',
          stared: photo?.stared ?? false
        })),
        contacts: this.contatos.value.map((ctt: Contact | null ) => ({
          name: ctt?.name ?? '',
          contact: ctt?.contact ?? '',
        })),
      }, this.idHotel).subscribe({
        next: (result) => {
          this.toastr.success("Hotel cadastrado com sucesso!");
          this.doGetAllHoteis();
          this.modalService.dismissAll();
          this.formGroupAdmin.reset();
          this.fotos.clear();
          this.contatos.clear();
        },
        error: (error) => {
          this.toastr.error("Erro ao cadastrar hotel: " + error.message);
        }
      });
      
    }
  }

  formatter = (result: any) => result.name.toUpperCase() + " (" + result.url + ")";
  
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

  get fotos(): FormArray<FormGroup> {
  return this.formGroupAdmin.get('fotos') as FormArray<FormGroup>;
}
get contatos(): FormArray<FormGroup> {
  return this.formGroupAdmin.get('contatos') as FormArray<FormGroup>;
}

addFoto() {
  this.fotos.push(new FormGroup({
    url: new FormControl(''),
    alt: new FormControl(''),
    stared: new FormControl(false)
  }));
}
 addContato() {
  this.contatos.push(new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
  }));
}
removeFoto(index: number) {
  this.fotos.removeAt(index);
}
removeContato(index: number) {
  this.contatos.removeAt(index);
}

  doExcluirHotel(id: string){
    if(id && id != ''){
      this.hotelService.doDeleteHotel(id).subscribe({
        next: (result) => {
            this.toastr.success("Hotel excluído com sucesso!");
            this.doGetAllHoteis();
          }
      });
    }
  }

  starImg(index: number) {
    const fotoControl = this.fotos.at(index);
    if (fotoControl) {
      const stared = fotoControl.get('stared')?.value;
      fotoControl.patchValue({ stared: !stared });
    }
  }
  cancelModal(){
    this.idHotel = undefined;
    this.modalService.dismissAll();
    this.formGroupAdmin.reset();
    this.fotos.clear();
    this.contatos.clear();
  }
}
