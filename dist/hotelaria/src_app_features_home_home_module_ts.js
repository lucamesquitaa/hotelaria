"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_home_home_module_ts"],{

/***/ 2829:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3738);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 6284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class HomeModule {
  static {
    this.ɵfac = function HomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTypeaheadConfig],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomeRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 3738:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/hotel.service */ 7420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);







function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_7_Template_button_click_6_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.visitarSite(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Visitar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r2.photosStared[0], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.url);
  }
}
class HomeComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, hotelService) {
    super(injector);
    this.injector = injector;
    this.hotelService = hotelService;
    this.filteredHoteis = [];
    this.formatter = result => result.name.toUpperCase() + " (" + result.id + ")";
    this.search = text$ => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(term => term === '' ? [] : this.hoteis?.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10) || []));
  }
  ngOnInit() {
    this.doGetAllHoteis();
  }
  doGetAllHoteis() {
    this.hotelService.doGetAllHoteis().subscribe({
      next: result => {
        this.hoteis = result.data;
        this.filteredHoteis = this.hoteis;
      }
    });
  }
  onHotelSelecionado() {
    if (!this.hotel) {
      this.filteredHoteis = this.hoteis;
      return;
    }
    this.filteredHoteis = this.hoteis?.map(v => this.hotel.name === v.name ? v : null).filter(v => v !== null);
  }
  visitarSite(item) {
    this.router.navigate(['hotel/' + item.url]);
  }
  compartilhar() {
    if (navigator.share) {
      navigator.share({
        title: this.hotel.name,
        text: 'Visite este hotel incrível!',
        url: window.location.href
      }).then(() => console.log('Compartilhado com sucesso!')).catch(error => console.log('Erro ao compartilhar:', error));
    } else {
      alert('O compartilhamento não é suportado neste navegador.');
    }
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__.HotelService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 5,
      consts: [[1, "telasContainer"], [1, "containerHome"], [1, "headerContainer"], ["src", "assets/imglogo.png", "alt", "logo turify casinha", 1, "logoCasinha", 3, "click"], [1, "bi", "bi-upload", 3, "click"], [1, "propagandaContainer"], ["id", "typeahead-format", "type", "text", "accentSensitive", "false", "placeholder", "Busque por um Hotel:", 1, "form-control", 3, "ngModelChange", "ngModel", "ngbTypeahead", "resultFormatter", "inputFormatter"], ["class", "hotelCard col-lg-6 col-md-12", 4, "ngFor", "ngForOf"], [1, "barColor"], [1, "hotelCard", "col-lg-6", "col-md-12"], ["alt", "imagem principal hotel", 3, "src"], [1, "text-center", "spanName"], [1, "btn", "btn-outline-primary", "mb-2", "me-2", "bi", "bi-arrow-up-right-circle", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_img_click_3_listener() {
            return ctx.router.navigate(["home"]);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_p_click_4_listener() {
            return ctx.compartilhar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.hotel, $event) || (ctx.hotel = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_6_listener() {
            return ctx.onHotelSelecionado();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 8, 3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.hotel);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultFormatter", ctx.formatter)("inputFormatter", ctx.formatter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredHoteis);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTypeahead],
      styles: [".barColor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 53px;\n  padding: 0 16px;\n  background-color: #cecece;\n  z-index: 0;\n}\n\n.telasContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  min-height: 100vh;\n  background-color: #FFFFFF;\n}\n\n.containerHome[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.inline-row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.propagandaContainer[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.propagandaContainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.propagandaContainer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\n.hotelCard[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 10px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  margin: 10px auto;\n  border: 1px solid #8f8f8f;\n}\n\n.hotelCard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n}\n\n.headerContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  z-index: 1;\n}\n\n.logoCasinha[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n}\n\n.headerContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n@media screen and (max-width: 570px) {\n  .hotelCard[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n@media screen and (min-width: 900px) {\n  .containerHome[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFFRSxVQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFTRjs7QUFOQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBU0Y7O0FBTEE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUUY7O0FBTkE7RUFDRTtJQUNFLHVCQUFBO0VBU0Y7QUFDRjtBQVBBO0VBQ0U7SUFDRSxpQkFBQTtFQVNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyQ29sb3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUzcHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4udGVsYXNDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7IC8vIG9jdXBhIHRvZGEgYSBhbHR1cmEgZGEgdGVsYVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNvbnRhaW5lckhvbWV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5pbmxpbmUtcm93e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucHJvcGFnYW5kYUNvbnRhaW5lclxyXG57XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG4ucHJvcGFnYW5kYUNvbnRhaW5lciBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5wcm9wYWdhbmRhQ29udGFpbmVyIGlucHV0e1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmhvdGVsQ2FyZHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOGY4ZjhmO1xyXG59XHJcbi5ob3RlbENhcmQgaW1ne1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5oZWFkZXJDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sb2dvQ2FzaW5oYSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbi5oZWFkZXJDb250YWluZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzBweCl7XHJcbiAgLmhvdGVsQ2FyZHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCl7XHJcbiAgLmNvbnRhaW5lckhvbWV7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6284:
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static {
    this.ɵfac = function HomeRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_home_module_ts.js.map