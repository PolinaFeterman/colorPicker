webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".clickCounter {\r\n    font-weight: bold;\r\n    font-size :15px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n    color: aliceblue;\r\n    font-family: sans-serif;\r\n    width: 24px;\r\n    height: 24px;\r\n    -webkit-transition: all 2.5s ease-in-out;\r\n    transition: all 2.5s ease-in-out;\r\n    border-radius: 10%;\r\n    top:12px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    background:silver;\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n    cursor: pointer;\r\n}\r\n\r\n.clickCounter:hover {\r\n    -webkit-transition: all 1s ease-in-out;\r\n    transition: all 1s ease-in-out;\r\n\r\n    -webkit-transform: rotate(360deg);\r\n\r\n            transform: rotate(360deg);\r\n    border-radius: 50%;\r\n}\r\n\r\n.clickCounter--one{\r\n    background:#0074D9;\r\n}\r\n\r\n.clickCounter--two{\r\n    background: #3D9970;\r\n}\r\n\r\n.clickCounter--three{\r\n    background:#01FF70;\r\n}\r\n\r\n.clickCounter--four{\r\n    background:#B10DC9;\r\n  }\r\n\r\n.clickCounter--five{\r\n    background:#F0E68C;\r\n}\r\n\r\n.clickCounter--six{\r\n    background:#BC8F8F;\r\n}\r\n\r\n.clickCounter--seven{\r\n    background:#FFDAB9;\r\n}\r\n\r\n.clickCounter--eight{\r\n    background:#DA70D6;\r\n}\r\n\r\n.clickCounter--nine{\r\n    background:#39CCCC;\r\n}\r\n\r\n.clickCounter--ten{\r\n    background:#7FDBFF;\r\n}\r\n\r\n.centerPosition{\r\n    top:0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n.itemList{\r\n    width: 200px;\r\n    height: 550px;\r\n}\r\n\r\n.card{\r\n    width: 200px;\r\n    height: 50px;\r\n    padding: 10px;\r\n    margin: 5px;\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    -webkit-box-shadow: 4px 6px 15px #888888;\r\n            box-shadow: 4px 6px 15px #888888;\r\n}\r\n\r\n.card__label{\r\n    font-family: sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n.title{\r\n    font-family: sans-serif;\r\n}\r\n\r\n.tooltip {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.tooltip__tooltipText {\r\n    visibility: hidden;\r\n    width: 150px;\r\n    background-color: silver;\r\n    color: #003b46;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    z-index: 1;\r\n    margin-top: -5px;\r\n    opacity: 0;\r\n    -webkit-transition: opacity 1.5s;\r\n    transition: opacity 1.5s;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 135px;\r\n}\r\n\r\n.tooltip:hover .tooltip__tooltipText {\r\n    visibility: visible;\r\n    opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1 class=\"title\">\n    {{ title }}\n  </h1>\n</div>\n<div [@listAnimation]=\"items.length\" class=\"centerPosition itemList\" >\n  <div *ngFor=\"let item of items; trackBy: trackByFn\">\n    <div class=\"card tooltip\" [ngClass]=\"setClasses(item.id)\">\n      <div class=\"centerPosition card__label\">{{item.name}} got {{item.counter}} votes</div>\n      <div class=\"clickCounter\" (click)=\"increaseCounter(item.id);\">{{item.counter}}</div>\n      <span class=\"tooltip__tooltipText\">Click to upvote</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Color Picker';
        this.items = [
            { id: 'one', counter: 0, name: 'Blue' },
            { id: 'two', counter: 0, name: 'Olive' },
            { id: 'three', counter: 0, name: "Lime" },
            { id: 'four', counter: 0, name: "Purple" },
            { id: 'five', counter: 0, name: "Khaki" },
            { id: 'six', counter: 0, name: "Rose" },
            { id: 'seven', counter: 0, name: "Peach" },
            { id: 'eight', counter: 0, name: "Orchid" },
            { id: 'nine', counter: 0, name: "Teal" },
            { id: 'ten', counter: 0, name: "Aqua" }
        ];
    }
    /**
     * Find clicked item by item id and increase counter and call function to sort items list
     * @param itemId - id of the clicked item
     */
    AppComponent.prototype.increaseCounter = function (itemId) {
        var _this = this;
        this.items.find(function (item) { return item.id === itemId; }).counter++;
        setTimeout(function () {
            _this.items.sort(function (a, b) {
                return a.counter < b.counter ? 1 : -1;
            });
        }, 1000);
    };
    /**
     * Set class names dynamically with item id as defferintiator
     * @param itemId - id of curent item used as defferintiator
     */
    AppComponent.prototype.setClasses = function (itemId) {
        return ["clickCounter--" + itemId];
    };
    /**
     * When collection changes, Angular can track which items have been added or removed
     * according to the unique identifier and create or destroy only the things that changed
     * @param index
     * @param item
     */
    AppComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('listAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.clickCounter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateX(-200%)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* query */])('.clickCounter', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* stagger */])('200ms', [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ transform: 'translateX(0)' }))
                        ]))
                    ])
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map