(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Interfaces/Interfaces-Out.ts":
/*!**********************************************!*\
  !*** ./src/app/Interfaces/Interfaces-Out.ts ***!
  \**********************************************/
/*! exports provided: peticionDatosLogin, objDigitosValidacion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peticionDatosLogin", function() { return peticionDatosLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objDigitosValidacion", function() { return objDigitosValidacion; });
class peticionDatosLogin {
}
class objDigitosValidacion {
}


/***/ }),

/***/ "./src/app/Interfaces/Interfaces.ts":
/*!******************************************!*\
  !*** ./src/app/Interfaces/Interfaces.ts ***!
  \******************************************/
/*! exports provided: RespuestaGeneral, WelcomeMessage, PantallaBienvenida, objIniciaProcesoOnboarding, objCatalogo, objCatalogos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespuestaGeneral", function() { return RespuestaGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeMessage", function() { return WelcomeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallaBienvenida", function() { return PantallaBienvenida; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objIniciaProcesoOnboarding", function() { return objIniciaProcesoOnboarding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objCatalogo", function() { return objCatalogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objCatalogos", function() { return objCatalogos; });
class RespuestaGeneral {
}
class WelcomeMessage extends RespuestaGeneral {
}
class PantallaBienvenida extends RespuestaGeneral {
}
class objIniciaProcesoOnboarding extends RespuestaGeneral {
}
class objCatalogo {
}
class objCatalogos extends RespuestaGeneral {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome2_welcome2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome2/welcome2.component */ "./src/app/welcome2/welcome2.component.ts");
/* harmony import */ var _welcome1_welcome1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome1/welcome1.component */ "./src/app/welcome1/welcome1.component.ts");
/* harmony import */ var _tc_tc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tc/tc.component */ "./src/app/tc/tc.component.ts");
/* harmony import */ var _info_solicitante_info_solicitante_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-solicitante/info-solicitante.component */ "./src/app/info-solicitante/info-solicitante.component.ts");
/* harmony import */ var _info_domicilio_info_domicilio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-domicilio/info-domicilio.component */ "./src/app/info-domicilio/info-domicilio.component.ts");
/* harmony import */ var _doc_selector_doc_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doc-selector/doc-selector.component */ "./src/app/doc-selector/doc-selector.component.ts");
/* harmony import */ var _doc_selector4_doc_selector4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doc-selector4/doc-selector4.component */ "./src/app/doc-selector4/doc-selector4.component.ts");
/* harmony import */ var _doc_selector5_doc_selector5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doc-selector5/doc-selector5.component */ "./src/app/doc-selector5/doc-selector5.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options/options.component.ts");
/* harmony import */ var _contrato_arrendamiento_contrato_arrendamiento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contrato-arrendamiento/contrato-arrendamiento.component */ "./src/app/contrato-arrendamiento/contrato-arrendamiento.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _domicilio_fiscal_domicilio_fiscal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./domicilio-fiscal/domicilio-fiscal.component */ "./src/app/domicilio-fiscal/domicilio-fiscal.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _fail_upload_fail_upload_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fail-upload/fail-upload.component */ "./src/app/fail-upload/fail-upload.component.ts");
/* harmony import */ var _seccion_ayuda_seccion_ayuda_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./seccion-ayuda/seccion-ayuda.component */ "./src/app/seccion-ayuda/seccion-ayuda.component.ts");
/* harmony import */ var _main_pending_main_pending_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-pending/main-pending.component */ "./src/app/main-pending/main-pending.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _info_domicilio2_info_domicilio2_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./info-domicilio2/info-domicilio2.component */ "./src/app/info-domicilio2/info-domicilio2.component.ts");
/* harmony import */ var _h_slider_h_slider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./h-slider/h-slider.component */ "./src/app/h-slider/h-slider.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _start_message_start_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./start-message/start-message.component */ "./src/app/start-message/start-message.component.ts");



























const routes = [
    { path: '', redirectTo: "doc-selector", pathMatch: 'full' },
    { path: 'welcome2/:folio', component: _welcome2_welcome2_component__WEBPACK_IMPORTED_MODULE_2__["Welcome2Component"] },
    { path: 'welcome1/:tipo/:folio', component: _welcome1_welcome1_component__WEBPACK_IMPORTED_MODULE_3__["Welcome1Component"] },
    { path: 'tc', component: _tc_tc_component__WEBPACK_IMPORTED_MODULE_4__["TcComponent"] },
    { path: 'info-solicitante', component: _info_solicitante_info_solicitante_component__WEBPACK_IMPORTED_MODULE_5__["InfoSolicitanteComponent"] },
    { path: 'info-domicilio', component: _info_domicilio_info_domicilio_component__WEBPACK_IMPORTED_MODULE_6__["InfoDomicilioComponent"] },
    { path: 'doc-selector4', component: _doc_selector4_doc_selector4_component__WEBPACK_IMPORTED_MODULE_8__["DocSelector4Component"] },
    { path: 'doc-selector5', component: _doc_selector5_doc_selector5_component__WEBPACK_IMPORTED_MODULE_9__["DocSelector5Component"] },
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_10__["PerfilComponent"] },
    { path: 'confirm-button', component: _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmButtonComponent"] },
    { path: 'options', component: _options_options_component__WEBPACK_IMPORTED_MODULE_12__["OptionsComponent"] },
    { path: 'contrato-arrendamiento', component: _contrato_arrendamiento_contrato_arrendamiento_component__WEBPACK_IMPORTED_MODULE_13__["ContratoArrendamientoComponent"] },
    { path: 'slider', component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["SliderComponent"] },
    { path: 'domicilio-fiscal', component: _domicilio_fiscal_domicilio_fiscal_component__WEBPACK_IMPORTED_MODULE_15__["DomicilioFiscalComponent"] },
    { path: 'success', component: _success_success_component__WEBPACK_IMPORTED_MODULE_16__["SuccessComponent"] },
    { path: 'fail-upload', component: _fail_upload_fail_upload_component__WEBPACK_IMPORTED_MODULE_17__["FailUploadComponent"] },
    { path: 'seccion-ayuda', component: _seccion_ayuda_seccion_ayuda_component__WEBPACK_IMPORTED_MODULE_18__["SeccionAyudaComponent"] },
    { path: 'main-pending/:tipo/:folio/:number', component: _main_pending_main_pending_component__WEBPACK_IMPORTED_MODULE_19__["MainPendingComponent"] },
    { path: 'loader', component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_20__["LoaderComponent"] },
    { path: 'info-domicilio2', component: _info_domicilio2_info_domicilio2_component__WEBPACK_IMPORTED_MODULE_21__["InfoDomicilio2Component"] },
    { path: 'h-slider', component: _h_slider_h_slider_component__WEBPACK_IMPORTED_MODULE_22__["HSliderComponent"] },
    { path: 'doc-selector/:folio/:tipo/:digitos/:iddocto/:iddoctodep/:valordep', component: _doc_selector_doc_selector_component__WEBPACK_IMPORTED_MODULE_7__["DocSelectorComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_23__["FaqComponent"] },
    { path: 'startMessage/:folio', component: _start_message_start_message_component__WEBPACK_IMPORTED_MODULE_24__["StartMessageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Beble';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "row", "logo-container", "text-right"], ["src", "https://beble.mx/imgs/logo.png", 1, "img-logo"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".img-logo[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    float: right;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmltZy1sb2dve1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _welcome2_welcome2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome2/welcome2.component */ "./src/app/welcome2/welcome2.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _welcome1_welcome1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome1/welcome1.component */ "./src/app/welcome1/welcome1.component.ts");
/* harmony import */ var _tc_tc_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tc/tc.component */ "./src/app/tc/tc.component.ts");
/* harmony import */ var _info_solicitante_info_solicitante_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./info-solicitante/info-solicitante.component */ "./src/app/info-solicitante/info-solicitante.component.ts");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _info_domicilio_info_domicilio_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./info-domicilio/info-domicilio.component */ "./src/app/info-domicilio/info-domicilio.component.ts");
/* harmony import */ var _doc_selector4_doc_selector4_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./doc-selector4/doc-selector4.component */ "./src/app/doc-selector4/doc-selector4.component.ts");
/* harmony import */ var _doc_selector5_doc_selector5_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./doc-selector5/doc-selector5.component */ "./src/app/doc-selector5/doc-selector5.component.ts");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./perfil/perfil.component */ "./src/app/perfil/perfil.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options/options.component.ts");
/* harmony import */ var _contrato_arrendamiento_contrato_arrendamiento_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contrato-arrendamiento/contrato-arrendamiento.component */ "./src/app/contrato-arrendamiento/contrato-arrendamiento.component.ts");
/* harmony import */ var _domicilio_fiscal_domicilio_fiscal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./domicilio-fiscal/domicilio-fiscal.component */ "./src/app/domicilio-fiscal/domicilio-fiscal.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _fail_upload_fail_upload_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fail-upload/fail-upload.component */ "./src/app/fail-upload/fail-upload.component.ts");
/* harmony import */ var _seccion_ayuda_seccion_ayuda_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./seccion-ayuda/seccion-ayuda.component */ "./src/app/seccion-ayuda/seccion-ayuda.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _main_pending_main_pending_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./main-pending/main-pending.component */ "./src/app/main-pending/main-pending.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _info_domicilio2_info_domicilio2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./info-domicilio2/info-domicilio2.component */ "./src/app/info-domicilio2/info-domicilio2.component.ts");
/* harmony import */ var _h_slider_h_slider_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./h-slider/h-slider.component */ "./src/app/h-slider/h-slider.component.ts");
/* harmony import */ var _doc_selector_doc_selector_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./doc-selector/doc-selector.component */ "./src/app/doc-selector/doc-selector.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _start_message_start_message_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./start-message/start-message.component */ "./src/app/start-message/start-message.component.ts");

















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBBootstrapModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_42__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBCrjOdhxDgpD-N3PAxYCZkIC3JCpx2qGY'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _welcome2_welcome2_component__WEBPACK_IMPORTED_MODULE_7__["Welcome2Component"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_18__["HelpComponent"],
        _welcome1_welcome1_component__WEBPACK_IMPORTED_MODULE_19__["Welcome1Component"],
        _tc_tc_component__WEBPACK_IMPORTED_MODULE_20__["TcComponent"],
        _info_solicitante_info_solicitante_component__WEBPACK_IMPORTED_MODULE_21__["InfoSolicitanteComponent"],
        _back_back_component__WEBPACK_IMPORTED_MODULE_22__["BackComponent"],
        _info_domicilio_info_domicilio_component__WEBPACK_IMPORTED_MODULE_23__["InfoDomicilioComponent"],
        _doc_selector4_doc_selector4_component__WEBPACK_IMPORTED_MODULE_24__["DocSelector4Component"],
        _doc_selector5_doc_selector5_component__WEBPACK_IMPORTED_MODULE_25__["DocSelector5Component"],
        _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_26__["PerfilComponent"],
        _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmButtonComponent"],
        _options_options_component__WEBPACK_IMPORTED_MODULE_28__["OptionsComponent"],
        _contrato_arrendamiento_contrato_arrendamiento_component__WEBPACK_IMPORTED_MODULE_29__["ContratoArrendamientoComponent"],
        _domicilio_fiscal_domicilio_fiscal_component__WEBPACK_IMPORTED_MODULE_30__["DomicilioFiscalComponent"],
        _success_success_component__WEBPACK_IMPORTED_MODULE_31__["SuccessComponent"],
        _fail_upload_fail_upload_component__WEBPACK_IMPORTED_MODULE_32__["FailUploadComponent"],
        _seccion_ayuda_seccion_ayuda_component__WEBPACK_IMPORTED_MODULE_33__["SeccionAyudaComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_34__["SliderComponent"],
        _main_pending_main_pending_component__WEBPACK_IMPORTED_MODULE_36__["MainPendingComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_38__["LoaderComponent"],
        _info_domicilio2_info_domicilio2_component__WEBPACK_IMPORTED_MODULE_39__["InfoDomicilio2Component"],
        _h_slider_h_slider_component__WEBPACK_IMPORTED_MODULE_40__["HSliderComponent"],
        _doc_selector_doc_selector_component__WEBPACK_IMPORTED_MODULE_41__["DocSelectorComponent"],
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_43__["FaqComponent"],
        _start_message_start_message_component__WEBPACK_IMPORTED_MODULE_44__["StartMessageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBRootModule"], _agm_core__WEBPACK_IMPORTED_MODULE_42__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _welcome2_welcome2_component__WEBPACK_IMPORTED_MODULE_7__["Welcome2Component"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_18__["HelpComponent"],
                    _welcome1_welcome1_component__WEBPACK_IMPORTED_MODULE_19__["Welcome1Component"],
                    _tc_tc_component__WEBPACK_IMPORTED_MODULE_20__["TcComponent"],
                    _info_solicitante_info_solicitante_component__WEBPACK_IMPORTED_MODULE_21__["InfoSolicitanteComponent"],
                    _back_back_component__WEBPACK_IMPORTED_MODULE_22__["BackComponent"],
                    _info_domicilio_info_domicilio_component__WEBPACK_IMPORTED_MODULE_23__["InfoDomicilioComponent"],
                    _doc_selector4_doc_selector4_component__WEBPACK_IMPORTED_MODULE_24__["DocSelector4Component"],
                    _doc_selector5_doc_selector5_component__WEBPACK_IMPORTED_MODULE_25__["DocSelector5Component"],
                    _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_26__["PerfilComponent"],
                    _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_27__["ConfirmButtonComponent"],
                    _options_options_component__WEBPACK_IMPORTED_MODULE_28__["OptionsComponent"],
                    _contrato_arrendamiento_contrato_arrendamiento_component__WEBPACK_IMPORTED_MODULE_29__["ContratoArrendamientoComponent"],
                    _domicilio_fiscal_domicilio_fiscal_component__WEBPACK_IMPORTED_MODULE_30__["DomicilioFiscalComponent"],
                    _success_success_component__WEBPACK_IMPORTED_MODULE_31__["SuccessComponent"],
                    _fail_upload_fail_upload_component__WEBPACK_IMPORTED_MODULE_32__["FailUploadComponent"],
                    _seccion_ayuda_seccion_ayuda_component__WEBPACK_IMPORTED_MODULE_33__["SeccionAyudaComponent"],
                    _slider_slider_component__WEBPACK_IMPORTED_MODULE_34__["SliderComponent"],
                    _main_pending_main_pending_component__WEBPACK_IMPORTED_MODULE_36__["MainPendingComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_38__["LoaderComponent"],
                    _info_domicilio2_info_domicilio2_component__WEBPACK_IMPORTED_MODULE_39__["InfoDomicilio2Component"],
                    _h_slider_h_slider_component__WEBPACK_IMPORTED_MODULE_40__["HSliderComponent"],
                    _doc_selector_doc_selector_component__WEBPACK_IMPORTED_MODULE_41__["DocSelectorComponent"],
                    _faq_faq_component__WEBPACK_IMPORTED_MODULE_43__["FaqComponent"],
                    _start_message_start_message_component__WEBPACK_IMPORTED_MODULE_44__["StartMessageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBBootstrapModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_42__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBCrjOdhxDgpD-N3PAxYCZkIC3JCpx2qGY'
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/back/back.component.ts":
/*!****************************************!*\
  !*** ./src/app/back/back.component.ts ***!
  \****************************************/
/*! exports provided: BackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackComponent", function() { return BackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class BackComponent {
    constructor(_location) {
        this._location = _location;
    }
    ngOnInit() {
    }
    backClicked() {
        this._location.back();
    }
}
BackComponent.ɵfac = function BackComponent_Factory(t) { return new (t || BackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
BackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackComponent, selectors: [["app-back"]], decls: 5, vars: 0, consts: [[1, "blanco", 3, "click"], [1, "Line-2"], [1, "Volver"]], template: function BackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackComponent_Template_a_click_0_listener() { return ctx.backClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".Line-2[_ngcontent-%COMP%] {\r\n    width: 9px;\r\n    height: 17px;\r\n}\r\n\r\n.Volver[_ngcontent-%COMP%] {\r\n    width: 34px;\r\n    height: 16px;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay9iYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYmFjay9iYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTGluZS0yIHtcclxuICAgIHdpZHRoOiA5cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbn1cclxuXHJcbi5Wb2x2ZXIge1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOXB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-back',
                templateUrl: './back.component.html',
                styleUrls: ['./back.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/confirm-button/confirm-button.component.ts":
/*!************************************************************!*\
  !*** ./src/app/confirm-button/confirm-button.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmButtonComponent", function() { return ConfirmButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ConfirmButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmButtonComponent.ɵfac = function ConfirmButtonComponent_Factory(t) { return new (t || ConfirmButtonComponent)(); };
ConfirmButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmButtonComponent, selectors: [["app-confirm-button"]], inputs: { button_title: "button_title" }, decls: 3, vars: 1, consts: [[1, "row"], [1, "Confirm-Button"]], template: function ConfirmButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.button_title, "");
    } }, styles: [".Confirm-Button[_ngcontent-%COMP%]{\r\n    height: 45px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    background-color: #0a3fc1;\r\n    margin-top: 10%;\r\n    font-family: Nunito;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.38px;\r\n    text-align: center;\r\n    color: #ffffff;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active{\r\n    background-color: #073095;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1idXR0b24vY29uZmlybS1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29uZmlybS1idXR0b24vY29uZmlybS1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Db25maXJtLUJ1dHRvbntcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhM2ZjMTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuYnV0dG9uOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzMwOTU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-button',
                templateUrl: './confirm-button.component.html',
                styleUrls: ['./confirm-button.component.css']
            }]
    }], function () { return []; }, { button_title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/contrato-arrendamiento/contrato-arrendamiento.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/contrato-arrendamiento/contrato-arrendamiento.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContratoArrendamientoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContratoArrendamientoComponent", function() { return ContratoArrendamientoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider.component */ "./src/app/slider/slider.component.ts");





class ContratoArrendamientoComponent {
    constructor() {
        this.titulo = "Mi titulo <b class='prueba'> Negritas </b>";
    }
    ngOnInit() {
    }
}
ContratoArrendamientoComponent.ɵfac = function ContratoArrendamientoComponent_Factory(t) { return new (t || ContratoArrendamientoComponent)(); };
ContratoArrendamientoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContratoArrendamientoComponent, selectors: [["app-contrato-arrendamiento"]], decls: 17, vars: 1, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "col-8", "padding0"], [1, "space", "Contrato-de-Arrendam", 3, "innerHTML"], [1, "space", "Aumenta-tus-posibil"], [1, "space", "Asegrate-que-todos"], [1, "col-4", 2, "text-align", "left", "padding", "0px"], ["src", "../../assets/contrato-arrendamiento/photo.svg"]], template: function ContratoArrendamientoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A1Aumenta tus posibilidades de aprobaci\u00F3n!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Aseg\u00FArate que todos los datos de tu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "documento sean legibles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-slider");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.titulo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], styles: ["body {\r\n    background-color: #2a84e9;\r\n}\r\n\r\n.blanco{\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n\r\n.space{\r\n    margin-top: 15%;\r\n}\r\n\r\n.padding0{\r\n    padding:0px;\r\n}\r\n\r\n.Contrato-de-Arrendam {\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    color: #ffffff;\r\n}\r\n\r\n.Aumenta-tus-posibil {\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #07ebef;\r\n}\r\n\r\n.Asegrate-que-todos {\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #ffffff;\r\n}\r\n\r\n.blanco{\r\n    color: white;\r\n}\r\n\r\n.prueba{\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJhdG8tYXJyZW5kYW1pZW50by9jb250cmF0by1hcnJlbmRhbWllbnRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29udHJhdG8tYXJyZW5kYW1pZW50by9jb250cmF0by1hcnJlbmRhbWllbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTg0ZTk7XHJcbn1cclxuXHJcbi5ibGFuY297XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLnBhZGRpbmcwe1xyXG4gICAgcGFkZGluZzowcHg7XHJcbn1cclxuXHJcbi5Db250cmF0by1kZS1BcnJlbmRhbSB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uQXVtZW50YS10dXMtcG9zaWJpbCB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIGNvbG9yOiAjMDdlYmVmO1xyXG59XHJcblxyXG4uQXNlZ3JhdGUtcXVlLXRvZG9zIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJsYW5jb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBydWViYXtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContratoArrendamientoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contrato-arrendamiento',
                templateUrl: './contrato-arrendamiento.component.html',
                styleUrls: ['./contrato-arrendamiento.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/doc-selector/doc-selector.component.ts":
/*!********************************************************!*\
  !*** ./src/app/doc-selector/doc-selector.component.ts ***!
  \********************************************************/
/*! exports provided: DocSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSelectorComponent", function() { return DocSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Interfaces_Interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interfaces/Interfaces */ "./src/app/Interfaces/Interfaces.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");









function DocSelectorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocSelectorComponent_div_7_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const button_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.seleccionarBoton($event, button_r1.valor, ctx_r2.boton.descripcion); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](button_r1.descripcion);
} }
class DocSelectorComponent {
    constructor(responseService, activatedRoute, route) {
        this.responseService = responseService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.boton = "Continuar";
        this.datos = new Array(4);
        this.objCatalog = new _Interfaces_Interfaces__WEBPACK_IMPORTED_MODULE_1__["objCatalogos"];
        this.jsonVariable = [
            {
                titulo: "¿Qué comprobante vas a subir?",
                datos: ["Recibo Nóminas", "Estado de cuenta", "Recibos de pago"]
            },
            {
                titulo: "¿Qué identificación vas a subir?",
                datos: ["INE", "Pasaporte", "Fm2 o Fm3"]
            }
        ];
        this.Titulo = this.jsonVariable[0]['titulo'];
    }
    ngOnInit() {
        let iddocto = this.activatedRoute.snapshot.params.iddocto;
        this.responseService.obtenerCatalogo(iddocto).subscribe(response => {
            this.objCatalog = response;
            console.log(this.objCatalog);
        });
    }
    seleccionarBoton(e, valor, descripcion) {
        this.descripcionSeleccionada = descripcion;
        this.valorSeleccionado = valor;
        let element = e.originalTarget;
        element.style.backgroundColor = "blue";
        let elementos = document.getElementsByClassName("btnSelector");
        for (let i = 0; i < elementos.length; i++) {
            if (element != elementos[i]) {
                elementos[i].style.backgroundColor = "white";
            }
        }
    }
    enviarDocumento() {
        let folio = this.activatedRoute.snapshot.params.folio;
        let iddocto = this.activatedRoute.snapshot.params.iddocto;
        let texto = this.descripcionSeleccionada;
    }
}
DocSelectorComponent.ɵfac = function DocSelectorComponent_Factory(t) { return new (t || DocSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DocSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocSelectorComponent, selectors: [["app-doc-selector"]], decls: 9, vars: 3, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "Que-comprobante-vas"], ["class", "col-12", "style", "text-align: center;", 4, "ngFor", "ngForOf"], [3, "button_title", "click"], [1, "col-12", 2, "text-align", "center"], [1, "btn-group-vertical"], [1, "btnSelector", 3, "click"]], template: function DocSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocSelectorComponent_div_7_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-confirm-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocSelectorComponent_Template_app_confirm_button_click_8_listener() { return ctx.enviarDocumento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Titulo, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.objCatalog.catalogos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_4__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmButtonComponent"]], styles: [".color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}  \r\n\r\n.color-back[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n}  \r\n\r\n.Que-comprobante-vas[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-bottom: 5% ;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    margin-bottom: 15% ;\r\n    border-radius: 17.5px;\r\n    border: solid 1px #0a3fc1;\r\n    background-color: #ffffff;\r\n    color: #0a3fc1;\r\n    width: 100%;\r\n    padding: 10px 44px; \r\n    display: block; \r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    background-color:#0a3fc1;\r\n    color: #ffffff;\r\n    outline:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jLXNlbGVjdG9yL2RvYy1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsY0FBYyxFQUFFLDZDQUE2QztJQUM3RCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2RvYy1zZWxlY3Rvci9kb2Mtc2VsZWN0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1oZWxwe1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSAgXHJcblxyXG4uY29sb3ItYmFja3tcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG59ICBcclxuXHJcbi5RdWUtY29tcHJvYmFudGUtdmFzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JSA7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JSA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNy41cHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMGEzZmMxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQ0cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIE1ha2UgdGhlIGJ1dHRvbnMgYXBwZWFyIGJlbG93IGVhY2ggb3RoZXIgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAtdmVydGljYWwgYnV0dG9uOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGEzZmMxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdXRsaW5lOjA7XHJcbn1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doc-selector',
                templateUrl: './doc-selector.component.html',
                styleUrls: ['./doc-selector.component.css']
            }]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/doc-selector4/doc-selector4.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/doc-selector4/doc-selector4.component.ts ***!
  \**********************************************************/
/*! exports provided: DocSelector4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSelector4Component", function() { return DocSelector4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class DocSelector4Component {
    constructor() {
        this.boton = "Continuar";
    }
    ngOnInit() {
    }
}
DocSelector4Component.ɵfac = function DocSelector4Component_Factory(t) { return new (t || DocSelector4Component)(); };
DocSelector4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocSelector4Component, selectors: [["app-doc-selector4"]], decls: 16, vars: 1, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "Que-comprobante-vas"], [1, "col-12", 2, "text-align", "center"], [1, "btn-group-vertical"], [3, "button_title"]], template: function DocSelector4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00BFQu\u00E9 comprobante vas a subir?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recibo de n\u00F3mina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Estado de cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Recibos de pago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-confirm-button", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}  \r\n\r\n.color-back[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n}  \r\n\r\n.Que-comprobante-vas[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-bottom: 5% ;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    margin-bottom: 15% ;\r\n    border-radius: 17.5px;\r\n    border: solid 1px #0a3fc1;\r\n    background-color: #ffffff;\r\n    color: #0a3fc1;\r\n    width: 100%;\r\n    padding: 10px 44px; \r\n    display: block; \r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    background-color:#0a3fc1;\r\n    color: #ffffff;\r\n    outline:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jLXNlbGVjdG9yNC9kb2Mtc2VsZWN0b3I0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQixFQUFFLGlCQUFpQjtJQUNyQyxjQUFjLEVBQUUsNkNBQTZDO0lBQzdELG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZG9jLXNlbGVjdG9yNC9kb2Mtc2VsZWN0b3I0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVscHtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn0gIFxyXG5cclxuLmNvbG9yLWJhY2t7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufSAgXHJcblxyXG4uUXVlLWNvbXByb2JhbnRlLXZhcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSUgO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSUgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTcuNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzBhM2ZjMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA0NHB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBNYWtlIHRoZSBidXR0b25zIGFwcGVhciBiZWxvdyBlYWNoIG90aGVyICovXHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsIGJ1dHRvbjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBhM2ZjMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3V0bGluZTowO1xyXG59XHJcbiAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocSelector4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doc-selector4',
                templateUrl: './doc-selector4.component.html',
                styleUrls: ['./doc-selector4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/doc-selector5/doc-selector5.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/doc-selector5/doc-selector5.component.ts ***!
  \**********************************************************/
/*! exports provided: DocSelector5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocSelector5Component", function() { return DocSelector5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class DocSelector5Component {
    constructor() {
        this.boton = "Continuar";
    }
    ngOnInit() {
    }
}
DocSelector5Component.ɵfac = function DocSelector5Component_Factory(t) { return new (t || DocSelector5Component)(); };
DocSelector5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocSelector5Component, selectors: [["app-doc-selector5"]], decls: 16, vars: 1, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "Que-comprobante-vas"], [1, "col-12", 2, "text-align", "center"], [1, "btn-group-vertical"], [3, "button_title"]], template: function DocSelector5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00BFQu\u00E9 identificaci\u00F3n vas a subir?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pasaporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fm2 o Fm3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-confirm-button", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}  \r\n\r\n.color-back[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n}  \r\n\r\n.Que-comprobante-vas[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-bottom: 5% ;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    margin-bottom: 15% ;\r\n    border-radius: 17.5px;\r\n    border: solid 1px #0a3fc1;\r\n    color: #0a3fc1;\r\n    background-color: #ffffff;\r\n    width: 100%;\r\n    padding: 10px 44px; \r\n    display: block; \r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n}  \r\n\r\n.btn-group-vertical[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    background-color:#0a3fc1;\r\n    color: #ffffff;\r\n    outline:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jLXNlbGVjdG9yNS9kb2Mtc2VsZWN0b3I1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQixFQUFFLGlCQUFpQjtJQUNyQyxjQUFjLEVBQUUsNkNBQTZDO0lBQzdELG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZG9jLXNlbGVjdG9yNS9kb2Mtc2VsZWN0b3I1LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVscHtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn0gIFxyXG5cclxuLmNvbG9yLWJhY2t7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufSAgXHJcblxyXG4uUXVlLWNvbXByb2JhbnRlLXZhcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSUgO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSUgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTcuNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzBhM2ZjMTtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCA0NHB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBNYWtlIHRoZSBidXR0b25zIGFwcGVhciBiZWxvdyBlYWNoIG90aGVyICovXHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwLXZlcnRpY2FsIGJ1dHRvbjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzBhM2ZjMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3V0bGluZTowO1xyXG59XHJcbiAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocSelector5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doc-selector5',
                templateUrl: './doc-selector5.component.html',
                styleUrls: ['./doc-selector5.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/domicilio-fiscal/domicilio-fiscal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/domicilio-fiscal/domicilio-fiscal.component.ts ***!
  \****************************************************************/
/*! exports provided: DomicilioFiscalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomicilioFiscalComponent", function() { return DomicilioFiscalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider.component */ "./src/app/slider/slider.component.ts");





class DomicilioFiscalComponent {
    constructor() {
        this.myObj = [
            {
                titulo: "Contrato de Arrendamiento",
                texto: '<span class="Normal-Text space2 azul"><b>¡AUMENTA TUS POSIBILIDADES DE APROBACIÓN!</b><br></span><span class="Normal-Text blanco">Asegúrate que todos los datos de tu <b>documento sean legibles.</b></span>',
                imagen: '<img src="../../assets/domicilio-fiscal/selfie.svg" width="90%">'
            },
            {
                titulo: "Fotografía de Domicilio Fiscal",
                texto: '<span class="Normal-Text space2 blanco">Asegúrate que la <b>fotografía salga clara</b> y el <br><b> número del domicilio </b> sea <b>visible.</b><br></span><span class="Normal-Text blanco">Es necesario que tengas <b>activados</b> los <b>servicios de localización</b> en tu teléfono.</span>',
                imagen: '<img src="../../assets/domicilio-fiscal/selfie.svg" width="90%">'
            },
            {
                titulo: "Selfie con identificación Oficial",
                texto: '<span class="Normal-Text space2 blanco">Asegúrate que tu <b>cara esté enfocada</b> y los datos de tu <b>identificación sean legibles.</b><br></span><span class="Normal-Text blanco">De esta manera agilizarás tu proceso y aumentarás tus posibilidades de aprobación.</span>',
                imagen: '<img src="../../assets/identificacion-oficial/selfie.svg" width="90%">'
            },
            {
                titulo: "Fotografía de Domicilio Operativo",
                texto: '<span class="Normal-Text space2 azul"><b>¡AUMENTA TUS POSIBILIDADES DE APROBACIÓN!</b><br></span><span class="Normal-Text blanco">Asegúrate que la <b>fotografía salga clara</b> y el <b>número del domicilio</b> sea <b>visible.</b><br>Es necesario que tengas <b>activados</b> los <b>servicios de localización</b> en tu teléfono.</span>',
                imagen: '<img src="../../assets/domicilio-fiscal/selfie.svg" width="90%">'
            },
            {
                titulo: "INE",
                texto: '<span class="Normal-Text space2 azul"><b>¡AUMENTA TUS POSIBILIDADES DE APROBACIÓN!</b><br></span><span class="Normal-Text blanco">Asegúrate que los datos de tu identificación sean <b>legibles</b><br>.Es necesario que subas una foto del <b>frente y una del reverso.</b></span>',
                imagen: '<img src="../../assets/INE/id.png" width="90%">'
            },
            {
                titulo: "Estado de cuenta",
                texto: '<span class="Normal-Text space2 azul"><b>¡AUMENTA TUS POSIBILIDADES DE APROBACIÓN!</b><br></span><span class="Normal-Text blanco">Asegúrate que todos los datos de tu <b>documento sean legibles.</b><br>Si tu documento está protegido, es necesario que nos <b>proporciones la contraseña</b> para poder revisarlo.</span>',
                imagen: '<img src="../../assets/estado-cuenta/photo.svg" width="90%">'
            }
        ];
        this.Titulo = this.myObj[2].titulo;
        this.Texto = this.myObj[2].texto;
        this.Imagen = this.myObj[2].imagen;
    }
    ngOnInit() {
    }
}
DomicilioFiscalComponent.ɵfac = function DomicilioFiscalComponent_Factory(t) { return new (t || DomicilioFiscalComponent)(); };
DomicilioFiscalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DomicilioFiscalComponent, selectors: [["app-domicilio-fiscal"]], decls: 12, vars: 3, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "col-12", "padding0"], [1, "space", "Title"], [1, "space3", 3, "innerHTML"], [1, "col-12", "imgStyle", 3, "innerHTML"]], template: function DomicilioFiscalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-slider");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.Texto, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.Imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_3__["SliderComponent"]], styles: ["body {\r\n    background-color: #2a84e9;\r\n}\r\n\r\n.help{\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n\r\n.space{\r\n    margin-top: 15%;\r\n}\r\n\r\n.space2{\r\n    margin-top: 5%;\r\n}\r\n\r\n.space3{\r\n    margin-top: 3%;\r\n}\r\n\r\n.padding0{\r\n    padding:0px;\r\n    text-align: center;\r\n}\r\n\r\n.Title {\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    color: #ffffff;\r\n}\r\n\r\n.Normal-Text{\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n}\r\n\r\n.imgStyle{\r\n    text-align: center;\r\n}\r\n\r\n.blanco{\r\n    color: white;\r\n}\r\n\r\n.azul{\r\n    color: #07ebef;\r\n}\r\n\r\n.help-color{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9taWNpbGlvLWZpc2NhbC9kb21pY2lsaW8tZmlzY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZG9taWNpbGlvLWZpc2NhbC9kb21pY2lsaW8tZmlzY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTg0ZTk7XHJcbn1cclxuXHJcbi5oZWxwe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3BhY2V7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5zcGFjZTJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLnNwYWNlM3tcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4ucGFkZGluZzB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLlRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5Ob3JtYWwtVGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxufVxyXG4gXHJcbi5pbWdTdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsYW5jb3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmF6dWx7XHJcbiAgICBjb2xvcjogIzA3ZWJlZjtcclxufVxyXG5cclxuLmhlbHAtY29sb3J7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DomicilioFiscalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-domicilio-fiscal',
                templateUrl: './domicilio-fiscal.component.html',
                styleUrls: ['./domicilio-fiscal.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/fail-upload/fail-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/fail-upload/fail-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FailUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailUploadComponent", function() { return FailUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class FailUploadComponent {
    constructor() {
        this.boton = "Intentar de Nuevo";
    }
    ngOnInit() {
    }
}
FailUploadComponent.ɵfac = function FailUploadComponent_Factory(t) { return new (t || FailUploadComponent)(); };
FailUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FailUploadComponent, selectors: [["app-fail-upload"]], decls: 12, vars: 1, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "color-help"], [1, "title"], [1, "center"], ["src", "../../assets/fail-upload/undraw.svg", "alt", ""], [3, "button_title"]], template: function FailUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A1Ups! Algo fall\u00F3 al subir el ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " documento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-confirm-button", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".title[_ngcontent-%COMP%] {\r\n    margin-top: 25%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFpbC11cGxvYWQvZmFpbC11cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mYWlsLXVwbG9hZC9mYWlsLXVwbG9hZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FailUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fail-upload',
                templateUrl: './fail-upload.component.html',
                styleUrls: ['./fail-upload.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function FaqComponent_mat_tree_node_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-tree-node", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r2.name, " ");
} }
function FaqComponent_mat_nested_tree_node_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nested-tree-node");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "toggle " + node_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", node_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
} }
const TREE_DATA = [
    {
        name: 'Pregunta 1',
        children: [
            { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        ]
    },
    {
        name: 'Pregunta 2',
        children: [
            { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        ]
    },
    {
        name: 'Pregunta 3',
        children: [
            { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        ]
    },
    {
        name: 'Pregunta 4',
        children: [
            { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        ]
    },
    {
        name: 'Pregunta 5',
        children: [
            { name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' },
        ]
    },
];
class FaqComponent {
    constructor() {
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_0__["NestedTreeControl"](node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNestedDataSource"]();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
        this.dataSource.data = TREE_DATA;
    }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 13, vars: 3, consts: [[1, "row"], [1, "col-6", "color-back"], [1, "col-6", "help"], [1, "col-12", "padding0"], [1, "space", "Title"], [1, "space"], [1, "example-tree", 3, "dataSource", "treeControl"], ["matTreeNodeToggle", "", 4, "matTreeNodeDef"], [4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [1, "mat-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["matTreeNodeOutlet", ""]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Preguntas Frecuentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-tree", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FaqComponent_mat_tree_node_11_Template, 4, 1, "mat-tree-node", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, FaqComponent_mat_nested_tree_node_12_Template, 9, 5, "mat-nested-tree-node", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_3__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeToggle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatNestedTreeNode"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeNodeOutlet"]], styles: ["body {\r\n    background-color: #2a84e9;\r\n}\r\n\r\n.help, .blanco{\r\n    font-size: 13px;\r\n    color: white;\r\n}\r\n\r\n.space{\r\n    margin-top: 15%;\r\n}\r\n\r\n.Title {\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    color: #ffffff;\r\n}\r\n\r\n.padding0{\r\n    padding:0px;\r\n    text-align: center;\r\n}\r\n\r\n.example-tree-invisible {\r\n    display: none;\r\n}\r\n\r\n.example-tree ul,\r\n.example-tree li {\r\nmargin-top: 0;\r\nmargin-bottom: 0;\r\nlist-style-type: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7QUFFQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLHFCQUFxQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhODRlOTtcclxufVxyXG5cclxuLmhlbHAsIC5ibGFuY297XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLlRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5wYWRkaW5nMHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS10cmVlLWludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbi5leGFtcGxlLXRyZWUgdWwsXHJcbi5leGFtcGxlLXRyZWUgbGkge1xyXG5tYXJnaW4tdG9wOiAwO1xyXG5tYXJnaW4tYm90dG9tOiAwO1xyXG5saXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "text-center"], ["src", "../../assets/footer/beble-logo.svg"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Impulsado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/h-slider/h-slider.component.ts":
/*!************************************************!*\
  !*** ./src/app/h-slider/h-slider.component.ts ***!
  \************************************************/
/*! exports provided: HSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSliderComponent", function() { return HSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");






class HSliderComponent {
    constructor() {
        this.boton = "Continuar";
    }
    ngOnInit() {
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
HSliderComponent.ɵfac = function HSliderComponent_Factory(t) { return new (t || HSliderComponent)(); };
HSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HSliderComponent, selectors: [["app-h-slider"]], decls: 15, vars: 2, consts: [[1, "row"], [1, "col-6"], [1, "col-6", 2, "text-align", "right"], [1, "col-12", "Cuntas-hojas-hay-e"], [1, "row", "h-Slider"], [1, "col-2", "blueColor1", "wPaddingR"], [1, "col-8", "wPaddingR", "wPaddingL"], ["thumbLabel", "", "tickInterval", "1", "min", "1", "max", "25", 3, "displayWith"], [1, "col-2", "blueColor2", "wPaddingL"], [3, "button_title"]], template: function HSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00BFCu\u00E1ntas hojas hay en tu Estado de cuenta?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-slider", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-confirm-button", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSlider"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmButtonComponent"]], styles: ["section[_ngcontent-%COMP%] {\r\n    display: table;\r\n  }\r\n  \r\n  .example-label[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    font-size: 14px;\r\n    margin-left: 8px;\r\n    min-width: 120px;\r\n  }\r\n  \r\n  .example-button-row[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: 490px;\r\n  }\r\n  \r\n  .example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n    margin: 8px 8px 8px 0;\r\n  }\r\n  \r\n  .example-flex-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n  }\r\n  \r\n  .example-button-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 120px;\r\n  }\r\n  \r\n  mat-slider[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 50px;\r\n  }\r\n  \r\n  .Cuntas-hojas-hay-e[_ngcontent-%COMP%] {\r\n    margin-top: 20%;\r\n    height: 24px;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\n  \r\n  .h-Slider[_ngcontent-%COMP%]{\r\n    margin-top: 30%;\r\n    margin-bottom: 10%;\r\n}\r\n  \r\n  .blueColor1[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    margin-top: 5%;\r\n    font-weight: bold;\r\n    text-align: right;\r\n}\r\n  \r\n  .blueColor2[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    margin-top: 5%;\r\n    font-weight: bold;\r\n}\r\n  \r\n  .wPaddingR[_ngcontent-%COMP%]{\r\n    padding-right: 0px;\r\n}\r\n  \r\n  .wPaddingL[_ngcontent-%COMP%]{\r\n    padding-left: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaC1zbGlkZXIvaC1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVGO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztFQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0VBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9oLXNsaWRlci9oLXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogNDkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXNsaWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4uQ3VudGFzLWhvamFzLWhheS1lIHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5oLVNsaWRlcntcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmJsdWVDb2xvcjF7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJsdWVDb2xvcjJ7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53UGFkZGluZ1J7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi53UGFkZGluZ0x7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-h-slider',
                templateUrl: './h-slider.component.html',
                styleUrls: ['./h-slider.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");




class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 28, vars: 4, consts: [[1, "row"], [1, "col-12"], ["mat-button", "", 1, "help-color", 3, "matMenuTriggerFor"], ["needHelp", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["uno", "matMenu"], ["mat-menu-item", ""], ["dos", "matMenu"], ["sub1", "matMenu"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFNecesitas ayuda?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Opci\u00F3n 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Opci\u00F3n 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "sub1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sub2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "sub2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "sub3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "sub1.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "sub1.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]], styles: [".Necesitas-ayuda[_ngcontent-%COMP%] {\r\n    width: 111px;\r\n    height: 19px;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    text-decoration: underline;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9oZWxwL2hlbHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5OZWNlc2l0YXMtYXl1ZGEge1xyXG4gICAgd2lkdGg6IDExMXB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/info-domicilio/info-domicilio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/info-domicilio/info-domicilio.component.ts ***!
  \************************************************************/
/*! exports provided: InfoDomicilioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDomicilioComponent", function() { return InfoDomicilioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class InfoDomicilioComponent {
    constructor() {
        this.boton = "Continuar";
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('#inputEstado').data('open', false);
        jquery__WEBPACK_IMPORTED_MODULE_1__('#inputEstado').click(function () {
            if (jquery__WEBPACK_IMPORTED_MODULE_1__('#inputEstado').data('open') == false) {
                var sel = document.getElementById("inputEstado");
                jquery__WEBPACK_IMPORTED_MODULE_1__('#inputEstado').data('open', true);
                sel.classList.remove("colorNormal");
                sel.classList.add("colorBlanco");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_1__('#inputEstado').data('open', false);
            }
        });
    }
    selectData(value) {
        var sel = document.getElementById("inputEstado");
        if (value == "") {
            sel.classList.add("colorBlanco");
            sel.classList.remove("colorNormal");
        }
        else {
            sel.classList.remove("colorBlanco");
            sel.classList.add("colorNormal");
        }
    }
}
InfoDomicilioComponent.ɵfac = function InfoDomicilioComponent_Factory(t) { return new (t || InfoDomicilioComponent)(); };
InfoDomicilioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoDomicilioComponent, selectors: [["app-info-domicilio"]], decls: 39, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "col-12", "Informacin-del-Dom"], [1, "row", "DivPosition"], [1, "col-6", "Rectangle1"], [1, "col-6", "Rectangle2"], [1, "col-12", "Aydenos-a-conocerlo"], [1, "row", "espacio3"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "label-input-text"], ["type", "text", "placeholder", "\u00A0\u00A0Ej. Herreros 2039", 1, "input-text"], ["type", "text", "placeholder", "\u00A0\u00A0Ej. 16700", 1, "input-text"], ["name", "inputEstado", "id", "inputEstado", 1, "input-text", "colorBlanco", "altura", 3, "change"], ["selectEstados", ""], ["value", ""], ["value", "DIF"], ["value", "AGS"], ["value", "BCN"], ["value", "BCS"], [3, "button_title"]], template: function InfoDomicilioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Informaci\u00F3n de Domicilio\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Aseg\u00FArate de ingresar la informaci\u00F3n del ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "domicilio que pusiste en tu solicitud.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Calle y N\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "C\u00F3digo Postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoDomicilioComponent_Template_select_change_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx.selectData(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Seleccione una opci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ciudad de M\u00E9xico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Aguascalientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Baja California");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Baja California Sur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-confirm-button", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_2__["BackComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".Informacin-del-Dom[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n  }\r\n\r\n\r\n\r\n.Rectangle1[_ngcontent-%COMP%] {\r\n    width: 86px;\r\n    height: 4px;\r\n    background-color: #07ebef;\r\n}\r\n\r\n\r\n\r\n.Rectangle2[_ngcontent-%COMP%] {\r\n    width: 172px;\r\n    height: 4px;\r\n    background-color: #c9ffef;\r\n}\r\n\r\n\r\n\r\n.DivPosition[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n\r\n\r\n.Aydenos-a-conocerlo[_ngcontent-%COMP%] {\r\n    padding:0px;\r\n    margin-top: 10%;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n\r\n\r\n.input-text[_ngcontent-%COMP%]{\r\n    border: 1px solid #0a3fc1 ;\r\n    background-color: #ffffff;\r\n    border-radius: 3px !important;\r\n    width: 100%;\r\n    margin-top: 16px;\r\n    height: 40px;\r\n}\r\n\r\n\r\n\r\ninput[_ngcontent-%COMP%]::placeholder{\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    letter-spacing: -0.24px;\r\n    color: #9c9c9c;\r\n}\r\n\r\n\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    padding-left: 10px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.colorBlanco[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    letter-spacing: -0.24px;\r\n    color: #9c9c9c !important;\r\n}\r\n\r\n\r\n\r\n.colorNormal[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n\r\n.altura[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n}\r\n\r\n\r\n\r\n.label-input-text[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n    position: absolute;\r\n    top : 8px;\r\n    background: #ffff;\r\n    margin-left: 8px;\r\n}\r\n\r\n\r\n\r\n.espacio3[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\r\n\r\n\r\n\r\n.espacio7[_ngcontent-%COMP%]{\r\n    margin-top: 6%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n\r\n\r\n.En-qu-tipo-de-inmu[_ngcontent-%COMP%] {\r\n    width: 258px;\r\n    height: 16px;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n\r\n\r\n.Padding0[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n\r\n\r\n\r\n.size[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1kb21pY2lsaW8vaW5mby1kb21pY2lsaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7Ozs7QUFJRjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7Ozs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7O0FBR0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7Ozs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOzs7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaW5mby1kb21pY2lsaW8vaW5mby1kb21pY2lsaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JbmZvcm1hY2luLWRlbC1Eb20ge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4uUmVjdGFuZ2xlMSB7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZWJlZjtcclxufVxyXG5cclxuLlJlY3RhbmdsZTIge1xyXG4gICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmZmVmO1xyXG59XHJcblxyXG4uRGl2UG9zaXRpb257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uQXlkZW5vcy1hLWNvbm9jZXJsbyB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG5cclxuLmlucHV0LXRleHR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGEzZmMxIDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgY29sb3I6ICM5YzljOWM7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbi5jb2xvckJsYW5jbyB7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzljOWM5YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3JOb3JtYWwge1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWx0dXJhe1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubGFiZWwtaW5wdXQtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcCA6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmVzcGFjaW8ze1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5lc3BhY2lvN3tcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5Fbi1xdS10aXBvLWRlLWlubXUge1xyXG4gICAgd2lkdGg6IDI1OHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjlweDtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG59XHJcblxyXG4uUGFkZGluZzB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5zaXple1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoDomicilioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-domicilio',
                templateUrl: './info-domicilio.component.html',
                styleUrls: ['./info-domicilio.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/info-domicilio2/info-domicilio2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/info-domicilio2/info-domicilio2.component.ts ***!
  \**************************************************************/
/*! exports provided: InfoDomicilio2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDomicilio2Component", function() { return InfoDomicilio2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class InfoDomicilio2Component {
    constructor() {
        this.boton = "Enviar información domiciliaria";
        this.lat = 19.658441;
        this.lng = -99.210617;
        this.zoom = 18;
    }
    ngOnInit() {
    }
}
InfoDomicilio2Component.ɵfac = function InfoDomicilio2Component_Factory(t) { return new (t || InfoDomicilio2Component)(); };
InfoDomicilio2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoDomicilio2Component, selectors: [["app-info-domicilio2"]], decls: 13, vars: 6, consts: [[1, "col-12"], [1, "Informacin-de-Domic", "space"], [1, "row", "DivPosition"], [1, "col-6", "Rectangle1"], [1, "row", "Por-ltimo-asgurate"], [1, "row", "space"], [3, "latitude", "zoom", "longitude"], [3, "latitude", "longitude"], [3, "button_title"]], template: function InfoDomicilio2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Informaci\u00F3n de Domicilio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Por \u00FAltimo as\u00E9gurate que el marcador sea lo m\u00E1s exacto posible y toca el bot\u00F3n de enviar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "agm-map", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "agm-marker", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-confirm-button", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("zoom", ctx.zoom)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".Informacin-de-Domic[_ngcontent-%COMP%] {\r\n    height: 24px;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\nagm-map[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n  }\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 7%;\r\n}\r\n.Rectangle1[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    width: 86px;\r\n    height: 4px;\r\n    background-color: #07ebef;\r\n}\r\n.Rectangle2[_ngcontent-%COMP%] {\r\n    width: 172px;\r\n    height: 4px;\r\n    background-color: #c9ffef;\r\n}\r\n.DivPosition[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n.Por-ltimo-asgurate[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    height: 38px;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n  }\r\n.Por-ltimo-asgurate[_ngcontent-%COMP%]   .text-style-1[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1kb21pY2lsaW8yL2luZm8tZG9taWNpbGlvMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0FBRUY7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjtBQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvaW5mby1kb21pY2lsaW8yL2luZm8tZG9taWNpbGlvMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkluZm9ybWFjaW4tZGUtRG9taWMge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxuLnNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbn1cclxuXHJcbi5SZWN0YW5nbGUxIHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgd2lkdGg6IDg2cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2ViZWY7XHJcbn1cclxuXHJcbi5SZWN0YW5nbGUyIHtcclxuICAgIHdpZHRoOiAxNzJweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZmZlZjtcclxufVxyXG5cclxuLkRpdlBvc2l0aW9ue1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLlBvci1sdGltby1hc2d1cmF0ZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgfVxyXG4gIFxyXG4gIC5Qb3ItbHRpbW8tYXNndXJhdGUgLnRleHQtc3R5bGUtMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoDomicilio2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-domicilio2',
                templateUrl: './info-domicilio2.component.html',
                styleUrls: ['./info-domicilio2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/info-solicitante/info-solicitante.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/info-solicitante/info-solicitante.component.ts ***!
  \****************************************************************/
/*! exports provided: InfoSolicitanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoSolicitanteComponent", function() { return InfoSolicitanteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");





class InfoSolicitanteComponent {
    constructor() {
        this.boton = "Subir Información";
        this.jsonVariable1 = [
            {
                nombre: "Casa"
            },
            {
                nombre: "Edificio"
            },
            {
                nombre: "Local comercial independiente"
            },
            {
                nombre: "Local comercial en plaza"
            }
        ];
        this.jsonVariable2 = [
            {
                nombre: "Propio"
            },
            {
                nombre: "Rentado"
            },
            {
                nombre: "Prestado"
            }
        ];
        this.btn11 = this.jsonVariable1[0]['nombre'];
        this.btn12 = this.jsonVariable1[1]['nombre'];
        this.btn13 = this.jsonVariable1[2]['nombre'];
        this.btn14 = this.jsonVariable1[3]['nombre'];
        this.btn21 = this.jsonVariable2[0]['nombre'];
        this.btn22 = this.jsonVariable2[1]['nombre'];
        this.btn23 = this.jsonVariable2[2]['nombre'];
    }
    ngOnInit() {
    }
}
InfoSolicitanteComponent.ɵfac = function InfoSolicitanteComponent_Factory(t) { return new (t || InfoSolicitanteComponent)(); };
InfoSolicitanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoSolicitanteComponent, selectors: [["app-info-solicitante"]], decls: 45, vars: 8, consts: [[1, "row"], [1, "col-6"], [1, "col-6", "color-help"], [1, "col-12", "Informacin-del-Soli"], [1, "row", "DivPosition"], [1, "col-6", "Rectangle1"], [1, "col-6", "Rectangle2"], [1, "col-12", "Aydenos-a-conocerlo"], [1, "row", "espacio3"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "label-input-text"], ["type", "text", "placeholder", "\u00A0\u00A0Nombre que aparece en la escritura", 1, "input-text"], ["type", "text", "placeholder", "\u00A0\u00A0Ej. Venta de herramientas al mayoreo", 1, "input-text"], [1, "En-qu-tipo-de-inmu", "espacio7"], [1, "col-sm-12", "col-md-12", "col-lg-12", "Padding0"], [1, "btn-group", "size"], [1, "FirstGroup"], [3, "button_title"]], template: function InfoSolicitanteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Informaci\u00F3n del Solicitante\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Ay\u00FAdenos a conocerlo mejor, por favor llene todos los campos del formulario.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Propietario del inmueble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Giro del Negocio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00BFEn qu\u00E9 tipo de inmueble se encuentra su negocio?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u00BFCu\u00E1l es el estado de propiedad del inmueble?\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-confirm-button", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btn23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_2__["HelpComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmButtonComponent"]], styles: [".Informacin-del-Soli[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n  }\r\n\r\n.color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}\r\n\r\n.Rectangle1[_ngcontent-%COMP%] {\r\n    width: 86px;\r\n    height: 4px;\r\n    background-color: #07ebef;\r\n}\r\n\r\n.Rectangle2[_ngcontent-%COMP%] {\r\n    width: 172px;\r\n    height: 4px;\r\n    background-color: #c9ffef;\r\n}\r\n\r\n.DivPosition[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.Aydenos-a-conocerlo[_ngcontent-%COMP%] {\r\n    padding:0px;\r\n    margin-top: 5%;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.input-text[_ngcontent-%COMP%]{\r\n    border: 1px solid #0a3fc1 ;\r\n    border-radius: 3px !important;\r\n    width: 100%;\r\n    margin-top: 16px;\r\n}\r\n\r\n.label-input-text[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n    position: absolute;\r\n    top : 8px;\r\n    background: #ffff;\r\n    margin-left: 8px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder{\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    letter-spacing: -0.24px;\r\n    color: #9c9c9c;\r\n}\r\n\r\n.espacio3[_ngcontent-%COMP%]{\r\n    margin-top: 3%;\r\n}\r\n\r\n.espacio7[_ngcontent-%COMP%]{\r\n    margin-top: 6%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.En-qu-tipo-de-inmu[_ngcontent-%COMP%] {\r\n    width: 258px;\r\n    height: 16px;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.FirstGroup[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    height: 40px;\r\n    border-radius: 3px;\r\n    border: solid 1px #0a3fc1;\r\n    background-color: #ffffff;\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.24px;\r\n    text-align: center;\r\n    color: #29292a;\r\n}\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\r\n    border-right: none; \r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n    background-color:#0a3fc1;\r\n    color: #ffffff;\r\n    outline:0;\r\n}\r\n\r\n.Padding0[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n}\r\n\r\n.size[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby1zb2xpY2l0YW50ZS9pbmZvLXNvbGljaXRhbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0IsRUFBRSwyQkFBMkI7RUFDakQ7O0FBRUY7SUFDSSx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pbmZvLXNvbGljaXRhbnRlL2luZm8tc29saWNpdGFudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5JbmZvcm1hY2luLWRlbC1Tb2xpIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIH1cclxuXHJcbi5jb2xvci1oZWxwe1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufSAgXHJcblxyXG4uUmVjdGFuZ2xlMSB7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3ZWJlZjtcclxufVxyXG5cclxuLlJlY3RhbmdsZTIge1xyXG4gICAgd2lkdGg6IDE3MnB4O1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmZmVmO1xyXG59XHJcblxyXG4uRGl2UG9zaXRpb257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uQXlkZW5vcy1hLWNvbm9jZXJsbyB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG59XHJcblxyXG4uaW5wdXQtdGV4dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTNmYzEgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5sYWJlbC1pbnB1dC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjlweDtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wIDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXJ7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzljOWM5YztcclxufVxyXG5cclxuLmVzcGFjaW8ze1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbn1cclxuXHJcbi5lc3BhY2lvN3tcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5Fbi1xdS10aXBvLWRlLWlubXUge1xyXG4gICAgd2lkdGg6IDI1OHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjlweDtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG59XHJcblxyXG4uRmlyc3RHcm91cCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzBhM2ZjMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyOTI5MmE7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lOyAvKiBQcmV2ZW50IGRvdWJsZSBib3JkZXJzICovXHJcbiAgfVxyXG5cclxuLmJ0bi1ncm91cCBidXR0b246Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwYTNmYzE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6MDtcclxufVxyXG5cclxuLlBhZGRpbmcwe1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uc2l6ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoSolicitanteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-solicitante',
                templateUrl: './info-solicitante.component.html',
                styleUrls: ['./info-solicitante.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
        this.progress(100);
    }
    progress(num) {
        let progressBar = document.getElementsByClassName('progress-bar2')[0];
        setInterval(() => {
            const computedStyle = getComputedStyle(progressBar);
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
            if (width <= num) {
                let algo = width + .1;
                progressBar.style.setProperty('--width', algo.toString());
            }
        }, 5);
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 9, vars: 0, consts: [[1, "div-Centered"], [1, "title"], [1, "img-Centered", 2, "text-align", "center"], [1, "progress-bar2"], [1, "normal-Text"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tu foto se est\u00E1 subiendo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Este proceso puede tomar unos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " cuantos segundos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".div-Centered[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.progress-bar2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 80%;\r\n    height: 61px;\r\n    border-radius: 5px;\r\n    border: solid 4px #3f3d56;\r\n    color: white;\r\n    display: inline-block;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.progress-bar2[_ngcontent-%COMP%]::before {\r\n\tcontent: attr(data-label);\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tposition: absolute;\r\n\tleft: .1em;\r\n\ttop: .1em;\r\n\tbottom: .1em;\r\n\twidth: calc(var(--width, 0) * 1%);\r\n\tmin-width: 2rem;\r\n\tmax-width: calc(100% - .2em);\r\n\tbackground-color: #2ae9a8;\r\n\tpadding: 1em;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    width: 261px;\r\n    height: 24px;\r\n    font-family: Nunito;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.img-Centered[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n    text-align: center;\r\n}\r\n\r\n.normal-Text[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    margin-top: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0FBRUE7Q0FDRCx5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFNBQVM7Q0FDVCxZQUFZO0NBQ1osaUNBQWlDO0NBQ2pDLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1DZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA2MXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCA0cHggIzNmM2Q1NjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLWJhcjI6OmJlZm9yZSB7XHJcblx0Y29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IC4xZW07XHJcblx0dG9wOiAuMWVtO1xyXG5cdGJvdHRvbTogLjFlbTtcclxuXHR3aWR0aDogY2FsYyh2YXIoLS13aWR0aCwgMCkgKiAxJSk7XHJcblx0bWluLXdpZHRoOiAycmVtO1xyXG5cdG1heC13aWR0aDogY2FsYygxMDAlIC0gLjJlbSk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJhZTlhODtcclxuXHRwYWRkaW5nOiAxZW07XHJcbn0gIFxyXG5cclxuLnRpdGxlIHtcclxuICAgIHdpZHRoOiAyNjFweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5pbWctQ2VudGVyZWR7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5vcm1hbC1UZXh0IHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-pending/main-pending.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-pending/main-pending.component.ts ***!
  \********************************************************/
/*! exports provided: MainPendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPendingComponent", function() { return MainPendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Interfaces_Interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interfaces/Interfaces */ "./src/app/Interfaces/Interfaces.ts");
/* harmony import */ var _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Interfaces/Interfaces-Out */ "./src/app/Interfaces/Interfaces-Out.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options/options.component */ "./src/app/options/options.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");









function MainPendingComponent_div_0_div_19_div_4_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Es necesario hacerlo en el lugar especificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPendingComponent_div_0_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainPendingComponent_div_0_div_19_div_4_span_7_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPendingComponent_div_0_div_19_div_4_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.cargarDocto(item_r4.idtipo, item_r4.iddocto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card-", item_r4.iddocto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.idlugar != 0);
} }
function MainPendingComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VENCE EN [3] D\u00CDAS.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainPendingComponent_div_0_div_19_div_4_Template, 10, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.jsonDocuments.documentos.documento);
} }
function MainPendingComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A\u00FAn no has subido ning\u00FAn documento. Ve a la pesta\u00F1a de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Documentos Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " para comenzar con el proceso.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPendingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Aqu\u00ED podr\u00E1s subir la documentaci\u00F3n necesaria para obtener tu credito con Credito F\u00E1cil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recuerda que tienes hasta el [fecha de vencimiento] para subir todos tus documentos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPendingComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.cambiarVista(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPendingComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cambiarVista(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainPendingComponent_div_0_div_19_Template, 5, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainPendingComponent_div_0_div_20_Template, 9, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-options", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.pending, "] documentos pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r0.sends, "] documentos subidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.vista == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.vista == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionF", ctx_r0.optionF2);
} }
class MainPendingComponent {
    constructor(responseService, activatedRoute, route) {
        this.responseService = responseService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.requestValidacion = new _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_2__["objDigitosValidacion"];
        this.objResponseVal = new _Interfaces_Interfaces__WEBPACK_IMPORTED_MODULE_1__["objIniciaProcesoOnboarding"];
        this.jsonVariable = [
            {
                dato: '<img class="imgOptions" src="../../assets/options/bell-1.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/group-2 (1).svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions"src="../../assets/options/group-3 (1).svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/user-1.svg" width="20%">'
            },
        ];
        this.optionF2 = this.jsonVariable[0].dato + this.jsonVariable[1].dato + this.jsonVariable[2].dato + this.jsonVariable[3].dato;
        this.vista = 1;
    }
    ngOnInit() {
        this.requestValidacion.digitos = this.activatedRoute.snapshot.params.number;
        this.requestValidacion.idFolio = this.activatedRoute.snapshot.params.folio;
        this.requestValidacion.tipo = this.activatedRoute.snapshot.params.tipo;
        this.responseService.validateNumbers(this.requestValidacion).subscribe(response => {
            console.log(response);
            this.objResponseVal = response;
            if (this.objResponseVal.responseCode != "0") {
                window.alert("Lo sentimos, el token ingresado es incorrecto");
                this.route.navigate(["/welcome1/" + this.requestValidacion.tipo + "/" + this.requestValidacion.idFolio]);
            }
            else {
                this.jsonDocuments = JSON.parse(this.objResponseVal.JsonDocto);
                console.log(this.jsonDocuments.documentos.documento);
                let pendientes = 0, enviados = 0;
                for (let i = 0; i < this.jsonDocuments.documentos.documento.length; i++) {
                    if (this.jsonDocuments.documentos.documento[i].benviado == "0") {
                        pendientes++;
                    }
                    else {
                        enviados++;
                    }
                }
                this.sends = enviados;
                this.pending = pendientes;
            }
        });
    }
    cargarDocto(tipo, idDocto) {
        alert(idDocto);
        switch (tipo) {
            case "1":
                console.log("Foto");
                break;
            case "2":
                console.log("Foto y pdf");
                break;
            case "3":
                console.log("texto");
                break;
            case "4":
                console.log("Combo");
                let doc = this.jsonDocuments.documentos.documento.find(x => x.iddocto == idDocto);
                this.route.navigate(["/doc-selector/" + this.requestValidacion.idFolio + "/" + this.requestValidacion.tipo + "/" + this.requestValidacion.digitos + "/" + doc.iddocto + "/" + doc.iddoctodep + "/" + doc.valordep]);
                break;
        }
    }
    cambiarVista(num) {
        this.vista = num;
    }
}
MainPendingComponent.ɵfac = function MainPendingComponent_Factory(t) { return new (t || MainPendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainPendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPendingComponent, selectors: [["app-main-pending"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "row", "color-Blue"], [1, "col-6"], [1, "Tittle"], [1, "Nombre-Usuario"], [1, "col-12"], [1, "subirInfo"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "Documentos-pendie", 3, "click"], ["class", "row space", 4, "ngIf"], [1, "options-position"], [3, "optionF"], [1, "row", "space"], [1, "Das-restantes"], ["class", "col-12 salto", 3, "class", 4, "ngFor", "ngForOf"], [1, "col-12", "salto"], [1, "mat-card"], [1, "cardTitulo"], [1, "cardContent"], [1, "cardFooter"], [1, "subirDocumento", 3, "click"], [1, "textoSubidos"], [1, "fuerte"], [1, "col-12", "text-center"], ["src", "../../assets/main-pending/empty.svg"]], template: function MainPendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainPendingComponent_div_0_Template, 23, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.objResponseVal.responseCode == "0");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _options_options_component__WEBPACK_IMPORTED_MODULE_6__["OptionsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardFooter"]], styles: [".Nombre-Usuario[_ngcontent-%COMP%] {    \r\n    font-family: Nunito;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.58px;\r\n    color: #ffffff;\r\n  }\r\n\r\n.space-down[_ngcontent-%COMP%]{\r\nmargin-bottom: 100px;  \r\n}\r\n\r\n.color-Blue[_ngcontent-%COMP%]{\r\nbackground: #2a84e9;\r\npadding: 10%;\r\nposition: absolute;\r\nleft: 0;\r\ntop: 0;\r\nheight: 35vh;\r\n\r\n  }\r\n\r\n.subirInfo[_ngcontent-%COMP%] {\r\n    \r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.31px;\r\n    color: #ffffff;\r\n  }\r\n\r\n.Documentos-pendie[_ngcontent-%COMP%] {\r\n    border: 1px white solid;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    height: 34px;\r\n  }\r\n\r\n.btn-group[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n  }\r\n\r\n.color-Red[_ngcontent-%COMP%]{\r\n    background: red;\r\n    \r\n    left : 0;\r\n    padding: 5%;\r\n      }\r\n\r\n.space[_ngcontent-%COMP%]{\r\n        margin-top: 35vh;\r\n      }\r\n\r\n.Das-restantes[_ngcontent-%COMP%] {\r\n\r\n        font-family: Nunito;\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        line-height: normal;\r\n        letter-spacing: -0.34px;\r\n        color: #c10a0a;\r\n      }\r\n\r\n.cardTitulo[_ngcontent-%COMP%] {\r\n        \r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-weight: 600;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        line-height: normal;\r\n        letter-spacing: -0.38px;\r\n        color: #161616;\r\n      }\r\n\r\n.cardContent[_ngcontent-%COMP%] {        \r\n        font-family: Nunito;\r\n        font-size: 12px;\r\n        font-weight: normal;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        line-height: normal;\r\n        letter-spacing: -0.29px;\r\n        color: #5a5a5a;\r\n      }\r\n\r\n.cardFooter[_ngcontent-%COMP%] {\r\n        font-family: Nunito;\r\n        font-size: 10px;\r\n        font-weight: normal;\r\n        font-stretch: normal;\r\n        font-style: italic;\r\n        line-height: normal;\r\n        letter-spacing: -0.24px;\r\n        color: #c10a0a;\r\n      }\r\n\r\n.cardFooterGreen[_ngcontent-%COMP%] {\r\n        font-family: Nunito;\r\n        font-size: 10px;\r\n        font-weight: normal;\r\n        font-stretch: normal;\r\n        font-style: italic;\r\n        line-height: normal;\r\n        letter-spacing: -0.24px;\r\n        color: #2fc10a;\r\n      }\r\n\r\n.subirDocumento[_ngcontent-%COMP%] {    \r\n        font-family: Nunito;\r\n        font-size: 16px;\r\n        font-weight: bold;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        letter-spacing: -0.38px;\r\n        color: #0a3fc1;\r\n        position: absolute;\r\n        right: 10px;\r\n        bottom: 5px;\r\n        \r\n      }\r\n\r\n.salto[_ngcontent-%COMP%]{\r\n          margin-top: 10px;\r\n          \r\n      }\r\n\r\n.salto[_ngcontent-%COMP%]:last-child{\r\n        margin-bottom: 100px !important;\r\n      }\r\n\r\n.textoSubidos[_ngcontent-%COMP%]{\r\n        font-family: Nunito;\r\n        font-size: 14px;\r\n        font-weight: normal;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        line-height: normal;\r\n        letter-spacing: -0.31px;\r\n        text-align: center;\r\n        color: #313131;\r\n      }\r\n\r\n.fuerte[_ngcontent-%COMP%] {\r\n        font-weight: 800;\r\n      }\r\n\r\n.options-position[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        margin-left: 27%;\r\n        bottom: -10px;\r\n        transform: translate(-50%, -50%);\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wZW5kaW5nL21haW4tcGVuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0FBRUY7QUFDQSxvQkFBb0I7QUFDcEI7O0FBQ0U7QUFDRixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsTUFBTTtBQUNOLFlBQVk7O0VBRVY7O0FBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7O0FBR0E7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7QUFFQTtNQUNJLFdBQVc7RUFDZjs7QUFFQTtJQUNFLGVBQWU7O0lBRWYsUUFBUTtJQUNSLFdBQVc7TUFDVDs7QUFFQTtRQUNFLGdCQUFnQjtNQUNsQjs7QUFHQTs7UUFFRSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsY0FBYztNQUNoQjs7QUFFQTs7UUFFRSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsY0FBYztNQUNoQjs7QUFHQTtRQUNFLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixjQUFjO01BQ2hCOztBQUdBO1FBQ0UsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGNBQWM7TUFDaEI7O0FBRUE7UUFDRSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsY0FBYztNQUNoQjs7QUFFQTtRQUNFLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7O01BRWI7O0FBR0E7VUFDSSxnQkFBZ0I7O01BRXBCOztBQUVBO1FBQ0UsK0JBQStCO01BQ2pDOztBQUVBO1FBQ0UsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixjQUFjO01BQ2hCOztBQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztBQUVBO1FBQ0UsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZ0NBQWdDO0lBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wZW5kaW5nL21haW4tcGVuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5vbWJyZS1Vc3VhcmlvIHsgICAgXHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNThweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbi5zcGFjZS1kb3due1xyXG5tYXJnaW4tYm90dG9tOiAxMDBweDsgIFxyXG59XHJcbiAgLmNvbG9yLUJsdWV7XHJcbmJhY2tncm91bmQ6ICMyYTg0ZTk7XHJcbnBhZGRpbmc6IDEwJTtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiAwO1xyXG50b3A6IDA7XHJcbmhlaWdodDogMzV2aDtcclxuXHJcbiAgfVxyXG5cclxuICAuc3ViaXJJbmZvIHtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcblxyXG4gIC5Eb2N1bWVudG9zLXBlbmRpZSB7XHJcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBzb2xpZDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOXB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1ncm91cHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29sb3ItUmVke1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgXHJcbiAgICBsZWZ0IDogMDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3BhY2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzV2aDtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIC5EYXMtcmVzdGFudGVzIHtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgY29sb3I6ICNjMTBhMGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJkVGl0dWxvIHtcclxuICAgICAgICBcclxuICAgICAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgICAgLmNhcmRDb250ZW50IHsgICAgICAgIFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICAgICAgY29sb3I6ICM1YTVhNWE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAuY2FyZEZvb3RlciB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICBjb2xvcjogI2MxMGEwYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmRGb290ZXJHcmVlbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICBjb2xvcjogIzJmYzEwYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1YmlyRG9jdW1lbnRvIHsgICAgXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICBib3R0b206IDVweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgIFxyXG5cclxuICAgICAgLnNhbHRve1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2FsdG86bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dG9TdWJpZG9ze1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjMxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZnVlcnRlIHtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAub3B0aW9ucy1wb3NpdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICAgICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-pending',
                templateUrl: './main-pending.component.html',
                styleUrls: ['./main-pending.component.css']
            }]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/options/options.component.ts":
/*!**********************************************!*\
  !*** ./src/app/options/options.component.ts ***!
  \**********************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OptionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], inputs: { optionF: "optionF" }, decls: 2, vars: 1, consts: [[1, "Rectangle"], [1, "space1", 3, "innerHTML"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.optionF, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".Rectangle[_ngcontent-%COMP%] {\r\n    width: 140%;\r\n    height: 60px;\r\n    border-radius: 28px;\r\n    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n  \r\n.space1[_ngcontent-%COMP%]{\r\n    padding-left: 8%;\r\n    margin-top: 7%;\r\n}\r\n  \r\n.right-space[_ngcontent-%COMP%]{\r\n    margin-right: 4%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFJQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlY3RhbmdsZSB7XHJcbiAgICB3aWR0aDogMTQwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA5cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuICBcclxuLnNwYWNlMXtcclxuICAgIHBhZGRpbmctbGVmdDogOCU7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQtc3BhY2V7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-options',
                templateUrl: './options.component.html',
                styleUrls: ['./options.component.css']
            }]
    }], function () { return []; }, { optionF: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/perfil/perfil.component.ts":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../options/options.component */ "./src/app/options/options.component.ts");




class PerfilComponent {
    constructor() {
        this.boton = "Ir a documentos pendientes";
        this.jsonVariable = [
            {
                dato: '<img class="imgOptions" src="../../assets/options/bell-1.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/file-1.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions"src="../../assets/options/group-3 (1).svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/group-4.svg" width="20%">'
            },
        ];
        this.optionF2 = this.jsonVariable[0].dato + this.jsonVariable[1].dato + this.jsonVariable[2].dato + this.jsonVariable[3].dato;
    }
    ngOnInit() {
    }
}
PerfilComponent.ɵfac = function PerfilComponent_Factory(t) { return new (t || PerfilComponent)(); };
PerfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerfilComponent, selectors: [["app-perfil"]], inputs: { objetoValidacion: "objetoValidacion" }, decls: 23, vars: 2, consts: [[1, "row"], [1, "col-xs-4", "Oval"], [1, "col-xs-1"], [1, "col-xs-7", "divName"], [1, "Nombre-Apellido"], [1, "Trmite-para-Clien"], [1, "row", "Editar-foto"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "Llevas-un-0-de-docu"], [1, "row", "space"], [1, "col-8", "Recuerda-que-tienes"], [1, "col-xs-4", "Oval2"], [1, "porcentaje"], [3, "button_title"], [1, "options-position"], [3, "optionF"]], template: function PerfilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre, Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tr\u00E1mite para ?[Cliente]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Editar Foto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Llevas un 0% de documentos subidos\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Recuerda que tienes hasta el [fecha de vencimiento] para terminar de subirlos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-confirm-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-options", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionF", ctx.optionF2);
    } }, directives: [_confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmButtonComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_2__["OptionsComponent"]], styles: [".Oval[_ngcontent-%COMP%] {\r\n    width: 83px;\r\n    height: 83px;\r\n    border-radius: 50%;\r\n    background-color: #d8d8d8;\r\n}\r\n\r\n.Oval2[_ngcontent-%COMP%]{\r\n    width: 83px;\r\n    height: 83px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    background-color: #c9ffef;\r\n}\r\n\r\n.Nombre-Apellido[_ngcontent-%COMP%] {\r\n    margin-top: 45%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.Trmite-para-Clien[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #2a84e9;\r\n}\r\n\r\n.divName[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n}\r\n\r\n.Editar-foto[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.24px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.Llevas-un-0-de-docu[_ngcontent-%COMP%] {\r\n    margin-top: 15%;\r\n    text-align: center;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.Recuerda-que-tienes[_ngcontent-%COMP%] {\r\n    width: 171px;\r\n    height: 57px;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 5%;\r\n}\r\n\r\n.porcentaje[_ngcontent-%COMP%]{\r\n    margin-top: 27%;\r\n    font-family: Nunito;\r\n    font-size: 32px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.77px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.options-position[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    margin-left: 27%;\r\n    bottom: -10px;\r\n    transform: translate(-50%, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5PdmFsIHtcclxuICAgIHdpZHRoOiA4M3B4O1xyXG4gICAgaGVpZ2h0OiA4M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxufVxyXG5cclxuLk92YWwye1xyXG4gICAgd2lkdGg6IDgzcHg7XHJcbiAgICBoZWlnaHQ6IDgzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzlmZmVmO1xyXG59XHJcblxyXG4uTm9tYnJlLUFwZWxsaWRvIHtcclxuICAgIG1hcmdpbi10b3A6IDQ1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40M3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5Ucm1pdGUtcGFyYS1DbGllbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICMyYTg0ZTk7XHJcbn1cclxuXHJcbi5kaXZOYW1le1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5FZGl0YXItZm90byB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5MbGV2YXMtdW4tMC1kZS1kb2N1IHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5SZWN1ZXJkYS1xdWUtdGllbmVzIHtcclxuICAgIHdpZHRoOiAxNzFweDtcclxuICAgIGhlaWdodDogNTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG5cclxuLnNwYWNle1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5wb3JjZW50YWple1xyXG4gICAgbWFyZ2luLXRvcDogMjclO1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc3cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG5cclxuXHJcbi5vcHRpb25zLXBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perfil',
                templateUrl: './perfil.component.html',
                styleUrls: ['./perfil.component.css']
            }]
    }], function () { return []; }, { objetoValidacion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/seccion-ayuda/seccion-ayuda.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/seccion-ayuda/seccion-ayuda.component.ts ***!
  \**********************************************************/
/*! exports provided: SeccionAyudaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionAyudaComponent", function() { return SeccionAyudaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _back_back_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back/back.component */ "./src/app/back/back.component.ts");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/options.component */ "./src/app/options/options.component.ts");





class SeccionAyudaComponent {
    constructor() {
        this.boton = "Enviar mensaje de Whatsapp";
        this.jsonVariable = [
            {
                dato: '<img class="imgOptions" src="../../assets/options/bell-1.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/file-1.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions"src="../../assets/options/group-3.svg" width="20%">'
            },
            {
                dato: '<img class="imgOptions" src="../../assets/options/user-1.svg" width="20%">'
            },
        ];
        this.optionF2 = this.jsonVariable[0].dato + this.jsonVariable[1].dato + this.jsonVariable[2].dato + this.jsonVariable[3].dato;
    }
    ngOnInit() {
    }
}
SeccionAyudaComponent.ɵfac = function SeccionAyudaComponent_Factory(t) { return new (t || SeccionAyudaComponent)(); };
SeccionAyudaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeccionAyudaComponent, selectors: [["app-seccion-ayuda"]], decls: 12, vars: 2, consts: [[1, "Centro-de-ayuda"], [1, "Por-favor-escrbeno"], [1, "space"], [3, "button_title"], [1, "imgStyle"], ["src", "../../assets/seccion-ayuda/undraw-work-time-lhoj.svg", "alt", "", "width", "98%"], [1, "options-position"], [3, "optionF"]], template: function SeccionAyudaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Centro de ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Por favor, escr\u00EDbenos tu problema y te responderemos lo antes posible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-confirm-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-options", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionF", ctx.optionF2);
    } }, directives: [_back_back_component__WEBPACK_IMPORTED_MODULE_1__["BackComponent"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmButtonComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_3__["OptionsComponent"]], styles: [".Centro-de-ayuda[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    font-family: Nunito;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.58px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.Por-favor-escrbeno[_ngcontent-%COMP%] {\r\n    margin-top: 3%;\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.34px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.space[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.imgStyle[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n}\r\n\r\n.options-position[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    margin-left: 27%;\r\n    bottom: -10px;\r\n    transform: translate(-50%, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjY2lvbi1heXVkYS9zZWNjaW9uLWF5dWRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL3NlY2Npb24tYXl1ZGEvc2VjY2lvbi1heXVkYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNlbnRyby1kZS1heXVkYSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41OHB4O1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5Qb3ItZmF2b3ItZXNjcmJlbm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5zcGFjZXtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uaW1nU3R5bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuXHJcbi5vcHRpb25zLXBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI3JTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeccionAyudaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seccion-ayuda',
                templateUrl: './seccion-ayuda.component.html',
                styleUrls: ['./seccion-ayuda.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/general.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class GeneralService {
    //private url = http://3.135.198.99:8088""  //PROD
    constructor(client) {
        this.client = client;
        this.url = "http://localhost:60581"; // DEV
    }
    getResponse() {
        return this.client.get("/Service1.svc/InicioPortal/CM210706007538");
    }
    getWelcomeMessage(folio) {
        return this.client.get("/Service1.svc/InicioPortal/" + folio);
    }
    getPantallaBienvenida(folio) {
        return this.client.get("/Service1.svc/PantallaBienvenida/" + folio);
    }
    setDatosUsuarioLogin(datosPeticion) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var json = JSON.stringify(datosPeticion);
        var jsonData = "{\"jsonData\":" + json + "}";
        const body = datosPeticion;
        return this.client.post("/Service1.svc/SetCredencialesLogin", body, { headers: headers });
    }
    validateNumbers(objet) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        const body = objet;
        return this.client.post("/Service1.svc/ValidacionCelular", body, { headers: headers });
    }
    obtenerCatalogo(idDocto) {
        return this.client.get("/Service1.svc/ObtieneValoresDocto/" + idDocto);
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class SliderComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.trigger, .puerta').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.slider').toggleClass('close');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.slider').toggleClass('puerta');
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.trigger, #noEsconder').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.slider').toggleClass('close');
            jquery__WEBPACK_IMPORTED_MODULE_1__('.slider').toggleClass('puerta');
        });
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 15, vars: 0, consts: [[1, "row"], [1, "col-12", "slider", "close", "puerta"], ["src", "../../assets/arrow.png", "width", "10%"], [1, "div-Centered", 2, "color", "black"], [1, "col-6", "textStyle"], ["id", "noEsconder", 1, "btnStyle", 2, "text-align", "center"], ["src", "../../assets/options/group-2.svg", "width", "102%", 2, "margin-left", "-1%", "margin-top", "2%"], ["id", "noEsconder", 1, "btnStyle"], ["src", "../../assets/options/group-2 (1).svg", "width", "102%", 2, "margin-left", "-1%", "margin-top", "2%"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Tomar Foto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Subir Archivo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 97%;\r\n    height: 40%;\r\n    top: 60%;\r\n    overflow: hidden;\r\n    background-color: #000; \r\n    color: #FFF;\r\n    transition: all 1s;\r\n    background-color: white;\r\n    \r\n    \r\n    border-radius: 8px;\r\n    margin-left: -8%;\r\n    text-align: center;\r\n  }\r\n\r\n  .puerta[_ngcontent-%COMP%]{\r\n    \r\n  }\r\n\r\n  .center[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n\r\n  .slider.close[_ngcontent-%COMP%] {\r\n    top: 97%;\r\n    height: 20px;\r\n  }\r\n\r\n  .close[_ngcontent-%COMP%]{\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):focus, .close[_ngcontent-%COMP%]:not(:disabled):not(.disabled):hover {\r\n    opacity: 1 !important;\r\n  }\r\n\r\n  .div-Centered[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n  }\r\n\r\n  .btnStyle[_ngcontent-%COMP%]{\r\n    height: 80px;\r\n    width: 80px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    color: white;\r\n    border-color: #0a3fc1;\r\n    border-style: solid;\r\n    \r\n  }\r\n\r\n  button[_ngcontent-%COMP%]:active{\r\n    background-color: #073095;\r\n}\r\n\r\n  .textStyle[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color:#0a3fc1 ;\r\n  margin-top: 10%;\r\n  font-family: Nunito;\r\n  font-size: 14px;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: normal;\r\n}\r\n\r\n  .image-upload[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n  .image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n    width: 80px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsb0NBQW9DO0lBQ3BDOzhCQUMwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTs7RUFFQTs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFQTtJQUNFLFFBQVE7SUFDUixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1COztFQUVyQjs7RUFFQTtJQUNFLHlCQUF5QjtBQUM3Qjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0VBRUE7O0lBRUksYUFBYTtBQUNqQjs7RUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgdG9wOiA2MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgXHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyogYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjZWRlZGVkOyAqL1xyXG4gICAgLyogYm9yZGVyLWltYWdlOnVybChcIi4uLy4uL2Fzc2V0cy9hcnJvdy5wbmdcIik7XHJcbiAgICBib3JkZXItaW1hZ2Utd2lkdGg6IDVweDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHVlcnRhe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY2VudGVye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIuY2xvc2Uge1xyXG4gICAgdG9wOiA5NyU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2xvc2V7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2xvc2U6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6Zm9jdXMsIC5jbG9zZTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGl2LUNlbnRlcmVkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcblxyXG4gIC5idG5TdHlsZXtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTNmYzE7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBidXR0b246YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MzA5NTtcclxufVxyXG5cclxuLnRleHRTdHlsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IzBhM2ZjMSA7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uaW1hZ2UtdXBsb2FkID4gaW5wdXRcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLXVwbG9hZCBpbWdcclxue1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slider',
                templateUrl: './slider.component.html',
                styleUrls: ['./slider.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/start-message/start-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/start-message/start-message.component.ts ***!
  \**********************************************************/
/*! exports provided: StartMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMessageComponent", function() { return StartMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class StartMessageComponent {
    constructor(responseService, activatedRoute) {
        this.responseService = responseService;
        this.activatedRoute = activatedRoute;
        this.folio = this.activatedRoute.snapshot.params.folio;
        responseService.getWelcomeMessage(this.folio).subscribe(response => {
            this.welcome = response;
            this.message = this.welcome.message;
        });
    }
    ngOnInit() { }
}
StartMessageComponent.ɵfac = function StartMessageComponent_Factory(t) { return new (t || StartMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
StartMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartMessageComponent, selectors: [["app-start-message"]], decls: 11, vars: 3, consts: [[1, "row", "mt-5"], [1, "col-12", "text-center"], [3, "innerHtml"], [1, "col-12", "msg-welcome", 3, "innerHtml"], [1, "col-12", "mt-5"], [1, "btn", "btn-success", 3, "routerLink"]], template: function StartMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Bienvenid@ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/welcome2/", ctx.folio, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".msg-welcome[_ngcontent-%COMP%]{\r\n\r\n    font-size: 12px;\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtbWVzc2FnZS9zdGFydC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTs7O0FBR25CIiwiZmlsZSI6InNyYy9hcHAvc3RhcnQtbWVzc2FnZS9zdGFydC1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnLXdlbGNvbWV7XHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-message',
                templateUrl: './start-message.component.html',
                styleUrls: ['./start-message.component.css']
            }]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");



class SuccessComponent {
    constructor() {
        this.boton = "Ir a documentos pendientes";
    }
    ngOnInit() {
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 7, vars: 1, consts: [[1, "title"], [1, "center"], ["src", "../../assets/success/upload-success.svg", "alt", ""], [3, "button_title"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A1Listo! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tu foto se subi\u00F3 correctamente :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-confirm-button", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmButtonComponent"]], styles: [".title[_ngcontent-%COMP%] {\r\n    margin-top: 25%;\r\n    font-family: Nunito;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.43px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMjUlO1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tc/tc.component.ts":
/*!************************************!*\
  !*** ./src/app/tc/tc.component.ts ***!
  \************************************/
/*! exports provided: TcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcComponent", function() { return TcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");



class TcComponent {
    constructor() { }
    ngOnInit() {
    }
}
TcComponent.ɵfac = function TcComponent_Factory(t) { return new (t || TcComponent)(); };
TcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TcComponent, selectors: [["app-tc"]], decls: 6, vars: 0, consts: [[1, "col-sm-12", "col-md-12", "col-lg-12", "color-help"], [1, "col-12", "Trminos-y-Condicion"], [1, "ltima-revisin-6-d"]], template: function TcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " T\u00E9rminos y Condiciones\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00DAltima revisi\u00F3n: 6 de abril de 2020.\nACEPTACI\u00D3N DE CONDICIONES DE USO\nDigital Transformation Solution S. de R.L. de C.V. (\u201CBeble\u201D) le proporciona acceso a diversos recursos en este sitio web, incluidos documentos, fotograf\u00EDas, videos y otros contenidos gr\u00E1ficos, textuales o audiovisuales (\u201CContenido\u201D), software y aplicaciones inform\u00E1ticas (\u201CSoftware\u201D), adem\u00E1s de medios de comunicaci\u00F3n y otros servicios (\u201CServicios\u201D). El Contenido, el Software, los Servicios y todos los dem\u00E1s aspectos de este sitio web est\u00E1n sujetos a estas Condiciones de uso. Beble se reserva el derecho de actualizar estas Condiciones de uso en cualquier momento sin previo aviso. Para consultar la versi\u00F3n aplicable y m\u00E1s actualizada de las Condiciones de uso, haga clic en el v\u00EDnculo de hipertexto \u201CCondiciones de uso\u201D ubicado en la parte inferior de nuestras p\u00E1ginas web. Al obtener acceso a este sitio web o utilizarlo de cualquier manera, acepta regirse por los t\u00E9rminos de estas Condiciones de uso. Si no acepta todos los t\u00E9rminos y condiciones incluidos en las Condiciones de uso, no podr\u00E1 obtener acceso a este sitio web ni utilizarlo. PRIVACIDAD Y PROTECCI\u00D3N DE INFORMACI\u00D3N PERSONAL\nConsulte el Aviso de Privacidad para saber m\u00E1s acerca de la recopilaci\u00F3n y el uso de su informaci\u00F3n. SOFTWARE\nTodo Software y Servicios disponibles para su uso en el sitio web es el trabajo con copyright de Beble o sus proveedores. El uso que haga del Software se rige por los t\u00E9rminos del contrato de licencia, si existieran, que acompa\u00F1a a o se incluye en el Software. Si este sitio web proporciona cualquier Software (como javascript) para el explorador de su equipo y no incluye un contrato de licencia, Beble le otorga el derecho de usar dicho Software \u00FAnicamente para interactuar a trav\u00E9s de su explorador con este sitio web. Si alg\u00FAn Software contiene un aviso de derechos de autor o alguna indicaci\u00F3n similar que se\u00F1ale que es propiedad de alguien ajeno a Beble, y adem\u00E1s incluye su propio contrato de licencia, entonces ese Software es autorizado por esa otra parte y no por Beble. Beble no le concede ning\u00FAn derecho de propiedad intelectual (expreso o impl\u00EDcito) con respecto a ese Software. El plug-in de javascript \u2018reveal\u2019 esta licenciado bajo la licencia MIT CONTENIDO\nTodo el Contenido es el trabajo con copyright de Beble o sus proveedores. El uso del Contenido se rige por los t\u00E9rminos del contrato de licencia, si existieran, que acompa\u00F1a a o se incluye en el Contenido. Si cualquier Contenido est\u00E1 disponible para usted en este sitio web sin un contrato de licencia, entonces podr\u00E1 hacer un n\u00FAmero razonable de copias del Contenido para uso interno en el dise\u00F1o, desarrollo y prueba de su software, productos y servicios. Deber\u00E1 conservar el siguiente aviso de derechos de autor en todas las copias del Contenido y garantizar que tanto dicho aviso como esta notificaci\u00F3n de permiso aparezcan en esas copias. Las instituciones educacionales acreditadas, como las escuelas que abarcan desde la educaci\u00F3n preescolar hasta el \u00FAltimo a\u00F1o de secundaria, universidades, colegios p\u00FAblicos o privados y colegios comunitarios estatales, pueden descargar y reproducir el Contenido para su distribuci\u00F3n en el aula con fines educativos. La publicaci\u00F3n o distribuci\u00F3n fuera del aula requiere el permiso expreso y por escrito. Salvo en los casos estipulados anteriormente en esta secci\u00F3n, ninguna parte del sitio web se puede copiar, imitar, publicar, transmitir, difundir ni distribuir, en su totalidad ni parcialmente. CONTENIDO ACCESIBLE S\u00D3LO A PARTICIPANTES INVITADOS\nCiertas partes de este sitio web son accesibles s\u00F3lo a usuarios registrados (Intranet). Toda la informaci\u00F3n disponible en esas partes de este sitio web o relacionada al Contenido o al Software disponibles en aquellas partes corresponde a informaci\u00F3n confidencial de Beble. No se podr\u00E1 divulgar dicha informaci\u00F3n a ning\u00FAn tercero bajo ning\u00FAn concepto. AVISOS RESPECTO AL SOFTWARE, CONTENIDO, SERVICIOS E INFORMACI\u00D3N DISPONIBLES EN ESTE SITIO WEB\nEL SOFTWARE, EL CONTENIDO, LAS API Y SERVICIOS Y LA INFORMACI\u00D3N DISPONIBLES DESDE ESTE SITIO WEB O LOS SERVICIOS, SE GARANTIZAN, EN SU CASO, S\u00D3LO DE ACUERDO CON LAS CONDICIONES DE UN CONTRATO SEPARADO QUE CUBRA EL SOFTWARE, CONTENIDO, SERVICIOS E INFORMACI\u00D3N CORRESPONDIENTES. SALVO EN LO GARANTIZADO EN ESE CONTRATO SEPARADO (SI EXISTIERA), BEBLE Y SUS RESPECTIVOS PROVEEDORES RENUNCIAN POR LA PRESENTE A TODAS LAS GARANT\u00CDAS Y CONDICIONES CON RESPECTO AL SOFTWARE, CONTENIDO, SERVICIOS E INFORMACI\u00D3N, INCLUIDAS LAS GARANT\u00CDAS Y CONDICIONES DE COMERCIABILIDAD, YA SEAN EXPRESAS, IMPL\u00CDCITAS O PREVISTAS POR NORMAS DISPOSITIVAS, IDONEIDAD PARA UN FIN CONCRETO, TITULARIDAD Y AUSENCIA DE INFRACCI\u00D3N. EN NING\u00DAN CASO SER\u00C1N BEBLE NI SUS RESPECTIVOS PROVEEDORES RESPONSABLES POR DA\u00D1OS ESPECIALES, INDIRECTOS O CONSECUENCIALES NI DE OTROS DA\u00D1OS OCASIONADOS POR LA P\u00C9RDIDA DE USO, DATOS O LUCRO, YA SEA POR UNA ACCI\u00D3N DEL CONTRATO, NEGLIGENCIA U OTRA ACCI\u00D3N DOLOSA, QUE SE DERIVE DE LA UTILIZACI\u00D3N O EL RENDIMIENTO DEL SOFTWARE, EL CONTENIDO, LAS API, LA DISPOSICI\u00D3N O EL NO PROPORCIONAR LOS SERVICIOS O LA INFORMACI\u00D3N DISPONIBLES DE LOS SERVICIOS O ESTE SITIO WEB. Beble puede ser titular de patentes, patentar aplicaciones, marcas comerciales, derechos de autor o derechos de propiedad intelectual sobre los contenidos que aparecen en el Contenido, el Software o los Servicios. A excepci\u00F3n de lo indicado expl\u00EDcitamente en cualquier contrato de licencia por escrito de Beble, la posesi\u00F3n del Contenido, el Software o los Servicios no le otorga ninguna licencia sobre estas patentes, marcas comerciales, derechos de autor y otros derechos de propiedad intelectual. RESERVA DE DERECHOS\nBeble se reserva todos los derechos no otorgados expresamente en estas condiciones de uso, y no se otorga ning\u00FAn otro derecho bajo estas condiciones de uso mediante implicaci\u00F3n, alegaci\u00F3n u otros motivos. CUENTA DE MIEMBRO, CONTRASE\u00D1A Y SEGURIDAD\nSi cualquiera de los Servicios le solicita que abra una cuenta, debe completar el proceso de inscripci\u00F3n suministrando la informaci\u00F3n actual, completa y exacta que se le pida en el formulario aplicable. Usted es el \u00FAnico responsable de mantener la confidencialidad de su contrase\u00F1a y cuenta. Adem\u00E1s, es el \u00FAnico responsable de todas las actividades que se produzcan en su cuenta. El usuario acepta notificar a Beble inmediatamente cualquier uso no autorizado de dicha cuenta o cualquier otro problema de seguridad. Beble no ser\u00E1 responsable de ninguna p\u00E9rdida ocasionada por el uso de su cuenta por otra persona, ya sea con o sin su consentimiento. Sin embargo, ser\u00E1 responsable de las p\u00E9rdidas que sufra Beble o cualquier tercero si otra persona utiliza su cuenta o contrase\u00F1a. Queda prohibida la utilizaci\u00F3n de la cuenta de otra persona sin el permiso del titular de dicha cuenta. USO PROHIBIDO DE SERVICIOS\nComo condici\u00F3n de uso de los Servicios, no los utilizar\u00E1 para ning\u00FAn prop\u00F3sito que sea ilegal o est\u00E9 prohibido por estos t\u00E9rminos, condiciones y avisos. No podr\u00E1 utilizar los Servicios de ninguna forma que pudiera da\u00F1ar, deshabilitar, sobrecargar o deteriorar alg\u00FAn servidor de Beble (o las redes conectadas al mismo), ni interferir con el uso y disfrute de otra parte de cualquiera de los Servicios. Queda prohibido el intento de obtener acceso sin autorizaci\u00F3n a cualquier Servicio, a otras cuentas, a sistemas inform\u00E1ticos o a redes conectadas a cualquier servidor de Beble o a cualquiera de los Servicios, por medio de t\u00E9cnicas de pirater\u00EDa inform\u00E1tica, averiguaci\u00F3n de contrase\u00F1as u otros medios. Queda prohibida la obtenci\u00F3n o intento de obtenci\u00F3n de cualquier material o informaci\u00F3n a trav\u00E9s de cualquier medio que no est\u00E9 disponible de forma intencionada en los Servicios. Los Servicios pueden contener servicios de correo electr\u00F3nico, servicios de boletines electr\u00F3nicos, zonas de charla, foros, comunidades, p\u00E1ginas web personales, calendarios, \u00E1lbumes fotogr\u00E1ficos, contenedores de archivos y/u otras instalaciones de comunicaci\u00F3n o mensajes dise\u00F1adas para permitirle la comunicaci\u00F3n con otros usuarios (\u201CServicios de comunicaci\u00F3n\u201D). Usted acepta utilizar los Servicios de comunicaci\u00F3n \u00FAnicamente para publicar, enviar y recibir mensajes y materiales que sean apropiados y, si es el caso, est\u00E9n relacionados con ese Servicio de comunicaci\u00F3n en particular. A modo de ejemplo, pero sin limitarse a ello, acepta que al utilizar los Servicios de comunicaci\u00F3n, no realizar\u00E1 ninguna de las siguientes acciones: Utilizar los Servicios de comunicaci\u00F3n en relaci\u00F3n con encuestas, concursos, estrategias de pir\u00E1mide, cartas en cadena, correo electr\u00F3nico basura, correo electr\u00F3nico no deseado, mensajes molestos o mensajes duplicados o no solicitados (comerciales o de otra \u00EDndole).\nDifamar, insultar, acosar, hostigar, amenazar o violar los derechos legales (como el derecho a la intimidad y el derecho de publicidad) de otros.\nPublicar, exponer, cargar, distribuir o difundir temas, nombres, materiales o informaci\u00F3n que sean inapropiados, irreverentes, difamatorios, obscenos, indecentes o ilegales.\nCargar, o de alguna manera poner a disposici\u00F3n de otros, archivos que contengan im\u00E1genes, fotograf\u00EDas, software u otro material protegido por las leyes de propiedad intelectual, incluidas, a modo de ejemplo, y no limitadas por el mismo, las leyes de derechos de autor o de marcas comerciales (o que infrinjan los derechos de privacidad o publicidad), a menos que usted posea o controle los derechos para ello o haya recibido todos los permisos necesarios para hacerlo.\nUtilizar cualquier material o informaci\u00F3n, incluidas im\u00E1genes o fotograf\u00EDas, que se haya puesto a disposici\u00F3n a trav\u00E9s de los Servicios de cualquier modo que infrinja los derechos de autor, de marcas registradas, patentes, secretos comerciales u otro derecho de propiedad de alguna de las partes.\nCargar archivos que contengan virus, caballos de Troya, gusanos, bombas de tiempo, robots de cancelaci\u00F3n, archivos da\u00F1ados o alg\u00FAn otro software o programa similar que pueda causar perjuicio al funcionamiento de los equipos o a la propiedad de otros.\nAnunciar u ofrecer la venta o compra de bienes o servicios para alg\u00FAn fin comercial, a menos que tales Servicios de comunicaci\u00F3n permitan espec\u00EDficamente dichos mensajes.\nDescargar cualquier archivo expuesto por otro usuario de un Servicio de comunicaci\u00F3n que usted conozca, o debiera conocer de forma razonable, que no pueda reproducirse, mostrarse, ejecutarse y/o distribuirse de dicha forma.\nFalsificar o eliminar cualquier informaci\u00F3n relativa al tratamiento de los derechos de autor, como atribuciones del autor, avisos legales u otros avisos apropiados, o etiquetas o designaciones de propiedad en el origen o fuente del software u otro material contenido en un archivo que haya sido cargado.\nRestringir o impedir a otros usuarios que utilicen o disfruten de los Servicios de comunicaci\u00F3n.\nInfringir cualquier c\u00F3digo de conducta u otras instrucciones que sean aplicables para alg\u00FAn Servicio de comunicaci\u00F3n en particular.\nRecoger o de alg\u00FAn modo recopilar informaci\u00F3n acerca de otros, incluidas direcciones de correo electr\u00F3nico.\nInfringir cualquier ley o regulaci\u00F3n aplicable.\nCrear una identidad falsa a fin de enga\u00F1ar a otros.\nUtilizar, descargar, o de alg\u00FAn modo, copiar o proporcionar (ya sea mediante pago o de forma gratuita) para una persona f\u00EDsica o jur\u00EDdica, alg\u00FAn directorio de usuarios de los Servicios u otro usuario o informaci\u00F3n de uso o alguna parte del mismo.\nBeble no tiene ninguna obligaci\u00F3n de supervisar los Servicios de comunicaci\u00F3n. No obstante, Beble se reserva el derecho de revisar los materiales expuestos en los Servicios de comunicaci\u00F3n y retirar lo que considere oportuno a su entera discreci\u00F3n. Beble se reserva el derecho en todo momento de revelar cualquier informaci\u00F3n que considere necesaria para satisfacer cualquier disposici\u00F3n, proceso legal, solicitud gubernamental o legislaci\u00F3n vigente, o de editar, negarse a publicar o eliminar informaci\u00F3n o materiales, en forma parcial o total, a exclusiva discreci\u00F3n de Beble. Sea siempre prudente a la hora de revelar informaci\u00F3n personal propia o de sus hijos e informaci\u00F3n confidencial comercial en cualquier Servicio de comunicaci\u00F3n. Beble no controla ni respalda el contenido, los mensajes o la informaci\u00F3n que se puede encontrar en los Servicios de comunicaci\u00F3n y espec\u00EDficamente rechaza cualquier responsabilidad con respecto a los Servicios de comunicaci\u00F3n. Los responsables de estos servicios no son voceros autorizados de Beble y sus opiniones no reflejan necesariamente las de Beble. Los materiales que se cargan a los Servicios de comunicaci\u00F3n pueden estar sujetos a limitaciones en cuanto al uso, reproducci\u00F3n o distribuci\u00F3n. Usted es responsable de respetar tales limitaciones si descarga los materiales. ENV\u00CDOS PROPORCIONADOS A ESTE SITIO WEB\nBeble no reclama la propiedad del c\u00F3digo, el contenido, los comentarios, las sugerencias, la informaci\u00F3n o los materiales que usted proporcione a trav\u00E9s de este sitio web o cualquier Servicio (\u201CEnv\u00EDo\u201D). Sin embargo, al proporcionar un Env\u00EDo, usted concede de forma irrevocable a Beble y a sus empresas afiliadas el derecho de hacer, utilizar, modificar, distribuir o de alg\u00FAn modo comercializar el Env\u00EDo de cualquier forma y para cualquier fin (incluido el conceder al p\u00FAblico en general el derecho a utilizar sus Env\u00EDos de acuerdo con las Condiciones de uso de este sitio web, que pueden cambiar con el tiempo) y el derecho a publicar su nombre, ciudad de residencia y direcci\u00F3n de correo electr\u00F3nico en relaci\u00F3n con su Env\u00EDo. Estos derechos se conceden conforme a todos los derechos de propiedad intelectual aplicables que usted posea o controle. No se pagar\u00E1 compensaci\u00F3n alguna con respecto al uso de sus Env\u00EDos. Beble no tiene ninguna obligaci\u00F3n de exponer o utilizar ning\u00FAn Env\u00EDo y Beble puede eliminar cualquier Env\u00EDo en cualquier momento. Al proporcionar un Env\u00EDo, el usuario garantiza que es el propietario o la persona a cargo de todos los derechos de dicho Env\u00EDo y que su Env\u00EDo no est\u00E1 sujeto a ning\u00FAn derecho de un tercero (incluidos los derechos a personalidad o publicidad de cualquier persona). TERMINACI\u00D3N\nBeble se reserva el derecho a dar por terminado su acceso a alguno o a todos los Servicios en cualquier momento, sin previo aviso, por cualquier motivo. AVISOS Y PROCEDIMIENTO PARA REALIZAR RECLAMACIONES DE INFRACCI\u00D3N DE DERECHOS DE AUTOR\nSi usted cree que tiene una reclamaci\u00F3n de infracci\u00F3n de derechos de autor contra Beble, le solicitamos enviar aviso de su reclamo a los siguientes correos electr\u00F3nicos: contacto@beble.mx TODAS LAS CONSULTAS QUE NO SEAN RELEVANTES PARA EL SIGUIENTE PROCEDIMIENTO NO RECIBIR\u00C1 RESPUESTA.La notificaci\u00F3n de su reclamo de infracci\u00F3n de derechos de autor debe ser escrita y debe incluir lo siguiente: I. Una declaraci\u00F3n de que usted es el propietario del derecho exclusivo que usted reclama ha sido infringida, o una declaraci\u00F3n de que usted est\u00E1 autorizado a actuar en nombre del titular de un derecho exclusivo que supuestamente ha sido infringido. II. Su firma. (La firma puede ser electr\u00F3nica). III. La identificaci\u00F3n de la obra o programa de c\u00F3mputo que usted reclama ha sido infringida, (Si usted afirma que varias obras con derechos de autor han sido vulnerados puede enviar una notificaci\u00F3n con una lista de las obras supuestamente infringidas), con los datos del registro ante la autoridad competente, a efecto de corroborar la autenticidad y legitimidad del reclamo. IV. La forma en la que usted considera que el material de nuestro sitio usa la obra o el programa del cual se ostenta como titular. V. Identificaci\u00F3n dentro del sitio de Beble del material que usted reclama ser titular o informaci\u00F3n razonablemente suficiente para permitir a Beble para localizar el material. VI. Informaci\u00F3n razonablemente suficiente para permitir a Beble para ponerse en contacto con usted, incluyendo su direcci\u00F3n, n\u00FAmero de tel\u00E9fono, n\u00FAmero de fax y, si est\u00E1 disponible, una direcci\u00F3n de correo electr\u00F3nico.\nBeble responder\u00E1 a cualquier reclamo en diez d\u00EDas. En caso de ser titular de una parte espec\u00EDfica del contenido en este sitio sin su permiso, Beble lo eliminar\u00E1 y se lo notificar\u00E1 por los medios que usted nos se\u00F1ale. Este procedimiento ser\u00E1 utilizado a efecto de cumplir con lo previsto en la Ley Federal de Derechos de Autor de los Estados Unidos Mexicanos y como medio de soluci\u00F3n del reclamo sin necesidad de iniciar ning\u00FAn procedimiento administrativo. Por lo que se refiere a la legislaci\u00F3n aplicable en los Estados Unidos de Norteam\u00E9rica, hacemos de su conocimiento que Beble respeta la propiedad intelectual de terceros, y solicitamos a nuestros usuarios y visitantes que hagan lo mismo, por lo que Beble procesar\u00E1 e investigar\u00E1 los avisos de supuestas infracciones, con el procedimiento arriba transcrito y tomar\u00E1 las medidas adecuadas seg\u00FAn lo estipulado en la ley estadounidense de protecci\u00F3n de los derechos de autor Digital Millennium Copyright Act (\u201CDMCA\u201D) y otras leyes de propiedad intelectual vigentes. Una vez recibidos los avisos seg\u00FAn lo estipulado en la ley DMCA, Beble proceder\u00E1 a negar o inhabilitar el acceso al material que constituya una infracci\u00F3n o que est\u00E9 sujeto a una actividad que constituya una infracci\u00F3n, y proceder\u00E1 a negar o inhabilitar el acceso a toda referencia o enlace al material o a la actividad que pueda constituir una infracci\u00F3n. V\u00CDNCULOS A SITIOS DE TERCEROS\nALGUNOS V\u00CDNCULOS DE ESTE SITIO LE PERMITIR\u00C1N ABANDONAR EL SITIO DE BEBLE. BEBLE LE PROPORCIONA ESTOS V\u00CDNCULOS S\u00D3LO POR COMODIDAD, Y LA INCLUSI\u00D3N DE CUALQUIERA DE ELLOS NO IMPLICA LA APROBACI\u00D3N POR PARTE DE BEBLE DEL SITIO VINCULADO. EL USUARIO RECONOCE Y ACEPTA QUE: (i) BEBLE NO CONTROLA, REPASA, REVISA, RESPALDA NI ACEPTA RESPONSABILIDAD ALGUNA POR NING\u00DAN MATERIAL, PROYECTO O SERVICIO QUE OFREZCAN TERCEROS, INCLUIDOS OTROS PROVEEDORES Y TERCEROS A LOS QUE SE TENGA ACCESO A TRAV\u00C9S DE SITIOS VINCULADOS; (ii) BEBLE NO REALIZA DECLARACIONES NI OTORGA GARANT\u00CDAS CON RESPECTO A NINGUNO DE ESOS TERCEROS, SUS MATERIALES O SERVICIOS; (iii) CUALQUIER TRATO QUE PUEDA TENER CON ESOS TERCEROS SER\u00C1 BAJO SU PROPIA RESPONSABILIDAD; Y (iv) BEBLE NO SE HAR\u00C1 RESPONSABLE DE NING\u00DAN MATERIAL O SERVICIO OFRECIDO POR TERCEROS. AVISO DE DERECHOS DE AUTOR\n\u00A9 2020 Beble. Todos los derechos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"]], styles: [".Trminos-y-Condicion[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.58px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.ltima-revisin-6-d[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n}\r\n\r\n.color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGMvdGMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGMvdGMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Ucm1pbm9zLXktQ29uZGljaW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbn1cclxuXHJcbi5sdGltYS1yZXZpc2luLTYtZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxufVxyXG5cclxuLmNvbG9yLWhlbHB7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tc',
                templateUrl: './tc.component.html',
                styleUrls: ['./tc.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome1/welcome1.component.ts":
/*!************************************************!*\
  !*** ./src/app/welcome1/welcome1.component.ts ***!
  \************************************************/
/*! exports provided: Welcome1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome1Component", function() { return Welcome1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interfaces/Interfaces-Out */ "./src/app/Interfaces/Interfaces-Out.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirm-button/confirm-button.component */ "./src/app/confirm-button/confirm-button.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









function Welcome1Component_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingresa los \u00FAltimos 4 d\u00EDgitos de tu tel\u00E9fono.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Welcome1Component_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ingresa los 4 digitos de tu token enviado a tu correo electronico\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Welcome1Component {
    constructor(responseService, activatedRoute, route) {
        this.responseService = responseService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.boton = "Confirmar";
        this.tipo = 0;
        this.folio = "";
        responseService.getResponse().subscribe(response => {
            console.log(response);
        });
    }
    ngOnInit() {
        this.tipo = this.activatedRoute.snapshot.params.tipo;
        this.folio = this.activatedRoute.snapshot.params.folio;
    }
    example(element, number, e) {
        let keyCode = e.keyCode;
        var numbers = /^[0-9]+$/;
        switch (number) {
            case 1:
                if (keyCode != 8) {
                    if (!document.getElementById("number-1").value.match(numbers)) {
                        document.getElementById("number-1").value = "";
                        alert("Solo puedes ingresar numeros");
                        return false;
                    }
                    document.getElementById("number-2").focus();
                }
                break;
            case 2:
                if (keyCode != 8) {
                    if (!document.getElementById("number-2").value.match(numbers)) {
                        document.getElementById("number-2").value = "";
                        alert("Solo puedes ingresar numeros");
                        return false;
                    }
                    document.getElementById("number-3").focus();
                }
                else {
                    document.getElementById("number-1").focus();
                }
                break;
            case 3:
                if (keyCode != 8) {
                    if (!document.getElementById("number-3").value.match(numbers)) {
                        document.getElementById("number-3").value = "";
                        alert("Solo puedes ingresar numeros");
                        return false;
                    }
                    document.getElementById("number-4").focus();
                }
                else {
                    document.getElementById("number-2").focus();
                }
                break;
            case 4:
                if (keyCode == 8) {
                    if (!document.getElementById("number-4").value.match(numbers)) {
                        document.getElementById("number-4").value = "";
                        alert("Solo puedes ingresar numeros");
                        return false;
                    }
                    document.getElementById("number-3").focus();
                }
                break;
        }
    }
    sendNumber() {
        let strgBuilder = "";
        for (let i = 1; i < 5; i++) {
            let element = document.getElementById("number-" + i);
            if (element.value == "") {
                alert("Todos los campos son obligatorios");
                return false;
            }
            strgBuilder += element.value;
        }
        let requestObject = new _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_1__["objDigitosValidacion"];
        requestObject.idFolio = this.folio;
        requestObject.digitos = strgBuilder;
        requestObject.tipo = this.tipo;
        this.route.navigate(["/main-pending/" + this.tipo + "/" + this.folio + "/" + strgBuilder]);
    }
}
Welcome1Component.ɵfac = function Welcome1Component_Factory(t) { return new (t || Welcome1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Welcome1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Welcome1Component, selectors: [["app-welcome1"]], outputs: { responseObj: "responseObj" }, decls: 20, vars: 3, consts: [[1, "col-sm-12", "col-md-12", "col-lg-12", "color-help"], [1, "col-sm-12", "col-md-12", "col-lg-12", "Confirma-tu-identida"], ["class", "col-sm-12 col-md-12 col-lg-12 En-unos-momentos-rec", 4, "ngIf"], [1, "row", "center"], [1, "col-3"], ["id", "number-1", "type", "text", 1, "Rectangle", "1", 3, "keyup"], ["id", "number-2", "type", "text", 1, "Rectangle", "2", 3, "keyup"], ["id", "number-3", "type", "text", 1, "Rectangle", "3", 3, "keyup"], ["id", "number-4", "type", "text", 1, "Rectangle", "4", 3, "keyup"], [3, "button_title", "click"], [1, "row", "div-footer"], [1, "col-12"], [1, "col-sm-12", "col-md-12", "col-lg-12", "En-unos-momentos-rec"]], template: function Welcome1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Confirma tu identidad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Welcome1Component_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Welcome1Component_div_6_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Welcome1Component_Template_input_keyup_9_listener($event) { return ctx.example(ctx, 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Welcome1Component_Template_input_keyup_11_listener($event) { return ctx.example(ctx, 2, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Welcome1Component_Template_input_keyup_13_listener($event) { return ctx.example(ctx, 3, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Welcome1Component_Template_input_keyup_15_listener($event) { return ctx.example(ctx, 4, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-confirm-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Welcome1Component_Template_app_confirm_button_click_16_listener() { return ctx.sendNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipo == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tipo == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button_title", ctx.boton);
    } }, directives: [_help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _confirm_button_confirm_button_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmButtonComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".color-help[_ngcontent-%COMP%]{\r\n    color: #0a3fc1;\r\n    text-align: right;\r\n    padding-right: 0px;\r\n    \r\n}\r\n\r\n.Confirma-tu-identida[_ngcontent-%COMP%] {\r\n    font-family: Nunito;\r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.58px;\r\n    color: #0a3fc1;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n  }\r\n\r\n.En-unos-momentos-rec[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n  }\r\n\r\n.center[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n    text-align: center;\r\n  }\r\n\r\n.Rectangle[_ngcontent-%COMP%] {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 8px;\r\n    border: solid 1px #0a3fc1;\r\n    background-color: #ffffff;\r\n    padding: 50%;\r\n  }\r\n\r\n.div-footer[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    position: fixed;\r\n    bottom:1px;\r\n    float: bottom;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZTEvd2VsY29tZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUxL3dlbGNvbWUxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3ItaGVscHtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLkNvbmZpcm1hLXR1LWlkZW50aWRhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41OHB4O1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5Fbi11bm9zLW1vbWVudG9zLXJlY3tcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gIH0gXHJcblxyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuY2VudGVye1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLlJlY3RhbmdsZSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMwYTNmYzE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRpdi1mb290ZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOjFweDtcclxuICAgIGZsb2F0OiBib3R0b207XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Welcome1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome1',
                templateUrl: './welcome1.component.html',
                styleUrls: ['./welcome1.component.css']
            }]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { responseObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome2/welcome2.component.ts":
/*!************************************************!*\
  !*** ./src/app/welcome2/welcome2.component.ts ***!
  \************************************************/
/*! exports provided: Welcome2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Welcome2Component", function() { return Welcome2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Interfaces/Interfaces-Out */ "./src/app/Interfaces/Interfaces-Out.ts");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");






class Welcome2Component {
    constructor(responseService, activatedRoute, route) {
        this.responseService = responseService;
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    ngOnInit() {
        let folio = this.activatedRoute.snapshot.params.folio;
        console.log(folio);
        this.responseService.getPantallaBienvenida(folio).subscribe(response => {
            this.objPantalla = response;
            console.log(this.objPantalla);
            this.name = this.objPantalla.nombre;
            this.cliente = this.objPantalla.cliente;
        });
    }
    validarDatos() {
        let userLogin = document.getElementById("userLogin").value;
        let passLogin = document.getElementById("passLogin").value;
        let passConfirm = document.getElementById("passConfirm").value;
        let checkAviso = document.getElementById("checkAviso");
        if (userLogin == "" && passLogin == "" && passConfirm == "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else {
            if (passLogin != passConfirm) {
                alert("Las contraseñas que ingresaste deben ser las mismas.");
                return false;
            }
            if (!checkAviso.checked) {
                alert("Para continuar debes haceptar nuestro aviso de privacidad");
                return false;
            }
            this.almacenarInformacion(userLogin, passLogin);
        }
    }
    almacenarInformacion(userLogin, passLogin) {
        let folio = this.activatedRoute.snapshot.params.folio;
        let datosPeticion = new _Interfaces_Interfaces_Out__WEBPACK_IMPORTED_MODULE_1__["peticionDatosLogin"]();
        datosPeticion.userLogin = userLogin;
        datosPeticion.passLogin = passLogin;
        datosPeticion.folio = folio;
        console.log(datosPeticion);
        this.responseService.setDatosUsuarioLogin(datosPeticion).subscribe(response => {
            this.objRespGral = response;
            if (this.objRespGral.responseCode == "0") {
                alert(this.objRespGral.message);
                this.route.navigate(["/welcome1/2/" + folio]);
            }
            else {
                alert(this.objRespGral.message);
            }
        });
    }
}
Welcome2Component.ɵfac = function Welcome2Component_Factory(t) { return new (t || Welcome2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Welcome2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Welcome2Component, selectors: [["app-welcome2"]], decls: 36, vars: 2, consts: [[1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "welcome-user"], [1, "col-sm-12", "col-md-12", "col-lg-12", "start-message"], [1, "col-sm-8", "col-md-8", "col-lg-8"], [1, "label-input-text"], ["id", "userLogin", "type", "email", "placeholder", "\u00A0\u00A0Ej: luis.alcantara@beble.mx", 1, "medium", "input-text"], [1, "col-sm-12", "col-md-12", "col-lg-12"], ["id", "passLogin", "type", "password", "placeholder", "\u00A0\u00A0Por lo menos 8 caracteres, incluye una may\u00FAscula y un numero", 1, "input-text"], ["id", "passConfirm", "type", "password", "placeholder", "\u00A0\u00A0Aseg\u00FArate que sea la misma contrase\u00F1a que acabas de crear", 1, "input-text"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "checkAviso", 1, "custom-control-input"], ["for", "checkAviso", 1, "custom-control-label", "label-input-check"], [1, "terminos"], [1, "btn", "btn-success", 3, "click"], [1, "row", "div-footer"], [1, "col-12"]], template: function Welcome2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Correo el\u00E9ctronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirmar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Al crear una cuenta aceptas nuestros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0 T\u00E9rminos y condiciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Welcome2Component_Template_button_click_31_listener() { return ctx.validarDatos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Crear cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A1Bienvenido, ", ctx.name, "! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Para iniciar tu tr\u00E1mite con ", ctx.cliente, " y garantizar la seguridad de tus datos es necesario que crees una cuenta. ");
    } }, directives: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".welcome-user[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    font-family: Nunito; \r\n    font-size: 24px;\r\n    font-weight: bold;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.58px;\r\n    color: #0a3fc1;\r\n  \r\n  }\r\n\r\n  .start-message[_ngcontent-%COMP%]{\r\n        font-family: Nunito;\r\n        font-size: 12px;\r\n        font-weight: normal;\r\n        font-stretch: normal;\r\n        font-style: normal;\r\n        line-height: normal;\r\n        letter-spacing: -0.29px;\r\n        color: #0a3fc1;\r\n  }\r\n\r\n  div[_ngcontent-%COMP%]{\r\n      margin-bottom: 8px;\r\n  }\r\n\r\n  .input-text[_ngcontent-%COMP%]{\r\n    border: 1px solid #0a3fc1 ;\r\n    border-radius: 3px !important;\r\n    width: 100%;\r\n    margin-top: 16px;\r\n}\r\n\r\n  .medium[_ngcontent-%COMP%]{\r\n    width: 60% !important;\r\n}\r\n\r\n  .label-input-text[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: -0.29px;\r\n    color: #0a3fc1;\r\n    position: absolute;\r\n    top : 8px;\r\n    background: #ffff;\r\n    margin-left: 8px;\r\n}\r\n\r\n  .label-input-check[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    line-height: 25px;\r\n}\r\n\r\n  .terminos[_ngcontent-%COMP%]{\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    text-align: center;\r\n    color: #0a3fc1;\r\n    line-height: 25px;\r\n    position: relative;\r\n    margin-bottom: 0;\r\n    vertical-align: top;\r\n    text-decoration: underline;\r\n    left: 2px;\r\n}\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n  .div-footer[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    position: fixed;\r\n    bottom:1px;\r\n    float: bottom;\r\n}\r\n\r\n  input[_ngcontent-%COMP%]::placeholder{\r\n    font-family: Nunito;\r\n    font-size: 10px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    letter-spacing: -0.24px;\r\n    color: #9c9c9c;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZTIvd2VsY29tZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsY0FBYzs7RUFFaEI7O0VBRUE7UUFDTSxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsY0FBYztFQUNwQjs7RUFFQTtNQUNJLGtCQUFrQjtFQUN0Qjs7RUFFRjtJQUNJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7RUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7RUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztFQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7RUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFNBQVM7QUFDYjs7RUFFQTtJQUNJLFdBQVc7QUFDZjs7RUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0VBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUyL3dlbGNvbWUyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS11c2VyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvOyBcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU4cHg7XHJcbiAgICBjb2xvcjogIzBhM2ZjMTtcclxuICBcclxuICB9XHJcblxyXG4gIC5zdGFydC1tZXNzYWdle1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICAgICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgfVxyXG5cclxuICBkaXZ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4uaW5wdXQtdGV4dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwYTNmYzEgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5tZWRpdW17XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYWJlbC1pbnB1dC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjlweDtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wIDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4ubGFiZWwtaW5wdXQtY2hlY2t7XHJcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwYTNmYzE7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnRlcm1pbm9ze1xyXG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMGEzZmMxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbGVmdDogMnB4O1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRpdi1mb290ZXJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOjFweDtcclxuICAgIGZsb2F0OiBib3R0b207XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgIGNvbG9yOiAjOWM5YzljO1xyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Welcome2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome2',
                templateUrl: './welcome2.component.html',
                styleUrls: ['./welcome2.component.css']
            }]
    }], function () { return [{ type: _services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eduiw\Documents\beble\BebleApp\Beble\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map