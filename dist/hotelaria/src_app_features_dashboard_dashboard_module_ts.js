"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/menubar/menubar.component */ 6337);


class DashboardComponent {
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[3, "selected"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-menubar", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", "dashboard");
        }
      },
      dependencies: [_shared_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_0__.MenubarComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 2508);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 3887);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 2508:
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 8431);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardRoutingModule {
  static {
    this.ɵfac = function DashboardRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DashboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map