import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/shared/components/component.base';
import { HotelService } from 'src/app/shared/services/hotel.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-managers',
  standalone: false,
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.scss'
})
export class ManagersComponent extends ComponentBase implements OnInit {
  email!:string;
  managers: any[] = [];
  constructor(public override injector: Injector, private loginService: LoginService, private hotelService: HotelService) {
    super(injector);
  }

  onSetPermission() {
    if(!this.email || this.email.trim() === '') {
      this.toastr.error("Por favor, insira um e-mail válido.");
      return;
    }

    const hotelId = this.cookieService.get('hotel_id');

    this.loginService.updateManager(this.email, hotelId).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success("Permissão atualizada.");
        this.email = '';
      }
      , error: (error) => {
        console.log(error);
        this.toastr.error(error.error);
      },
      complete: () => {
        this.ngOnInit();
      }
    });
  }

  override ngOnInit(): void {
    const hotelId = this.cookieService.get('hotel_id');
    this.loginService.GetAllPermissionUsers(hotelId).subscribe({
      next: (result) => {
        this.managers = result;
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    });
  }
}
