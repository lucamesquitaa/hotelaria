import { Component, Inject, inject, Injector, OnInit, resolveForwardRef, TemplateRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OperatorFunction, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { HoteisAllModel } from 'src/app/shared/models/hoteisAll.model';
import { Contact, Photo } from 'src/app/shared/models/hotel.model';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { MenubarService } from 'src/app/shared/services/menubar.service';


@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent extends ComponentBase implements OnInit {

  hotel: HoteisAllModel | undefined;

  filteredHoteis: HoteisAllModel[] | undefined = [];
  showConfirmModal = false;
  itemToDelete: string = '';

  hoteis!: HoteisAllModel[] | undefined;

  detalhesModelId!: string | undefined;

   private modalService = inject(NgbModal);

/**
 *
 */
constructor(
  public override injector: Injector, 
  private hotelService: HotelService,
  public menubarService: MenubarService
) {
  super(injector);
}

override ngOnInit(): void {
  this.doGetAllHoteis();

}

doGetAllHoteis(){
  this.hotelService.doGetUserIdHoteis().subscribe({
    next: (result) => {
      console.log(result);
      this.hoteis = result.data;
      this.filteredHoteis = this.hoteis;
    },
  });
}

  
  formatter = (result: any) => result.name.toUpperCase() + " (" + result.url + ")";
  
    search: OperatorFunction<string, readonly any[]> = (text$: Observable<any>) =>
      text$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map((term) =>
          term === ''
            ? []
            : this.hoteis?.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10) ?? [],
        ),
      );

  onHotelSelecionado() {
    if(!this.hotel) {
      this.filteredHoteis = this.hoteis;
      return;
    }
    this.filteredHoteis = this.hoteis?.map((v) => this.hotel?.name === v.name ? v : null).filter((v) => v !== null);
  }

 onCallPermission(hotelId: string) {
  this.cookieService.set("hotel_id", hotelId);
  this.router.navigate(["/managers", hotelId]);
 }
  onEdit(hotelId: string) {
    this.cookieService.set("hotel_id", hotelId);
    this.router.navigate(["/cadastro", hotelId]);
  }
  onCallQuartos(hotelId: string) {
    this.cookieService.set("hotel_id", hotelId);
    this.router.navigate(["/quartos", hotelId]);
  }

  onCallCadastroNew(){
    this.router.navigate(["/cadastro"]);
  }

  onDelete(hotelId: string) {
    if(hotelId == '') return;

    this.hotelService.doDeleteHotel(hotelId).subscribe({
      next: (result) => {
        this.toastr.success('Hotel deletado com sucesso');
      },
      error: (err) => {
        this.toastr.error(err.error.mensagem || err.error.excecaoMensagem || "Erro no servidor.");
      },
      complete: () => {
        this.modalService.dismissAll();
        this.doGetAllHoteis();
      },
    });
  }

  openConfirmModal(id: string, content: TemplateRef<any>) {
    this.itemToDelete = id;
    this.modalService.open(content, { size: 'lg' });
  }

  confirmDelete() {
    this.onDelete(this.itemToDelete);
    this.itemToDelete = '';
  }

  
}

