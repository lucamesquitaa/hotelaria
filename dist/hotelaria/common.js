"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["common"],{

/***/ 1367:
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class LoginService extends _generic_service__WEBPACK_IMPORTED_MODULE_0__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Login";
    this.urlServiceREST = "http://localhost:8080/api/User";
  }
  doLogin(user) {
    console.log("Fazendo login para o usuário:", user);
    return this.http.post(this.urlServiceREST + "/Login", user);
  }
  updateManager(email, hotelId, role = 'user') {
    if (hotelId === null) {
      throw new Error("hotelId não pode ser nulo");
    }
    const url = this.urlServiceREST + '/UpdateManager';
    const body = {
      email,
      hotelId,
      role
    };
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.post(url, body, {
      headers
    });
  }
  removeManager(email, hotelId, role = 'user') {
    if (hotelId === null) {
      throw new Error("hotelId não pode ser nulo");
    }
    const url = this.urlServiceREST + '/RemovePermissionUsers';
    const body = {
      email,
      hotelId,
      role
    };
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.delete(url, {
      headers,
      body
    });
  }
  GetAllPermissionUsers(hotelId) {
    return this.http.post(this.urlServiceREST + "/GetAllPermissionUsers", {
      hotelId
    });
  }
  static {
    this.ɵfac = function LoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2987:
/*!****************************************************!*\
  !*** ./src/app/shared/services/generic.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceGeneric: () => (/* binding */ ServiceGeneric)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _services_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/context.service */ 7337);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 9213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




/**
 * @description
 *
 * Serviço REST genérico
 */
class ServiceGeneric {
  constructor(injector) {
    this.injector = injector;
    /**
      * Labels traduzidos
      */
    this.literals = {};
    this.http = this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.cookieService = injector.get(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService);
    this.context = this.objContext;
  }
  /**
   * Contexto do usuário
   */
  get objContext() {
    if (!this.context) {
      this.context = _services_context_service__WEBPACK_IMPORTED_MODULE_0__.ContextService.getContext();
    }
    return this.context;
  }
  set objContext(value) {
    this.context = value;
  }
  getBaseUrl() {
    return "https://localhost:4200";
  }
  getFullUrl() {
    return `${this.getBaseUrl()}${this.urlServiceREST}`;
  }
  static {
    this.ɵfac = function ServiceGeneric_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServiceGeneric)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: ServiceGeneric,
      factory: ServiceGeneric.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 7420:
/*!**************************************************!*\
  !*** ./src/app/shared/services/hotel.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HotelService: () => (/* binding */ HotelService)
/* harmony export */ });
/* harmony import */ var _generic_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic.service */ 2987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class HotelService extends _generic_service__WEBPACK_IMPORTED_MODULE_0__.ServiceGeneric {
  constructor(injector) {
    super(injector);
    this.injector = injector;
    //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Hotel";
    this.urlServiceREST = "http://localhost:8080/api/Hotel";
  }
  doGetAllHoteis() {
    return this.http.get(this.urlServiceREST);
  }
  doGetUserIdHoteis() {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    console.log(headers);
    return this.http.get(this.urlServiceREST + "/ByUserId", {
      headers
    });
  }
  doGetHotelId(hotelId) {
    return this.http.get(this.urlServiceREST + "/" + hotelId);
  }
  doGetHotelByManager(hotelId) {
    return this.http.get(this.urlServiceREST + "/ByManager/" + hotelId);
  }
  doDeleteHotel(id) {
    //setar token Authorization
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.delete(this.urlServiceREST + "/" + id, {
      headers
    });
  }
  doPostHotel(hotel, id) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    if (id == null) {
      return this.http.post(this.urlServiceREST, hotel, {
        headers
      });
    } else {
      return this.http.put(this.urlServiceREST + "/" + id, hotel, {
        headers
      });
    }
  }
  static {
    this.ɵfac = function HotelService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HotelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HotelService,
      factory: HotelService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map