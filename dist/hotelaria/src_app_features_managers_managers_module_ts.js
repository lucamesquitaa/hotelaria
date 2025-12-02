"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_managers_managers_module_ts"],{

/***/ 1876:
/*!*********************************************************!*\
  !*** ./src/app/features/managers/managers.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagersComponent: () => (/* binding */ ManagersComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/login.service */ 1367);
/* harmony import */ var src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/hotel.service */ 7420);
/* harmony import */ var src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/menubar.service */ 5622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/menubar/menubar.component */ 6337);








function ManagersComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Adicionar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManagersComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Processando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManagersComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Nenhum usu\u00E1rio encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function ManagersComponent_div_28_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManagersComponent_div_28_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const manager_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.removeManager(manager_r2.email));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ManagersComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "div", 22)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ManagersComponent_div_28_div_1_button_6_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const manager_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](manager_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-role", manager_r2.role.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.getRoleDisplayName(manager_r2.role), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", manager_r2.role.toLowerCase() !== "admin");
  }
}
function ManagersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManagersComponent_div_28_div_1_Template, 7, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.managers);
  }
}
class ManagersComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, loginService, hotelService, menubarService) {
    super(injector);
    this.injector = injector;
    this.loginService = loginService;
    this.hotelService = hotelService;
    this.menubarService = menubarService;
    this.email = '';
    this.selectedRole = '';
    this.isLoading = false;
    this.managers = [];
  }
  onSetPermission() {
    if (!this.email || this.email.trim() === '') {
      this.toastr.error("Por favor, insira um e-mail válido.");
      return;
    }
    if (!this.selectedRole) {
      this.toastr.error("Por favor, selecione o tipo de usuário.");
      return;
    }
    this.isLoading = true;
    // Aqui você pode passar a role selecionada para o backend
    console.log('Email:', this.email, 'Role:', this.selectedRole);
    this.loginService.updateManager(this.email, this.hotelId, this.selectedRole).subscribe({
      next: result => {
        console.log(result);
        this.toastr.success(`${this.getRoleDisplayName(this.selectedRole)} adicionado com sucesso!`);
        this.email = '';
        this.selectedRole = '';
      },
      error: error => {
        this.toastr.error(error.error.mensagem || error.error.excecaoMensagem || "Erro no servidor.");
      },
      complete: () => {
        this.isLoading = false;
        this.ngOnInit();
      }
    });
  }
  removeManager(email) {
    if (confirm(`Tem certeza que deseja remover a permissão do usuário ${email}?`)) {
      this.email = email;
      this.selectedRole = 'user';
      this.loginService.removeManager(this.email, this.hotelId, this.selectedRole).subscribe({
        next: result => {
          console.log(result);
          this.toastr.success(`Permissão removida com sucesso!`);
          this.email = '';
          this.selectedRole = '';
        },
        error: error => {
          this.toastr.error(error.error.mensagem || error.error.excecaoMensagem || "Erro no servidor.");
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
  getRoleDisplayName(role) {
    switch (role?.toLowerCase()) {
      case 'admin':
      case 'administrator':
        return 'Administrador';
      case 'manager':
      case 'gerente':
        return 'Gerente';
      case 'user':
      case 'usuario':
        return 'Usuário';
      default:
        return role || 'Usuário';
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.hotelId = this.activatedRoute.snapshot.paramMap.get('hotelId');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
      if (this.hotelId) {
        this.getAllManagers(this.hotelId);
      }
    });
  }
  getAllManagers(hotelId) {
    this.loginService.GetAllPermissionUsers(hotelId).subscribe({
      next: result => {
        this.managers = result.data;
      },
      error: error => {
        console.log(error);
        this.toastr.error(error.error);
      }
    });
  }
  static {
    this.ɵfac = function ManagersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__.HotelService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_3__.MenubarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ManagersComponent,
      selectors: [["app-managers"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 29,
      vars: 13,
      consts: [[1, "managersContainer", "page-with-menubar"], [1, "content-wrapper"], [1, "page-header"], [1, "page-title"], [1, "bi", "bi-people"], [1, "add-manager-section"], [1, "add-manager-form", 3, "ngSubmit"], [1, "form-row"], ["type", "email", "name", "email", "placeholder", "Digite o email do usu\u00E1rio...", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "role", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "admin"], ["value", "manager"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "managers-list-section"], ["class", "empty-state", 4, "ngIf"], ["class", "managers-list", 4, "ngIf"], [1, "empty-state"], [1, "managers-list"], ["class", "manager-item", 4, "ngFor", "ngForOf"], [1, "manager-item"], [1, "manager-info"], [1, "manager-email"], [1, "manager-role"], ["class", "btn btn-outline-danger btn-sm", "title", "Remover permiss\u00E3o", 3, "click", 4, "ngIf"], ["title", "Remover permiss\u00E3o", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "bi", "bi-trash"]],
      template: function ManagersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-menubar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2)(5, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Gerenciar Usu\u00E1rios ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Adicionar Usu\u00E1rio");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ManagersComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onSetPermission();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7)(13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ManagersComponent_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ManagersComponent_Template_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.selectedRole, $event) || (ctx.selectedRole = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Selecione a permiss\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Administrador");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Gerente");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ManagersComponent_span_22_Template, 2, 0, "span", 14)(23, ManagersComponent_span_23_Template, 2, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 15)(25, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Usu\u00E1rios com Permiss\u00E3o");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ManagersComponent_div_27_Template, 3, 0, "div", 16)(28, ManagersComponent_div_28_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("menu-collapsed", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 11, ctx.menubarService.isOpen$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("loading", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.email || ctx.email.trim() === "" || !ctx.selectedRole);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.managers || ctx.managers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.managers && ctx.managers.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_4__.MenubarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["@charset \"UTF-8\";\n.managersContainer[_ngcontent-%COMP%] {\n  margin-left: 0;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  padding: 20px;\n}\n\n.managersContainer.page-with-menubar[_ngcontent-%COMP%] {\n  margin-left: 280px;\n  width: calc(100% - 280px);\n  transition: all 0.3s ease;\n}\n\n\n\n.managersContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  width: calc(100% - 60px);\n}\n\n@media (max-width: 768px) {\n  .managersContainer.page-with-menubar[_ngcontent-%COMP%], \n   .managersContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .managersContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  max-width: none;\n  width: auto;\n  margin: 0;\n  padding: 0;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 650px;\n  background: white;\n  padding: 40px 30px;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 15px auto;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.page-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.add-manager-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 650px;\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin: 15px auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.add-manager-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #28a745, #20c997);\n}\n\n.add-manager-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n\n.add-manager-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 20px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1.5fr auto;\n  gap: 15px;\n  align-items: stretch;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  background: white;\n  transition: all 0.3s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n  outline: none;\n  transform: translateY(-1px);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #a0aec0;\n}\n\n.form-control[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: #cbd5e0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 10px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: 2px solid;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  border-color: #007bff;\n  color: white;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n\n.managers-list-section[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 650px;\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin: 15px auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.managers-list-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #17a2b8, #20c997);\n}\n\n.managers-list-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n\n.managers-list-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 20px;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.manager-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 0;\n  border-bottom: 1px solid #e2e8f0;\n  transition: all 0.3s ease;\n  border-radius: 10px;\n  margin: 0 -15px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.manager-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.manager-item[_ngcontent-%COMP%]:hover {\n  background: #f8f9fa;\n  transform: translateX(5px);\n}\n\n.manager-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.manager-avatar[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.manager-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #2c3e50;\n  margin: 0;\n}\n\n.manager-email[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.9rem;\n  margin: 0;\n}\n\n.manager-role[_ngcontent-%COMP%] {\n  background-color: rgba(0, 123, 255, 0.1725490196);\n  padding: 5px 10px;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #2c3e50;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n}\n\n\n\n.manager-role[data-role=admin][_ngcontent-%COMP%] {\n  background-color: #ec3232;\n  border-color: #f86c6c;\n  color: white;\n}\n\n.manager-role[data-role=manager][_ngcontent-%COMP%] {\n  background-color: #1b45fd;\n  border-color: #5776ff;\n  color: white;\n}\n\n.manager-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #17a2b8;\n  color: #17a2b8;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n  border: 2px solid;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #17a2b8;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #dc3545;\n  color: #dc3545;\n  padding: 8px 12px;\n  border-radius: 8px;\n  font-weight: 500;\n  font-size: 0.85rem;\n  transition: all 0.3s ease;\n  border: 2px solid;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n  transform: translateY(-1px);\n}\n\n@media (max-width: 768px) {\n  .managersContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .managersContainer.page-with-menubar[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 30px 20px;\n    max-width: 100%;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .add-manager-section[_ngcontent-%COMP%], \n   .managers-list-section[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n    margin-bottom: 20px;\n    max-width: 100%;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .manager-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n  }\n  .manager-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .managersContainer[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: 25px 15px;\n    max-width: 100%;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .add-manager-section[_ngcontent-%COMP%], \n   .managers-list-section[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n    max-width: 100%;\n  }\n  .manager-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdlcnMvbWFuYWdlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBLHdDQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0FBRUY7O0FBQ0E7RUFDRTs7SUFFRSxjQUFBO0lBQ0EsV0FBQTtFQUVGO0VBQ0E7SUFDRSxrQkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxr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QUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGtCQUFBO0VBQUY7RUFHQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBREY7RUFJQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VBRkY7RUFLQTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQUhGO0VBTUE7SUFDRSxpQkFBQTtFQUpGO0VBT0E7O0lBRUUsa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFMRjtFQVFBO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0VBTkY7RUFTQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxTQUFBO0VBUEY7RUFVQTtJQUNFLG9CQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7SUFDRSxpQkFBQTtFQVRGO0VBWUE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFWRjtFQWFBO0lBQ0UsaUJBQUE7RUFYRjtFQWNBOztJQUVFLGtCQUFBO0lBQ0EsZUFBQTtFQVpGO0VBZUE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQWJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlcnNDb250YWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hbmFnZXJzQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyIHtcclxuICBtYXJnaW4tbGVmdDogMjgwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBBanVzdGUgcXVhbmRvIG8gbWVudSBlc3TDg8KhIGNvbGFwc2FkbyAqL1xyXG4ubWFuYWdlcnNDb250YWluZXIucGFnZS13aXRoLW1lbnViYXIubWVudS1jb2xsYXBzZWQge1xyXG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm1hbmFnZXJzQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyLFxyXG4gIC5tYW5hZ2Vyc0NvbnRhaW5lci5wYWdlLXdpdGgtbWVudWJhci5tZW51LWNvbGxhcHNlZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWFuYWdlcnNDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogNDBweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDA3YmZmLCAjMDA1NmIzKTtcclxufVxyXG5cclxuLnBhZ2UtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSBpIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmFkZC1tYW5hZ2VyLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNjUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmFkZC1tYW5hZ2VyLXNlY3Rpb246OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzI4YTc0NSwgIzIwYzk5Nyk7XHJcbn1cclxuXHJcbi5hZGQtbWFuYWdlci1zZWN0aW9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmFkZC1tYW5hZ2VyLXNlY3Rpb24gaDMge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDEuNWZyIGF1dG87XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNhMGFlYzA7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6aG92ZXI6bm90KDpmb2N1cykge1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmLCAjMDA1NmIzKTtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4ubWFuYWdlcnMtbGlzdC1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDY1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBtYXJnaW46IDE1cHggYXV0bztcclxuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYW5hZ2Vycy1saXN0LXNlY3Rpb246OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzE3YTJiOCwgIzIwYzk5Nyk7XHJcbn1cclxuXHJcbi5tYW5hZ2Vycy1saXN0LXNlY3Rpb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDEycHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4ubWFuYWdlcnMtbGlzdC1zZWN0aW9uIGgzIHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hbmFnZXItaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAtMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm1hbmFnZXItaXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ubWFuYWdlci1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG59XHJcblxyXG4ubWFuYWdlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG59XHJcblxyXG4ubWFuYWdlci1hdmF0YXIge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiwgIzAwNTZiMyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ubWFuYWdlci1uYW1lIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1hbmFnZXItZW1haWwge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm1hbmFnZXItcm9sZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmMmM7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyYzNlNTA7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogRXN0aWxvcyBlc3BlY8ODwq1maWNvcyBwYXJhIG9zIHJvbGVzICovXHJcbi5tYW5hZ2VyLXJvbGVbZGF0YS1yb2xlPVwiYWRtaW5cIl0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzMyMzI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjg2YzZjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hbmFnZXItcm9sZVtkYXRhLXJvbGU9XCJtYW5hZ2VyXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI0NWZkO1xyXG4gIGJvcmRlci1jb2xvcjogIzU3NzZmZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYW5hZ2VyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWVkaXQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzE3YTJiODtcclxuICBjb2xvcjogIzE3YTJiODtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLmJ0bi1lZGl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMTdhMmI4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyOiAycHggc29saWQ7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYW5hZ2Vyc0NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYW5hZ2Vyc0NvbnRhaW5lci5wYWdlLXdpdGgtbWVudWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuICBcclxuICAuYWRkLW1hbmFnZXItc2VjdGlvbixcclxuICAubWFuYWdlcnMtbGlzdC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdhcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hbmFnZXItaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYW5hZ2VyLWFjdGlvbnMge1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubWFuYWdlcnNDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWdlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuYWRkLW1hbmFnZXItc2VjdGlvbixcclxuICAubWFuYWdlcnMtbGlzdC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hbmFnZXItaW5mbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5114:
/*!**************************************************************!*\
  !*** ./src/app/features/managers/managers-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagersRoutingModule: () => (/* binding */ ManagersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _managers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers.component */ 1876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: ':hotelId',
  component: _managers_component__WEBPACK_IMPORTED_MODULE_0__.ManagersComponent
}];
class ManagersRoutingModule {
  static {
    this.ɵfac = function ManagersRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManagersRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ManagersRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ManagersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7747:
/*!******************************************************!*\
  !*** ./src/app/features/managers/managers.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagersModule: () => (/* binding */ ManagersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _managers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./managers-routing.module */ 5114);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _managers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers.component */ 1876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class ManagersModule {
  static {
    this.ɵfac = function ManagersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManagersModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ManagersModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _managers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagersRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ManagersModule, {
    declarations: [_managers_component__WEBPACK_IMPORTED_MODULE_2__.ManagersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _managers_routing_module__WEBPACK_IMPORTED_MODULE_0__.ManagersRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_managers_managers_module_ts.js.map