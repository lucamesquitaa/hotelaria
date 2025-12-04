"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2596);





function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 5)(4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class AppComponent extends _shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, ngbConfig) {
    super(injector);
    this.injector = injector;
    this.menusVisivel = true;
    this.textSaudacao = "Olá";
    ngbConfig.animation = false;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbConfig));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 1,
      consts: [[1, "telas"], ["class", "overlay-spinner", 4, "ngIf"], [1, "overlay-spinner"], [1, "overlay"], [1, "d-flex", "justify-content-center", "spinner-container"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 6, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.context.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet],
      styles: ["*[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.telas[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.overlay-spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n}\n\n.spinner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUNSLFlBQUE7RUFBYyxhQUFBO0VBQ2QsYUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUNSLFlBQUE7RUFBYyxhQUFBO0VBQ2QsOEJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFBVSxTQUFBO0VBQ1YsZ0NBQUE7RUFDQSxVQUFBO0FBS0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiosIGJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi50ZWxhc3tcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ub3ZlcmxheS1zcGlubmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwOyBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dzsgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDsgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7IGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlOyBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 125:
/*!*****************************************************!*\
  !*** ./src/app/shared/components/component.base.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentBase: () => (/* binding */ ComponentBase)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/context.service */ 7337);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);






/**
 * @description
 *
 * Componente básico
 */
class ComponentBase {
  get loading() {
    return this._loading;
  }
  constructor(injector) {
    this.injector = injector;
    this.literals = {};
    /**
     * Exibe ou não a animação de espera de consulta
     */
    this._loading = false;
    this._loadingCount = 0;
    this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.activatedRoute = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.cookieService = injector.get(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService);
    this.toastr = injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService);
    // Carrega o contexto global do usuário
    this.context = _services_context_service__WEBPACK_IMPORTED_MODULE_0__.ContextService.getContext();
  }
  ngOnInit() {}
  ngOnDestroy() {}
  /**
   * Exibe a animação de espera
   */
  showLoading() {
    this.context.isLoading = true;
  }
  /**
   * Esconde a animação de espera
   */
  hideLoading() {
    this.context.isLoading = false;
  }
  static {
    this.ɵfac = function ComponentBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ComponentBase)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: ComponentBase,
      factory: ComponentBase.ɵfac
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 3563);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 2181);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);
/* harmony import */ var _shared_services_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/interceptor */ 2500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);

















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__.CookieService, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
        useClass: _shared_services_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot(), angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__.OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['http://localhost:8080/api'],
          // sua API
          sendAccessToken: true
        }
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_13__.OAuthModule]
  });
})();

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/guardinha.guard */ 9141);

const ROUTES = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.module */ 2829)).then(m => m.HomeModule)
}, {
  path: 'hotel',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_hotel_hotel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/hotel/hotel.module */ 6605)).then(m => m.HotelModule)
}, {
  path: 'login',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/login/login.module */ 6065)).then(m => m.LoginModule)
}, {
  path: 'admin',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin.module */ 6269)).then(m => m.AdminModule),
  canActivate: [_shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'cadastro',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_cadastro_cadastro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/cadastro/cadastro.module */ 3425)).then(m => m.CadastroModule),
  canActivate: [_shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'managers',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_managers_managers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/managers/managers.module */ 7747)).then(m => m.ManagersModule),
  canActivate: [_shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'quartos',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_quartos_quartos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/quartos/quartos.module */ 918)).then(m => m.QuartosModule),
  canActivate: [_shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}, {
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared_module_ts"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 2125)).then(m => m.DashboardModule),
  canActivate: [_shared_services_guardinha_guard__WEBPACK_IMPORTED_MODULE_0__.AuthenticationGuard]
}];

/***/ }),

/***/ 2500:
/*!************************************************!*\
  !*** ./src/app/shared/services/interceptor.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2596);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4285);




class AuthInterceptor {
  constructor(cookieService, router, toastr) {
    this.cookieService = cookieService;
    this.router = router;
    this.toastr = toastr;
  }
  intercept(req, next) {
    // Ignorar requisições para Google ou OAuth
    const ignoreUrls = ['google', 'oauth'];
    if (ignoreUrls.some(url => req.url.includes(url))) {
      return next.handle(req);
    }
    const token = this.cookieService.get('access_token');
    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 3563);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 7337:
/*!****************************************************!*\
  !*** ./src/app/shared/services/context.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextService: () => (/* binding */ ContextService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ContextService {
  static {
    this.context = {
      usuarioAutenticado: false,
      token: "",
      usuario: {
        token: ""
      },
      isLoading: false
    };
  }
  static getContext() {
    return ContextService.context;
  }
  static {
    this.ɵfac = function ContextService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContextService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContextService,
      factory: ContextService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9141:
/*!****************************************************!*\
  !*** ./src/app/shared/services/guardinha.guard.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationGuard: () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AuthenticationGuard extends _components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  canActivate(route, state) {
    const token = this.cookieService.get('access_token');
    // O usuário não foi autenticado ?
    if (!token) {
      // Redireciona para a tela de login
      this.router.navigate(['login']);
    }
    return token ? true : false;
  }
  static {
    this.ɵfac = /*@__PURE__*/(() => {
      let ɵAuthenticationGuard_BaseFactory;
      return function AuthenticationGuard_Factory(__ngFactoryType__) {
        return (ɵAuthenticationGuard_BaseFactory || (ɵAuthenticationGuard_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AuthenticationGuard)))(__ngFactoryType__ || AuthenticationGuard);
      };
    })();
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthenticationGuard,
      factory: AuthenticationGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map