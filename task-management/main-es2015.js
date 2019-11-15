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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <span class=\"header__title\" routerLink=\"tasks\">Task Management</span>\n  <nav class=\"d-flex navigation\">\n    <ul class=\"navigation__links\">\n      <li class=\"navigation__item\">\n        <a class=\"navigation__link\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive=\"active\"\n          routerLink=\"tasks\">Tasks</a>\n      </li>\n      <li class=\"navigation__item\">\n        <a class=\"navigation__link\" [routerLinkActiveOptions]=\"{ exact: true }\" routerLinkActive=\"active\"\n          routerLink=\"tasks/create\">Create</a>\n      </li>\n    </ul>\n  </nav>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/filter/filter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/filter/filter.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"filter\">Filter</label>\n  <select class=\"form-control\" id=\"filter\">\n    <option *ngFor=\"let option of options\" [value]=\"option.value\">\n      {{option.name}}\n    </option>\n  </select>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/task-form/task-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/task-form/task-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mt-4\">Task Form</h1>\n\n<form *ngIf=\"taskForm\" class=\"mt-4\" novalidate (ngSubmit)=\"saveTask()\" [formGroup]=\"taskForm\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <input class=\"form-control\" formControlName=\"title\" id=\"title\" [ngClass]=\"{'is-invalid': (taskForm.get('title').touched && !taskForm.get('title').valid)\n      || (submitted && !taskForm.get('title').valid)}\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description</label>\n    <textarea class=\"form-control\" formControlName=\"description\" id=\"description\" rows=\"3\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"state\">State</label>\n    <select formControlName=\"state\" class=\"form-control\" id=\"state\" [ngClass]=\"{'is-invalid': (taskForm.get('state').touched && !taskForm.get('state').valid)\n    || (submitted && !taskForm.get('state').valid)}\">\n      <option *ngFor=\"let option of stateOptions\" [value]=\"option.value\">\n        {{option.name}}\n      </option>\n    </select>\n  </div>\n  <button type=\"submit\" class=\"btn-inline mt-3\">Save</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/task-item/task-item.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/task-item/task-item.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card shadow task-item\">\n  <div class=\"card-body\">\n    <div class=\"d-flex align-items-center justify-content-between\">\n      <h3 class=\"task-item__title\">{{task.title}}</h3>\n      <span class=\"task-item__state\">{{task.state | stateString}}</span>\n    </div>\n    <hr class=\"task-item__seperator\">\n    <p *ngIf=\"task.description\" class=\"card-text\">{{task.description}}\n    </p>\n    <a class=\"btn-inline\" [routerLink]=\"['edit', task.id]\">Edit</a>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\n  <div *ngIf=\"tasks\" class=\"tasks\" [@listAnimation]=\"tasks.length\">\n    <app-task-item *ngFor=\"let task of tasks\" [task]=\"task\"></app-task-item>\n  </div>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/task-form/task-form.component */ "./src/app/tasks/task-form/task-form.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");





const routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: 'tasks/create', component: _tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_3__["TaskFormComponent"] },
    { path: 'tasks/edit/:id', component: _tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_3__["TaskFormComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  width: 90%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufSIsIi5hcHAge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'task-management';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/task-item/task-item.component */ "./src/app/tasks/task-item/task-item.component.ts");
/* harmony import */ var _tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/task-form/task-form.component */ "./src/app/tasks/task-form/task-form.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _shared_pipes_state_string_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pipes/state-string.pipe */ "./src/app/shared/pipes/state-string.pipe.ts");
/* harmony import */ var _shared_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/filter/filter.component */ "./src/app/shared/components/filter/filter.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__["TasksComponent"],
            _tasks_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_8__["TaskItemComponent"],
            _tasks_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_9__["TaskFormComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _shared_pipes_state_string_pipe__WEBPACK_IMPORTED_MODULE_12__["StateStringPipe"],
            _shared_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_13__["FilterComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/add-header-interceptor */ "./src/app/core/interceptors/add-header-interceptor.ts");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ "./src/app/core/interceptors/http-error.interceptor.ts");





let CoreModule = class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Core is already loaded. Import it in the AppModule only');
        }
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_add_header_interceptor__WEBPACK_IMPORTED_MODULE_3__["AddHeaderInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpErrorInterceptor"], multi: true }
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/interceptors/add-header-interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/add-header-interceptor.ts ***!
  \*************************************************************/
/*! exports provided: AddHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderInterceptor", function() { return AddHeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddHeaderInterceptor = class AddHeaderInterceptor {
    constructor() { }
    intercept(req, next) {
        const HeaderId = '';
        const request = req.clone({
            headers: req.headers.set('X-TEST-ID', HeaderId)
        });
        return next.handle(request);
    }
};
AddHeaderInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddHeaderInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/http-error.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http-error.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HttpErrorInterceptor);



/***/ }),

/***/ "./src/app/core/services/state.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/state.service.ts ***!
  \************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enums/state */ "./src/app/shared/enums/state.ts");



let StateService = class StateService {
    getStateOptions() {
        let states = [];
        for (let value in _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"]) {
            if (isNaN(Number(value))) {
                states.push({ name: value, value: _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"][value] });
            }
        }
        return states;
    }
    getAllStatesBit() {
        return _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"].ToDo | _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"].Started | _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"].Completed | _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"].Cancelled | _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"].Deleted;
    }
};
StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StateService);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 50px;\n  width: 100%;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #341f97;\n  color: white;\n}\n.header__title {\n  cursor: pointer;\n}\n.header .navigation__links {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\n.header .navigation__item {\n  margin-right: 1rem;\n  position: relative;\n}\n.header .navigation__link:link, .header .navigation__link:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 0.7rem;\n  color: inherit;\n}\n.header .navigation__link:link::after, .header .navigation__link:visited::after {\n  content: \"\";\n  position: absolute;\n  width: 90%;\n  left: 5%;\n  height: 2px;\n  bottom: 0;\n  background-color: white;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n}\n.header .navigation__link:link.active::after, .header .navigation__link:visited.active::after {\n  opacity: 1;\n}\n.header .navigation__link:hover::after {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvZ2l0aHViL3dvcmtzcGFjZS9zcmMvc3R5bGVzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQ1RPO0VEVVAsWUFBQTtBRURGO0FGR0U7RUFDRSxlQUFBO0FFREo7QUZLSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBRUhOO0FGTUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FFSk47QUZRTTtFQUVDLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNDLGNBQUE7QUVQUjtBRlNRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7QUVQVjtBRldVO0VBQ0UsVUFBQTtBRVRaO0FGZVE7RUFDRSxVQUFBO0FFYlYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICZfX3RpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAubmF2aWdhdGlvbiB7XG4gICAgJl9fbGlua3Mge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX2l0ZW0ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICZfX2xpbmsge1xuICAgICAgJjpsaW5rLFxuICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBsZWZ0OiA1JTtcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuICB9XG59IiwiJHB1cnBsZTogIzM0MWY5NzsiLCIuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDFmOTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZWFkZXJfX3RpdGxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciAubmF2aWdhdGlvbl9fbGlua3Mge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4uaGVhZGVyIC5uYXZpZ2F0aW9uX19pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5uYXZpZ2F0aW9uX19saW5rOmxpbmssIC5oZWFkZXIgLm5hdmlnYXRpb25fX2xpbms6dmlzaXRlZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmhlYWRlciAubmF2aWdhdGlvbl9fbGluazpsaW5rOjphZnRlciwgLmhlYWRlciAubmF2aWdhdGlvbl9fbGluazp2aXNpdGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5oZWFkZXIgLm5hdmlnYXRpb25fX2xpbms6bGluay5hY3RpdmU6OmFmdGVyLCAuaGVhZGVyIC5uYXZpZ2F0aW9uX19saW5rOnZpc2l0ZWQuYWN0aXZlOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVhZGVyIC5uYXZpZ2F0aW9uX19saW5rOmhvdmVyOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/filter/filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/filter/filter.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterComponent = class FilterComponent {
    constructor() {
        this.filterChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FilterComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FilterComponent.prototype, "filterChanged", void 0);
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/filter/filter.component.html"),
        styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/shared/components/filter/filter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FilterComponent);



/***/ }),

/***/ "./src/app/shared/enums/state.ts":
/*!***************************************!*\
  !*** ./src/app/shared/enums/state.ts ***!
  \***************************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
var State;
(function (State) {
    State[State["ToDo"] = 1] = "ToDo";
    State[State["Started"] = 2] = "Started";
    State[State["Completed"] = 4] = "Completed";
    State[State["Cancelled"] = 8] = "Cancelled";
    State[State["Deleted"] = 16] = "Deleted";
})(State || (State = {}));


/***/ }),

/***/ "./src/app/shared/pipes/state-string.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/state-string.pipe.ts ***!
  \***************************************************/
/*! exports provided: StateStringPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateStringPipe", function() { return StateStringPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/enums/state */ "./src/app/shared/enums/state.ts");



let StateStringPipe = class StateStringPipe {
    transform(state) {
        return _shared_enums_state__WEBPACK_IMPORTED_MODULE_2__["State"][+state];
    }
};
StateStringPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'stateString' })
], StateStringPipe);



/***/ }),

/***/ "./src/app/tasks/task-form/task-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/tasks/task-form/task-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "textarea {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvdGFza3MvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza3MvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn0iLCJ0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/task-form/task-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/task-form/task-form.component.ts ***!
  \********************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/state.service */ "./src/app/core/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let TaskFormComponent = class TaskFormComponent {
    constructor(formBuilder, service, router, route, stateService) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.route = route;
        this.stateService = stateService;
        this.stateOptions = [];
        this.submitted = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(({ id }) => {
            if (id) {
                return this.service.getTask(id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])({ title: '', description: '', state: 1 });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$)).subscribe((task) => {
            this.task = task;
            this.setUpForm();
        });
    }
    saveTask() {
        this.submitted = true;
        if (this.taskForm.invalid)
            return;
        this.service.saveTask(Object.assign({ id: this.task.id }, this.taskForm.value))
            .subscribe(() => this.router.navigateByUrl('/tasks'));
    }
    setUpForm() {
        this.stateOptions = this.stateService.getStateOptions();
        this.taskForm = this.formBuilder.group({
            title: [this.task.title, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: [this.task.description],
            state: [this.task.state, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
};
TaskFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }
];
TaskFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-form',
        template: __webpack_require__(/*! raw-loader!./task-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/task-form/task-form.component.html"),
        styles: [__webpack_require__(/*! ./task-form.component.scss */ "./src/app/tasks/task-form/task-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
], TaskFormComponent);



/***/ }),

/***/ "./src/app/tasks/task-item/task-item.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/tasks/task-item/task-item.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".task-item__state {\n  font-size: 0.9rem;\n}\n.task-item__seperator {\n  margin: 1rem 0;\n  border: 1px solid #341f97;\n}\n.task-item__title {\n  margin: 0;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvdGFza3MvdGFzay1pdGVtL3Rhc2staXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFza3MvdGFzay1pdGVtL3Rhc2staXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGlCQUFBO0FDRko7QURLRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0hKO0FETUU7RUFDRSxTQUFBO0VBQ0EscUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2staXRlbS90YXNrLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcblxuLnRhc2staXRlbSB7XG4gICZfX3N0YXRlIHtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICB9XG5cbiAgJl9fc2VwZXJhdG9yIHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHVycGxlO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIH1cbn0iLCIudGFzay1pdGVtX19zdGF0ZSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLnRhc2staXRlbV9fc2VwZXJhdG9yIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDFmOTc7XG59XG4udGFzay1pdGVtX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tasks/task-item/task-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tasks/task-item/task-item.component.ts ***!
  \********************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskItemComponent = class TaskItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskItemComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TaskItemComponent.prototype, "stateOptions", void 0);
TaskItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-item',
        template: __webpack_require__(/*! raw-loader!./task-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/task-item/task-item.component.html"),
        styles: [__webpack_require__(/*! ./task-item.component.scss */ "./src/app/tasks/task-item/task-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TaskItemComponent);



/***/ }),

/***/ "./src/app/tasks/tasks.animation.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.animation.ts ***!
  \******************************************/
/*! exports provided: listAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('60ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })))], { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/tasks/tasks.component.scss":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tasks {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));\n  grid-gap: 2rem;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE3cmVtLCAxZnIpICk7XG4gIGdyaWQtZ2FwOiAycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufSIsIi50YXNrcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE3cmVtLCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tasks_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks.animation */ "./src/app/tasks/tasks.animation.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.service */ "./src/app/tasks/tasks.service.ts");
/* harmony import */ var _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/state.service */ "./src/app/core/services/state.service.ts");





let TasksComponent = class TasksComponent {
    constructor(service, stateService) {
        this.service = service;
        this.stateService = stateService;
        this.stateOptions = [];
    }
    ngOnInit() {
        this.stateOptions = this.stateService.getStateOptions();
        this.stateFilter = this.stateService.getAllStatesBit();
        this.service.getTasksByState(this.stateFilter).subscribe(tasks => this.tasks = tasks);
    }
};
TasksComponent.ctorParameters = () => [
    { type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] },
    { type: _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }
];
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: __webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html"),
        animations: [_tasks_animation__WEBPACK_IMPORTED_MODULE_2__["listAnimation"]],
        styles: [__webpack_require__(/*! ./tasks.component.scss */ "./src/app/tasks/tasks.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"],
        _core_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
], TasksComponent);



/***/ }),

/***/ "./src/app/tasks/tasks.service.ts":
/*!****************************************!*\
  !*** ./src/app/tasks/tasks.service.ts ***!
  \****************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let TasksService = class TasksService {
    constructor(http) {
        this.http = http;
    }
    saveTask(task) {
        const taskId = !task.id ? guid_typescript__WEBPACK_IMPORTED_MODULE_3__["Guid"].create().toString() : task.id;
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}/${taskId}`, task)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    ;
    getTasksByState(stateFilter) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}/state/${stateFilter}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getTask(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl}/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
TasksService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TasksService);



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
    production: false,
    baseUrl: 'http://admin.test.cloud.poly.stream/api/1.0/tasks',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /github/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map