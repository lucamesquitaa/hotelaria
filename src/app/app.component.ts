import { Component, Injector, OnInit } from '@angular/core';
import { PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';
import { ComponentBase } from './shared/components/component.base';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends ComponentBase implements OnInit{
  numberElement!: HTMLParagraphElement;

  profile: PoToolbarProfile = {
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAe1BMVEX///8AAADh4eEVFRX5+fnd3d1jY2P7+/vk5ORHR0f19fXR0dGRkZE2NjaNjY1CQkKhoaHBwcGysrKAgIDu7u66urqXl5fKysp2dnbX19epqanv7+9TU1NYWFgrKytRUVF6eno6OjocHBxubm4kJCSFhYWcnJwMDAxnZ2chXxp2AAAE6UlEQVR4nO2c6ZqqMAyGB0VF3FBBFPdt8P6v8DwmMqPnuEClteF878+ROom02Zr26wsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKB0/M6ou28ul8vmdBLNWp8Wxxhup9tzbml/Nz4tlQlq/ZVzj0Ew/7Rommk07yrOjMNPi6cRb/9E8zN9/9Mi6iK4VnN9TKJhPBwF48HVXw/DTwuphbD9o+EiuTVts8mv/lP3Q/JpJK7/TGzvzsezafbx9t7HohldNEsnj56YbzLtZyYF00+21PfPTHkjWxWxMbkMkKn+ypIF1VM+Yo0Gr/1352IVKhPmzVifZp6wPeRwd1cRRz/fkTqnnE+z8mu9MpmCg7lF3mQtPNDzgVaZDMGLfZV/gMdLpKZPJFO49cLGK6rKrO+SIkmhMeNcDtF6QpV36KbkEvVIZI6JkruOKvHiOTcrPGxQgRUfKZpsHic7o6MSVVNhIDn5hzmfBMJUdd12xVu7IaXsKuV3T3x8c1SzdGcorI9KlsckZK5HSkMpvhmXLI9BWm/k4pFwL0eLdqdWeG3Q71ayQAaJz+Jv1cayi5BbwqB5u1QcvJJt6BN1M//1tT0P7pQqj0mo7HpUHDyQXbD9fkf3tmzdac5vFAcPZM/5kWomc6Ynu05P4XxbbaxPlW25vRiNghXaazzhsY37RgWC4qJeyQKZ5KBedqNC375keUwyVXdyC+mbM4lyQO/TcpHchVBTTmLJPa5E994MVCd9+51UwA4oqk2Lvz7O3uVGtGd4S6q4yaJ967oGgUxyotJN0RJEQ/EnswvuNylac6TVXpdbtLnQVDD13IwneleG4Om7LWLuOJSvi3ZwDO1PFHJXVK0SvS+R4a8KGi7uTVJN++2iQ7rkbjvhhpNUbuZ+Q1BEeVZdeFhzxaVDuvv6SfdUbJIIYMkaNV+Zbo/NnNM3IpUhFqxT+ryOkbVRC95+vUMrOx91ehzlxFn7fI61IYuLDXOc/X3t40X2QIXWekZ2asRx1snf5cvG5Oek5E7udsQTar8HpZzeeNQJz304bhgn+6uTkvuK+PV/SOrOc3rSWymfMO8+VT2pQPryBD/4+wx0RlutJ0kW8Xj372Tvyt11LIg3Oq579Auku+2yG1XVwD3EDz3PC6u9xAEA/xOuVyuGVwUL6M6C/eFFIPsgvN0kNcn33nQ29+9zycu2L7WndPQoei3CQmLRcliG5qS9tOaL8PYOn7RejFvtj6LW/fDqtU3iWvEN1Xlj2P8tdawEJTqTTOhe8sY1TS1vkmZfJKamkZUl2+9LPMochZACZnZPTVLGMvX7kpTnPWdnXdalZLPLqxdQ1rmUojfl2WZ/zV9pva/jNotyN9RcdpgH2/tvOKJRPSfyCN6zsbyzmHoJ815lkx+ff1Kr41vuEjqUH4dxY27P5gCPPbuOHbXAdls/ZxOv5bupK/mg5atLgWNZPbeNxnav+BZFIbqaJii1sbbzjJvJdF1OQgeLU1uvsKVNVm3H9VtWJ3RtvTnHVOeKehM+DaevzECT3tJrX6hVXuPxHo5v7AxvdN/O4R90mtL3CPQFNozFtwFQhUXnYQfqTLWzrX6su7R0sjek16771F7dY33BvKF/8AbDZVNvTS1anqwv2gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwBr+AB/7LnHijDfaAAAAAElFTkSuQmCC',
    subtitle: 'lucamesquitaa@gmail.com',
    title: 'Luca Albuquerque Mesquita'
  };
  profileActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-user', visible: this.context.usuario.admin, label: 'Painel ADMIN', separator: true, action: () => this.router.navigate(['/admin']) },
    { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.logOut() }
  ];
  notificationActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-cart', label: `Finalizar Compra`, action: this.onHandleFinalizaCompra.bind(this) },
  ];
  title: string = 'E-Commerce Luca';

  constructor(public override injector: Injector,
              public loginService: LoginService
  ){
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  override ngOnInit(){
    this.verificaUsuario();
    this.changeIcon();
  }
  changeIcon() {
    this.notificationActions[0].label = `Finalizar Compra (${this.context.cart.products.length})`;
  }
  
  onHandleFinalizaCompra(){
    this.router.navigate(['cart']);
  }
  
  verificaUsuario(){
    if(localStorage.getItem('usuarioAutenticado') == "true")
      this.context.usuarioAutenticado = true;
    else
      this.context.usuarioAutenticado = false;
  }
  painelAdmin(){
    if(this.context.usuario.admin){
    this.profileActions = [
      { icon: 'po-icon-user', label: 'Painel ADMIN', separator: true, action: () => this.router.navigate(['/admin']) },
      { icon: 'po-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.logOut() }
    ];
  }
  }

  logOut(){
    LoginService.doLogout();
    localStorage.setItem('usuarioAutenticado', "false");
    this.context.usuarioAutenticado = false;
    this.router.navigate(['/login']);
  }
}

