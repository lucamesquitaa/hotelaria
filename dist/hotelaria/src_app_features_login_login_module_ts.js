"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_login_login_module_ts"],{

/***/ 688:
/*!********************************************************!*\
  !*** ./src/app/features/login/login-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 8670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {
  static {
    this.ɵfac = function LoginRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4588:
/*!****************************!*\
  !*** ./src/auth.config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authConfig: () => (/* binding */ authConfig)
/* harmony export */ });
const authConfig = {
  issuer: 'https://accounts.google.com',
  // endpoint OIDC do Google
  strictDiscoveryDocumentValidation: false,
  clientId: '54700728866-d81aiuid54e66ju93oia449v9dkcs357.apps.googleusercontent.com',
  redirectUri: 'http://localhost:4200',
  scope: 'openid profile email',
  responseType: 'code',
  // usa PKCE
  showDebugInformation: true,
  dummyClientSecret: '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'
};

/***/ }),

/***/ 6065:
/*!************************************************!*\
  !*** ./src/app/features/login/login.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 688);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 8670);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule]
  });
})();

/***/ }),

/***/ 8670:
/*!***************************************************!*\
  !*** ./src/app/features/login/login.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/component.base */ 125);
/* harmony import */ var src_auth_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/auth.config */ 4588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/login.service */ 1367);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);





class LoginComponent extends src_app_shared_components_component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, loginService, oauthService) {
    super(injector);
    this.injector = injector;
    this.loginService = loginService;
    this.oauthService = oauthService;
    this.isLoggedIn = false;
    this.oauthService.configure(src_auth_config__WEBPACK_IMPORTED_MODULE_1__.authConfig);
  }
  ngOnInit() {
    // Carrega o documento de descoberta e tenta processar a resposta do OAuth
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      this.processOAuthResponse();
    });
  }
  processOAuthResponse() {
    if (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken()) {
      this.isLoggedIn = true;
      this.profile = this.oauthService.getIdentityClaims();
      console.log('Profile from OAuth:', this.profile);
      const user = {
        Id: this.profile.sub,
        Email: this.profile.email,
        FirstName: this.profile.given_name,
        LastName: this.profile.family_name,
        Photo: this.profile.picture
      };
      this.context.perfil = user;
      this.loginService.doLogin(user).subscribe({
        next: result => {
          console.log('Login service response:', result);
          this.cookieService.set("access_token", result.token);
          this.cookieService.set("user_id", user.Id);
          this.cookieService.set("user_email", user.Email);
          this.cookieService.set("user_first_name", user.FirstName);
          this.cookieService.set("user_last_name", user.LastName);
          this.cookieService.set("user_photo", user.Photo);
        },
        error: error => {
          console.error('Login service error:', error);
          this.toastr.error(error.error.mensagem || error.error.excecaoMensagem || "Erro no servidor.");
        },
        complete: () => {
          console.log('Redirecting to admin...');
          this.router.navigate(["/admin"]);
        }
      });
    }
  }
  login() {
    // Se já está logado, vai direto para admin
    if (this.isLoggedIn) {
      this.router.navigate(["/admin"]);
    } else {
      // Inicia o fluxo de login
      this.oauthService.initLoginFlow();
    }
  }
  forceLogin() {
    // Limpa os tokens existentes e força um novo login
    this.oauthService.logOut();
    this.oauthService.initLoginFlow();
  }
  logout() {
    this.oauthService.logOut();
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 0,
      consts: [[1, "btGoogl"], ["src", "assets/imglogo.png", "alt", "logo turify casinha", 1, "logoCasinha", 2, "width", "200px", "height", "auto"], [1, "btn", "btn-primary", "btn-md", "buttonSubmit", "bi", "bi-arrow-right-circle", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() {
            return ctx.forceLogin();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
      },
      styles: [".btGoogl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 15px;\n  width: 100%;\n  margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idEdvb2dse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_login_login_module_ts.js.map