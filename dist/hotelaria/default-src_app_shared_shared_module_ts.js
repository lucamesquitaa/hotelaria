"use strict";
(self["webpackChunkhotelaria"] = self["webpackChunkhotelaria"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 7878);
/* harmony import */ var _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menubar/menubar.component */ 6337);
/* harmony import */ var _components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/select-remote/select-remote.component */ 5189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);







class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTypeaheadModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_1__.SelectRemoteComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTypeaheadModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_0__.MenubarComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTypeaheadModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_1__.SelectRemoteComponent],
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTypeaheadModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _components_menubar_menubar_component__WEBPACK_IMPORTED_MODULE_0__.MenubarComponent, _components_select_remote_select_remote_component__WEBPACK_IMPORTED_MODULE_1__.SelectRemoteComponent]
  });
})();

/***/ }),

/***/ 5189:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/select-remote/select-remote.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectRemoteComponent: () => (/* binding */ SelectRemoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 7878);









function SelectRemoteComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r1.clear();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled);
  }
}
function SelectRemoteComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SelectRemoteComponent_div_9_div_1_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onSearchInput($event));
    })("click", function SelectRemoteComponent_div_9_div_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.searchTerm);
  }
}
function SelectRemoteComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SelectRemoteComponent_div_9_div_3_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 28);
  }
}
function SelectRemoteComponent_div_9_div_3_div_1_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_div_9_div_3_div_1_input_3_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.isSelected(option_r5));
  }
}
function SelectRemoteComponent_div_9_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_div_9_div_3_div_1_Template_div_click_0_listener() {
      const option_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onSelect(option_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectRemoteComponent_div_9_div_3_div_1_i_2_Template, 1, 0, "i", 25)(3, SelectRemoteComponent_div_9_div_3_div_1_input_3_Template, 1, 1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r1.isSelected(option_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSelected(option_r5) && !ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.label);
  }
}
function SelectRemoteComponent_div_9_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nenhum resultado encontrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SelectRemoteComponent_div_9_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_div_9_div_3_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.loadMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Carregar mais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SelectRemoteComponent_div_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectRemoteComponent_div_9_div_3_div_1_Template, 6, 5, "div", 20)(2, SelectRemoteComponent_div_9_div_3_div_2_Template, 4, 0, "div", 21)(3, SelectRemoteComponent_div_9_div_3_div_3_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filteredOptions)("ngForTrackBy", ctx_r1.trackByValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filteredOptions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hasMore && !ctx_r1.isLoading);
  }
}
function SelectRemoteComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectRemoteComponent_div_9_div_1_Template, 3, 1, "div", 11)(2, SelectRemoteComponent_div_9_div_2_Template, 4, 0, "div", 12)(3, SelectRemoteComponent_div_9_div_3_Template, 4, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading);
  }
}
class SelectRemoteComponent {
  constructor(http, elementRef) {
    this.http = http;
    this.elementRef = elementRef;
    this.apiUrl = '';
    this.placeholder = 'Selecione uma opção';
    this.valueProperty = 'id';
    this.labelProperty = 'name';
    this.searchProperty = 'name';
    this.multiple = false;
    this.clearable = true;
    this.disabled = false;
    this.required = false;
    this.searchable = true;
    this.minSearchLength = 0;
    this.debounceTime = 300;
    this.pageSize = 20;
    this.additionalParams = {};
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.options = [];
    this.filteredOptions = [];
    this.selectedValue = null;
    this.selectedValues = [];
    this.searchTerm = '';
    this.isLoading = false;
    this.isOpen = false;
    this.currentPage = 1;
    this.hasMore = true;
    this.onChange = value => {};
    this.onTouched = () => {};
  }
  ngOnInit() {
    this.loadInitialData();
  }
  // ControlValueAccessor implementation
  writeValue(value) {
    if (this.multiple) {
      this.selectedValues = value || [];
    } else {
      this.selectedValue = value;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  // Load initial data
  loadInitialData() {
    if (!this.apiUrl) return;
    this.isLoading = true;
    const params = {
      page: 1,
      limit: this.pageSize,
      ...this.additionalParams
    };
    this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Erro ao carregar dados:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        data: [],
        total: 0
      });
    })).subscribe(response => {
      this.options = this.mapResponseToOptions(response.data || response);
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = response.total > this.pageSize;
    });
  }
  // Handle search input
  onSearchInput(event) {
    const target = event.target;
    this.onSearch(target.value);
  }
  // Search functionality
  onSearch(term) {
    this.searchTerm = term;
    if (term.length < this.minSearchLength) {
      this.filteredOptions = [...this.options];
      return;
    }
    this.isLoading = true;
    this.currentPage = 1;
    const params = {
      [this.searchProperty]: term,
      page: this.currentPage,
      limit: this.pageSize,
      ...this.additionalParams
    };
    this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.http.get(this.apiUrl, {
      params
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Erro na pesquisa:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        data: [],
        total: 0
      });
    })).subscribe(response => {
      this.options = this.mapResponseToOptions(response.data || response);
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = response.total > this.pageSize;
    });
  }
  // Load more data for pagination
  loadMore() {
    if (!this.hasMore || this.isLoading) return;
    this.isLoading = true;
    this.currentPage++;
    const params = {
      [this.searchProperty]: this.searchTerm,
      page: this.currentPage,
      limit: this.pageSize,
      ...this.additionalParams
    };
    this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Erro ao carregar mais dados:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
        data: [],
        total: 0
      });
    })).subscribe(response => {
      const newOptions = this.mapResponseToOptions(response.data || response);
      this.options = [...this.options, ...newOptions];
      this.filteredOptions = [...this.options];
      this.isLoading = false;
      this.hasMore = this.options.length < response.total;
    });
  }
  // Map API response to select options
  mapResponseToOptions(data) {
    return data.map(item => ({
      value: item[this.valueProperty],
      label: item[this.labelProperty]
    }));
  }
  // Handle selection
  onSelect(option) {
    if (this.multiple) {
      const index = this.selectedValues.findIndex(val => val === option.value);
      if (index === -1) {
        this.selectedValues.push(option.value);
      } else {
        this.selectedValues.splice(index, 1);
      }
      this.onChange(this.selectedValues);
      this.selectionChange.emit(this.selectedValues);
    } else {
      this.selectedValue = option.value;
      this.onChange(this.selectedValue);
      this.selectionChange.emit(this.selectedValue);
      this.isOpen = false;
    }
    this.onTouched();
  }
  // Toggle dropdown
  toggleDropdown() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.options.length === 0) {
      this.loadInitialData();
    }
  }
  // Close dropdown
  closeDropdown() {
    this.isOpen = false;
    this.onTouched();
  }
  // Clear selection
  clear() {
    if (this.multiple) {
      this.selectedValues = [];
      this.onChange(this.selectedValues);
      this.selectionChange.emit(this.selectedValues);
    } else {
      this.selectedValue = null;
      this.onChange(this.selectedValue);
      this.selectionChange.emit(this.selectedValue);
    }
  }
  // Check if option is selected
  isSelected(option) {
    if (this.multiple) {
      return this.selectedValues.includes(option.value);
    }
    return this.selectedValue === option.value;
  }
  // Get selected label for display
  getSelectedLabel() {
    if (this.multiple) {
      if (this.selectedValues.length === 0) return this.placeholder;
      if (this.selectedValues.length === 1) {
        const option = this.options.find(opt => opt.value === this.selectedValues[0]);
        return option ? option.label : this.selectedValues[0];
      }
      return `${this.selectedValues.length} itens selecionados`;
    } else {
      if (!this.selectedValue) return this.placeholder;
      const option = this.options.find(opt => opt.value === this.selectedValue);
      return option ? option.label : this.selectedValue;
    }
  }
  // TrackBy function for ngFor performance
  trackByValue(index, option) {
    return option.value;
  }
  // Handle clicks outside the component
  onDocumentClick(event) {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }
  static {
    this.ɵfac = function SelectRemoteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectRemoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectRemoteComponent,
      selectors: [["app-select-remote"]],
      hostBindings: function SelectRemoteComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        apiUrl: "apiUrl",
        placeholder: "placeholder",
        valueProperty: "valueProperty",
        labelProperty: "labelProperty",
        searchProperty: "searchProperty",
        multiple: "multiple",
        clearable: "clearable",
        disabled: "disabled",
        required: "required",
        searchable: "searchable",
        minSearchLength: "minSearchLength",
        debounceTime: "debounceTime",
        pageSize: "pageSize",
        additionalParams: "additionalParams"
      },
      outputs: {
        selectionChange: "selectionChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SelectRemoteComponent),
        multi: true
      }])],
      decls: 10,
      vars: 11,
      consts: [[1, "select-remote-container"], [1, "select-input", 3, "click"], [1, "selected-value"], [1, "select-actions"], ["type", "button", "class", "clear-button", 3, "disabled", "click", 4, "ngIf"], [1, "dropdown-arrow"], [1, "fas", "fa-chevron-down"], ["class", "dropdown", 4, "ngIf"], ["type", "button", 1, "clear-button", 3, "click", "disabled"], [1, "fas", "fa-times"], [1, "dropdown"], ["class", "search-container", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "options-container", 4, "ngIf"], [1, "search-container"], ["type", "text", "placeholder", "Pesquisar...", 1, "search-input", 3, "input", "click", "value"], [1, "fas", "fa-search", "search-icon"], [1, "loading"], [1, "fas", "fa-spinner", "fa-spin"], [1, "options-container"], ["class", "option", 3, "selected", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "no-results", 4, "ngIf"], ["class", "load-more", 4, "ngIf"], [1, "option", 3, "click"], [1, "option-content"], ["class", "fas fa-check", 4, "ngIf"], ["type", "checkbox", 3, "checked", "click", 4, "ngIf"], [1, "option-label"], [1, "fas", "fa-check"], ["type", "checkbox", 3, "click", "checked"], [1, "no-results"], [1, "fas", "fa-search"], [1, "load-more"], ["type", "button", 1, "load-more-button", 3, "click"]],
      template: function SelectRemoteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectRemoteComponent_Template_div_click_1_listener() {
            return ctx.toggleDropdown();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectRemoteComponent_button_6_Template, 2, 1, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectRemoteComponent_div_9_Template, 4, 3, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.isOpen)("has-value", ctx.selectedValue || ctx.selectedValues.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSelectedLabel());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clearable && (ctx.selectedValue || ctx.selectedValues.length > 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotate", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule],
      styles: [".select-remote-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n.select-remote-container.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.select-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  background-color: #fff;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-height: 38px;\n}\n.select-input[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: #007bff;\n}\n.select-input.open[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n.select-input.has-value[_ngcontent-%COMP%]   .selected-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.selected-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.selected-value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 14px;\n}\n\n.select-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.clear-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #999;\n  cursor: pointer;\n  padding: 2px;\n  border-radius: 2px;\n  transition: color 0.2s ease;\n}\n.clear-button[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n}\n.clear-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.dropdown-arrow[_ngcontent-%COMP%] {\n  color: #999;\n  transition: transform 0.2s ease;\n}\n.dropdown-arrow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.dropdown-arrow[_ngcontent-%COMP%]   i.rotate[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #ddd;\n  border-top: none;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 32px 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  outline: none;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #999;\n  font-size: 12px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  color: #666;\n  font-size: 14px;\n  gap: 8px;\n}\n.loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.options-container[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  border-bottom: 1px solid #f8f9fa;\n}\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.option.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.option[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.option-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n.option-content[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #28a745;\n}\n.option-content[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.option-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  color: #666;\n  font-size: 14px;\n  gap: 8px;\n}\n.no-results[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ddd;\n}\n\n.load-more[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-top: 1px solid #eee;\n}\n\n.load-more-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  background: #f8f9fa;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  color: #666;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.load-more-button[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n\n.dropdown[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.dropdown[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a1a1a1;\n}\n\n.options-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.options-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.options-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n.options-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a1a1a1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2VsZWN0LXJlbW90ZS9zZWxlY3QtcmVtb3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UscUJBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQURKO0FBS0k7RUFDRSxXQUFBO0FBSE47O0FBUUE7RUFDRSxPQUFBO0FBTEY7QUFPRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBTkY7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBTkY7QUFRRTtFQUNFLGNBQUE7QUFOSjtBQVNFO0VBQ0UsZUFBQTtBQVBKOztBQVdBO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0FBUkY7QUFVRTtFQUNFLGVBQUE7QUFSSjtBQVVJO0VBQ0UseUJBQUE7QUFSTjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBVkY7QUFZRTtFQUNFLHFCQUFBO0VBQ0EsNkNBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFYRjtBQWFFO0VBQ0UsZUFBQTtBQVhKOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtBQVpGO0FBY0U7RUFDRSx5QkFBQTtBQVpKO0FBZUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFiSjtBQWdCRTtFQUNFLG1CQUFBO0FBZEo7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFmRjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBZko7QUFrQkU7RUFDRSxTQUFBO0FBaEJKOztBQW9CQTtFQUNFLE9BQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFqQkY7QUFtQkU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQWpCSjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWxCRjtBQW9CRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFsQko7O0FBd0JFO0VBQ0UsVUFBQTtBQXJCSjtBQXdCRTtFQUNFLG1CQUFBO0FBdEJKO0FBeUJFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQXZCSjtBQTBCRTtFQUNFLG1CQUFBO0FBeEJKOztBQTZCRTtFQUNFLFVBQUE7QUExQko7QUE2QkU7RUFDRSxtQkFBQTtBQTNCSjtBQThCRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUE1Qko7QUErQkU7RUFDRSxtQkFBQTtBQTdCSiIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtcmVtb3RlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtaW5wdXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBtaW4taGVpZ2h0OiAzOHB4O1xyXG5cclxuICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICB9XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgwLCAxMjMsIDI1NSwgMC4yNSk7XHJcbiAgfVxyXG5cclxuICAmLmhhcy12YWx1ZSB7XHJcbiAgICAuc2VsZWN0ZWQtdmFsdWUgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGVkLXZhbHVlIHtcclxuICBmbGV4OiAxO1xyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmNsZWFyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZGMzNTQ1O1xyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tYXJyb3cge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbiAgICAmLnJvdGF0ZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDhweCAzMnB4IDhweCAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDAsIDEyMywgMjU1LCAwLjI1KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBjb2xvcjogIzk5OTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbnMtY29udGFpbmVyIHtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmOGY5ZmE7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcclxuICAgIGNvbG9yOiAjMTk3NmQyO1xyXG4gIH1cclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9uLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMyOGE3NDU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm9wdGlvbi1sYWJlbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm5vLXJlc3VsdHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGdhcDogOHB4O1xyXG5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWQtbW9yZSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ubG9hZC1tb3JlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTY3JvbGxiYXIgc3R5bGluZ1xyXG4uZHJvcGRvd24ge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNhMWExYTE7XHJcbiAgfVxyXG59XHJcblxyXG4ub3B0aW9ucy1jb250YWluZXIge1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNhMWExYTE7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5622:
/*!****************************************************!*\
  !*** ./src/app/shared/services/menubar.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenubarService: () => (/* binding */ MenubarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class MenubarService {
  constructor() {
    this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this.isOpen$ = this.isOpenSubject.asObservable();
    // Inicializa baseado no tamanho da tela
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      this.isOpenSubject.next(false);
    }
  }
  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }
  setOpen(isOpen) {
    this.isOpenSubject.next(isOpen);
  }
  get isOpen() {
    return this.isOpenSubject.value;
  }
  static {
    this.ɵfac = function MenubarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenubarService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MenubarService,
      factory: MenubarService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6337:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/menubar/menubar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenubarComponent: () => (/* binding */ MenubarComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 2394);
/* harmony import */ var _component_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component.base */ 125);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);
/* harmony import */ var _services_menubar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menubar.service */ 5622);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4460);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);







class MenubarComponent extends _component_base__WEBPACK_IMPORTED_MODULE_0__.ComponentBase {
  constructor(injector, oauthService, menubarService) {
    super(injector);
    this.injector = injector;
    this.oauthService = oauthService;
    this.menubarService = menubarService;
    this.selected = '';
    this.isOpen = true;
    this.isHoteisMenuOpen = true; // Nova propriedade para controlar o submenu
    this.window = window; // Adicionando propriedade window
  }
  ngOnInit() {
    super.ngOnInit();
    // Se inscreve no estado do menu
    this.menubarService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }
  toggleMenu() {
    this.menubarService.toggle();
  }
  // Novo método para controlar o submenu de hotéis
  toggleHoteisMenu() {
    this.isHoteisMenuOpen = !this.isHoteisMenuOpen;
  }
  // Método para verificar se é mobile
  isMobile() {
    return window.innerWidth < 768;
  }
  logout() {
    // Limpa todos os cookies
    this.cookieService.deleteAll();
    // Limpa os tokens do OAuth
    this.oauthService.logOut();
    // Navega para login e força um novo fluxo de autenticação
    this.router.navigate(["/login"]).then(() => {
      this.oauthService.initLoginFlow();
    });
  }
  static {
    this.ɵfac = function MenubarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MenubarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_menubar_service__WEBPACK_IMPORTED_MODULE_1__.MenubarService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MenubarComponent,
      selectors: [["app-menubar"]],
      inputs: {
        selected: "selected"
      },
      standalone: false,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
      decls: 37,
      vars: 22,
      consts: [[1, "d-flex", "flex-column", "flex-shrink-0", "p-3", "text-white", "contBar"], [1, "d-flex", "justify-content-center", "align-items-center", 3, "ngClass"], ["href", "/", 1, "menu-brand"], ["src", "assets/logosfundo2.png", "alt", "logo turify casinha", 1, "logoCasinha"], ["type", "button", 1, "btn", "btn-link", "text-white", "p-0", 3, "click"], [1, "bi", "bi-list", 2, "font-size", "1.5rem"], [1, "conteudoMeniu"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], [1, "nav-item"], ["href", "/dashboard", "routerLinkActive", "active", 1, "nav-link", "text-white"], [1, "bi", "bi-speedometer2"], ["href", "/admin", "routerLinkActive", "active", 1, "nav-link", "text-white", "d-flex", "justify-content-between", "align-items-center"], [1, "bi", "bi-building"], ["href", "/cadastro", "routerLinkActive", "active", 1, "nav-link", "text-white"], [1, "bi", "bi-pencil"], ["ngbDropdown", "", "placement", "top-start", 1, "dropdown"], ["id", "dropdownUser1", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "d-flex", "align-items-center", "text-white", "text-decoration-none", "dropdown-toggle"], [1, "bi", "bi-person-circle", "me-2", 2, "font-size", "32px"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownUser1", 1, "dropdown-menu", "dropdown-menu-dark", "text-small", "shadow"], [1, "dropdown-item"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"]],
      template: function MenubarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenubarComponent_Template_button_click_4_listener() {
            return ctx.toggleMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 7)(9, "li", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 8)(14, "a", 11)(15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Hot\u00E9is ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 8)(19, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Cadastro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Usu\u00E1rio");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ul", 18)(29, "li")(30, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "hr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li")(35, "a", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenubarComponent_Template_a_click_35_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Sair");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.isOpen ? "280px" : "60px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-open", ctx.isOpen)("menu-collapsed", !ctx.isOpen)("menu-expanded", ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@collapseExpand", ctx.isOpen ? "expanded" : "collapsed");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isOpen ? "justify-content-between" : "justify-content-center");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", !ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", !ctx.isOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selected === "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selected === "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selected === "cadastro");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.cookieService.get("user_first_name") == "undefined" ? "" : ctx.cookieService.get("user_first_name"), " ", ctx.cookieService.get("user_last_name") == "undefined" ? "" : ctx.cookieService.get("user_last_name"), "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu],
      styles: ["@charset \"UTF-8\";\n.logoCasinha[_ngcontent-%COMP%] {\n  width: 120px;\n  height: auto;\n  margin-bottom: 10px;\n}\n\n.conteudoMeniu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.contBar[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);\n  box-shadow: 4px 0 20px rgba(0, 0, 0, 0.1);\n  border-right: 3px solid #3498db;\n  z-index: 1000;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow-y: auto;\n  transition: all 0.3s ease;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.menu-collapsed[_nghost-%COMP%]    ~ *[_ngcontent-%COMP%]   .page-with-menubar[_ngcontent-%COMP%] {\n  margin-left: 60px !important;\n  width: calc(100% - 60px) !important;\n}\n\n.menu-expanded[_nghost-%COMP%]    ~ *[_ngcontent-%COMP%]   .page-with-menubar[_ngcontent-%COMP%] {\n  margin-left: 280px !important;\n  width: calc(100% - 280px) !important;\n}\n\n.contBar[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border-color: #4a5568;\n  margin: 1rem 0;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  margin: 4px 0;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  color: #cbd5e0 !important;\n  text-decoration: none;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.2);\n  color: #ffffff !important;\n  transform: translateX(5px);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background: #3498db;\n  color: #ffffff !important;\n}\n\n.nav-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  width: 16px;\n  height: 16px;\n}\n\n.menuBarIcon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #cbd5e0;\n  transition: all 0.3s ease;\n  z-index: 1001;\n}\n\n.menuBarIcon[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  transform: scale(1.1);\n}\n\n.menuBarIcon2[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 15px;\n  left: 15px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #2c3e50;\n  background: white;\n  padding: 8px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  transition: all 0.3s ease;\n}\n\n.menuBarIcon2[_ngcontent-%COMP%]:hover {\n  color: #3498db;\n  transform: scale(1.1);\n}\n\n.menu-brand[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.menu-brand[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: none;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n\n\n.menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n\n.menu-overlay.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n@media (max-width: 768px) {\n  .contBar[_ngcontent-%COMP%] {\n    width: 280px !important;\n    transform: translateX(-100%);\n  }\n  .contBar.menu-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .menuBarIcon[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 769px) {\n  .menuBarIcon2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .menu-overlay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  padding: 12px 16px;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  width: 100%;\n  text-align: left;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.2);\n  transform: translateX(5px);\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute !important;\n  bottom: 100% !important;\n  top: auto !important;\n  left: 0 !important;\n  right: auto !important;\n  transform: translateY(-5px) !important;\n  min-width: 200px;\n  max-width: 250px;\n  width: calc(100% - 20px);\n  margin: 0 10px;\n  z-index: 1050;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);\n}\n\n.dropdown-menu.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  transition: all 0.2s ease;\n  border-radius: 6px;\n  margin: 2px 6px;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(52, 152, 219, 0.3) !important;\n  transform: translateX(3px);\n  width: calc(100% - 22px);\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n\n\n@media (max-width: 768px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    position: fixed !important;\n    bottom: 60px !important;\n    left: 20px !important;\n    right: 20px !important;\n    top: auto !important;\n    transform: none !important;\n    width: calc(100% - 40px);\n    max-width: none;\n    margin: 0;\n  }\n  .dropdown-toggle[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudWJhci9tZW51YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFBQTtFQUNJLDZEQUFBO0VBQ0EseUNBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQURBLHNFQUFBO0FBQ0E7RUFDSSw0QkFBQTtFQUNBLG1DQUFBO0FBSUo7O0FBREE7RUFDSSw2QkFBQTtFQUNBLG9DQUFBO0FBSUo7O0FBREE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSSxtQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQURBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSUo7O0FBREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUlKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREEsd0JBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQUlKOztBQURBLG1CQUFBO0FBQ0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsNEJBQUE7RUFJTjtFQURFO0lBQ0ksd0JBQUE7RUFHTjtFQUFFO0lBQ0ksY0FBQTtFQUVOO0FBQ0Y7QUFDQTtFQUNJO0lBQ0ksYUFBQTtFQUNOO0VBRUU7SUFDSSxhQUFBO0VBQU47QUFDRjtBQUdBLHVDQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksbUNBQUE7RUFDQSwwQkFBQTtBQURKOztBQUlBO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLHlDQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksOENBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7QUFESjs7QUFJQSw2Q0FBQTtBQUNBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLHVCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0VBRE47RUFJRTtJQUNJLGlCQUFBO0VBRk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9nb0Nhc2luaGF7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jb250ZXVkb01lbml1e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jb250QmFye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJjM2U1MCAwJSwgIzM0NDk1ZSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDRweCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzM0OThkYjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5zaGFkb3d7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgZ2xvYmFpcyBwYXJhIGNvbnRyb2xhciBvIGxheW91dCBiYXNlYWRvIG5vIGVzdGFkbyBkbyBtZW51ICovXHJcbjpob3N0KC5tZW51LWNvbGxhcHNlZCkgfiAqIC5wYWdlLXdpdGgtbWVudWJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0KC5tZW51LWV4cGFuZGVkKSB+ICogLnBhZ2Utd2l0aC1tZW51YmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyODBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4MHB4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udEJhciBocntcclxuICAgIGJvcmRlci1jb2xvcjogIzRhNTU2ODtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ubmF2LWxpbmt7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNjYmQ1ZTAgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMik7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5uYXYtbGluay5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHN2ZywgLm5hdi1saW5rIGl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLm1lbnVCYXJJY29ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2NiZDVlMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG59XHJcblxyXG4ubWVudUJhckljb246aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1lbnVCYXJJY29uMntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgei1pbmRleDogMTAwMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51QmFySWNvbjI6aG92ZXJ7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm1lbnUtYnJhbmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1lbnUtYnJhbmQ6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJyYW5kLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogT3ZlcmxheSBwYXJhIG1vYmlsZSAqL1xyXG4ubWVudS1vdmVybGF5e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5tZW51LW92ZXJsYXkuYWN0aXZle1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmlkYWRlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRCYXJ7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRCYXIubWVudS1vcGVue1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnVCYXJJY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIC5tZW51QmFySWNvbjJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnUtb3ZlcmxheXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbyBkcm9wZG93biBkbyB1c3XDg8KhcmlvICovXHJcbi5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTIsIDE1MiwgMjE5LCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbjogMnB4IDZweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg1MiwgMTUyLCAyMTksIDAuMykgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzcHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG59XHJcblxyXG4uZHJvcGRvd24tZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmlkYWRlIHBhcmEgbyBkcm9wZG93biBlbSBtb2JpbGUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('collapseExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          width: '280px'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          width: '60px'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('expanded <=> collapsed', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('300ms ease-in-out')])])]
      }
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map