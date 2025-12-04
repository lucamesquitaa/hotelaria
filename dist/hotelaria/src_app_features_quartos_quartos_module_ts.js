"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_quartos_quartos_module_ts"],{

/***/ 918:
/*!****************************************************!*\
  !*** ./src/app/features/quartos/quartos.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuartosModule: () => (/* binding */ QuartosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _quartos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quartos-routing.module */ 4648);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _quartos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quartos.component */ 6614);
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro/cadastro.component */ 8912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






class QuartosModule {
  static {
    this.ɵfac = function QuartosModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuartosModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: QuartosModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _quartos_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuartosRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](QuartosModule, {
    declarations: [_quartos_component__WEBPACK_IMPORTED_MODULE_2__.QuartosComponent, _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_3__.CadastroQuartoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _quartos_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuartosRoutingModule]
  });
})();

/***/ }),

/***/ 4648:
/*!************************************************************!*\
  !*** ./src/app/features/quartos/quartos-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuartosRoutingModule: () => (/* binding */ QuartosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _quartos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quartos.component */ 6614);
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro/cadastro.component */ 8912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: 'cadastro',
  component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__.CadastroQuartoComponent
}, {
  path: 'cadastro/:quartoId',
  component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_1__.CadastroQuartoComponent
}, {
  path: ':hotelId',
  component: _quartos_component__WEBPACK_IMPORTED_MODULE_0__.QuartosComponent
}];
class QuartosRoutingModule {
  static {
    this.ɵfac = function QuartosRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuartosRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: QuartosRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuartosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6163:
/*!****************************************************!*\
  !*** ./src/app/shared/services/quartos.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuartosService: () => (/* binding */ QuartosService)
/* harmony export */ });
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class QuartosService extends _generic_service__WEBPACK_IMPORTED_MODULE_0__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Hotel";
    this.urlServiceREST = "http://localhost:8080/api/Quartos";
  }
  doGetQuartosByHotelId(hotelId) {
    return this.http.get(this.urlServiceREST + "/GetAllQuartos/" + hotelId);
  }
  GetQuartoById(id) {
    return this.http.get(this.urlServiceREST + "/GetQuartoById/" + id);
  }
  doPostPutQuarto(quarto, hotelId) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.post(this.urlServiceREST + "/PostPutQuartos/" + hotelId, quarto, {
      headers
    });
  }
  static {
    this.ɵfac = function QuartosService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuartosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: QuartosService,
      factory: QuartosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6614:
/*!*******************************************************!*\
  !*** ./src/app/features/quartos/quartos.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuartosComponent: () => (/* binding */ QuartosComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/menubar.service */ 5622);
/* harmony import */ var src_app_shared_services_quartos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/quartos.service */ 6163);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/menubar/menubar.component */ 6337);






function QuartosComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(", ctx_r0.allQuartos.length, " quarto", ctx_r0.allQuartos.length !== 1 ? "s" : "", ")");
  }
}
function QuartosComponent_div_10_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Reembols\u00E1vel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuartosComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13)(6, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 16)(11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 21)(21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, QuartosComponent_div_10_div_1_span_22_Template, 3, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 24)(24, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuartosComponent_div_10_div_1_Template_button_click_24_listener() {
      const quarto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onEditQuarto(quarto_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const quarto_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("#", (i_r4 + 1).toString().padStart(3, "0"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", quarto_r3.photos && quarto_r3.photos.length > 0 ? quarto_r3.photos[0] : "assets/hotel-free.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", quarto_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quarto_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](quarto_r3.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quarto_r3.maxOcupation, " pessoas");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quarto_r3.areaSize, " m\u00B2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", quarto_r3.bedSize, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", quarto_r3.refund);
  }
}
function QuartosComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, QuartosComponent_div_10_div_1_Template, 28, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.allQuartos);
  }
}
function QuartosComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuartosComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onAddQuarto());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Adicionar Quarto\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function QuartosComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class QuartosComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, menubarService, quartosService) {
    super(injector);
    this.injector = injector;
    this.menubarService = menubarService;
    this.quartosService = quartosService;
    this.allQuartos = [];
  }
  ngOnInit() {
    super.ngOnInit();
    this.hotelId = this.activatedRoute.snapshot.paramMap.get('hotelId');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotelId = params.get('hotelId');
      if (this.hotelId) {
        this.getAllQuartos(this.hotelId);
      }
    });
  }
  getAllQuartos(hotelId) {
    this.showLoading();
    this.quartosService.doGetQuartosByHotelId(hotelId).subscribe({
      next: response => {
        console.log('Resposta da API:', response);
        if ((response.sucesso || response.success) && response.data) {
          this.allQuartos = response.data;
          console.log('Quartos carregados:', this.allQuartos);
        } else {
          const errorMessage = response.mensagem || response.message || 'Erro ao carregar quartos';
          console.error('Erro na resposta:', errorMessage);
          this.toastr.error(errorMessage);
          this.allQuartos = [];
        }
      },
      error: error => {
        console.error('Erro ao buscar quartos:', error);
        this.toastr.error('Erro ao carregar quartos do hotel');
        this.allQuartos = [];
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }
  onEditQuarto(quartoId) {
    if (quartoId) {
      this.router.navigate(['/quartos/cadastro', quartoId]);
    } else {
      console.error('ID do quarto não fornecido');
      this.toastr.error('Erro: ID do quarto não encontrado');
    }
  }
  onAddQuarto() {
    if (this.hotelId) {
      this.router.navigate(['/quartos/cadastro'], {
        queryParams: {
          hotelId: this.hotelId
        }
      });
    } else {
      console.error('ID do hotel não encontrado');
      this.toastr.error('Erro: ID do hotel não encontrado');
    }
  }
  static {
    this.ɵfac = function QuartosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || QuartosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_1__.MenubarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_quartos_service__WEBPACK_IMPORTED_MODULE_2__.QuartosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: QuartosComponent,
      selectors: [["app-quartos"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 13,
      vars: 8,
      consts: [[1, "quartosContainer", "page-with-menubar"], [1, "quartos-header"], [1, "bi", "bi-building"], [4, "ngIf"], ["class", "quartos-grid", 4, "ngIf"], ["class", "btn btn-primary buttonFlutua", "title", "Adicionar novo quarto", 3, "click", 4, "ngIf"], ["class", "loading-overlay", 4, "ngIf"], [1, "quartos-grid"], ["class", "quarto-card-compact", 4, "ngFor", "ngForOf"], [1, "quarto-card-compact"], [1, "card-left"], [1, "quarto-number"], [1, "quarto-img", 3, "src", "alt"], [1, "card-center"], [1, "quarto-title"], [1, "quarto-type"], [1, "quarto-specs"], [1, "spec-item"], [1, "bi", "bi-people"], [1, "bi", "bi-bounding-box-circles"], [1, "bi", "bi-door-open"], [1, "card-right"], [1, "quarto-info"], ["class", "refund-badge", 4, "ngIf"], [1, "quarto-actions"], ["title", "Editar quarto", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "bi", "bi-pencil"], ["title", "Excluir quarto", 1, "btn", "btn-sm", "btn-outline-danger"], [1, "bi", "bi-trash"], [1, "refund-badge"], [1, "bi", "bi-check-circle"], ["title", "Adicionar novo quarto", 1, "btn", "btn-primary", "buttonFlutua", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "loading-overlay"], ["role", "status", 1, "spinner-border"], [1, "visually-hidden"]],
      template: function QuartosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-menubar");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Gerenciamento de Quartos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Gerencie todos os quartos dispon\u00EDveis ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, QuartosComponent_span_9_Template, 2, 2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, QuartosComponent_div_10_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, QuartosComponent_button_11_Template, 3, 0, "button", 5)(12, QuartosComponent_div_12_Template, 4, 0, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("menu-collapsed", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, ctx.menubarService.isOpen$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allQuartos && ctx.allQuartos.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allQuartos && ctx.allQuartos.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.allQuartos && ctx.allQuartos.length >= 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__.MenubarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
      styles: ["@charset \"UTF-8\";\n.quartosContainer[_ngcontent-%COMP%] {\n  margin-left: 0;\n  min-height: 100vh;\n  width: 100%;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  padding: 20px;\n}\n\n.quartosContainer.page-with-menubar[_ngcontent-%COMP%] {\n  margin-left: 280px;\n  width: calc(100% - 280px);\n  transition: all 0.3s ease;\n}\n\n\n\n.quartosContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  width: calc(100% - 60px);\n}\n\n@media (max-width: 768px) {\n  .quartosContainer.page-with-menubar[_ngcontent-%COMP%], \n   .quartosContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .quarto-card-compact[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 12px;\n  }\n  .card-left[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n  .quarto-img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 45px;\n  }\n  .card-center[_ngcontent-%COMP%] {\n    padding: 0;\n    margin-bottom: 10px;\n  }\n  .card-right[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .quarto-specs[_ngcontent-%COMP%] {\n    justify-content: center;\n    gap: 8px;\n  }\n  .spec-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  max-width: none;\n  width: auto;\n  margin: 0;\n  padding: 0;\n}\n\n.quartos-header[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 550px;\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin: 15px auto;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.quartos-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #28a745, #20c997);\n}\n\n.quartos-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 10px;\n  font-size: 2rem;\n}\n\n.quartos-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 1.1rem;\n  margin: 0;\n}\n\n.quartos-grid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0;\n  width: 100%;\n  max-width: 900px;\n}\n\n\n\n.quarto-card-compact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 800px;\n  background: white;\n  border-radius: 12px;\n  padding: 15px;\n  margin: 5px auto;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n  box-sizing: border-box;\n}\n\n.quarto-card-compact[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n}\n\n.card-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  margin-right: 15px;\n}\n\n.quarto-img[_ngcontent-%COMP%] {\n  width: 230px;\n  height: auto;\n  max-height: 100px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.card-center[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 15px;\n}\n\n.card-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n}\n\n.quarto-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -8px;\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  color: white;\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.75rem;\n  min-width: 35px;\n  text-align: center;\n}\n\n.quarto-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin: 0 0 8px 0;\n}\n\n.quarto-specs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.spec-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.85rem;\n  color: #6c757d;\n  gap: 4px;\n}\n\n.spec-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 0.9rem;\n}\n\n.quarto-price[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #28a745;\n  text-align: right;\n  margin-bottom: 5px;\n}\n\n.quarto-price[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  color: #6c757d;\n}\n\n.quarto-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6c757d;\n  font-weight: 500;\n  margin-bottom: 2px;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #2c3e50;\n}\n\n.quarto-price[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #28a745;\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.quarto-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.btn-action[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-weight: 500;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  border: 2px solid;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #17a2b8;\n  color: #17a2b8;\n}\n\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #17a2b8;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.btn-delete[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #dc3545;\n  color: #dc3545;\n}\n\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #dc3545;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.buttonFlutua[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  padding: 18px 24px;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 1rem;\n  background: linear-gradient(135deg, #28a745, #20c997);\n  border: none;\n  color: white;\n  box-shadow: 0 8px 32px rgba(40, 167, 69, 0.3);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n\n.buttonFlutua[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 12px 40px rgba(40, 167, 69, 0.4);\n  background: linear-gradient(135deg, #20c997, #17a2b8);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6c757d;\n}\n\n.empty-state[_ngcontent-%COMP%]::before {\n  content: \"\uD83C\uDFE8\";\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n@media (max-width: 768px) {\n  .quartosContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .quartosContainer.page-with-menubar[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .quartos-grid[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0;\n  }\n  .quartos-header[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n    margin-bottom: 20px;\n    max-width: 100%;\n  }\n  .quartos-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .quarto-card[_ngcontent-%COMP%] {\n    padding: 20px;\n    max-width: 100%;\n    margin: 10px 0;\n  }\n  .quarto-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  .quarto-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .quartosContainer[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n  }\n  .quartos-header[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n    max-width: 100%;\n  }\n  .quartos-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .quarto-card[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 8px 0;\n  }\n  .quarto-details[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .detail-item[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcXVhcnRvcy9xdWFydG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkRBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQSx3Q0FBQTtBQUNBO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNBO0VBQ0k7O0lBRUksY0FBQTtJQUNBLFdBQUE7RUFFTjtFQUNFO0lBQ0ksc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUFDTjtFQUVFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBQU47RUFHRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBRE47RUFJRTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUZOO0VBS0U7SUFDSSxtQkFBQTtFQUhOO0VBTUU7SUFDSSx1QkFBQTtJQUNBLFFBQUE7RUFKTjtFQU9FO0lBQ0ksaUJBQUE7RUFMTjtBQUNGO0FBUUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQU5KOztBQVNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0FBTko7O0FBU0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFD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QUFOSjs7QUFTQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0E7RUFDSTtJQUNJLGtCQUFBO0VBTk47RUFTRTtJQUNJLGNBQUE7SUFDQSxXQUFBO0VBUE47RUFVRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VBUk47RUFXRTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBVE47RUFZRTtJQUNJLGlCQUFBO0VBVk47RUFhRTtJQUNJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtFQVhOO0VBY0U7SUFDSSxzQkFBQTtJQUNBLFNBQUE7RUFaTjtFQWVFO0lBQ0ksbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQWJOO0VBZ0JFO0lBQ0ksc0JBQUE7RUFkTjtBQUNGO0FBaUJBO0VBQ0k7SUFDSSxpQkFBQTtFQWZOO0VBa0JFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VBaEJOO0VBbUJFO0lBQ0ksaUJBQUE7RUFqQk47RUFvQkU7SUFDSSxhQUFBO0lBQ0EsYUFBQTtFQWxCTjtFQXFCRTtJQUNJLFFBQUE7RUFuQk47RUFzQkU7SUFDSSxhQUFBO0VBcEJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhcnRvc0NvbnRhaW5lcntcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnF1YXJ0b3NDb250YWluZXIucGFnZS13aXRoLW1lbnViYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEFqdXN0ZSBxdWFuZG8gbyBtZW51IGVzdMODwqEgY29sYXBzYWRvICovXHJcbi5xdWFydG9zQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyLm1lbnUtY29sbGFwc2VkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5xdWFydG9zQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyLFxyXG4gICAgLnF1YXJ0b3NDb250YWluZXIucGFnZS13aXRoLW1lbnViYXIubWVudS1jb2xsYXBzZWQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWFydG8tY2FyZC1jb21wYWN0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWxlZnQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5xdWFydG8taW1nIHtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtcmlnaHQge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1YXJ0by1zcGVjcyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwZWMtaXRlbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucXVhcnRvcy1oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucXVhcnRvcy1oZWFkZXI6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyOGE3NDUsICMyMGM5OTcpO1xyXG59XHJcblxyXG4ucXVhcnRvcy1oZWFkZXIgaDJ7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ucXVhcnRvcy1oZWFkZXIgcHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5xdWFydG9zLWdyaWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi8qIE5vdm8gbGF5b3V0IGNvbXBhY3RvIGRvcyBjYXJkcyAqL1xyXG4ucXVhcnRvLWNhcmQtY29tcGFjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ucXVhcnRvLWNhcmQtY29tcGFjdDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jYXJkLWxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5xdWFydG8taW1nIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNlbnRlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucXVhcnRvLW51bWJlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMDdiZmYsICMwMDU2YjMpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgbWluLXdpZHRoOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucXVhcnRvLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbn1cclxuXHJcbi5xdWFydG8tc3BlY3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTJweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNwZWMtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5zcGVjLWl0ZW0gaSB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ucXVhcnRvLXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5xdWFydG8tcHJpY2Ugc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG59XHJcblxyXG4ucXVhcnRvLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4uZGV0YWlsLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtdmFsdWV7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLnF1YXJ0by1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnF1YXJ0by1hY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLmJ0bi1hY3Rpb257XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxufVxyXG5cclxuLmJ0bi1lZGl0e1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMxN2EyYjg7XHJcbiAgICBjb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLmJ0bi1lZGl0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzE3YTJiODtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1kZWxldGV7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idXR0b25GbHV0dWF7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDMwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSwgIzIwYzk5Nyk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoNDAsIDE2NywgNjksIDAuMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmJ1dHRvbkZsdXR1YTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoNDAsIDE2NywgNjksIDAuNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjBjOTk3LCAjMTdhMmI4KTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiw7DCn8KPwqhcIjtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgaDN7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUgcHtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucXVhcnRvc0NvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVhcnRvc0NvbnRhaW5lci5wYWdlLXdpdGgtbWVudWJhciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdWFydG9zLWdyaWR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdWFydG9zLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdWFydG9zLWhlYWRlciBoMntcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnF1YXJ0by1jYXJkIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnF1YXJ0by1kZXRhaWxze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGV0YWlsLWl0ZW17XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdWFydG8tYWN0aW9uc3tcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5xdWFydG9zQ29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnF1YXJ0b3MtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVhcnRvcy1oZWFkZXIgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5xdWFydG8tY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVhcnRvLWRldGFpbHN7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXRhaWwtaXRlbXtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8912:
/*!*****************************************************************!*\
  !*** ./src/app/features/quartos/cadastro/cadastro.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CadastroQuartoComponent: () => (/* binding */ CadastroQuartoComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_quartos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/quartos.service */ 6163);
/* harmony import */ var src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/menubar.service */ 5622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/menubar/menubar.component */ 6337);
/* harmony import */ var _shared_components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/select-remote/select-remote.component */ 5189);








function CadastroQuartoComponent_div_20_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 27);
  }
}
function CadastroQuartoComponent_div_20_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](step_r2.number);
  }
}
function CadastroQuartoComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_20_Template_div_click_0_listener() {
      const step_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(step_r2.number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CadastroQuartoComponent_div_20_i_2_Template, 1, 0, "i", 22)(3, CadastroQuartoComponent_div_20_span_3_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 24)(5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", step_r2.number === ctx_r2.currentStep)("completed", ctx_r2.isStepCompleted(step_r2.number))("accessible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", step_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isStepCompleted(step_r2.number));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isStepCompleted(step_r2.number));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](step_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](step_r2.description);
  }
}
function CadastroQuartoComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Informa\u00E7\u00F5es B\u00E1sicas do Quarto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29)(4, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Nome do quarto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.name, $event) || (ctx_r2.itemCadastro.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29)(8, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Tipo do quarto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-select-remote", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_app_select_remote_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.tipo, $event) || (ctx_r2.itemCadastro.tipo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 29)(12, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Descri\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.description, $event) || (ctx_r2.itemCadastro.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 29)(16, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Ocupa\u00E7\u00E3o m\u00E1xima");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.maxOcupation, $event) || (ctx_r2.itemCadastro.maxOcupation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 29)(20, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Tamanho da \u00E1rea (m\u00B2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.areaSize, $event) || (ctx_r2.itemCadastro.areaSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 29)(24, "div", 39)(25, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_21_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.refund, $event) || (ctx_r2.itemCadastro.refund = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Reembols\u00E1vel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_21_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("searchable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.maxOcupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.areaSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.refund);
  }
}
function CadastroQuartoComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Comodidades e Servi\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29)(4, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Diferenciais do quarto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_textarea_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.diff, $event) || (ctx_r2.itemCadastro.diff = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 29)(8, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Tipo da cama");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.bedSize, $event) || (ctx_r2.itemCadastro.bedSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Selecione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Solteiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Casal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Queen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "King");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Beliche");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 54)(24, "div", 55)(25, "div", 56)(26, "div", 39)(27, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.freeze, $event) || (ctx_r2.itemCadastro.freeze = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Frigobar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 56)(31, "div", 39)(32, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.vault, $event) || (ctx_r2.itemCadastro.vault = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Cofre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 55)(36, "div", 56)(37, "div", 39)(38, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.telephone, $event) || (ctx_r2.itemCadastro.telephone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 56)(42, "div", 39)(43, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.coffee, $event) || (ctx_r2.itemCadastro.coffee = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Cafeteira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 55)(47, "div", 56)(48, "div", 39)(49, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.wifi, $event) || (ctx_r2.itemCadastro.wifi = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Wi-Fi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 56)(53, "div", 39)(54, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.fridge, $event) || (ctx_r2.itemCadastro.fridge = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Geladeira");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 55)(58, "div", 56)(59, "div", 39)(60, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.cleaning, $event) || (ctx_r2.itemCadastro.cleaning = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Servi\u00E7o de limpeza");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 56)(64, "div", 39)(65, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.varanda, $event) || (ctx_r2.itemCadastro.varanda = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Varanda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 55)(69, "div", 56)(70, "div", 39)(71, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_71_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.bathroom, $event) || (ctx_r2.itemCadastro.bathroom = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Banheiro privativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 56)(75, "div", 39)(76, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.tv, $event) || (ctx_r2.itemCadastro.tv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "TV");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 29)(80, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Produtos de banho");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_input_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.bathProducts, $event) || (ctx_r2.itemCadastro.bathProducts = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 29)(84, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Tipo da TV");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_22_Template_select_ngModelChange_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.itemCadastro.typeTv, $event) || (ctx_r2.itemCadastro.typeTv = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Selecione:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "LCD");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "LED");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Smart TV");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "4K");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 64)(98, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_22_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, " Voltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_22_Template_button_click_101_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](103, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.diff);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.bedSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.freeze);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.vault);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.coffee);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.wifi);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.fridge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.cleaning);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.varanda);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.bathroom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.tv);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.bathProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.itemCadastro.typeTv);
  }
}
function CadastroQuartoComponent_div_23_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](img_r7.name);
  }
}
function CadastroQuartoComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Upload de Imagens");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29)(4, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "M\u00E1ximo de 10 imagens!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CadastroQuartoComponent_div_23_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div")(8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CadastroQuartoComponent_div_23_li_9_Template, 2, 1, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 64)(11, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_23_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Voltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_23_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.imagens);
  }
}
function CadastroQuartoComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Conclus\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 73)(4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_24_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.acceptTerms1, $event) || (ctx_r2.acceptTerms1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Confirmo que todas as informa\u00E7\u00F5es do quarto est\u00E3o corretas e atualizadas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 73)(8, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CadastroQuartoComponent_div_24_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.acceptTerms2, $event) || (ctx_r2.acceptTerms2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Autorizo a divulga\u00E7\u00E3o das informa\u00E7\u00F5es do quarto no sistema. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 64)(12, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_24_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.goToStep(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Voltar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CadastroQuartoComponent_div_24_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.onConcluirCadastro());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Concluir Cadastro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.acceptTerms1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.acceptTerms2);
  }
}
class CadastroQuartoComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, quartosService, menubarService) {
    super(injector);
    this.injector = injector;
    this.quartosService = quartosService;
    this.menubarService = menubarService;
    this.itemCadastro = {};
    this.acceptTerms1 = false;
    this.acceptTerms2 = false;
    this.currentStep = 1;
    this.imagens = [];
    this.steps = [{
      number: 1,
      title: 'Informações Básicas',
      description: 'Dados básicos do quarto'
    }, {
      number: 2,
      title: 'Comodidades',
      description: 'Comodidades e serviços'
    }, {
      number: 3,
      title: 'Imagens',
      description: 'Fotos do quarto'
    }, {
      number: 4,
      title: 'Conclusão',
      description: 'Finalizar cadastro'
    }];
  }
  ngOnInit() {
    super.ngOnInit();
    this.quartoId = this.activatedRoute.snapshot.paramMap.get('quartoId');
    const hotelId = this.cookieService.get('hotel_id');
    // ou, para escutar mudanças:
    this.activatedRoute.paramMap.subscribe(params => {
      this.quartoId = params.get('quartoId');
      if (this.quartoId && hotelId) {
        this.showLoading();
        this.quartosService.GetQuartoById(this.quartoId).subscribe({
          next: response => {
            if (response.data) {
              this.itemCadastro = response.data;
            }
            console.log("item cadastro:");
            console.log(response);
          },
          error: err => {
            console.error('Erro ao buscar quarto:', err);
            this.hideLoading();
          },
          complete: () => {
            this.hideLoading();
          }
        });
      }
    });
  }
  onValidaCadastro(atual) {
    if (atual == 1) {
      if (!this.itemCadastro?.name || !this.itemCadastro.tipo || !this.itemCadastro.description || !this.itemCadastro.maxOcupation || !this.itemCadastro.areaSize) {
        return false;
      } else {
        return true;
      }
    } else if (atual == 2) {
      // Validação para comodidades - pelo menos uma deve estar definida
      return true; // Comodidades são opcionais
    } else if (atual == 3) {
      // Validação para banheiro e TV - opcionais
      return true;
    } else if (atual == 4) {
      // Validação final - termos aceitos
      return this.acceptTerms1 && this.acceptTerms2;
    } else {
      return false;
    }
  }
  goToStep(step) {
    this.currentStep = step;
  }
  isStepCompleted(step) {
    return step < this.currentStep || step === this.currentStep && this.onValidaCadastro(step);
  }
  onFileSelected(event) {
    const files = Array.from(event.target.files);
    if (files.length > 10) {
      alert('Você pode selecionar no máximo 10 imagens!');
    } else {
      this.imagens = files;
      // Converter arquivos para URLs ou base64 se necessário
      // Por enquanto mantendo como está para compatibilidade
    }
  }
  onConcluirCadastro() {
    if (!this.acceptTerms1 || !this.acceptTerms2) {
      alert('Você deve aceitar os termos para continuar!');
      return;
    }
    if (!this.itemCadastro) {
      alert('Dados do cadastro estão incompletos.');
      return;
    }
    const hotelId = this.cookieService.get('hotel_id');
    if (!hotelId) {
      alert('Hotel ID não encontrado.');
      return;
    }
    this.showLoading();
    this.quartosService.doPostPutQuarto(this.itemCadastro, hotelId).subscribe({
      next: response => {
        this.toastr.success('Quarto cadastrado com sucesso.');
        this.router.navigate(['/admin']);
      },
      error: error => {
        this.toastr.error(error.error?.mensagem || error.error?.excecaoMensagem || "Erro no servidor.");
        this.hideLoading();
      },
      complete: () => {
        this.hideLoading();
      }
    });
  }
  static {
    this.ɵfac = function CadastroQuartoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CadastroQuartoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_quartos_service__WEBPACK_IMPORTED_MODULE_1__.QuartosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_menubar_service__WEBPACK_IMPORTED_MODULE_2__.MenubarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CadastroQuartoComponent,
      selectors: [["app-cadastro"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
      decls: 25,
      vars: 14,
      consts: [[1, "cadastroContainer", "page-with-menubar"], [3, "selected"], [1, "cadastroForm"], [1, "content-wrapper"], [1, "stepper-enhanced"], [1, "stepper-header"], [1, "stepper-title"], [1, "step-counter"], [1, "current"], [1, "separator"], [1, "total"], [1, "progress-container"], [1, "progress-bar"], [1, "progress-fill"], [1, "steps-list"], ["class", "step-item", 3, "active", "completed", "accessible", "title", "click", 4, "ngFor", "ngForOf"], ["class", "formContainer 1", 4, "ngIf"], ["class", "formContainer 2", 4, "ngIf"], ["class", "formContainer 3", 4, "ngIf"], ["class", "formContainer 4", 4, "ngIf"], [1, "step-item", 3, "click", "title"], [1, "step-circle"], ["class", "bi bi-check-lg", 4, "ngIf"], [4, "ngIf"], [1, "step-content"], [1, "step-title"], [1, "step-description"], [1, "bi", "bi-check-lg"], [1, "formContainer", "1"], [1, "col-lg-12", "col-md-12"], ["for", "name", 1, "form-label"], ["type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "tipo", 1, "form-label"], ["apiUrl", "https://jsonplaceholder.typicode.com/users", "placeholder", "Selecione o tipo do quarto", "valueProperty", "id", "labelProperty", "name", 3, "ngModelChange", "ngModel", "searchable"], ["for", "description", 1, "form-label"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "maxOcupation", 1, "form-label"], ["type", "number", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "areaSize", 1, "form-label"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "form-check-label"], [1, "btn", "btn-primary", "btn-md", "buttonSubmit", 3, "click"], [1, "bi", "bi-arrow-right-circle"], [1, "formContainer", "2"], ["for", "diff", 1, "form-label"], ["for", "bedSize", 1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "solteiro"], ["value", "casal"], ["value", "queen"], ["value", "king"], ["value", "beliche"], [1, "checksboxes"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["for", "bathProducts", 1, "form-label"], ["type", "text", "placeholder", "Ex: Shampoo, sabonete, toalhas", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "typeTv", 1, "form-label"], ["value", "LCD"], ["value", "LED"], ["value", "Smart TV"], ["value", "4K"], [1, "d-flex", "justify-content-between"], [1, "btn", "btn-secondary", "btn-md", "buttonSubmit", 3, "click"], [1, "bi", "bi-arrow-left-circle"], [1, "formContainer", "3"], ["for", "image", 1, "form-label"], ["type", "file", "multiple", "", 1, "form-control", 3, "change"], ["style", "color:darkgreen; padding:3px;", 4, "ngFor", "ngForOf"], [2, "color", "darkgreen", "padding", "3px"], [1, "formContainer", "4"], [1, "form-check", "margin10"], ["type", "checkbox", "value", "", "required", "", 1, "form-check-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", "btn-md", "buttonSubmit", 3, "click"], [1, "bi", "bi-check-circle"]],
      template: function CadastroQuartoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-menubar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Cadastro do Quarto");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "/");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CadastroQuartoComponent_div_20_Template, 9, 11, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CadastroQuartoComponent_div_21_Template, 31, 7, "div", 16)(22, CadastroQuartoComponent_div_22_Template, 104, 14, "div", 17)(23, CadastroQuartoComponent_div_23_Template, 17, 1, "div", 18)(24, CadastroQuartoComponent_div_24_Template, 18, 2, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("menu-collapsed", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 12, ctx.menubarService.isOpen$));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", "cadastro");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.currentStep);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.steps.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx.currentStep / ctx.steps.length * 100, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.steps);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentStep === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentStep === 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.currentStep === 4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxRequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_3__.MenubarComponent, _shared_components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_4__.SelectRemoteComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
      styles: ["@charset \"UTF-8\";\n.cadastroContainer[_ngcontent-%COMP%] {\n  margin-left: 0;\n  min-height: 100vh;\n  width: 650px;\n  max-width: 100%;\n  box-sizing: border-box;\n  overflow-x: hidden;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  flex-wrap: wrap;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n}\n\n.checksboxes[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.cadastroContainer.page-with-menubar[_ngcontent-%COMP%] {\n  margin-left: 280px;\n  width: calc(100% - 280px);\n  transition: all 0.3s ease;\n}\n\n\n\n.cadastroContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n  margin-left: 60px;\n  width: calc(100% - 60px);\n}\n\n@media (max-width: 768px) {\n  .cadastroContainer.page-with-menubar[_ngcontent-%COMP%], \n   .cadastroContainer.page-with-menubar.menu-collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .cadastroContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n}\n.content-wrapper[_ngcontent-%COMP%] {\n  max-width: none;\n  width: auto;\n  margin: 0;\n  padding: 0;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  margin-bottom: 30px;\n  position: relative;\n  overflow: hidden;\n}\n\n.page-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #2c3e50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.page-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.stepper-enhanced[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 25px;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  border: 1px solid #e2e8f0;\n  position: relative;\n  overflow: hidden;\n}\n\n.stepper-enhanced[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #007bff, #28a745, #ffc107);\n}\n\n.stepper-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.stepper-header[_ngcontent-%COMP%]   .stepper-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2c3e50;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.stepper-header[_ngcontent-%COMP%]   .step-counter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 1.2rem;\n}\n.stepper-header[_ngcontent-%COMP%]   .step-counter[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #007bff;\n  font-size: 1.4rem;\n}\n.stepper-header[_ngcontent-%COMP%]   .step-counter[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n.stepper-header[_ngcontent-%COMP%]   .step-counter[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-weight: 500;\n}\n\n.progress-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-bottom: 20px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #007bff, #28a745);\n  border-radius: 3px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n  position: relative;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.steps-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 8px;\n  overflow-x: auto;\n  padding: 5px 0;\n}\n.steps-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.steps-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 2px;\n}\n.steps-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 2px;\n}\n.steps-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: 2px solid #e2e8f0;\n  background: #f8f9fa;\n  transition: all 0.3s ease;\n  position: relative;\n  min-width: fit-content;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.step-item.accessible[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.step-item.accessible[_ngcontent-%COMP%]:hover {\n  border-color: #007bff;\n  background: #f0f7ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.15);\n}\n.step-item.active[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  background: linear-gradient(135deg, #f0f7ff, #e3f2fd);\n  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.2);\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: white;\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n.step-item.active[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n}\n.step-item.completed[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background: linear-gradient(135deg, #f0fff4, #e8f5e8);\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #28a745;\n  color: white;\n}\n.step-item.completed[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 500;\n}\n.step-item.completed[_ngcontent-%COMP%]:hover {\n  border-color: #28a745;\n  background: #f0fff4;\n}\n.step-item[_ngcontent-%COMP%]:not(.accessible) {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.step-item[_ngcontent-%COMP%]:not(.accessible)   .step-circle[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #6c757d;\n}\n\n.step-circle[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 0.8rem;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n\n.step-content[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #2c3e50;\n  line-height: 1.1;\n}\n.step-content[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.current-step-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 15px;\n  background: linear-gradient(135deg, #f8f9fa, #e9ecef);\n  border-radius: 12px;\n  border: 1px solid #e2e8f0;\n}\n.current-step-info[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #495057;\n  font-weight: 500;\n}\n.current-step-info[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 1.1rem;\n}\n\n.stepper-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin-bottom: 30px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  position: relative;\n  overflow: hidden;\n}\n\n.stepper-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #6f42c1, #e83e8c);\n}\n\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.stepper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #e2e8f0;\n  transform: translateY(-50%);\n  z-index: 1;\n}\n\n.step[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  flex: 1;\n}\n\n.step-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #6c757d;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 8px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: all 0.3s ease;\n  border: 3px solid transparent;\n}\n\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6c757d;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.step.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  color: white;\n  border-color: rgba(0, 123, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n  transform: scale(1.1);\n}\n\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-weight: 600;\n}\n\n.step.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #20c997);\n  color: white;\n  border-color: rgba(40, 167, 69, 0.2);\n}\n\n.step.completed[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.step.completed[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-weight: 500;\n}\n\n.stepper[_ngcontent-%COMP%]   .progress-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 3px;\n  background: linear-gradient(90deg, #007bff, #28a745);\n  transform: translateY(-50%);\n  z-index: 1;\n  transition: width 0.5s ease;\n  border-radius: 2px;\n}\n\n.cadastro-form-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 25px;\n  margin-bottom: 30px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.cadastro-form-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #28a745, #20c997);\n}\n\n.cadastro-form-section[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n\n.cadastro-form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.cadastroForm[_ngcontent-%COMP%] {\n  width: 650px;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  margin: 0 auto;\n}\n\n.formContainer[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  padding: 30px;\n  margin-bottom: 30px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  width: 650px;\n  max-width: 800px;\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n\n.formContainer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #28a745, #20c997);\n}\n\n.formContainer[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n\n.formContainer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 25px;\n  text-align: center;\n}\n\n.col-lg-12[_ngcontent-%COMP%], \n.col-md-12[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.buttonSubmit[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  width: 100%;\n}\n\n.cadastro-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2c3e50;\n  font-size: 0.95rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  background: white;\n  transition: all 0.3s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n  outline: none;\n  transform: translateY(-1px);\n}\n\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #a0aec0;\n}\n\n.form-control[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: #cbd5e0;\n}\n\n.form-select[_ngcontent-%COMP%] {\n  border: 2px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 12px 16px;\n  font-size: 1rem;\n  background: white;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n  outline: none;\n  transform: translateY(-1px);\n}\n\n.form-select[_ngcontent-%COMP%]:hover:not(:focus) {\n  border-color: #cbd5e0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 20px;\n  border-radius: 10px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border: 2px solid;\n  margin-top: 10px;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  border-color: #007bff;\n  color: white;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);\n}\n\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #6c757d;\n  color: #6c757d;\n}\n\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n  transform: translateY(-1px);\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n\n.form-row-single[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-control.is-valid[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='m2.3 6.73.94-.94 3.5-3.5-1.88-1.88L2.3 3.01l-.94-.94L0 3.43 2.3 6.73z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke='%23dc3545' d='m5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n.valid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  color: #28a745;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n@media (max-width: 768px) {\n  .cadastroContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .stepper-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .stepper-header[_ngcontent-%COMP%]   .stepper-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .steps-list[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%] {\n    padding: 6px 8px;\n    gap: 6px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n    font-size: 0.7rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .current-step-info[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .current-step-info[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .cadastroContainer.page-with-menubar[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n  .cadastroForm[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding: 0 5px;\n  }\n  .formContainer[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n    margin-bottom: 20px;\n    max-width: 100%;\n  }\n  .content-wrapper[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .cadastro-form-section[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n    margin-bottom: 20px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stepper-compact[_ngcontent-%COMP%] {\n    margin: 20px 0 15px 0;\n    padding: 12px;\n  }\n  .step-info[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .current-step[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .step-description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stepper-container[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .step-circle[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    font-size: 0.8rem;\n  }\n  .step-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    display: none;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n@media (max-width: 480px) {\n  .cadastroContainer[_ngcontent-%COMP%] {\n    padding: 10px 5px;\n  }\n  .cadastroForm[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .stepper-header[_ngcontent-%COMP%]   .stepper-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .steps-list[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%] {\n    padding: 4px 6px;\n    gap: 4px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    font-size: 0.65rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .current-step-info[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .current-step-info[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .stepper-enhanced[_ngcontent-%COMP%]   .current-step-info[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .formContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n    margin-bottom: 15px;\n  }\n  .page-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .cadastro-form[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .form-control[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    font-size: 0.95rem;\n  }\n  .stepper-compact[_ngcontent-%COMP%] {\n    margin: 15px 0 10px 0;\n    padding: 10px;\n  }\n  .step-info[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .current-step[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .step-circle[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    font-size: 0.75rem;\n  }\n  .stepper[_ngcontent-%COMP%] {\n    padding: 0 5px;\n  }\n  .stepper-container[_ngcontent-%COMP%] {\n    padding: 12px;\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcXVhcnRvcy9jYWRhc3Ryby9jYWRhc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw2REFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBREEsd0NBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7QUFJSjs7QUFEQTtFQUNJOztJQUVJLGNBQUE7SUFDQSxXQUFBO0VBSU47RUFERTtJQUNJLGtCQUFBO0VBR047QUFDRjtBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFB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aUVFO0lBQ0ksVUFBQTtFQS9ETjtFQW1FRTtJQUNJLGtCQUFBO0VBakVOO0VBbUVNO0lBQ0ksaUJBQUE7RUFqRVY7RUFvRU07SUFDSSxRQUFBO0VBbEVWO0VBcUVNO0lBQ0ksZ0JBQUE7SUFDQSxRQUFBO0VBbkVWO0VBcUVVO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQW5FZDtFQXVFYztJQUNJLGlCQUFBO0VBckVsQjtFQTBFTTtJQUNJLGFBQUE7RUF4RVY7RUEwRVU7SUFDSSxrQkFBQTtFQXhFZDtFQTBFYztJQUNJLGFBQUE7RUF4RWxCO0VBK0VFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQTdFTjtFQWdGRTtJQUNJLGlCQUFBO0VBOUVOO0VBaUZFO0lBQ0ksU0FBQTtFQS9FTjtFQWtGRTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUFoRk47RUFvRkU7SUFDSSxxQkFBQTtJQUNBLGFBQUE7RUFsRk47RUFxRkU7SUFDSSxpQkFBQTtFQW5GTjtFQXNGRTtJQUNJLGtCQUFBO0VBcEZOO0VBd0ZFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQXRGTjtFQXlGRTtJQUNJLGNBQUE7RUF2Rk47RUEwRkU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7RUF4Rk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYWRhc3Ryb0NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG59XHJcbi5jaGVja3Nib3hlc3tcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmNhZGFzdHJvQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyODBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBBanVzdGUgcXVhbmRvIG8gbWVudSBlc3TDg8KhIGNvbGFwc2FkbyAqL1xyXG4uY2FkYXN0cm9Db250YWluZXIucGFnZS13aXRoLW1lbnViYXIubWVudS1jb2xsYXBzZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNhZGFzdHJvQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyLFxyXG4gICAgLmNhZGFzdHJvQ29udGFpbmVyLnBhZ2Utd2l0aC1tZW51YmFyLm1lbnUtY29sbGFwc2VkIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhZGFzdHJvQ29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMwMDU2YjMpO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ucGFnZS10aXRsZSBpIHtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4vLyBTdGVwcGVyIENvbXBvbmVudCAtIFZlcnPDg8KjbyBNZWxob3JhZGFcclxuLnN0ZXBwZXItZW5oYW5jZWQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RlcHBlci1lbmhhbmNlZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMyOGE3NDUsICNmZmMxMDcpO1xyXG59XHJcblxyXG4uc3RlcHBlci1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHJcbiAgICAuc3RlcHBlci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGVwLWNvdW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBcclxuICAgICAgICAuY3VycmVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudG90YWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIFxyXG4gICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5wcm9ncmVzcy1maWxsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMyOGE3NDUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuOHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksIHRyYW5zcGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2hpbW1lciAycyBpbmZpbml0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxyXG59XHJcblxyXG4uc3RlcHMtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIFxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYzFjMWMxO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2E4YThhODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGVwLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UyZThmMDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIFxyXG4gICAgJi5hY2Nlc3NpYmxlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjdmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMTUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjBmN2ZmLCAjZTNmMmZkKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0ZXAtY2lyY2xlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGVwLXRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmNvbXBsZXRlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGZmZjQsICNlOGY1ZTgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGVwLWNpcmNsZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyOGE3NDU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0ZXAtdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzI4YTc0NTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZmZmNDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICY6bm90KC5hY2Nlc3NpYmxlKSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0ZXAtY2lyY2xlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZThmMDtcclxuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3RlcC1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uc3RlcC1jb250ZW50IHtcclxuICAgIC5zdGVwLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RlcC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gT2N1bHRhciBkZXNjcmnDg8Knw4PCo28gcGFyYSBsYXlvdXQgY29tcGFjdG9cclxuICAgIH1cclxufVxyXG5cclxuLmN1cnJlbnQtc3RlcC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhLCAjZTllY2VmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgXHJcbiAgICAuc3RlcC1pbmRpY2F0b3Ige1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGVwcGVyIENvbXBvbmVudCAtIHZlcnPDg8KjbyBvcmlnaW5hbCAocmVtb3ZlciBzZSBuw4PCo28gdXNhcilcclxuLnN0ZXBwZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc3RlcHBlci1jb250YWluZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNmY0MmMxLCAjZTgzZThjKTtcclxufVxyXG5cclxuLnN0ZXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnN0ZXBwZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlOGYwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnN0ZXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5zdGVwLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNlMmU4ZjA7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byA4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zdGVwLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGNvbG9yOiAjNmM3NTdkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5zdGVwLmFjdGl2ZSAuc3RlcC1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiwgIzAwNTZiMyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTIzLCAyNTUsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5zdGVwLmFjdGl2ZSAuc3RlcC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zdGVwLmNvbXBsZXRlZCAuc3RlcC1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSwgIzIwYzk5Nyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoNDAsIDE2NywgNjksIDAuMik7XHJcbn1cclxuXHJcbi5zdGVwLmNvbXBsZXRlZCAuc3RlcC1jaXJjbGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnw6LCnMKTJztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc3RlcC5jb21wbGV0ZWQgLnN0ZXAtbGFiZWwge1xyXG4gICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vLyBQcm9ncmVzcyBsaW5lIGFuaW1hdGlvblxyXG4uc3RlcHBlciAucHJvZ3Jlc3MtbGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwN2JmZiwgIzI4YTc0NSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY2FkYXN0cm8tZm9ybS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhZGFzdHJvLWZvcm0tc2VjdGlvbjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyOGE3NDUsICMyMGM5OTcpO1xyXG59XHJcblxyXG4uY2FkYXN0cm8tZm9ybS1zZWN0aW9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5jYWRhc3Ryby1mb3JtLXNlY3Rpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBDb21wYXRpYmlsaWRhZGUgY29tIEhUTUwgZXhpc3RlbnRlXHJcbi5jYWRhc3Ryb0Zvcm0ge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA2NTBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzI4YTc0NSwgIzIwYzk5Nyk7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi5mb3JtQ29udGFpbmVyIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gRXN0aWxvcyBwYXJhIGNvbHVuYXMgZG8gQm9vdHN0cmFwXHJcbi5jb2wtbGctMTIsXHJcbi5jb2wtbWQtMTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uU3VibWl0IHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYWRhc3Ryby1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2UyZThmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogI2EwYWVjMDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpob3Zlcjpub3QoOmZvY3VzKSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTA7XHJcbn1cclxuXHJcbi5mb3JtLXNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0OmhvdmVyOm5vdCg6Zm9jdXMpIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwN2JmZiwgIzAwNTZiMyk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjMpO1xyXG59XHJcblxyXG4uYnRuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XHJcbiAgICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJ0bi5idG4tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5mb3JtLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmZvcm0tcm93IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXJvdy1zaW5nbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi8vIFZhbGlkYcODwqfDg8KjbyB2aXN1YWxcclxuLmZvcm0tY29udHJvbC5pcy12YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyUyMzI4YTc0NScgZD0nbTIuMyA2LjczLjk0LS45NCAzLjUtMy41LTEuODgtMS44OEwyLjMgMy4wMWwtLjk0LS45NEwwIDMuNDMgMi4zIDYuNzN6Jy8lM2UlM2Mvc3ZnJTNlXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNhbGMoMC4zNzVlbSArIDAuMTg3NXJlbSkgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKSBjYWxjKDAuNzVlbSArIDAuMzc1cmVtKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxMiAxMiclM2UlM2NjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLyUzZSUzY3BhdGggc3Ryb2tlPSclMjNkYzM1NDUnIGQ9J201LjggMy42aC40TDYgNi41eicvJTNlJTNjY2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nJTIzZGMzNTQ1JyBzdHJva2U9J25vbmUnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2FsYygwLjM3NWVtICsgMC4xODc1cmVtKSBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNhbGMoMC43NWVtICsgMC4zNzVyZW0pIGNhbGMoMC43NWVtICsgMC4zNzVyZW0pO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbi52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNhZGFzdHJvQ29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFN0ZXBwZXIgcmVzcG9uc2l2b1xyXG4gICAgLnN0ZXBwZXItZW5oYW5jZWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgICBcclxuICAgICAgICAuc3RlcHBlci1oZWFkZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zdGVwcGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGVwcy1saXN0IHtcclxuICAgICAgICAgICAgZ2FwOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGVwLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgICAgICBnYXA6IDZweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zdGVwLWNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5zdGVwLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmN1cnJlbnQtc3RlcC1pbmZvIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zdGVwLWluZGljYXRvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC5jYWRhc3Ryb0NvbnRhaW5lci5wYWdlLXdpdGgtbWVudWJhciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYWRhc3Ryb0Zvcm0ge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm1Db250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucGFnZS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYWRhc3Ryby1mb3JtLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZm9ybS1yb3cge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tYWN0aW9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFN0ZXBwZXIgY29tcGFjdG8gcmVzcG9uc2l2b1xyXG4gICAgLnN0ZXBwZXItY29tcGFjdCB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTVweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGVwLWluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1cnJlbnQtc3RlcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RlcC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gT2N1bHRhciBkZXNjcmnDg8Knw4PCo28gZW0gbW9iaWxlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFN0ZXBwZXIgb3JpZ2luYWwgcmVzcG9uc2l2byAobWFudGVyIHNlIHVzYXIpXHJcbiAgICAuc3RlcHBlci1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGVwLWNpcmNsZSB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RlcC1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIEhpZGUgbGFiZWxzIG9uIHNtYWxsIHNjcmVlbnNcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0ZXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY2FkYXN0cm9Db250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FkYXN0cm9Gb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTdGVwcGVyIGNvbXBhY3RvIGVtIHRlbGFzIG11aXRvIHBlcXVlbmFzXHJcbiAgICAuc3RlcHBlci1lbmhhbmNlZCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGVwcGVyLWhlYWRlciAuc3RlcHBlci10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3RlcHMtbGlzdCB7XHJcbiAgICAgICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3RlcC1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDZweDtcclxuICAgICAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcC1jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zdGVwLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgLnN0ZXAtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5jdXJyZW50LXN0ZXAtaW5mbyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc3RlcC1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBNb3N0cmFyIGFwZW5hcyBvIMODwq1jb25lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAuZm9ybUNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wYWdlLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhZGFzdHJvLWZvcm0ge1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU3RlcHBlciBjb21wYWN0byBtb2JpbGVcclxuICAgIC5zdGVwcGVyLWNvbXBhY3Qge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc3RlcC1pbmZvIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1cnJlbnQtc3RlcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBTdGVwcGVyIG9yaWdpbmFsIG1vYmlsZSAobWFudGVyIHNlIHVzYXIpXHJcbiAgICAuc3RlcC1jaXJjbGUge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdGVwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnN0ZXBwZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_quartos_quartos_module_ts.js.map