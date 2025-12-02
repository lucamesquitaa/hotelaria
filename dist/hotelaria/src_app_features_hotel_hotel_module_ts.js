"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_hotel_hotel_module_ts"],{

/***/ 1722:
/*!***************************************************!*\
  !*** ./src/app/features/hotel/hotel.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelComponent: () => (/* binding */ HotelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/hotel.service */ 7420);
/* harmony import */ var src_app_shared_services_coordenadas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/coordenadas.service */ 3521);
/* harmony import */ var src_app_shared_services_maps_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/maps.loader.service */ 6354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ 3428);











function HotelComponent_Conditional_13_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const img_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", "Slide " + (i_r4 + 1));
  }
}
function HotelComponent_Conditional_13_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HotelComponent_Conditional_13_1_ng_template_0_Template, 2, 2, "ng-template", 42);
  }
}
function HotelComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HotelComponent_Conditional_13_1_Template, 1, 0, null, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.images);
  }
}
function HotelComponent_img_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 45);
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function HotelComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wifi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HotelComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Piscina");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HotelComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Servi\u00E7o de limpeza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HotelComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Academia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HotelComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pets");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function HotelComponent_google_map_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "google-map", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "map-marker", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("center", ctx_r4.center)("zoom", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", ctx_r4.center)("label", "Local");
  }
}
function HotelComponent_ng_template_65_Conditional_5_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const img_r11 = ctx_r9.$implicit;
    const i_r12 = ctx_r9.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", img_r11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", "Slide " + (i_r12 + 1));
  }
}
function HotelComponent_ng_template_65_Conditional_5_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HotelComponent_ng_template_65_Conditional_5_1_ng_template_0_Template, 2, 2, "ng-template", 42);
  }
}
function HotelComponent_ng_template_65_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HotelComponent_ng_template_65_Conditional_5_1_Template, 1, 0, null, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.todasIMGS);
  }
}
function HotelComponent_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "h4", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Todas as fotos");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_ng_template_65_Template_button_click_3_listener() {
      const modal_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r9.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, HotelComponent_ng_template_65_Conditional_5_Template, 2, 1, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 57)(7, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_ng_template_65_Template_button_click_7_listener() {
      const modal_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r9.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"]((ctx_r4.todasIMGS == null ? null : ctx_r4.todasIMGS.length) ? 5 : -1);
  }
}
class HotelComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(route, injector, hotelService, coordenadasService, mapsLoader) {
    super(injector);
    this.route = route;
    this.injector = injector;
    this.hotelService = hotelService;
    this.coordenadasService = coordenadasService;
    this.mapsLoader = mapsLoader;
    this.todasIMGS = [];
    this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal);
    this.hotelId = this.route.snapshot.paramMap.get('hotel');
  }
  ngOnInit() {
    this.showLoading();
    this.mapsLoader.load().then(() => {
      this.hotelService.doGetAllHoteis().subscribe({
        next: result => {
          const hotel = result.data?.find(item => item.url === this.hotelId);
          if (hotel) {
            this.id = hotel.id;
            console.log(hotel.photosStared);
            this.images = hotel.photosStared;
            this.hotelService.doGetHotelId(this.id).subscribe({
              next: item => {
                this.hotel = item.data;
                this.coordenadasService.buscarCoordenadas(`${this.hotel?.address} ${this.hotel?.number}, ${this.hotel?.city} - ${this.hotel?.cep}`).subscribe({
                  next: res => {
                    if (res.status === 'OK') {
                      const location = res.results[0].geometry.location;
                      this.center = {
                        lat: location.lat,
                        lng: location.lng
                      };
                      console.log('Center carregado:', this.center);
                    } else {
                      console.error('Erro na geocodificação:', res.status);
                    }
                  },
                  error: err => {
                    console.error('Erro ao buscar coordenadas:', err);
                  },
                  complete: () => {
                    this.hideLoading();
                  }
                });
                this.todasIMGS = this.hotel?.photos?.map(x => x.url) ?? [];
              },
              error: err => {
                console.error('Erro ao buscar hotel por ID:', err);
                this.hideLoading();
              },
              complete: () => {
                this.hideLoading();
              }
            });
          } else {
            console.error('Hotel não encontrado');
            this.hideLoading();
          }
        },
        error: err => {
          console.error('Erro ao buscar todos os hotéis:', err);
          this.hideLoading();
        }
      });
    });
  }
  openLg(content) {
    this.modalService.open(content, {
      size: 'lg'
    });
  }
  openWhatsApp() {
    const phoneNumber = this.hotel?.contacts?.at(0)?.contact; // Número com DDI e DDD (ex.: 55 + 11 + número)
    const message = encodeURIComponent(`Olá ${this.hotel?.contacts?.at(0)?.name}! Gostaria de mais informações.`);
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  compartilhar() {
    if (navigator.share) {
      navigator.share({
        title: this.hotel?.name,
        text: 'Visite este hotel incrível!',
        url: window.location.href
      }).then(() => console.log('Compartilhado com sucesso!')).catch(error => console.log('Erro ao compartilhar:', error));
    } else {
      alert('O compartilhamento não é suportado neste navegador.');
    }
  }
  static {
    this.ɵfac = function HotelComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HotelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_1__.HotelService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_coordenadas_service__WEBPACK_IMPORTED_MODULE_2__.CoordenadasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_maps_loader_service__WEBPACK_IMPORTED_MODULE_3__.MapsLoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HotelComponent,
      selectors: [["app-hotel"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
      decls: 67,
      vars: 23,
      consts: [["content2", ""], [1, "telasContainer"], [1, "containerHotel"], [1, "headerContainer"], ["src", "assets/imglogo.png", "alt", "logo turify casinha", 1, "logoCasinha", 3, "click"], [1, "bi", "bi-upload", 3, "click"], [1, "spaceB"], [1, "MILpxMostra"], ["type", "button", 1, "MILpxMostra", "buttonTela", "btn", "btn-primary", 3, "click"], [1, "sliderContainer"], [1, "MILpxMostra", "subtitleHotel"], [1, "containerInfos", "displayFlexRow"], [1, "MILpxMostra", "fotosSecundarias", "displayFlexRow", 3, "click"], ["alt", "fotos secund\u00E1rias", 3, "src", 4, "ngFor", "ngForOf"], [1, "bi", "bi-image"], [1, "MILpxEsconde", "titleHotel"], [1, "MILpxEsconde", "subtitleHotel"], ["type", "button", 1, "MILpxEsconde", "btn", "btn-link", "buttonLink", "bi", "bi-image", 3, "click"], [1, "MILpxEsconde", 2, "width", "100%", "border", "0.5px solid #7B7B7B", "box-shadow", "0.5px  0.5px  0.5px #afafaf"], [1, "MILpxEsconde", "textBold"], [1, "MILpxEsconde", "textApenas"], [1, "containerAntesDetalhes"], [1, "MILpxMostra", "textBold"], [1, "MILpxMostra", "textApenas", "textP"], [1, "textBold"], [1, "textApenas", "textP"], [1, "colum"], [1, "detalhesContainer"], [1, "textApenas", "textBold"], [1, "icones"], [1, "bi", "bi-cup-hot"], ["class", "bi bi-wifi", 4, "ngIf"], ["class", "bi bi-water", 4, "ngIf"], ["class", "bi bi-minecart", 4, "ngIf"], ["class", "bi bi-heart-pulse", 4, "ngIf"], ["class", "bi bi-emoji-smile", 4, "ngIf"], [1, "maps"], ["height", "360px", "width", "100%", 3, "center", "zoom", 4, "ngIf"], [1, "buttonWPP", "MILpxEsconde"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "barColor"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], [3, "src", "alt"], ["alt", "fotos secund\u00E1rias", 3, "src"], [1, "bi", "bi-wifi"], [1, "bi", "bi-water"], [1, "bi", "bi-minecart"], [1, "bi", "bi-heart-pulse"], [1, "bi", "bi-emoji-smile"], ["height", "360px", "width", "100%", 3, "center", "zoom"], [3, "position", "label"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn-close", "pull-right", 3, "click"], [1, "modal-body", "ZZZ"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
      template: function HotelComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_img_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.router.navigate(["home"]));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_p_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.compartilhar());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6)(6, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openWhatsApp());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Reserve J\u00E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9)(11, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HotelComponent_Conditional_13_Template, 2, 1, "ngb-carousel");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_div_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const content2_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](66);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openLg(content2_r6));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HotelComponent_img_16_Template, 1, 1, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Ver + fotos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h3", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            const content2_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](66);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openLg(content2_r6));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Ver + fotos");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Descri\u00E7\u00E3o:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 21)(31, "p", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Descri\u00E7\u00E3o:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Diferenciais:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Funcionamento Lobby:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 26)(44, "div", 27)(45, "p", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Comodidades Inclusas:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 29)(48, "span", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Caf\u00E9 da manh\u00E3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, HotelComponent_span_50_Template, 2, 0, "span", 31)(51, HotelComponent_span_51_Template, 2, 0, "span", 32)(52, HotelComponent_span_52_Template, 2, 0, "span", 33)(53, HotelComponent_span_53_Template, 2, 0, "span", 34)(54, HotelComponent_span_54_Template, 2, 0, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, HotelComponent_google_map_56_Template, 2, 4, "google-map", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](59, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 38)(62, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HotelComponent_Template_button_click_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openWhatsApp());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Reserve J\u00E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](64, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, HotelComponent_ng_template_65_Template, 9, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.category, " - ", ctx.hotel == null ? null : ctx.hotel.city, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"]((ctx.images == null ? null : ctx.images.length) ? 13 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.todasIMGS.slice(1, 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.category, " - ", ctx.hotel == null ? null : ctx.hotel.city, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.diff);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.hotel == null ? null : ctx.hotel.lobby);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hotel == null ? null : ctx.hotel.wifi);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hotel == null ? null : ctx.hotel.swimming);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hotel == null ? null : ctx.hotel.cleaning);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hotel == null ? null : ctx.hotel.gym);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hotel == null ? null : ctx.hotel.pets);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.center);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx.hotel == null ? null : ctx.hotel.address, " ", ctx.hotel == null ? null : ctx.hotel.number, ", ", ctx.hotel == null ? null : ctx.hotel.complement, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.hotel == null ? null : ctx.hotel.city, " (", ctx.hotel == null ? null : ctx.hotel.cep, ")");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbSlide, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__.MapMarker],
      styles: [".barColor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 53px;\n  padding: 0 16px;\n  background-color: #cecece;\n  z-index: 0;\n}\n\n.telasContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  min-height: 100vh;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  padding: 40px 20px;\n}\n\n.containerHotel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-self: center;\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n}\n\n.headerContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  z-index: 1;\n  background: white;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.logoCasinha[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n}\n\n.textBold[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-weight: bold;\n  padding: 5px;\n}\n\n.headerContainer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  font-size: 1.5rem;\n}\n\n.inline-row[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.maps[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-bottom: 80px;\n  margin-top: 30px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 250px;\n}\n\n.buttonLink[_ngcontent-%COMP%] {\n  color: rgb(3, 67, 116);\n  margin-top: -20px;\n}\n\n.sliderContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n\n.MILpxEsconde[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.MILpxMostra[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.containerInfos[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 3;\n  padding: 30px 24px;\n  background-color: #FFFFFF;\n  border-radius: 0;\n  margin-top: 0;\n  display: flex;\n  align-items: center;\n  justify-self: center;\n  flex-direction: column;\n}\n\n.titleHotel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 15px 0;\n  font-weight: 700;\n  font-size: 2rem;\n  color: #2c3e50;\n  text-align: center;\n}\n\n.subtitleHotel[_ngcontent-%COMP%] {\n  margin-top: -25px;\n}\n\n.detalhesContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  margin: 20px 0;\n  border-radius: 15px;\n  border: 2px solid #e2e8f0;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  background: #fafbfc;\n  transition: all 0.3s ease;\n}\n\n.detalhesContainer[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  border-color: #007bff;\n}\n\n.icones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.icones[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.buttonWPP[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  padding: 18px;\n  background-color: rgb(3, 67, 116);\n  z-index: 4;\n  box-shadow: 1px 1px 1px #afafaf;\n}\n\n.buttonTela[_ngcontent-%COMP%] {\n  padding: 18px;\n  background-color: rgb(3, 67, 116);\n  z-index: 4;\n  box-shadow: 1px 1px 1px #afafaf;\n}\n\n.alignSelf1[_ngcontent-%COMP%] {\n  display: flex;\n  align-self: flex-end;\n}\n\n.ZZZ[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 250px;\n}\n\n.textApenas[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.maps[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding: 10px;\n  margin: 0 auto;\n  margin-bottom: 60px;\n  box-shadow: 1px 1px 1px #afafaf;\n}\n\n.textP[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.fotosSecundarias[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 190px;\n  margin: 10px;\n  height: auto;\n  cursor: pointer;\n}\n\n.fotosSecundarias[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 190px;\n  margin: 10px;\n  height: 100px;\n  border-radius: 5px;\n  background-color: #e6e6e6;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  justify-content: center;\n}\n\n@media screen and (min-width: 580px) {\n  .containerHotel[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .sliderContainer[_ngcontent-%COMP%] {\n    width: 55%;\n    height: auto;\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  img[_ngcontent-%COMP%] {\n    max-height: 300px;\n    border-radius: 5px;\n  }\n  .containerInfos[_ngcontent-%COMP%] {\n    width: 45%;\n    margin-top: 20px;\n  }\n  .buttonWPP[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    margin: 0px auto;\n    padding: 0;\n  }\n  .maps[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n  .ZZZ[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    max-height: 500px;\n  }\n}\n@media screen and (min-width: 900px) {\n  .telasContainer[_ngcontent-%COMP%] {\n    padding: 60px 40px;\n  }\n  .containerHotel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 900px;\n    background-color: #FFFFFF;\n  }\n  .containerInfos[_ngcontent-%COMP%] {\n    padding: 40px 30px;\n  }\n  .colum[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  .containerAntesDetalhes[_ngcontent-%COMP%] {\n    display: flex;\n    width: 55%;\n    padding: 0;\n    margin: 0;\n    align-items: start;\n    justify-content: start;\n    flex-direction: column;\n  }\n  .detalhesContainer[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .MILpxEsconde[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .MILpxMostra[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .buttonWpp1000px[_ngcontent-%COMP%] {\n    padding: 18px;\n    margin: 20px;\n    background-color: rgb(3, 67, 116);\n    box-shadow: 1px 1px 1px #afafaf;\n  }\n  .maps[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 100%;\n  }\n  .colum[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .displayFlexRow[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .spaceB[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n  }\n  .subtitleHotel[_ngcontent-%COMP%] {\n    margin-top: -20px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .telasContainer[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .containerHotel[_ngcontent-%COMP%] {\n    max-width: 100%;\n    margin: 0;\n    border-radius: 15px;\n  }\n  .headerContainer[_ngcontent-%COMP%] {\n    padding: 15px 20px;\n  }\n  .containerInfos[_ngcontent-%COMP%] {\n    padding: 25px 20px;\n  }\n  .titleHotel[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    padding: 10px 0;\n  }\n  .detalhesContainer[_ngcontent-%COMP%] {\n    padding: 15px;\n    margin: 15px 0;\n  }\n}\n@media screen and (max-width: 480px) {\n  .telasContainer[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .headerContainer[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n  .containerInfos[_ngcontent-%COMP%] {\n    padding: 20px 15px;\n  }\n  .titleHotel[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .detalhesContainer[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG90ZWwvaG90ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUlGOztBQURBO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFFRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUpBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLGFBQUE7QUFTRjs7QUFQQTtFQUNFLGFBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFXRjs7QUFUQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtBQWFGOztBQVhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWNGOztBQVhBO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FBY0Y7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQWVGOztBQWJBO0VBQ0csVUFBQTtBQWdCSDs7QUFkQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQWlCRjs7QUFmQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUFtQkY7O0FBakJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQW9CRjs7QUFqQkE7RUFDRSxZQUFBO0FBb0JGOztBQWxCQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksYUFBQTtBQXNCSjs7QUFsQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcUJKOztBQW5CRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFzQko7O0FBbEJBO0VBQ0U7SUFDRSxtQkFBQTtFQXFCRjtFQW5CQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQXFCRjtFQW5CQTtJQUNFLGlCQUFBO0lBQ0Msa0JBQUE7RUFxQkg7RUFuQkE7SUFDRSxVQUFBO0lBQ0EsZ0JBQUE7RUFxQkY7RUFuQkE7SUFFRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUFvQkY7RUFsQkE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUFvQkY7RUFsQkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBb0JGO0FBQ0Y7QUFsQkE7RUFDRTtJQUNFLGtCQUFBO0VBb0JGO0VBakJBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFtQkY7RUFoQkE7SUFDRSxrQkFBQTtFQWtCRjtFQWZBO0lBQ0UsVUFBQTtFQWlCRjtFQWZBO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtFQWlCRjtFQWRBO0lBQ0UsV0FBQTtFQWdCRjtFQWRBO0lBQ0UsYUFBQTtFQWdCRjtFQWRBO0lBQ0UsYUFBQTtFQWdCRjtFQWRBO0lBQ0UsYUFBQTtJQUNBLFlBQUE7SUFDQSxpQ0FBQTtJQUNBLCtCQUFBO0VBZ0JGO0VBZEE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQWdCRjtFQWRBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQWdCRjtFQWRBO0lBQ0csYUFBQTtJQUNELG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFnQkY7RUFkQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBZ0JGO0VBZEE7SUFDRSxpQkFBQTtFQWdCRjtBQUNGO0FBYkE7RUFDRTtJQUNFLGtCQUFBO0VBZUY7RUFaQTtJQUNFLGVBQUE7SUFDQSxTQUFBO0lBQ0EsbUJBQUE7RUFjRjtFQVhBO0lBQ0Usa0JBQUE7RUFhRjtFQVZBO0lBQ0Usa0JBQUE7RUFZRjtFQVRBO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBV0Y7RUFSQTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0U7SUFDRSxrQkFBQTtFQVNGO0VBTkE7SUFDRSxrQkFBQTtFQVFGO0VBTEE7SUFDRSxrQkFBQTtFQU9GO0VBSkE7SUFDRSxpQkFBQTtFQU1GO0VBSEE7SUFDRSxhQUFBO0VBS0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJDb2xvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTNweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbi50ZWxhc0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSAwJSwgI2U5ZWNlZiAxMDAlKTtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJIb3RlbHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5oZWFkZXJDb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMjBweCAyNHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbn1cclxuXHJcbi5sb2dvQ2FzaW5oYSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4udGV4dEJvbGR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJDb250YWluZXIgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4uaW5saW5lLXJvd3tcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLm1hcHNcclxue1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjUwcHg7XHJcbn1cclxuLmJ1dHRvbkxpbmt7XHJcbiAgY29sb3I6IHJnYigzLCA2NywgMTE2KTtcclxuICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4uc2xpZGVyQ29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLk1JTHB4RXNjb25kZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5NSUxweE1vc3RyYXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5jb250YWluZXJJbmZvc3tcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAzO1xyXG4gIHBhZGRpbmc6IDMwcHggMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4udGl0bGVIb3RlbHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBjb2xvcjogIzJjM2U1MDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1YnRpdGxlSG90ZWx7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbn1cclxuLmRldGFsaGVzQ29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYmZjO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5kZXRhbGhlc0NvbnRhaW5lcjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbn1cclxuLmljb25lc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uaWNvbmVzIHNwYW57XHJcbiAgIHdpZHRoOiA0OSU7XHJcbn1cclxuLmJ1dHRvbldQUCBidXR0b257XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICByaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLCA2NywgMTE2KTtcclxuICB6LWluZGV4OiA0O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICNhZmFmYWY7XHJcbn1cclxuLmJ1dHRvblRlbGF7XHJcbiAgcGFkZGluZzogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgNjcsIDExNik7XHJcbiAgei1pbmRleDogNDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjYWZhZmFmO1xyXG59XHJcbi5hbGlnblNlbGYxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuLlpaWiBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG5cclxufVxyXG4udGV4dEFwZW5hc3tcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm1hcHN7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjYWZhZmFmO1xyXG4gIH1cclxuLnRleHRQIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZvdG9zU2VjdW5kYXJpYXMgaW1ne1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgbWFyZ2luOiAgMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmZvdG9zU2VjdW5kYXJpYXMgcHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIG1hcmdpbjogIDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU4MHB4KXtcclxuICAuY29udGFpbmVySG90ZWx7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuICAuc2xpZGVyQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICBtYXgtaGVpZ2h0OjMwMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lckluZm9ze1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5idXR0b25XUFB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5tYXBze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuWlpaIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KXtcclxuICAudGVsYXNDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNjBweCA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVySG90ZWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVySW5mb3N7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJBbnRlc0RldGFsaGVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZGV0YWxoZXNDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLk1JTHB4RXNjb25kZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5NSUxweE1vc3RyYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5idXR0b25XcHAxMDAwcHh7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDY3LCAxMTYpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2FmYWZhZjtcclxuICB9XHJcbiAgLm1hcHN7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbHVte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5kaXNwbGF5RmxleFJvd3tcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLnNwYWNlQntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuc3VidGl0bGVIb3RlbHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAudGVsYXNDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVySG90ZWx7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyQ29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckluZm9ze1xyXG4gICAgcGFkZGluZzogMjVweCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudGl0bGVIb3RlbHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICBcclxuICAuZGV0YWxoZXNDb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC50ZWxhc0NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXJDb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVySW5mb3N7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZUhvdGVse1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRhbGhlc0NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2620:
/*!********************************************************!*\
  !*** ./src/app/features/hotel/hotel-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelRoutingModule: () => (/* binding */ HotelRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel.component */ 1722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: ':hotel',
  component: _hotel_component__WEBPACK_IMPORTED_MODULE_0__.HotelComponent
}];
class HotelRoutingModule {
  static {
    this.ɵfac = function HotelRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HotelRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HotelRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HotelRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3428:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/google-maps/fesm2022/google-maps.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeprecatedMapMarkerClusterer: () => (/* binding */ DeprecatedMapMarkerClusterer),
/* harmony export */   GoogleMap: () => (/* binding */ GoogleMap),
/* harmony export */   GoogleMapsModule: () => (/* binding */ GoogleMapsModule),
/* harmony export */   MapAdvancedMarker: () => (/* binding */ MapAdvancedMarker),
/* harmony export */   MapBaseLayer: () => (/* binding */ MapBaseLayer),
/* harmony export */   MapBicyclingLayer: () => (/* binding */ MapBicyclingLayer),
/* harmony export */   MapCircle: () => (/* binding */ MapCircle),
/* harmony export */   MapDirectionsRenderer: () => (/* binding */ MapDirectionsRenderer),
/* harmony export */   MapDirectionsService: () => (/* binding */ MapDirectionsService),
/* harmony export */   MapEventManager: () => (/* binding */ MapEventManager),
/* harmony export */   MapGeocoder: () => (/* binding */ MapGeocoder),
/* harmony export */   MapGroundOverlay: () => (/* binding */ MapGroundOverlay),
/* harmony export */   MapHeatmapLayer: () => (/* binding */ MapHeatmapLayer),
/* harmony export */   MapInfoWindow: () => (/* binding */ MapInfoWindow),
/* harmony export */   MapKmlLayer: () => (/* binding */ MapKmlLayer),
/* harmony export */   MapMarker: () => (/* binding */ MapMarker),
/* harmony export */   MapMarkerClusterer: () => (/* binding */ MapMarkerClusterer),
/* harmony export */   MapPolygon: () => (/* binding */ MapPolygon),
/* harmony export */   MapPolyline: () => (/* binding */ MapPolyline),
/* harmony export */   MapRectangle: () => (/* binding */ MapRectangle),
/* harmony export */   MapTrafficLayer: () => (/* binding */ MapTrafficLayer),
/* harmony export */   MapTransitLayer: () => (/* binding */ MapTransitLayer)
/* harmony export */ });
/* harmony import */ var C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8148);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3900);







/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */
const _c0 = ["*"];
class MapEventManager {
  _ngZone;
  /** Pending listeners that were added before the target was set. */
  _pending = [];
  _listeners = [];
  _targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  /** Clears all currently-registered event listeners. */
  _clearListeners() {
    for (const listener of this._listeners) {
      listener.remove();
    }
    this._listeners = [];
  }
  constructor(_ngZone) {
    this._ngZone = _ngZone;
  }
  /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */
  getLazyEmitter(name) {
    return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(target => {
      const observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
        // If the target hasn't been initialized yet, cache the observer so it can be added later.
        if (!target) {
          this._pending.push({
            observable,
            observer
          });
          return undefined;
        }
        const listener = target.addListener(name, event => {
          this._ngZone.run(() => observer.next(event));
        });
        // If there's an error when initializing the Maps API (e.g. a wrong API key), it will
        // return a dummy object that returns `undefined` from `addListener` (see #26514).
        if (!listener) {
          observer.complete();
          return undefined;
        }
        this._listeners.push(listener);
        return () => listener.remove();
      });
      return observable;
    }));
  }
  /** Sets the current target that the manager should bind events to. */
  setTarget(target) {
    const currentTarget = this._targetStream.value;
    if (target === currentTarget) {
      return;
    }
    // Clear the listeners from the pre-existing target.
    if (currentTarget) {
      this._clearListeners();
      this._pending = [];
    }
    this._targetStream.next(target);
    // Add the listeners that were bound before the map was initialized.
    this._pending.forEach(subscriber => subscriber.observable.subscribe(subscriber.observer));
    this._pending = [];
  }
  /** Destroys the manager and clears the event listeners. */
  destroy() {
    this._clearListeners();
    this._pending = [];
    this._targetStream.complete();
  }
}

/** default options set to the Googleplex */
const DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */
const DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */
const DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */
class GoogleMap {
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _mapEl;
  _existingAuthFailureCallback;
  /**
   * The underlying google.maps.Map object
   *
   * See developers.google.com/maps/documentation/javascript/reference/map#Map
   */
  googleMap;
  /** Whether we're currently rendering inside a browser. */
  _isBrowser;
  /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */
  height = DEFAULT_HEIGHT;
  /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */
  width = DEFAULT_WIDTH;
  /**
   * The Map ID of the map. This parameter cannot be set or changed after a map is instantiated.
   * See: https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.mapId
   */
  mapId;
  /**
   * Type of map that should be rendered. E.g. hybrid map, terrain map etc.
   * See: https://developers.google.com/maps/documentation/javascript/reference/map#MapTypeId
   */
  mapTypeId;
  set center(center) {
    this._center = center;
  }
  _center;
  set zoom(zoom) {
    this._zoom = zoom;
  }
  _zoom;
  set options(options) {
    this._options = options || DEFAULT_OPTIONS;
  }
  _options = DEFAULT_OPTIONS;
  /** Event emitted when the map is initialized. */
  mapInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/events#auth-errors
   */
  authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
   */
  boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
   */
  centerChanged = this._eventManager.getLazyEmitter('center_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
   */
  mapClick = this._eventManager.getLazyEmitter('click');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
   */
  mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
   */
  mapDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
   */
  mapDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
   */
  mapDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
   */
  headingChanged = this._eventManager.getLazyEmitter('heading_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
   */
  idle = this._eventManager.getLazyEmitter('idle');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
   */
  maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
   */
  mapMousemove = this._eventManager.getLazyEmitter('mousemove');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
   */
  mapMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
   */
  mapMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
   */
  projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
   */
  mapRightclick = this._eventManager.getLazyEmitter('rightclick');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
   */
  tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
   */
  tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
   */
  zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
  constructor() {
    const platformId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID);
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(platformId);
    if (this._isBrowser) {
      const googleMapsWindow = window;
      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }
      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;
      googleMapsWindow.gm_authFailure = () => {
        if (this._existingAuthFailureCallback) {
          this._existingAuthFailureCallback();
        }
        this.authFailure.emit();
      };
    }
  }
  ngOnChanges(changes) {
    if (changes['height'] || changes['width']) {
      this._setSize();
    }
    const googleMap = this.googleMap;
    if (googleMap) {
      if (changes['options']) {
        googleMap.setOptions(this._combineOptions());
      }
      if (changes['center'] && this._center) {
        googleMap.setCenter(this._center);
      }
      // Note that the zoom can be zero.
      if (changes['zoom'] && this._zoom != null) {
        googleMap.setZoom(this._zoom);
      }
      if (changes['mapTypeId'] && this.mapTypeId) {
        googleMap.setMapTypeId(this.mapTypeId);
      }
    }
  }
  ngOnInit() {
    // It should be a noop during server-side rendering.
    if (this._isBrowser) {
      this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');
      this._setSize();
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      if (google.maps.Map) {
        this._initialize(google.maps.Map);
      } else {
        this._ngZone.runOutsideAngular(() => {
          google.maps.importLibrary('maps').then(lib => this._initialize(lib.Map));
        });
      }
    }
  }
  _initialize(mapConstructor) {
    this._ngZone.runOutsideAngular(() => {
      this.googleMap = new mapConstructor(this._mapEl, this._combineOptions());
      this._eventManager.setTarget(this.googleMap);
      this.mapInitialized.emit(this.googleMap);
    });
  }
  ngOnDestroy() {
    this.mapInitialized.complete();
    this._eventManager.destroy();
    if (this._isBrowser) {
      const googleMapsWindow = window;
      googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
    }
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
   */
  fitBounds(bounds, padding) {
    this._assertInitialized();
    this.googleMap.fitBounds(bounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
   */
  panBy(x, y) {
    this._assertInitialized();
    this.googleMap.panBy(x, y);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
   */
  panTo(latLng) {
    this._assertInitialized();
    this.googleMap.panTo(latLng);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
   */
  panToBounds(latLngBounds, padding) {
    this._assertInitialized();
    this.googleMap.panToBounds(latLngBounds, padding);
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.googleMap.getBounds() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.googleMap.getCenter();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
   */
  getClickableIcons() {
    this._assertInitialized();
    return this.googleMap.getClickableIcons();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
   */
  getHeading() {
    this._assertInitialized();
    return this.googleMap.getHeading();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
   */
  getMapTypeId() {
    this._assertInitialized();
    return this.googleMap.getMapTypeId();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
   */
  getProjection() {
    this._assertInitialized();
    return this.googleMap.getProjection() || null;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
   */
  getStreetView() {
    this._assertInitialized();
    return this.googleMap.getStreetView();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
   */
  getTilt() {
    this._assertInitialized();
    return this.googleMap.getTilt();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
   */
  getZoom() {
    this._assertInitialized();
    return this.googleMap.getZoom();
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
   */
  get controls() {
    this._assertInitialized();
    return this.googleMap.controls;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
   */
  get data() {
    this._assertInitialized();
    return this.googleMap.data;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
   */
  get mapTypes() {
    this._assertInitialized();
    return this.googleMap.mapTypes;
  }
  /**
   * See
   * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
   */
  get overlayMapTypes() {
    this._assertInitialized();
    return this.googleMap.overlayMapTypes;
  }
  /** Returns a promise that resolves when the map has been initialized. */
  _resolveMap() {
    return this.googleMap ? Promise.resolve(this.googleMap) : this.mapInitialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise();
  }
  _setSize() {
    if (this._mapEl) {
      const styles = this._mapEl.style;
      styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
  /** Combines the center and zoom and the other map options into a single object */
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      // It's important that we set **some** kind of `center` and `zoom`, otherwise
      // Google Maps will render a blank rectangle which looks broken.
      center: this._center || options.center || DEFAULT_OPTIONS.center,
      zoom: this._zoom ?? options.zoom ?? DEFAULT_OPTIONS.zoom,
      // Passing in an undefined `mapTypeId` seems to break tile loading
      // so make sure that we have some kind of default (see #22082).
      mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId,
      mapId: this.mapId || options.mapId
    };
  }
  /** Asserts that the map has been initialized. */
  _assertInitialized() {
    if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }
  static ɵfac = function GoogleMap_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GoogleMap)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: GoogleMap,
    selectors: [["google-map"]],
    inputs: {
      height: "height",
      width: "width",
      mapId: "mapId",
      mapTypeId: "mapTypeId",
      center: "center",
      zoom: "zoom",
      options: "options"
    },
    outputs: {
      mapInitialized: "mapInitialized",
      authFailure: "authFailure",
      boundsChanged: "boundsChanged",
      centerChanged: "centerChanged",
      mapClick: "mapClick",
      mapDblclick: "mapDblclick",
      mapDrag: "mapDrag",
      mapDragend: "mapDragend",
      mapDragstart: "mapDragstart",
      headingChanged: "headingChanged",
      idle: "idle",
      maptypeidChanged: "maptypeidChanged",
      mapMousemove: "mapMousemove",
      mapMouseout: "mapMouseout",
      mapMouseover: "mapMouseover",
      projectionChanged: "projectionChanged",
      mapRightclick: "mapRightclick",
      tilesloaded: "tilesloaded",
      tiltChanged: "tiltChanged",
      zoomChanged: "zoomChanged"
    },
    exportAs: ["googleMap"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "map-container"]],
    template: function GoogleMap_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content />',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None
    }]
  }], () => [], {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mapId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mapInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();
const cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }
  return cssUnitsPattern.test(value) ? value : `${value}px`;
}
class MapBaseLayer {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._ngZone.runOutsideAngular(() => {
        this._initializeObject();
      });
      this._assertInitialized();
      this._setMap();
    }
  }
  ngOnDestroy() {
    this._unsetMap();
  }
  _assertInitialized() {
    if (!this._map.googleMap) {
      throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
    }
  }
  _initializeObject() {}
  _setMap() {}
  _unsetMap() {}
  static ɵfac = function MapBaseLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapBaseLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapBaseLayer,
    selectors: [["map-base-layer"]],
    exportAs: ["mapBaseLayer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], () => [], null);
})();

/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */
class MapBicyclingLayer {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  /**
   * The underlying google.maps.BicyclingLayer object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
   */
  bicyclingLayer;
  /** Event emitted when the bicycling layer is initialized. */
  bicyclingLayerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  ngOnInit() {
    if (this._map._isBrowser) {
      if (google.maps.BicyclingLayer && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.BicyclingLayer);
      } else {
        this._zone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
            this._initialize(map, lib.BicyclingLayer);
          });
        });
      }
    }
  }
  _initialize(map, layerConstructor) {
    this._zone.runOutsideAngular(() => {
      this.bicyclingLayer = new layerConstructor();
      this.bicyclingLayerInitialized.emit(this.bicyclingLayer);
      this._assertLayerInitialized();
      this.bicyclingLayer.setMap(map);
    });
  }
  ngOnDestroy() {
    this.bicyclingLayer?.setMap(null);
  }
  _assertLayerInitialized() {
    if (!this.bicyclingLayer) {
      throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }
  static ɵfac = function MapBicyclingLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapBicyclingLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapBicyclingLayer,
    selectors: [["map-bicycling-layer"]],
    outputs: {
      bicyclingLayerInitialized: "bicyclingLayerInitialized"
    },
    exportAs: ["mapBicyclingLayer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, {
    bicyclingLayerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */
class MapCircle {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _center = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _radius = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * Underlying google.maps.Circle object.
   *
   * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
   */
  circle; // initialized in ngOnInit
  set options(options) {
    this._options.next(options || {});
  }
  set center(center) {
    this._center.next(center);
  }
  set radius(radius) {
    this._radius.next(radius);
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
   */
  centerChanged = this._eventManager.getLazyEmitter('center_changed');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
   */
  circleClick = this._eventManager.getLazyEmitter('click');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
   */
  circleDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
   */
  circleDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
   */
  circleDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
   */
  circleDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
   */
  circleMousedown = this._eventManager.getLazyEmitter('mousedown');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
   */
  circleMousemove = this._eventManager.getLazyEmitter('mousemove');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
   */
  circleMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
   */
  circleMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
   */
  circleMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
   */
  radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
   */
  circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  /** Event emitted when the circle is initialized. */
  circleInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (!this._map._isBrowser) {
      return;
    }
    this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
      if (google.maps.Circle && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.Circle, options);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
            this._initialize(map, lib.Circle, options);
          });
        });
      }
    });
  }
  _initialize(map, circleConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.circle = new circleConstructor(options);
      this._assertInitialized();
      this.circle.setMap(map);
      this._eventManager.setTarget(this.circle);
      this.circleInitialized.emit(this.circle);
      this._watchForOptionsChanges();
      this._watchForCenterChanges();
      this._watchForRadiusChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.circle?.setMap(null);
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.circle.getBounds();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
   */
  getCenter() {
    this._assertInitialized();
    return this.circle.getCenter();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.circle.getDraggable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.circle.getEditable();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
   */
  getRadius() {
    this._assertInitialized();
    return this.circle.getRadius();
  }
  /**
   * @see
   * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.circle.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, center, radius]) => {
      const combinedOptions = {
        ...options,
        center: center || options.center,
        radius: radius !== undefined ? radius : options.radius
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.circle.setOptions(options);
    });
  }
  _watchForCenterChanges() {
    this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(center => {
      if (center) {
        this._assertInitialized();
        this.circle.setCenter(center);
      }
    });
  }
  _watchForRadiusChanges() {
    this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(radius => {
      if (radius !== undefined) {
        this._assertInitialized();
        this.circle.setRadius(radius);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.circle) {
        throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapCircle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapCircle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapCircle,
    selectors: [["map-circle"]],
    inputs: {
      options: "options",
      center: "center",
      radius: "radius"
    },
    outputs: {
      centerChanged: "centerChanged",
      circleClick: "circleClick",
      circleDblclick: "circleDblclick",
      circleDrag: "circleDrag",
      circleDragend: "circleDragend",
      circleDragstart: "circleDragstart",
      circleMousedown: "circleMousedown",
      circleMousemove: "circleMousemove",
      circleMouseout: "circleMouseout",
      circleMouseover: "circleMouseover",
      circleMouseup: "circleMouseup",
      radiusChanged: "radiusChanged",
      circleRightclick: "circleRightclick",
      circleInitialized: "circleInitialized"
    },
    exportAs: ["mapCircle"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    circleInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */
class MapDirectionsRenderer {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */
  set directions(directions) {
    this._directions = directions;
  }
  _directions;
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions
   */
  set options(options) {
    this._options = options;
  }
  _options;
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.directions_changed
   */
  directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  /** Event emitted when the directions renderer is initialized. */
  directionsRendererInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /** The underlying google.maps.DirectionsRenderer object. */
  directionsRenderer;
  constructor() {}
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (google.maps.DirectionsRenderer && this._googleMap.googleMap) {
        this._initialize(this._googleMap.googleMap, google.maps.DirectionsRenderer);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary('routes')]).then(([map, lib]) => {
            this._initialize(map, lib.DirectionsRenderer);
          });
        });
      }
    }
  }
  _initialize(map, rendererConstructor) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.directionsRenderer = new rendererConstructor(this._combineOptions());
      this._assertInitialized();
      this.directionsRenderer.setMap(map);
      this._eventManager.setTarget(this.directionsRenderer);
      this.directionsRendererInitialized.emit(this.directionsRenderer);
    });
  }
  ngOnChanges(changes) {
    if (this.directionsRenderer) {
      if (changes['options']) {
        this.directionsRenderer.setOptions(this._combineOptions());
      }
      if (changes['directions'] && this._directions !== undefined) {
        this.directionsRenderer.setDirections(this._directions);
      }
    }
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this.directionsRenderer?.setMap(null);
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getDirections
   */
  getDirections() {
    this._assertInitialized();
    return this.directionsRenderer.getDirections();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getPanel
   */
  getPanel() {
    this._assertInitialized();
    return this.directionsRenderer.getPanel();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRenderer.getRouteIndex
   */
  getRouteIndex() {
    this._assertInitialized();
    return this.directionsRenderer.getRouteIndex();
  }
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      directions: this._directions || options.directions,
      map: this._googleMap.googleMap
    };
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.directionsRenderer) {
        throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
      }
    }
  }
  static ɵfac = function MapDirectionsRenderer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapDirectionsRenderer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapDirectionsRenderer,
    selectors: [["map-directions-renderer"]],
    inputs: {
      directions: "directions",
      options: "options"
    },
    outputs: {
      directionsChanged: "directionsChanged",
      directionsRendererInitialized: "directionsRendererInitialized"
    },
    exportAs: ["mapDirectionsRenderer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], () => [], {
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    directionsRendererInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */
class MapGroundOverlay {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _opacity = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(1);
  _url = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  _bounds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  _hasWatchers;
  /**
   * The underlying google.maps.GroundOverlay object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
   */
  groundOverlay;
  /** URL of the image that will be shown in the overlay. */
  set url(url) {
    this._url.next(url);
  }
  /** Bounds for the overlay. */
  get bounds() {
    return this._bounds.value;
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /** Whether the overlay is clickable */
  clickable = false;
  /** Opacity of the overlay. */
  set opacity(opacity) {
    this._opacity.next(opacity);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
   */
  mapClick = this._eventManager.getLazyEmitter('click');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.dblclick
   */
  mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  /** Event emitted when the ground overlay is initialized. */
  groundOverlayInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      // The ground overlay setup is slightly different from the other Google Maps objects in that
      // we have to recreate the `GroundOverlay` object whenever the bounds change, because
      // Google Maps doesn't provide an API to update the bounds of an existing overlay.
      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(bounds => {
        if (this.groundOverlay) {
          this.groundOverlay.setMap(null);
          this.groundOverlay = undefined;
        }
        if (!bounds) {
          return;
        }
        if (google.maps.GroundOverlay && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.GroundOverlay, bounds);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.GroundOverlay, bounds);
            });
          });
        }
      });
    }
  }
  _initialize(map, overlayConstructor, bounds) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.groundOverlay = new overlayConstructor(this._url.getValue(), bounds, {
        clickable: this.clickable,
        opacity: this._opacity.value
      });
      this._assertInitialized();
      this.groundOverlay.setMap(map);
      this._eventManager.setTarget(this.groundOverlay);
      this.groundOverlayInitialized.emit(this.groundOverlay);
      // We only need to set up the watchers once.
      if (!this._hasWatchers) {
        this._hasWatchers = true;
        this._watchForOpacityChanges();
        this._watchForUrlChanges();
      }
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.groundOverlay?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.groundOverlay.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.groundOverlay.getOpacity();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/image-overlay
   * #GroundOverlay.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.groundOverlay.getUrl();
  }
  _watchForOpacityChanges() {
    this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(opacity => {
      if (opacity != null) {
        this.groundOverlay?.setOpacity(opacity);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(url => {
      const overlay = this.groundOverlay;
      if (overlay) {
        overlay.set('url', url);
        // Google Maps only redraws the overlay if we re-set the map.
        overlay.setMap(null);
        overlay.setMap(this._map.googleMap);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.groundOverlay) {
        throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapGroundOverlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapGroundOverlay)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapGroundOverlay,
    selectors: [["map-ground-overlay"]],
    inputs: {
      url: "url",
      bounds: "bounds",
      clickable: "clickable",
      opacity: "opacity"
    },
    outputs: {
      mapClick: "mapClick",
      mapDblclick: "mapDblclick",
      groundOverlayInitialized: "groundOverlayInitialized"
    },
    exportAs: ["mapGroundOverlay"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], () => [], {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    groundOverlayInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */
class MapInfoWindow {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _position = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * Underlying google.maps.InfoWindow
   *
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow
   */
  infoWindow;
  set options(options) {
    this._options.next(options || {});
  }
  set position(position) {
    this._position.next(position);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
   */
  closeclick = this._eventManager.getLazyEmitter('closeclick');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.content_changed
   */
  contentChanged = this._eventManager.getLazyEmitter('content_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
   */
  domready = this._eventManager.getLazyEmitter('domready');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.position_changed
   */
  positionChanged = this._eventManager.getLazyEmitter('position_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.zindex_changed
   */
  zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  /** Event emitted when the info window is initialized. */
  infoWindowInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.InfoWindow) {
          this._initialize(google.maps.InfoWindow, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            google.maps.importLibrary('maps').then(lib => {
              this._initialize(lib.InfoWindow, options);
            });
          });
        }
      });
    }
  }
  _initialize(infoWindowConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.infoWindow = new infoWindowConstructor(options);
      this._eventManager.setTarget(this.infoWindow);
      this.infoWindowInitialized.emit(this.infoWindow);
      this._watchForOptionsChanges();
      this._watchForPositionChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroy.next();
    this._destroy.complete();
    // If no info window has been created on the server, we do not try closing it.
    // On the server, an info window cannot be created and this would cause errors.
    if (this.infoWindow) {
      this.close();
    }
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
   */
  close() {
    this._assertInitialized();
    this.infoWindow.close();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
   */
  getContent() {
    this._assertInitialized();
    return this.infoWindow.getContent() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window
   * #InfoWindow.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.infoWindow.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.infoWindow.getZIndex();
  }
  /**
   * Opens the MapInfoWindow using the provided AdvancedMarkerElement.
   * @deprecated Use the `open` method instead.
   * @breaking-change 20.0.0
   */
  openAdvancedMarkerElement(advancedMarkerElement, content) {
    this.open({
      getAnchor: () => advancedMarkerElement
    }, undefined, content);
  }
  /**
   * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
   * then the position property of the options input is used instead.
   */
  open(anchor, shouldFocus, content) {
    this._assertInitialized();
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && anchor && !anchor.getAnchor) {
      throw new Error('Specified anchor does not implement the `getAnchor` method. ' + 'It cannot be used to open an info window.');
    }
    const anchorObject = anchor ? anchor.getAnchor() : undefined;
    // Prevent the info window from initializing when trying to reopen on the same anchor.
    // Note that when the window is opened for the first time, the anchor will always be
    // undefined. If that's the case, we have to allow it to open in order to handle the
    // case where the window doesn't have an anchor, but is placed at a particular position.
    if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
      // If no explicit content is provided, it is taken from the DOM node.
      // If it is, we need to hide it so it doesn't take up space on the page.
      this._elementRef.nativeElement.style.display = content ? 'none' : '';
      if (content) {
        this.infoWindow.setContent(content);
      }
      this.infoWindow.open({
        map: this._googleMap.googleMap,
        anchor: anchorObject,
        shouldFocus
      });
    }
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, position]) => {
      const combinedOptions = {
        ...options,
        position: position || options.position,
        content: this._elementRef.nativeElement
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroy)).subscribe(options => {
      this._assertInitialized();
      this.infoWindow.setOptions(options);
    });
  }
  _watchForPositionChanges() {
    this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroy)).subscribe(position => {
      if (position) {
        this._assertInitialized();
        this.infoWindow.setPosition(position);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.infoWindow) {
        throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
      }
    }
  }
  static ɵfac = function MapInfoWindow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapInfoWindow)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapInfoWindow,
    selectors: [["map-info-window"]],
    hostAttrs: [2, "display", "none"],
    inputs: {
      options: "options",
      position: "position"
    },
    outputs: {
      closeclick: "closeclick",
      contentChanged: "contentChanged",
      domready: "domready",
      positionChanged: "positionChanged",
      zindexChanged: "zindexChanged",
      infoWindowInitialized: "infoWindowInitialized"
    },
    exportAs: ["mapInfoWindow"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    infoWindowInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */
class MapKmlLayer {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _url = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * The underlying google.maps.KmlLayer object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
   */
  kmlLayer;
  set options(options) {
    this._options.next(options || {});
  }
  set url(url) {
    this._url.next(url);
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
   */
  kmlClick = this._eventManager.getLazyEmitter('click');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml
   * #KmlLayer.defaultviewport_changed
   */
  defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
   */
  statusChanged = this._eventManager.getLazyEmitter('status_changed');
  /** Event emitted when the KML layer is initialized. */
  kmlLayerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.KmlLayer && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.KmlLayer, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.KmlLayer, options);
            });
          });
        }
      });
    }
  }
  _initialize(map, layerConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.kmlLayer = new layerConstructor(options);
      this._assertInitialized();
      this.kmlLayer.setMap(map);
      this._eventManager.setTarget(this.kmlLayer);
      this.kmlLayerInitialized.emit(this.kmlLayer);
      this._watchForOptionsChanges();
      this._watchForUrlChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.kmlLayer?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
   */
  getDefaultViewport() {
    this._assertInitialized();
    return this.kmlLayer.getDefaultViewport();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
   */
  getMetadata() {
    this._assertInitialized();
    return this.kmlLayer.getMetadata();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
   */
  getStatus() {
    this._assertInitialized();
    return this.kmlLayer.getStatus();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
   */
  getUrl() {
    this._assertInitialized();
    return this.kmlLayer.getUrl();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.kmlLayer.getZIndex();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, url]) => {
      const combinedOptions = {
        ...options,
        url: url || options.url
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      if (this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setOptions(options);
      }
    });
  }
  _watchForUrlChanges() {
    this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(url => {
      if (url && this.kmlLayer) {
        this._assertInitialized();
        this.kmlLayer.setUrl(url);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.kmlLayer) {
        throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapKmlLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapKmlLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapKmlLayer,
    selectors: [["map-kml-layer"]],
    inputs: {
      options: "options",
      url: "url"
    },
    outputs: {
      kmlClick: "kmlClick",
      defaultviewportChanged: "defaultviewportChanged",
      statusChanged: "statusChanged",
      kmlLayerInitialized: "kmlLayerInitialized"
    },
    exportAs: ["mapKmlLayer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    kmlLayerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/** Token that marker directives can use to expose themselves to the clusterer. */
const MAP_MARKER = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('MAP_MARKER');

/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
const DEFAULT_MARKER_OPTIONS$1 = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
class MapMarker {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */
  set title(title) {
    this._title = title;
  }
  _title;
  /**
   * Position of the marker. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
   */
  set position(position) {
    this._position = position;
  }
  _position;
  /**
   * Label for the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
   */
  set label(label) {
    this._label = label;
  }
  _label;
  /**
   * Whether the marker is clickable. See:
   * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
   */
  set clickable(clickable) {
    this._clickable = clickable;
  }
  _clickable;
  /**
   * Options used to configure the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
   */
  set options(options) {
    this._options = options;
  }
  _options;
  /**
   * Icon to be used for the marker.
   * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
   */
  set icon(icon) {
    this._icon = icon;
  }
  _icon;
  /**
   * Whether the marker is visible.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
   */
  set visible(value) {
    this._visible = value;
  }
  _visible;
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
   */
  animationChanged = this._eventManager.getLazyEmitter('animation_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
   */
  mapClick = this._eventManager.getLazyEmitter('click');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
   */
  clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
   */
  cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
   */
  mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
   */
  mapDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
   */
  mapDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
   */
  draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
   */
  mapDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
   */
  flatChanged = this._eventManager.getLazyEmitter('flat_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
   */
  iconChanged = this._eventManager.getLazyEmitter('icon_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
   */
  mapMousedown = this._eventManager.getLazyEmitter('mousedown');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
   */
  mapMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
   */
  mapMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
   */
  mapMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
   */
  positionChanged = this._eventManager.getLazyEmitter('position_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
   */
  mapRightclick = this._eventManager.getLazyEmitter('rightclick');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
   */
  shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
   */
  titleChanged = this._eventManager.getLazyEmitter('title_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
   */
  visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
   */
  zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  /** Event emitted when the marker is initialized. */
  markerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /**
   * The underlying google.maps.Marker object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/marker#Marker
   */
  marker;
  constructor() {}
  ngOnInit() {
    if (!this._googleMap._isBrowser) {
      return;
    }
    if (google.maps.Marker && this._googleMap.googleMap) {
      this._initialize(this._googleMap.googleMap, google.maps.Marker);
    } else {
      this._ngZone.runOutsideAngular(() => {
        Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary('marker')]).then(([map, lib]) => {
          this._initialize(map, lib.Marker);
        });
      });
    }
  }
  _initialize(map, markerConstructor) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.marker = new markerConstructor(this._combineOptions());
      this._assertInitialized();
      this.marker.setMap(map);
      this._eventManager.setTarget(this.marker);
      this.markerInitialized.next(this.marker);
    });
  }
  ngOnChanges(changes) {
    const {
      marker,
      _title,
      _position,
      _label,
      _clickable,
      _icon,
      _visible
    } = this;
    if (marker) {
      if (changes['options']) {
        marker.setOptions(this._combineOptions());
      }
      if (changes['title'] && _title !== undefined) {
        marker.setTitle(_title);
      }
      if (changes['position'] && _position) {
        marker.setPosition(_position);
      }
      if (changes['label'] && _label !== undefined) {
        marker.setLabel(_label);
      }
      if (changes['clickable'] && _clickable !== undefined) {
        marker.setClickable(_clickable);
      }
      if (changes['icon'] && _icon) {
        marker.setIcon(_icon);
      }
      if (changes['visible'] && _visible !== undefined) {
        marker.setVisible(_visible);
      }
    }
  }
  ngOnDestroy() {
    this.markerInitialized.complete();
    this._eventManager.destroy();
    this.marker?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
   */
  getAnimation() {
    this._assertInitialized();
    return this.marker.getAnimation() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
   */
  getClickable() {
    this._assertInitialized();
    return this.marker.getClickable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
   */
  getCursor() {
    this._assertInitialized();
    return this.marker.getCursor() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return !!this.marker.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
   */
  getIcon() {
    this._assertInitialized();
    return this.marker.getIcon() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
   */
  getLabel() {
    this._assertInitialized();
    return this.marker.getLabel() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
   */
  getOpacity() {
    this._assertInitialized();
    return this.marker.getOpacity() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
   */
  getPosition() {
    this._assertInitialized();
    return this.marker.getPosition() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
   */
  getShape() {
    this._assertInitialized();
    return this.marker.getShape() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
   */
  getTitle() {
    this._assertInitialized();
    return this.marker.getTitle() || null;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.marker.getVisible();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
   */
  getZIndex() {
    this._assertInitialized();
    return this.marker.getZIndex() || null;
  }
  /** Gets the anchor point that can be used to attach other Google Maps objects. */
  getAnchor() {
    this._assertInitialized();
    return this.marker;
  }
  /** Returns a promise that resolves when the marker has been initialized. */
  _resolveMarker() {
    return this.marker ? Promise.resolve(this.marker) : this.markerInitialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS$1;
    return {
      ...options,
      title: this._title || options.title,
      position: this._position || options.position,
      label: this._label || options.label,
      clickable: this._clickable ?? options.clickable,
      map: this._googleMap.googleMap,
      icon: this._icon || options.icon,
      visible: this._visible ?? options.visible
    };
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.marker) {
        throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapMarker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapMarker)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapMarker,
    selectors: [["map-marker"]],
    inputs: {
      title: "title",
      position: "position",
      label: "label",
      clickable: "clickable",
      options: "options",
      icon: "icon",
      visible: "visible"
    },
    outputs: {
      animationChanged: "animationChanged",
      mapClick: "mapClick",
      clickableChanged: "clickableChanged",
      cursorChanged: "cursorChanged",
      mapDblclick: "mapDblclick",
      mapDrag: "mapDrag",
      mapDragend: "mapDragend",
      draggableChanged: "draggableChanged",
      mapDragstart: "mapDragstart",
      flatChanged: "flatChanged",
      iconChanged: "iconChanged",
      mapMousedown: "mapMousedown",
      mapMouseout: "mapMouseout",
      mapMouseover: "mapMouseover",
      mapMouseup: "mapMouseup",
      positionChanged: "positionChanged",
      mapRightclick: "mapRightclick",
      shapeChanged: "shapeChanged",
      titleChanged: "titleChanged",
      visibleChanged: "visibleChanged",
      zindexChanged: "zindexChanged",
      markerInitialized: "markerInitialized"
    },
    exportAs: ["mapMarker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: MAP_MARKER,
      useExisting: MapMarker
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker',
      providers: [{
        provide: MAP_MARKER,
        useExisting: MapMarker
      }]
    }]
  }], () => [], {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    markerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/** Default options for a clusterer. */
const DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 *
 * @deprecated This component is using a deprecated clustering implementation. Use the
 *   `map-marker-clusterer` component instead.
 * @breaking-change 21.0.0
 *
 */
class DeprecatedMapMarkerClusterer {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _currentMarkers = new Set();
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _destroy = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /** Whether the clusterer is allowed to be initialized. */
  _canInitialize = this._googleMap._isBrowser;
  ariaLabelFn = () => '';
  set averageCenter(averageCenter) {
    this._averageCenter = averageCenter;
  }
  _averageCenter;
  batchSize;
  set batchSizeIE(batchSizeIE) {
    this._batchSizeIE = batchSizeIE;
  }
  _batchSizeIE;
  set calculator(calculator) {
    this._calculator = calculator;
  }
  _calculator;
  set clusterClass(clusterClass) {
    this._clusterClass = clusterClass;
  }
  _clusterClass;
  set enableRetinaIcons(enableRetinaIcons) {
    this._enableRetinaIcons = enableRetinaIcons;
  }
  _enableRetinaIcons;
  set gridSize(gridSize) {
    this._gridSize = gridSize;
  }
  _gridSize;
  set ignoreHidden(ignoreHidden) {
    this._ignoreHidden = ignoreHidden;
  }
  _ignoreHidden;
  set imageExtension(imageExtension) {
    this._imageExtension = imageExtension;
  }
  _imageExtension;
  set imagePath(imagePath) {
    this._imagePath = imagePath;
  }
  _imagePath;
  set imageSizes(imageSizes) {
    this._imageSizes = imageSizes;
  }
  _imageSizes;
  set maxZoom(maxZoom) {
    this._maxZoom = maxZoom;
  }
  _maxZoom;
  set minimumClusterSize(minimumClusterSize) {
    this._minimumClusterSize = minimumClusterSize;
  }
  _minimumClusterSize;
  set styles(styles) {
    this._styles = styles;
  }
  _styles;
  set title(title) {
    this._title = title;
  }
  _title;
  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
  _zIndex;
  set zoomOnClick(zoomOnClick) {
    this._zoomOnClick = zoomOnClick;
  }
  _zoomOnClick;
  set options(options) {
    this._options = options;
  }
  _options;
  /**
   * See
   * googlemaps.github.io/v3-utility-library/modules/
   * _google_markerclustererplus.html#clusteringbegin
   */
  clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
  /**
   * See
   * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
   */
  clusteringend = this._eventManager.getLazyEmitter('clusteringend');
  /** Emits when a cluster has been clicked. */
  clusterClick = this._eventManager.getLazyEmitter('click');
  _markers;
  /**
   * The underlying MarkerClusterer object.
   *
   * See
   * googlemaps.github.io/v3-utility-library/classes/
   * _google_markerclustererplus.markerclusterer.html
   */
  markerClusterer;
  /** Event emitted when the clusterer is initialized. */
  markerClustererInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._canInitialize) {
      this._ngZone.runOutsideAngular(() => {
        this._googleMap._resolveMap().then(map => {
          if (typeof MarkerClusterer !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
          }
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          this.markerClusterer = this._ngZone.runOutsideAngular(() => {
            return new MarkerClusterer(map, [], this._combineOptions());
          });
          this._assertInitialized();
          this._eventManager.setTarget(this.markerClusterer);
          this.markerClustererInitialized.emit(this.markerClusterer);
        });
      });
    }
  }
  ngAfterContentInit() {
    if (this._canInitialize) {
      if (this.markerClusterer) {
        this._watchForMarkerChanges();
      } else {
        this.markerClustererInitialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroy)).subscribe(() => this._watchForMarkerChanges());
      }
    }
  }
  ngOnChanges(changes) {
    const {
      markerClusterer: clusterer,
      ariaLabelFn,
      _averageCenter,
      _batchSizeIE,
      _calculator,
      _styles,
      _clusterClass,
      _enableRetinaIcons,
      _gridSize,
      _ignoreHidden,
      _imageExtension,
      _imagePath,
      _imageSizes,
      _maxZoom,
      _minimumClusterSize,
      _title,
      _zIndex,
      _zoomOnClick
    } = this;
    if (clusterer) {
      if (changes['options']) {
        clusterer.setOptions(this._combineOptions());
      }
      if (changes['ariaLabelFn']) {
        clusterer.ariaLabelFn = ariaLabelFn;
      }
      if (changes['averageCenter'] && _averageCenter !== undefined) {
        clusterer.setAverageCenter(_averageCenter);
      }
      if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
        clusterer.setBatchSizeIE(_batchSizeIE);
      }
      if (changes['calculator'] && !!_calculator) {
        clusterer.setCalculator(_calculator);
      }
      if (changes['clusterClass'] && _clusterClass !== undefined) {
        clusterer.setClusterClass(_clusterClass);
      }
      if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
        clusterer.setEnableRetinaIcons(_enableRetinaIcons);
      }
      if (changes['gridSize'] && _gridSize !== undefined) {
        clusterer.setGridSize(_gridSize);
      }
      if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
        clusterer.setIgnoreHidden(_ignoreHidden);
      }
      if (changes['imageExtension'] && _imageExtension !== undefined) {
        clusterer.setImageExtension(_imageExtension);
      }
      if (changes['imagePath'] && _imagePath !== undefined) {
        clusterer.setImagePath(_imagePath);
      }
      if (changes['imageSizes'] && _imageSizes) {
        clusterer.setImageSizes(_imageSizes);
      }
      if (changes['maxZoom'] && _maxZoom !== undefined) {
        clusterer.setMaxZoom(_maxZoom);
      }
      if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
        clusterer.setMinimumClusterSize(_minimumClusterSize);
      }
      if (changes['styles'] && _styles) {
        clusterer.setStyles(_styles);
      }
      if (changes['title'] && _title !== undefined) {
        clusterer.setTitle(_title);
      }
      if (changes['zIndex'] && _zIndex !== undefined) {
        clusterer.setZIndex(_zIndex);
      }
      if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
        clusterer.setZoomOnClick(_zoomOnClick);
      }
    }
  }
  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
    this._eventManager.destroy();
    this.markerClusterer?.setMap(null);
  }
  fitMapToMarkers(padding) {
    this._assertInitialized();
    this.markerClusterer.fitMapToMarkers(padding);
  }
  getAverageCenter() {
    this._assertInitialized();
    return this.markerClusterer.getAverageCenter();
  }
  getBatchSizeIE() {
    this._assertInitialized();
    return this.markerClusterer.getBatchSizeIE();
  }
  getCalculator() {
    this._assertInitialized();
    return this.markerClusterer.getCalculator();
  }
  getClusterClass() {
    this._assertInitialized();
    return this.markerClusterer.getClusterClass();
  }
  getClusters() {
    this._assertInitialized();
    return this.markerClusterer.getClusters();
  }
  getEnableRetinaIcons() {
    this._assertInitialized();
    return this.markerClusterer.getEnableRetinaIcons();
  }
  getGridSize() {
    this._assertInitialized();
    return this.markerClusterer.getGridSize();
  }
  getIgnoreHidden() {
    this._assertInitialized();
    return this.markerClusterer.getIgnoreHidden();
  }
  getImageExtension() {
    this._assertInitialized();
    return this.markerClusterer.getImageExtension();
  }
  getImagePath() {
    this._assertInitialized();
    return this.markerClusterer.getImagePath();
  }
  getImageSizes() {
    this._assertInitialized();
    return this.markerClusterer.getImageSizes();
  }
  getMaxZoom() {
    this._assertInitialized();
    return this.markerClusterer.getMaxZoom();
  }
  getMinimumClusterSize() {
    this._assertInitialized();
    return this.markerClusterer.getMinimumClusterSize();
  }
  getStyles() {
    this._assertInitialized();
    return this.markerClusterer.getStyles();
  }
  getTitle() {
    this._assertInitialized();
    return this.markerClusterer.getTitle();
  }
  getTotalClusters() {
    this._assertInitialized();
    return this.markerClusterer.getTotalClusters();
  }
  getTotalMarkers() {
    this._assertInitialized();
    return this.markerClusterer.getTotalMarkers();
  }
  getZIndex() {
    this._assertInitialized();
    return this.markerClusterer.getZIndex();
  }
  getZoomOnClick() {
    this._assertInitialized();
    return this.markerClusterer.getZoomOnClick();
  }
  _combineOptions() {
    const options = this._options || DEFAULT_CLUSTERER_OPTIONS;
    return {
      ...options,
      ariaLabelFn: this.ariaLabelFn ?? options.ariaLabelFn,
      averageCenter: this._averageCenter ?? options.averageCenter,
      batchSize: this.batchSize ?? options.batchSize,
      batchSizeIE: this._batchSizeIE ?? options.batchSizeIE,
      calculator: this._calculator ?? options.calculator,
      clusterClass: this._clusterClass ?? options.clusterClass,
      enableRetinaIcons: this._enableRetinaIcons ?? options.enableRetinaIcons,
      gridSize: this._gridSize ?? options.gridSize,
      ignoreHidden: this._ignoreHidden ?? options.ignoreHidden,
      imageExtension: this._imageExtension ?? options.imageExtension,
      imagePath: this._imagePath ?? options.imagePath,
      imageSizes: this._imageSizes ?? options.imageSizes,
      maxZoom: this._maxZoom ?? options.maxZoom,
      minimumClusterSize: this._minimumClusterSize ?? options.minimumClusterSize,
      styles: this._styles ?? options.styles,
      title: this._title ?? options.title,
      zIndex: this._zIndex ?? options.zIndex,
      zoomOnClick: this._zoomOnClick ?? options.zoomOnClick
    };
  }
  _watchForMarkerChanges() {
    this._assertInitialized();
    this._ngZone.runOutsideAngular(() => {
      this._getInternalMarkers(this._markers).then(markers => {
        const initialMarkers = [];
        for (const marker of markers) {
          this._currentMarkers.add(marker);
          initialMarkers.push(marker);
        }
        this.markerClusterer.addMarkers(initialMarkers);
      });
    });
    this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroy)).subscribe(markerComponents => {
      this._assertInitialized();
      this._ngZone.runOutsideAngular(() => {
        this._getInternalMarkers(markerComponents).then(markers => {
          const newMarkers = new Set(markers);
          const markersToAdd = [];
          const markersToRemove = [];
          for (const marker of Array.from(newMarkers)) {
            if (!this._currentMarkers.has(marker)) {
              this._currentMarkers.add(marker);
              markersToAdd.push(marker);
            }
          }
          for (const marker of Array.from(this._currentMarkers)) {
            if (!newMarkers.has(marker)) {
              markersToRemove.push(marker);
            }
          }
          this.markerClusterer.addMarkers(markersToAdd, true);
          this.markerClusterer.removeMarkers(markersToRemove, true);
          this.markerClusterer.repaint();
          for (const marker of markersToRemove) {
            this._currentMarkers.delete(marker);
          }
        });
      });
    });
  }
  _getInternalMarkers(markers) {
    return Promise.all(markers.map(markerComponent => markerComponent._resolveMarker()));
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.markerClusterer) {
        throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function DeprecatedMapMarkerClusterer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeprecatedMapMarkerClusterer)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DeprecatedMapMarkerClusterer,
    selectors: [["deprecated-map-marker-clusterer"]],
    contentQueries: function DeprecatedMapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._markers = _t);
      }
    },
    inputs: {
      ariaLabelFn: "ariaLabelFn",
      averageCenter: "averageCenter",
      batchSize: "batchSize",
      batchSizeIE: "batchSizeIE",
      calculator: "calculator",
      clusterClass: "clusterClass",
      enableRetinaIcons: "enableRetinaIcons",
      gridSize: "gridSize",
      ignoreHidden: "ignoreHidden",
      imageExtension: "imageExtension",
      imagePath: "imagePath",
      imageSizes: "imageSizes",
      maxZoom: "maxZoom",
      minimumClusterSize: "minimumClusterSize",
      styles: "styles",
      title: "title",
      zIndex: "zIndex",
      zoomOnClick: "zoomOnClick",
      options: "options"
    },
    outputs: {
      clusteringbegin: "clusteringbegin",
      clusteringend: "clusteringend",
      clusterClick: "clusterClick",
      markerClustererInitialized: "markerClustererInitialized"
    },
    exportAs: ["mapMarkerClusterer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function DeprecatedMapMarkerClusterer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DeprecatedMapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'deprecated-map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content/>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None
    }]
  }], () => [], {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }],
    markerClustererInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */
class MapPolygon {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _paths = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * The underlying google.maps.Polygon object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
   */
  polygon;
  set options(options) {
    this._options.next(options || {});
  }
  set paths(paths) {
    this._paths.next(paths);
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
   */
  polygonClick = this._eventManager.getLazyEmitter('click');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
   */
  polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
   */
  polygonDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
   */
  polygonDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
   */
  polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
   */
  polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
   */
  polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
   */
  polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
   */
  polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
   */
  polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
   */
  polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  /** Event emitted when the polygon is initialized. */
  polygonInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.Polygon && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Polygon, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.Polygon, options);
            });
          });
        }
      });
    }
  }
  _initialize(map, polygonConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.polygon = new polygonConstructor(options);
      this._assertInitialized();
      this.polygon.setMap(map);
      this._eventManager.setTarget(this.polygon);
      this.polygonInitialized.emit(this.polygon);
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.polygon?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polygon.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polygon.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polygon.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
   */
  getPaths() {
    this._assertInitialized();
    return this.polygon.getPaths();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polygon.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, paths]) => {
      const combinedOptions = {
        ...options,
        paths: paths || options.paths
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.polygon.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(paths => {
      if (paths) {
        this._assertInitialized();
        this.polygon.setPaths(paths);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.polygon) {
        throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapPolygon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapPolygon)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapPolygon,
    selectors: [["map-polygon"]],
    inputs: {
      options: "options",
      paths: "paths"
    },
    outputs: {
      polygonClick: "polygonClick",
      polygonDblclick: "polygonDblclick",
      polygonDrag: "polygonDrag",
      polygonDragend: "polygonDragend",
      polygonDragstart: "polygonDragstart",
      polygonMousedown: "polygonMousedown",
      polygonMousemove: "polygonMousemove",
      polygonMouseout: "polygonMouseout",
      polygonMouseover: "polygonMouseover",
      polygonMouseup: "polygonMouseup",
      polygonRightclick: "polygonRightclick",
      polygonInitialized: "polygonInitialized"
    },
    exportAs: ["mapPolygon"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polygonInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */
class MapPolyline {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _path = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * The underlying google.maps.Polyline object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
   */
  polyline;
  set options(options) {
    this._options.next(options || {});
  }
  set path(path) {
    this._path.next(path);
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
   */
  polylineClick = this._eventManager.getLazyEmitter('click');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
   */
  polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
   */
  polylineDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
   */
  polylineDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
   */
  polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
   */
  polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
   */
  polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
   */
  polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
   */
  polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
   */
  polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
   */
  polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  /** Event emitted when the polyline is initialized. */
  polylineInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.Polyline && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Polyline, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.Polyline, options);
            });
          });
        }
      });
    }
  }
  _initialize(map, polylineConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.polyline = new polylineConstructor(options);
      this._assertInitialized();
      this.polyline.setMap(map);
      this._eventManager.setTarget(this.polyline);
      this.polylineInitialized.emit(this.polyline);
      this._watchForOptionsChanges();
      this._watchForPathChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.polyline?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.polyline.getDraggable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.polyline.getEditable();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
   */
  getPath() {
    this._assertInitialized();
    return this.polyline.getPath();
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.polyline.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, path]) => {
      const combinedOptions = {
        ...options,
        path: path || options.path
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.polyline.setOptions(options);
    });
  }
  _watchForPathChanges() {
    this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(path => {
      if (path) {
        this._assertInitialized();
        this.polyline.setPath(path);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.polyline) {
        throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapPolyline_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapPolyline)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapPolyline,
    selectors: [["map-polyline"]],
    inputs: {
      options: "options",
      path: "path"
    },
    outputs: {
      polylineClick: "polylineClick",
      polylineDblclick: "polylineDblclick",
      polylineDrag: "polylineDrag",
      polylineDragend: "polylineDragend",
      polylineDragstart: "polylineDragstart",
      polylineMousedown: "polylineMousedown",
      polylineMousemove: "polylineMousemove",
      polylineMouseout: "polylineMouseout",
      polylineMouseover: "polylineMouseover",
      polylineMouseup: "polylineMouseup",
      polylineRightclick: "polylineRightclick",
      polylineInitialized: "polylineInitialized"
    },
    exportAs: ["mapPolyline"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    polylineInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */
class MapRectangle {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  _options = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
  _bounds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * The underlying google.maps.Rectangle object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
   */
  rectangle;
  set options(options) {
    this._options.next(options || {});
  }
  set bounds(bounds) {
    this._bounds.next(bounds);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
   */
  boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
   */
  rectangleClick = this._eventManager.getLazyEmitter('click');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
   */
  rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
   */
  rectangleDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
   */
  rectangleDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
   */
  rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
   */
  rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
   */
  rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
   */
  rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
   */
  rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
   */
  rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
   */
  rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  /** Event emitted when the rectangle is initialized. */
  rectangleInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.Rectangle && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.Rectangle, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.Rectangle, options);
            });
          });
        }
      });
    }
  }
  _initialize(map, rectangleConstructor, options) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.rectangle = new rectangleConstructor(options);
      this._assertInitialized();
      this.rectangle.setMap(map);
      this._eventManager.setTarget(this.rectangle);
      this.rectangleInitialized.emit(this.rectangle);
      this._watchForOptionsChanges();
      this._watchForBoundsChanges();
    });
  }
  ngOnDestroy() {
    this._eventManager.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this.rectangle?.setMap(null);
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
   */
  getBounds() {
    this._assertInitialized();
    return this.rectangle.getBounds();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
   */
  getDraggable() {
    this._assertInitialized();
    return this.rectangle.getDraggable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
   */
  getEditable() {
    this._assertInitialized();
    return this.rectangle.getEditable();
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
   */
  getVisible() {
    this._assertInitialized();
    return this.rectangle.getVisible();
  }
  _combineOptions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(([options, bounds]) => {
      const combinedOptions = {
        ...options,
        bounds: bounds || options.bounds
      };
      return combinedOptions;
    }));
  }
  _watchForOptionsChanges() {
    this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.rectangle.setOptions(options);
    });
  }
  _watchForBoundsChanges() {
    this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(bounds => {
      if (bounds) {
        this._assertInitialized();
        this.rectangle.setBounds(bounds);
      }
    });
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.rectangle) {
        throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapRectangle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapRectangle)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapRectangle,
    selectors: [["map-rectangle"]],
    inputs: {
      options: "options",
      bounds: "bounds"
    },
    outputs: {
      boundsChanged: "boundsChanged",
      rectangleClick: "rectangleClick",
      rectangleDblclick: "rectangleDblclick",
      rectangleDrag: "rectangleDrag",
      rectangleDragend: "rectangleDragend",
      rectangleDragstart: "rectangleDragstart",
      rectangleMousedown: "rectangleMousedown",
      rectangleMousemove: "rectangleMousemove",
      rectangleMouseout: "rectangleMouseout",
      rectangleMouseover: "rectangleMouseover",
      rectangleMouseup: "rectangleMouseup",
      rectangleRightclick: "rectangleRightclick",
      rectangleInitialized: "rectangleInitialized"
    },
    exportAs: ["mapRectangle"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], () => [], {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    rectangleInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */
class MapTrafficLayer {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(true);
  _destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  /**
   * The underlying google.maps.TrafficLayer object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
   */
  trafficLayer;
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */
  set autoRefresh(autoRefresh) {
    this._autoRefresh.next(autoRefresh);
  }
  /** Event emitted when the traffic layer is initialized. */
  trafficLayerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._map._isBrowser) {
      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(options => {
        if (google.maps.TrafficLayer && this._map.googleMap) {
          this._initialize(this._map.googleMap, google.maps.TrafficLayer, options);
        } else {
          this._ngZone.runOutsideAngular(() => {
            Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
              this._initialize(map, lib.TrafficLayer, options);
            });
          });
        }
      });
    }
  }
  _initialize(map, layerConstructor, options) {
    this._ngZone.runOutsideAngular(() => {
      this.trafficLayer = new layerConstructor(options);
      this._assertInitialized();
      this.trafficLayer.setMap(map);
      this.trafficLayerInitialized.emit(this.trafficLayer);
      this._watchForAutoRefreshChanges();
    });
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this.trafficLayer?.setMap(null);
  }
  _combineOptions() {
    return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(autoRefresh => {
      const combinedOptions = {
        autoRefresh
      };
      return combinedOptions;
    }));
  }
  _watchForAutoRefreshChanges() {
    this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._destroyed)).subscribe(options => {
      this._assertInitialized();
      this.trafficLayer.setOptions(options);
    });
  }
  _assertInitialized() {
    if (!this.trafficLayer) {
      throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
    }
  }
  static ɵfac = function MapTrafficLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapTrafficLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapTrafficLayer,
    selectors: [["map-traffic-layer"]],
    inputs: {
      autoRefresh: "autoRefresh"
    },
    outputs: {
      trafficLayerInitialized: "trafficLayerInitialized"
    },
    exportAs: ["mapTrafficLayer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], () => [], {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    trafficLayerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */
class MapTransitLayer {
  _map = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _zone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  /**
   * The underlying google.maps.TransitLayer object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
   */
  transitLayer;
  /** Event emitted when the transit layer is initialized. */
  transitLayerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  ngOnInit() {
    if (this._map._isBrowser) {
      if (google.maps.TransitLayer && this._map.googleMap) {
        this._initialize(this._map.googleMap, google.maps.TransitLayer);
      } else {
        this._zone.runOutsideAngular(() => {
          Promise.all([this._map._resolveMap(), google.maps.importLibrary('maps')]).then(([map, lib]) => {
            this._initialize(map, lib.TransitLayer);
          });
        });
      }
    }
  }
  _initialize(map, layerConstructor) {
    this._zone.runOutsideAngular(() => {
      this.transitLayer = new layerConstructor();
      this.transitLayerInitialized.emit(this.transitLayer);
      this._assertLayerInitialized();
      this.transitLayer.setMap(map);
    });
  }
  ngOnDestroy() {
    this.transitLayer?.setMap(null);
  }
  _assertLayerInitialized() {
    if (!this.transitLayer) {
      throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
    }
  }
  static ɵfac = function MapTransitLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapTransitLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapTransitLayer,
    selectors: [["map-transit-layer"]],
    outputs: {
      transitLayerInitialized: "transitLayerInitialized"
    },
    exportAs: ["mapTransitLayer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, {
    transitLayerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */
class MapHeatmapLayer {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */
  set data(data) {
    this._data = data;
  }
  _data;
  /**
   * Options used to configure the heatmap. See:
   * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
   */
  set options(options) {
    this._options = options;
  }
  _options;
  /**
   * The underlying google.maps.visualization.HeatmapLayer object.
   *
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */
  heatmap;
  /** Event emitted when the heatmap is initialized. */
  heatmapInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  constructor() {}
  ngOnInit() {
    if (this._googleMap._isBrowser) {
      if (!window.google?.maps?.visualization && !window.google?.maps.importLibrary && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
      }
      if (google.maps.visualization?.HeatmapLayer && this._googleMap.googleMap) {
        this._initialize(this._googleMap.googleMap, google.maps.visualization.HeatmapLayer);
      } else {
        this._ngZone.runOutsideAngular(() => {
          Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary('visualization')]).then(([map, lib]) => {
            this._initialize(map, lib.HeatmapLayer);
          });
        });
      }
    }
  }
  _initialize(map, heatmapConstructor) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.heatmap = new heatmapConstructor(this._combineOptions());
      this._assertInitialized();
      this.heatmap.setMap(map);
      this.heatmapInitialized.emit(this.heatmap);
    });
  }
  ngOnChanges(changes) {
    const {
      _data,
      heatmap
    } = this;
    if (heatmap) {
      if (changes['options']) {
        heatmap.setOptions(this._combineOptions());
      }
      if (changes['data'] && _data !== undefined) {
        heatmap.setData(this._normalizeData(_data));
      }
    }
  }
  ngOnDestroy() {
    this.heatmap?.setMap(null);
  }
  /**
   * Gets the data that is currently shown on the heatmap.
   * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
   */
  getData() {
    this._assertInitialized();
    return this.heatmap.getData();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || {};
    return {
      ...options,
      data: this._normalizeData(this._data || options.data || []),
      map: this._googleMap.googleMap
    };
  }
  /**
   * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
   * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
   * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
   * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
   * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
   * convert it to a `LatLng` object before passing it off to Google Maps.
   */
  _normalizeData(data) {
    const result = [];
    data.forEach(item => {
      result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
    });
    return result;
  }
  /** Asserts that the heatmap object has been initialized. */
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.heatmap) {
        throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapHeatmapLayer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapHeatmapLayer)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapHeatmapLayer,
    selectors: [["map-heatmap-layer"]],
    inputs: {
      data: "data",
      options: "options"
    },
    outputs: {
      heatmapInitialized: "heatmapInitialized"
    },
    exportAs: ["mapHeatmapLayer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], () => [], {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    heatmapInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */
function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}

/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */
const DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.221995,
    lng: -122.184092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */
class MapAdvancedMarker {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _eventManager = new MapEventManager((0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  /**
   * Rollover text. If provided, an accessibility text (e.g. for use with screen readers) will be added to the AdvancedMarkerElement with the provided value.
   * See: https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.title
   */
  set title(title) {
    this._title = title;
  }
  _title;
  /**
   * Sets the AdvancedMarkerElement's position. An AdvancedMarkerElement may be constructed without a position, but will not be displayed until its position is provided - for example, by a user's actions or choices. An AdvancedMarkerElement's position can be provided by setting AdvancedMarkerElement.position if not provided at the construction.
   * Note: AdvancedMarkerElement with altitude is only supported on vector maps.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.position
   */
  set position(position) {
    this._position = position;
  }
  _position;
  /**
   * The DOM Element backing the visual of an AdvancedMarkerElement.
   * Note: AdvancedMarkerElement does not clone the passed-in DOM element. Once the DOM element is passed to an AdvancedMarkerElement, passing the same DOM element to another AdvancedMarkerElement will move the DOM element and cause the previous AdvancedMarkerElement to look empty.
   * See: https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.content
   */
  set content(content) {
    this._content = content;
  }
  _content;
  /**
   * If true, the AdvancedMarkerElement can be dragged.
   * Note: AdvancedMarkerElement with altitude is not draggable.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.gmpDraggable
   */
  set gmpDraggable(draggable) {
    this._draggable = draggable;
  }
  _draggable;
  /**
   * Options for constructing an AdvancedMarkerElement.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions
   */
  set options(options) {
    this._options = options;
  }
  _options;
  /**
   * AdvancedMarkerElements on the map are prioritized by zIndex, with higher values indicating higher display.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElementOptions.zIndex
   */
  set zIndex(zIndex) {
    this._zIndex = zIndex;
  }
  _zIndex;
  /**
   * This event is fired when the AdvancedMarkerElement element is clicked.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElement.click
   */
  mapClick = this._eventManager.getLazyEmitter('click');
  /**
   * This event is fired when the AdvancedMarkerElement is double-clicked.
   */
  mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  /**
   * This event is fired when the mouse moves out of the AdvancedMarkerElement.
   */
  mapMouseout = this._eventManager.getLazyEmitter('mouseout');
  /**
   * This event is fired when the mouse moves over the AdvancedMarkerElement.
   */
  mapMouseover = this._eventManager.getLazyEmitter('mouseover');
  /**
   * This event is fired when the mouse button is released over the AdvancedMarkerElement.
   */
  mapMouseup = this._eventManager.getLazyEmitter('mouseup');
  /**
   * This event is fired when the AdvancedMarkerElement is right-clicked.
   */
  mapRightclick = this._eventManager.getLazyEmitter('rightclick');
  /**
   * This event is repeatedly fired while the user drags the AdvancedMarkerElement.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElement.drag
   */
  mapDrag = this._eventManager.getLazyEmitter('drag');
  /**
   * This event is fired when the user stops dragging the AdvancedMarkerElement.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElement.dragend
   */
  mapDragend = this._eventManager.getLazyEmitter('dragend');
  /**
   * This event is fired when the user starts dragging the AdvancedMarkerElement.
   * https://developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElement.dragstart
   */
  mapDragstart = this._eventManager.getLazyEmitter('dragstart');
  /** Event emitted when the marker is initialized. */
  markerInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /**
   * The underlying google.maps.marker.AdvancedMarkerElement object.
   *
   * See developers.google.com/maps/documentation/javascript/reference/advanced-markers#AdvancedMarkerElement
   */
  advancedMarker;
  constructor() {}
  ngOnInit() {
    if (!this._googleMap._isBrowser) {
      return;
    }
    if (google.maps.marker?.AdvancedMarkerElement && this._googleMap.googleMap) {
      this._initialize(this._googleMap.googleMap, google.maps.marker.AdvancedMarkerElement);
    } else {
      this._ngZone.runOutsideAngular(() => {
        Promise.all([this._googleMap._resolveMap(), google.maps.importLibrary('marker')]).then(([map, lib]) => {
          this._initialize(map, lib.AdvancedMarkerElement);
        });
      });
    }
  }
  _initialize(map, advancedMarkerConstructor) {
    // Create the object outside the zone so its events don't trigger change detection.
    // We'll bring it back in inside the `MapEventManager` only for the events that the
    // user has subscribed to.
    this._ngZone.runOutsideAngular(() => {
      this.advancedMarker = new advancedMarkerConstructor(this._combineOptions());
      this._assertInitialized();
      this.advancedMarker.map = map;
      this._eventManager.setTarget(this.advancedMarker);
      this.markerInitialized.next(this.advancedMarker);
    });
  }
  ngOnChanges(changes) {
    const {
      advancedMarker,
      _content,
      _position,
      _title,
      _draggable,
      _zIndex
    } = this;
    if (advancedMarker) {
      if (changes['title']) {
        advancedMarker.title = _title;
      }
      if (changes['gmpDraggable']) {
        advancedMarker.gmpDraggable = _draggable;
      }
      if (changes['content']) {
        advancedMarker.content = _content;
      }
      if (changes['position']) {
        advancedMarker.position = _position;
      }
      if (changes['zIndex']) {
        advancedMarker.zIndex = _zIndex;
      }
    }
  }
  ngOnDestroy() {
    this.markerInitialized.complete();
    this._eventManager.destroy();
    if (this.advancedMarker) {
      this.advancedMarker.map = null;
    }
  }
  getAnchor() {
    this._assertInitialized();
    return this.advancedMarker;
  }
  /** Returns a promise that resolves when the marker has been initialized. */
  _resolveMarker() {
    return this.advancedMarker ? Promise.resolve(this.advancedMarker) : this.markerInitialized.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).toPromise();
  }
  /** Creates a combined options object using the passed-in options and the individual inputs. */
  _combineOptions() {
    const options = this._options || DEFAULT_MARKER_OPTIONS;
    return {
      ...options,
      title: this._title || options.title,
      position: this._position || options.position,
      content: this._content || options.content,
      zIndex: this._zIndex ?? options.zIndex,
      gmpDraggable: this._draggable ?? options.gmpDraggable,
      map: this._googleMap.googleMap
    };
  }
  /** Asserts that the map has been initialized. */
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this.advancedMarker) {
        throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapAdvancedMarker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapAdvancedMarker)();
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
    type: MapAdvancedMarker,
    selectors: [["map-advanced-marker"]],
    inputs: {
      title: "title",
      position: "position",
      content: "content",
      gmpDraggable: "gmpDraggable",
      options: "options",
      zIndex: "zIndex"
    },
    outputs: {
      mapClick: "mapClick",
      mapDblclick: "mapDblclick",
      mapMouseout: "mapMouseout",
      mapMouseover: "mapMouseover",
      mapMouseup: "mapMouseup",
      mapRightclick: "mapRightclick",
      mapDrag: "mapDrag",
      mapDragend: "mapDragend",
      mapDragstart: "mapDragstart",
      markerInitialized: "markerInitialized"
    },
    exportAs: ["mapAdvancedMarker"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: MAP_MARKER,
      useExisting: MapAdvancedMarker
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapAdvancedMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
    args: [{
      selector: 'map-advanced-marker',
      exportAs: 'mapAdvancedMarker',
      providers: [{
        provide: MAP_MARKER,
        useExisting: MapAdvancedMarker
      }]
    }]
  }], () => [], {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    gmpDraggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    markerInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();

/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */
class MapMarkerClusterer {
  _googleMap = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(GoogleMap);
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _currentMarkers = new Set();
  _closestMapEventManager = new MapEventManager(this._ngZone);
  _markersSubscription = rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription.EMPTY;
  /** Whether the clusterer is allowed to be initialized. */
  _canInitialize = this._googleMap._isBrowser;
  /**
   * Used to customize how the marker cluster is rendered.
   * See https://googlemaps.github.io/js-markerclusterer/interfaces/Renderer.html.
   */
  renderer;
  /**
   * Algorithm used to cluster the markers.
   * See https://googlemaps.github.io/js-markerclusterer/interfaces/Algorithm.html.
   */
  algorithm;
  /** Emits when clustering has started. */
  clusteringbegin = this._closestMapEventManager.getLazyEmitter('clusteringbegin');
  /** Emits when clustering is done. */
  clusteringend = this._closestMapEventManager.getLazyEmitter('clusteringend');
  /** Emits when a cluster has been clicked. */
  clusterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  /** Event emitted when the marker clusterer is initialized. */
  markerClustererInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  _markers;
  /** Underlying MarkerClusterer object used to interact with Google Maps. */
  markerClusterer;
  ngOnInit() {
    var _this = this;
    return (0,C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this._canInitialize) {
        yield _this._createCluster();
        // The `clusteringbegin` and `clusteringend` events are
        // emitted on the map so that's why set it as the target.
        _this._closestMapEventManager.setTarget(_this._googleMap.googleMap);
      }
    })();
  }
  ngOnChanges(changes) {
    var _this2 = this;
    return (0,C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const change = changes['renderer'] || changes['algorithm'];
      // Since the options are set in the constructor, we have to recreate the cluster if they change.
      if (_this2.markerClusterer && change && !change.isFirstChange()) {
        yield _this2._createCluster();
      }
    })();
  }
  ngOnDestroy() {
    this._markersSubscription.unsubscribe();
    this._closestMapEventManager.destroy();
    this._destroyCluster();
  }
  _createCluster() {
    var _this3 = this;
    return (0,C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!markerClusterer?.MarkerClusterer && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClusterer library: ' + 'https://github.com/googlemaps/js-markerclusterer');
      }
      const map = yield _this3._googleMap._resolveMap();
      _this3._destroyCluster();
      // Create the object outside the zone so its events don't trigger change detection.
      // We'll bring it back in inside the `MapEventManager` only for the events that the
      // user has subscribed to.
      _this3._ngZone.runOutsideAngular(() => {
        _this3.markerClusterer = new markerClusterer.MarkerClusterer({
          map,
          renderer: _this3.renderer,
          algorithm: _this3.algorithm,
          onClusterClick: (event, cluster, map) => {
            if (_this3.clusterClick.observers.length) {
              _this3._ngZone.run(() => _this3.clusterClick.emit(cluster));
            } else {
              markerClusterer.defaultOnClusterClickHandler(event, cluster, map);
            }
          }
        });
        _this3.markerClustererInitialized.emit(_this3.markerClusterer);
      });
      yield _this3._watchForMarkerChanges();
    })();
  }
  _watchForMarkerChanges() {
    var _this4 = this;
    return (0,C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4._assertInitialized();
      const initialMarkers = [];
      const markers = yield _this4._getInternalMarkers(_this4._markers.toArray());
      for (const marker of markers) {
        _this4._currentMarkers.add(marker);
        initialMarkers.push(marker);
      }
      _this4.markerClusterer.addMarkers(initialMarkers);
      _this4._markersSubscription.unsubscribe();
      _this4._markersSubscription = _this4._markers.changes.subscribe(/*#__PURE__*/function () {
        var _ref = (0,C_Users_lucam_source_repos_hotelaria_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (markerComponents) {
          _this4._assertInitialized();
          const newMarkers = new Set(yield _this4._getInternalMarkers(markerComponents));
          const markersToAdd = [];
          const markersToRemove = [];
          for (const marker of Array.from(newMarkers)) {
            if (!_this4._currentMarkers.has(marker)) {
              _this4._currentMarkers.add(marker);
              markersToAdd.push(marker);
            }
          }
          for (const marker of Array.from(_this4._currentMarkers)) {
            if (!newMarkers.has(marker)) {
              markersToRemove.push(marker);
            }
          }
          _this4.markerClusterer.addMarkers(markersToAdd, true);
          _this4.markerClusterer.removeMarkers(markersToRemove, true);
          _this4.markerClusterer.render();
          for (const marker of markersToRemove) {
            _this4._currentMarkers.delete(marker);
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _destroyCluster() {
    // TODO(crisbeto): the naming here seems odd, but the `MarkerCluster` method isn't
    // exposed. All this method seems to do at the time of writing is to call into `reset`.
    // See: https://github.com/googlemaps/js-markerclusterer/blob/main/src/markerclusterer.ts#L205
    this.markerClusterer?.onRemove();
    this.markerClusterer = undefined;
  }
  _getInternalMarkers(markers) {
    return Promise.all(markers.map(marker => marker._resolveMarker()));
  }
  _assertInitialized() {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!this._googleMap.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
      if (!this.markerClusterer) {
        throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
      }
    }
  }
  static ɵfac = function MapMarkerClusterer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapMarkerClusterer)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MapMarkerClusterer,
    selectors: [["map-marker-clusterer"]],
    contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MAP_MARKER, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._markers = _t);
      }
    },
    inputs: {
      renderer: "renderer",
      algorithm: "algorithm"
    },
    outputs: {
      clusteringbegin: "clusteringbegin",
      clusteringend: "clusteringend",
      clusterClick: "clusterClick",
      markerClustererInitialized: "markerClustererInitialized"
    },
    exportAs: ["mapMarkerClusterer"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MapMarkerClusterer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content/>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None
    }]
  }], null, {
    renderer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    algorithm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    markerClustererInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ContentChildren,
      args: [MAP_MARKER, {
        descendants: true
      }]
    }]
  });
})();
const COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapHeatmapLayer, MapInfoWindow, MapKmlLayer, MapMarker, MapAdvancedMarker, DeprecatedMapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapMarkerClusterer];
class GoogleMapsModule {
  static ɵfac = function GoogleMapsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GoogleMapsModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GoogleMapsModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();

/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */
class MapDirectionsService {
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _directionsService;
  constructor() {}
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */
  route(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      this._getService().then(service => {
        service.route(request, (result, status) => {
          this._ngZone.run(() => {
            observer.next({
              result: result || undefined,
              status
            });
            observer.complete();
          });
        });
      });
    });
  }
  _getService() {
    if (!this._directionsService) {
      if (google.maps.DirectionsService) {
        this._directionsService = new google.maps.DirectionsService();
      } else {
        return google.maps.importLibrary('routes').then(lib => {
          this._directionsService = new lib.DirectionsService();
          return this._directionsService;
        });
      }
    }
    return Promise.resolve(this._directionsService);
  }
  static ɵfac = function MapDirectionsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapDirectionsService)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MapDirectionsService,
    factory: MapDirectionsService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();

/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */
class MapGeocoder {
  _ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone);
  _geocoder;
  constructor() {}
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */
  geocode(request) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(observer => {
      this._getGeocoder().then(geocoder => {
        geocoder.geocode(request, (results, status) => {
          this._ngZone.run(() => {
            observer.next({
              results: results || [],
              status
            });
            observer.complete();
          });
        });
      });
    });
  }
  _getGeocoder() {
    if (!this._geocoder) {
      if (google.maps.Geocoder) {
        this._geocoder = new google.maps.Geocoder();
      } else {
        return google.maps.importLibrary('geocoding').then(lib => {
          this._geocoder = new lib.Geocoder();
          return this._geocoder;
        });
      }
    }
    return Promise.resolve(this._geocoder);
  }
  static ɵfac = function MapGeocoder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MapGeocoder)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MapGeocoder,
    factory: MapGeocoder.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [], null);
})();


/***/ }),

/***/ 3521:
/*!********************************************************!*\
  !*** ./src/app/shared/services/coordenadas.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoordenadasService: () => (/* binding */ CoordenadasService)
/* harmony export */ });
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CoordenadasService extends _generic_service__WEBPACK_IMPORTED_MODULE_0__.ServiceGeneric {
  constructor() {
    super(...arguments);
    this.urlServiceREST = '';
  }
  buscarCoordenadas(address) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA9Cr3hsX48VZFQAsmzHSlscuki9Cu_9Xg`;
    return this.http.get(url);
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵCoordenadasService_BaseFactory;
      return function CoordenadasService_Factory(__ngFactoryType__) {
        return (ɵCoordenadasService_BaseFactory || (ɵCoordenadasService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CoordenadasService)))(__ngFactoryType__ || CoordenadasService);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CoordenadasService,
      factory: CoordenadasService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6354:
/*!********************************************************!*\
  !*** ./src/app/shared/services/maps.loader.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapsLoaderService: () => (/* binding */ MapsLoaderService)
/* harmony export */ });
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
 // Adjust the path if needed

class MapsLoaderService extends _generic_service__WEBPACK_IMPORTED_MODULE_0__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    this.urlServiceREST = "";
    this.loaded = false;
  }
  load() {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA9Cr3hsX48VZFQAsmzHSlscuki9Cu_9Xg';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
  static {
    this.ɵfac = function MapsLoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MapsLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MapsLoaderService,
      factory: MapsLoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6605:
/*!************************************************!*\
  !*** ./src/app/features/hotel/hotel.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelModule: () => (/* binding */ HotelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _hotel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotel-routing.module */ 2620);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/google-maps */ 3428);
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hotel.component */ 1722);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);







class HotelModule {
  static {
    this.ɵfac = function HotelModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HotelModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: HotelModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _hotel_routing_module__WEBPACK_IMPORTED_MODULE_0__.HotelRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCarouselModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HotelModule, {
    declarations: [_hotel_component__WEBPACK_IMPORTED_MODULE_2__.HotelComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _hotel_routing_module__WEBPACK_IMPORTED_MODULE_0__.HotelRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_5__.GoogleMapsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCarouselModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_hotel_hotel_module_ts.js.map