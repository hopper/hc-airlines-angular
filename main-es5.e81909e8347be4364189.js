(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/bburger/Git/hc-airlines-angular/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2wFT":
    /*!******************************************************!*\
      !*** ./src/app/shared/ngrx/global/global.actions.ts ***!
      \******************************************************/

    /*! exports provided: setCurrentLang, setCurrentTheme */

    /***/
    function wFT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setCurrentLang", function () {
        return setCurrentLang;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setCurrentTheme", function () {
        return setCurrentTheme;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var setCurrentLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Set the current language', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setCurrentTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Set the current theme', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "8ifR":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function ifR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var projects_angular_sdk_src_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! projects/angular-sdk/src/i18n */
      "e7Sd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ngrx/global/global.actions */
      "2wFT");
      /* harmony import */


      var _ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../ngrx/global/global.selectors */
      "KHEL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavBarComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavBarComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);

            var theme_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r5.onSetTheme(theme_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "palette");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](theme_r4);
        }
      }

      function NavBarComponent_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavBarComponent_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);

            var language_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r8.onSetLanguage(language_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("svgIcon", "flag_", language_r7, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, language_r7));
        }
      }

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(_matIconRegistry, _domSanitizer, _store) {
          var _this = this;

          _classCallCheck(this, NavBarComponent);

          this._matIconRegistry = _matIconRegistry;
          this._domSanitizer = _domSanitizer;
          this._store = _store;
          this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Set the current version

          this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version; // The languages ​​available depend on the languages ​​supported by the API

          this.languages = projects_angular_sdk_src_i18n__WEBPACK_IMPORTED_MODULE_1__["Locales"].map(function (x) {
            return x.lang;
          });
          this.themes = ['theme-dark-hopper', 'theme-light-hopper', 'theme-light-blue']; // Add SVG icons for each languages

          this.languages.forEach(function (language) {
            _this._matIconRegistry.addSvgIcon("flag_" + language, _this._domSanitizer.bypassSecurityTrustResourceUrl("assets/flags/" + language + ".svg"));
          });
        } // -------------------------------
        // - LIFE CYCLE HOOKS
        // -------------------------------


        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // Update the current theme when it's changing
            this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentTheme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubcriber)).subscribe(function (currentTheme) {
              return _this2.currentTheme = currentTheme;
            }); // update the currentLang when it's changing


            this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentLang"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubcriber)).subscribe(function (currentLanguage) {
              return _this2.currentLang = currentLanguage;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubcriber.next();

            this._unsubcriber.complete();
          } // -------------------------------
          // - METHODS
          // -------------------------------

        }, {
          key: "onSetTheme",
          value: function onSetTheme(newTheme) {
            this._store.dispatch(_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentTheme"]({
              currentTheme: newTheme
            }));
          }
        }, {
          key: "onSetLanguage",
          value: function onSetLanguage(newLanguage) {
            this._store.dispatch(_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentLang"]({
              currentLang: newLanguage
            }));
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-navbar"]],
        decls: 21,
        vars: 10,
        consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mat-elevation-z4"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["routerLink", "/", 1, "pointer"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "mr-8"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "mr-8", 3, "svgIcon"], ["languageMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "svgIcon"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "palette");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-menu", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, NavBarComponent_button_12_Template, 5, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, NavBarComponent_button_20_Template, 5, 4, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Hopper Cloud Airlines - Angular SDK - ", ctx.version, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.currentTheme);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.themes);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("svgIcon", "flag_", ctx.currentLang, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 8, ctx.currentLang));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        defaultTheme: "theme-light-blue",
        version: 'v2.1.7'
      };
      /***/
    },

    /***/
    "FrS2":
    /*!*********************************************!*\
      !*** ./projects/angular-sdk/src/i18n/zh.ts ***!
      \*********************************************/

    /*! exports provided: locale */

    /***/
    function FrS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      });

      var locale = {
        lang: 'zh',
        data: {
          COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm',
            COUNTRY: {
              AFG: "阿富汗",
              ALA: "奥兰群岛",
              ALB: "阿尔巴尼亚",
              DZA: "阿尔及利亚",
              ASM: "美属萨摩亚",
              AND: "安道尔",
              AGO: "安哥拉",
              AIA: "安圭拉",
              ATA: "南极洲",
              ATG: "安提瓜和巴布达",
              ARG: "阿根廷",
              ARM: "亚美尼亚",
              ABW: "阿鲁巴",
              AUS: "澳大利亚",
              AUT: "奥地利",
              AZE: "阿塞拜疆",
              BHS: "巴哈马",
              BHR: "巴林",
              BGD: "孟加拉国",
              BRB: "巴巴多斯",
              BLR: "白俄罗斯",
              BEL: "比利时",
              BLZ: "伯利兹",
              BEN: "贝宁",
              BMU: "百慕大",
              BTN: "不丹",
              BOL: "玻利维亚",
              BIH: "波斯尼亚和黑塞哥维那",
              BWA: "博茨瓦纳",
              BVT: "布维岛",
              BRA: "巴西",
              VGB: "英属维尔京群岛",
              IOT: "英属印度洋领地",
              BRN: "文莱达鲁萨兰国",
              BGR: "保加利亚",
              BFA: "布基纳法索",
              BDI: "布隆迪",
              KHM: "柬埔寨",
              CMR: "喀麦隆",
              CAN: "加拿大",
              CPV: "佛得角",
              CYM: "开曼群岛",
              CAF: "中非共和国",
              TCD: "乍得",
              CHL: "智利",
              CHN: "中国",
              HKG: "香港",
              MAC: "澳门",
              CXR: "圣诞岛",
              CCK: "科科斯群岛",
              COL: "哥伦比亚",
              COM: "科摩罗",
              COG: "刚果共和国",
              COD: "刚果民主共和国",
              COK: "库克群岛",
              CRI: "哥斯达黎加",
              CIV: "象牙海岸",
              HRV: "克罗地亚",
              CUB: "古巴",
              CYP: "塞浦路斯",
              CZE: "捷克共和国",
              DNK: "丹麦",
              DJI: "吉布提",
              DMA: "多米尼克",
              DOM: "多米尼加共和国",
              ECU: "赤道",
              EGY: "埃及",
              SLV: "萨尔瓦多",
              GNQ: "赤道几内亚",
              ERI: "厄立特里亚",
              EST: "爱沙尼亚",
              ETH: "埃塞俄比亚",
              FLK: "福克兰群岛",
              FRO: "法罗群岛",
              FJI: "斐济",
              FIN: "芬兰",
              FRA: "法国",
              GUF: "法属圭亚那",
              PYF: "法属波利尼西亚",
              ATF: "法属南部和南极土地",
              GAB: "加蓬",
              GMB: "冈比亚",
              GEO: "格鲁吉亚",
              DEU: "德国",
              GHA: "加纳",
              GIB: "直布罗陀",
              GRC: "希腊",
              GRL: "格陵兰",
              GRD: "格林纳达",
              GLP: "瓜德罗普",
              GUM: "关岛",
              GTM: "危地马拉",
              GGY: "根西岛",
              GIN: "几内亚",
              GNB: "几内亚比绍",
              GUY: "圭亚那",
              HTI: "海地",
              HMD: "赫德和麦克唐纳群岛",
              VAT: "教廷（梵蒂冈）",
              HND: "洪都拉斯",
              HUN: "匈牙利",
              ISL: "冰岛",
              IND: "印度",
              IDN: "印度尼西亚",
              IRN: "伊朗",
              IRQ: "伊拉克",
              IRL: "爱尔兰",
              IMN: "马恩岛",
              ISR: "以色列",
              ITA: "意大利",
              JAM: "牙买加",
              JPN: "日本",
              JEY: "泽西",
              JOR: "乔丹",
              KAZ: "哈萨克斯坦",
              KEN: "肯尼亚",
              KIR: "基里巴斯",
              PRK: "朝鲜",
              KOR: "韩国",
              KWT: "科威特",
              KGZ: "吉尔吉斯斯坦",
              LAO: "老挝",
              LVA: "拉脱维亚",
              LBN: "黎巴嫩",
              LSO: "莱索托",
              LBR: "利比里亚",
              LBY: "利比亚",
              LIE: "列支敦士登",
              LTU: "立陶宛",
              LUX: "卢森堡",
              MKD: "马其顿",
              MDG: "马达加斯加",
              MWI: "马拉维",
              MYS: "马来西亚",
              MDV: "马尔代夫",
              MLI: "马里",
              MLT: "马耳他",
              MHL: "马绍尔群岛",
              MTQ: "马提尼克岛",
              MRT: "毛里塔尼亚",
              MUS: "毛里求斯",
              MYT: "马约特",
              MEX: "墨西哥",
              FSM: "密克罗尼西亚",
              MDA: "摩尔多瓦",
              MCO: "摩纳哥",
              MNG: "蒙古",
              MNE: "黑山",
              MSR: "蒙特塞拉特",
              MAR: "摩洛哥",
              MOZ: "莫桑比克",
              MMR: "缅甸",
              NAM: "纳米比亚",
              NRU: "瑙鲁",
              NPL: "尼泊尔",
              NLD: "荷兰",
              NCL: "新喀里多尼亚",
              NZL: "新西兰",
              NIC: "尼加拉瓜",
              NER: "尼日尔",
              NGA: "尼日利亚",
              NIU: "新",
              NFK: "诺福克岛",
              MNP: "北马里安群岛",
              NOR: "挪威",
              OMN: "阿曼",
              PAK: "巴基斯坦",
              PLW: "帕劳",
              PSE: "巴勒斯坦",
              PAN: "巴拿马",
              PNG: "巴布亚新几内亚",
              PRY: "巴拉圭",
              PER: "秘鲁",
              PHL: "菲律宾",
              PCN: "皮特凯恩",
              POL: "波兰",
              PRT: "葡萄牙",
              PRI: "波多黎各",
              QAT: "卡塔尔",
              REU: "会议",
              ROU: "罗马尼亚",
              RUS: "俄罗斯",
              RWA: "卢旺达",
              BLM: "圣巴泰勒米",
              SHN: "圣赫勒拿",
              KNA: "圣基茨和尼维斯",
              LCA: "圣卢西亚",
              MAF: "圣马丁（法语部分）",
              SXM: "圣马丁（荷兰部分）",
              SPM: "圣皮埃尔和密克隆",
              VCT: "圣文森特和格林纳丁斯",
              WSM: "萨摩亚",
              SMR: "圣马力诺",
              STP: "圣多美和普林西比",
              SAU: "沙特阿拉伯",
              SEN: "塞内加尔",
              SRB: "塞尔维亚",
              SYC: "塞舌尔",
              SLE: "塞拉利昂",
              SGP: "新加坡",
              SVK: "斯洛伐克",
              SVN: "斯洛文尼亚",
              SLB: "所罗门群岛",
              SOM: "索马里",
              ZAF: "南非",
              SGS: "南乔治亚和南桑威奇群岛",
              SSD: "南苏丹",
              ESP: "西班牙",
              LKA: "斯里兰卡",
              SDN: "苏丹",
              SUR: "苏里南",
              SJM: "斯瓦尔巴和扬马延",
              SWZ: "斯威士兰",
              SWE: "瑞典",
              CHE: "瑞士",
              SYR: "叙利亚",
              TWN: "台湾",
              TJK: "塔吉克斯坦",
              TZA: "坦桑尼亚",
              THA: "泰国",
              TLS: "东帝汶",
              TGO: "多哥",
              TKL: "托克劳",
              TON: "汤加",
              TTO: "特立尼达和多巴哥",
              TUN: "突尼斯",
              TUR: "土耳其",
              TKM: "土库曼斯坦",
              TCA: "特克斯和凯科斯群岛",
              TUV: "图瓦卢",
              UGA: "乌干达",
              UKR: "乌克兰",
              ARE: "阿拉伯联合酋长国",
              GBR: "英国",
              USA: "美国",
              UMI: "美国外围小岛",
              URY: "乌拉圭",
              UZB: "乌兹别克斯坦",
              VUT: "瓦努阿图",
              VEN: "委内瑞拉",
              VNM: "越南",
              VIR: "美属维尔京群岛",
              WLF: "瓦利斯和富图纳",
              ESH: "西撒哈拉",
              YEM: "也门",
              ZMB: "赞比亚",
              ZWE: "津巴布韦"
            }
          },
          CFAR_OFFER_BANNER: {
            TITLE: "随时以任何理由取消您的航班。",
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            BUTTON: {
              SELECT: "选择"
            },
            COVERAGE_PERCENTAGE: "承保飞行费用的 {{ coverage }}"
          },
          CFAR_OFFER_BANNER_LARGE: {
            TITLE: "随时以任何理由取消您的航班。",
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            BUTTON: {
              CONTINUE: "继续"
            },
            COVERAGE_PERCENTAGE: "承保飞行费用的 {{ coverage }}",
            NO_COVERAGE_OPTION: "我不想出于任何原因购买取消。",
            CHOOSE_COVERAGE: "请选择或拒绝出于任何原因取消。"
          },
          CFAR_OFFER_DIALOG: {
            TITLE: "出于任何原因取消",
            POWERED_BY: "由 Hopper 提供支持",
            VIEW_DETAILS: "查看详情",
            BUTTON: {
              CANCEL: "继续无覆盖",
              SUBMIT: "继续覆盖 {{ coverage }}"
            },
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            TERMS_WARNING: "如果你不添加这个,你的票是不可退款的。",
            TERMS_LINK_TEXT: "条款和条件"
          },
          CFAR_EXERCISE_DIALOG: {
            TITLE: "取消航班",
            SUBTITLE: "出于任何原因取消",
            DEADLINE_SENTENCE_1: "免费取消您的预订,直到 ",
            DEADLINE_SENTENCE_2: "您将收到一封确认电子邮件,行程状态将更新。",
            TO: " 到 ",
            DEPARTURE: "离开: ",
            ARRIVAL: "到达: ",
            FLIGHT: "航班: ",
            PASSENGER: "{{ nbPassenger }} 名乘客",
            PASSENGERS: "{{ nbPassenger }} 名乘客",
            CHOOSE_REFUND_TYPE: "选择您的退款类型",
            HOPPER_REFUND: "Hopper 退款",
            AIRLINE_REFUND: "航空公司退款",
            METHOD: "方法:",
            AMOUNT: "金额:",
            REFUND_METHOD: "退款方式",
            BUTTON: {
              CANCEL: "取消",
              SUBMIT: "是的,取消航班"
            },
            NO_CONTRACT: "没有可用的合同",
            LOADING: "正在加载..."
          }
        }
      };
      /***/
    },

    /***/
    "KHEL":
    /*!********************************************************!*\
      !*** ./src/app/shared/ngrx/global/global.selectors.ts ***!
      \********************************************************/

    /*! exports provided: getGlobalState, getCurrentLang, getCurrentTheme */

    /***/
    function KHEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGlobalState", function () {
        return getGlobalState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCurrentLang", function () {
        return getCurrentLang;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function () {
        return getCurrentTheme;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var getGlobalState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('global');
      var getCurrentLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalState, function (state) {
        return state.currentLang;
      });
      var getCurrentTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalState, function (state) {
        return state.currentTheme;
      });
      /***/
    },

    /***/
    "O2Jr":
    /*!*********************************************!*\
      !*** ./projects/angular-sdk/src/i18n/es.ts ***!
      \*********************************************/

    /*! exports provided: locale */

    /***/
    function O2Jr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      });

      var locale = {
        lang: 'es',
        data: {
          COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm',
            COUNTRY: {
              AFG: "Afganistán",
              ALA: "Islas Åland",
              ALB: "Albania",
              DZA: "Argelia",
              ASM: "Samoa Americana",
              AND: "Andorra",
              AGO: "Angola",
              AIA: "Anguila",
              ATA: "Antártida",
              ATG: "Antigua y Barbuda",
              ARG: "Argentina",
              ARM: "Armenia",
              ABW: "Aruba",
              AUS: "Australia",
              AUT: "Austria",
              AZE: "Azerbaiyán",
              BHS: "Bahamas",
              BHR: "Bahréin",
              BGD: "Bangladés",
              BRB: "Barbados",
              BLR: "Bielorrusia",
              BEL: "Bélgica",
              BLZ: "Belice",
              BEN: "Benín",
              BMU: "Bermudas",
              BTN: "Bután",
              BOL: "Bolivia",
              BIH: "Bosnia y Herzegovina",
              BWA: "Botsuana",
              BVT: "Isla Bouvet",
              BRA: "Brasil",
              VGB: "Islas Vírgenes Británicas",
              IOT: "Territorio Británico del Océano Índico",
              BRN: "Brunéi Darussalam",
              BGR: "Bulgaria",
              BFA: "Burkina Faso",
              BDI: "Burundi",
              KHM: "Camboya",
              CMR: "Camerún",
              CAN: "Canadá",
              CPV: "Cabo Verde",
              CYM: "Islas Caimán",
              CAF: "República Centroafricana",
              TCD: "Chad",
              CHL: "Chile",
              CHN: "China",
              HKG: "Hong Kong",
              MAC: "Macao",
              CXR: "Isla de Navidad",
              CCK: "Islas Cocos",
              COL: "Colombia",
              COM: "Comoras",
              COG: "República del Congo",
              COD: "República Democrática del Congo",
              COK: "Islas Cook",
              CRI: "Costa Rica",
              CIV: "Costa de Marfil",
              HRV: "Croacia",
              CUB: "Cuba",
              CYP: "Chipre",
              CZE: "República Checa",
              DNK: "Dinamarca",
              DJI: "Yibuti",
              DMA: "Dominica",
              DOM: "República Dominicana",
              ECU: "Ecuador",
              EGY: "Egipto",
              SLV: "Salvador",
              GNQ: "Guinea Ecuatorial",
              ERI: "Eritrea",
              EST: "Estonia",
              ETH: "Etiopía",
              FLK: "Islas Malvinas",
              FRO: "Islas Feroe",
              FJI: "Fiyi",
              FIN: "Finlandia",
              FRA: "Francia",
              GUF: "Guayana Francesa",
              PYF: "Polinesia Francesa",
              ATF: "Territorios Australes y Antárticos Franceses",
              GAB: "Gabón",
              GMB: "Gambia",
              GEO: "Georgia",
              DEU: "Alemania",
              GHA: "Ghana",
              GIB: "Gibraltar",
              GRC: "Grecia",
              GRL: "Groenlandia",
              GRD: "Granada",
              GLP: "Guadalupe",
              GUM: "Guam",
              GTM: "Guatemala",
              GGY: "Guernesey",
              GIN: "Guinea",
              GNB: "Guinea-Bisáu",
              GUY: "Guyana",
              HTI: "Haití",
              HMD: "Islas Heard y McDonald",
              VAT: "Santa Sede (Vaticano)",
              HND: "Honduras",
              HUN: "Hungría",
              ISL: "Islandia",
              IND: "India",
              IDN: "Indonesia",
              IRN: "Irán",
              IRQ: "Irak",
              IRL: "Irlanda",
              IMN: "Isla de Man",
              ISR: "Israel",
              ITA: "Italia",
              JAM: "Jamaica",
              JPN: "Japón",
              JEY: "Jersey",
              JOR: "Jordania",
              KAZ: "Kazajstán",
              KEN: "Kenia",
              KIR: "Kiribati",
              PRK: "Corea del Norte",
              KOR: "Corea del Sur",
              KWT: "Kuwait",
              KGZ: "Kirguistán",
              LAO: "Laos",
              LVA: "Letonia",
              LBN: "Líbano",
              LSO: "Lesoto",
              LBR: "Liberia",
              LBY: "Libia",
              LIE: "Liechtenstein",
              LTU: "Lituania",
              LUX: "Luxemburgo",
              MKD: "Macedonia",
              MDG: "Madagascar",
              MWI: "Malaui",
              MYS: "Malasia",
              MDV: "Maldivas",
              MLI: "Malí",
              MLT: "Malta",
              MHL: "Islas Marshall",
              MTQ: "Martinica",
              MRT: "Mauritania",
              MUS: "Mauricio",
              MYT: "Mayotte",
              MEX: "México",
              FSM: "Micronesia",
              MDA: "Moldavia",
              MCO: "Mónaco",
              MNG: "Mongolia",
              MNE: "Montenegro",
              MSR: "Montserrat",
              MAR: "Marruecos",
              MOZ: "Mozambique",
              MMR: "Birmania",
              NAM: "Namibia",
              NRU: "Nauru",
              NPL: "Nepal",
              NLD: "Países Bajos",
              NCL: "Nueva Caledonia",
              NZL: "Nueva Zelanda",
              NIC: "Nicaragua",
              NER: "Níger",
              NGA: "Nigeria",
              NIU: "Niue",
              NFK: "Isla Norfolk",
              MNP: "Islas Marianas del Norte",
              NOR: "Noruega",
              OMN: "Omán",
              PAK: "Pakistán",
              PLW: "Palaus",
              PSE: "Palestina",
              PAN: "Panamá",
              PNG: "Papúa Nueva Guinea",
              PRY: "Paraguay",
              PER: "Perú",
              PHL: "Filipinas",
              PCN: "Pitcairn",
              POL: "Polonia",
              PRT: "Portugal",
              PRI: "Puerto Rico",
              QAT: "Catar",
              REU: "Reunión",
              ROU: "Rumania",
              RUS: "Rusia",
              RWA: "Ruanda",
              BLM: "San Bartolomé",
              SHN: "Santa Elena",
              KNA: "San Cristóbal y Nieves",
              LCA: "Santa Lucía",
              MAF: "San Martín (parte francesa)",
              SXM: "San Martín (hojas holandesas)",
              SPM: "San Pedro y Miquelón",
              VCT: "San Vicente y las Granadinas",
              WSM: "Samoa",
              SMR: "San Marino",
              STP: "Santo Tomé y Príncipe",
              SAU: "Arabia Saudita",
              SEN: "Senegal",
              SRB: "Serbia",
              SYC: "Seychelles",
              SLE: "Sierra Leona",
              SGP: "Singapur",
              SVK: "Eslovaquia",
              SVN: "Eslovenia",
              SLB: "Islas Salomón",
              SOM: "Somalia",
              ZAF: "Sudáfrica",
              SGS: "Islas Georgias del Sur y Sandwich del Sur",
              SSD: "Sudán del Sur",
              ESP: "español",
              LKA: "Sri Lanka",
              SDN: "Sudán",
              SUR: "Surinam",
              SJM: "Svalbard y Jan Mayen",
              SWZ: "Esuatini",
              SWE: "Suecia",
              CHE: "Suiza",
              SYR: "Siria",
              TWN: "Taiwán",
              TJK: "Tayikistán",
              TZA: "Tanzania",
              THA: "Tailandia",
              TLS: "Timor Oriental",
              TGO: "Togo",
              TKL: "Tokelau",
              TON: "Tonga",
              TTO: "Trinidad y Tabago",
              TUN: "Túnez",
              TUR: "Turquía",
              TKM: "Turkmenistán",
              TCA: "Islas Turcas y Caicos",
              TUV: "Tuvalu",
              UGA: "Uganda",
              UKR: "Ucrania",
              ARE: "Emiratos Árabes Unidos",
              GBR: "Reino Unido",
              USA: "Estados Unidos",
              UMI: "Islas menores alejadas de los Estados Unidos",
              URY: "Uruguay",
              UZB: "Uzbekistán",
              VUT: "Vanuatu",
              VEN: "Venezuela",
              VNM: "Vietnam",
              VIR: "Islas Vírgenes de los Estados Unidos",
              WLF: "Wallis y Futuna",
              ESH: "Sáhara Occidental",
              YEM: "Yemen",
              ZMB: "Zambia",
              ZWE: "Zimbabue"
            }
          },
          CFAR_OFFER_BANNER: {
            TITLE: "Cancele su vuelo en cualquier momento, por cualquier motivo.",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            BUTTON: {
              SELECT: "Seleccione"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} de los costos de vuelo cubiertos"
          },
          CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Cancele su vuelo en cualquier momento, por cualquier motivo.",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            BUTTON: {
              CONTINUE: "Seguir"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} de los costos de vuelo cubiertos",
            NO_COVERAGE_OPTION: "No quiero comprar Cancelar por cualquier motivo.",
            CHOOSE_COVERAGE: "Elija o rechace Cancelar por cualquier motivo."
          },
          CFAR_OFFER_DIALOG: {
            TITLE: "Cancelar por cualquier motivo",
            POWERED_BY: "Impulsado por Hopper",
            VIEW_DETAILS: "Ver detalles",
            BUTTON: {
              CANCEL: "Continuar sin cobertura",
              SUBMIT: "Continuar con {{ coverage }} de cobertura"
            },
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            TERMS_WARNING: "Si no agrega esto, su boleto no es reembolsable",
            TERMS_LINK_TEXT: "Términos y condiciones"
          },
          CFAR_EXERCISE_DIALOG: {
            TITLE: "Cancelar vuelo",
            SUBTITLE: "Cancelar por cualquier motivo",
            DEADLINE_SENTENCE_1: "Cancela tu reserva sin cargo hasta ",
            DEADLINE_SENTENCE_2: "Recibirá un correo electrónico de confirmación y se actualizará el estado del viaje.",
            TO: " a ",
            DEPARTURE: "Salida:",
            ARRIVAL: "Llegada:",
            FLIGHT: "Vuelo:",
            PASSENGER: "{{ nbPassenger }} pasajero",
            PASSENGERS: "{{ nbPassenger }} pasajeros",
            CHOOSE_REFUND_TYPE: "Elija su tipo de reembolso",
            HOPPER_REFUND: "Reembolso Hopper",
            AIRLINE_REFUND: "Reembolso de la aerolínea",
            METHOD: "Método:",
            AMOUNT: "Cantidad:",
            REFUND_METHOD: "Método de reembolso",
            BUTTON: {
              CANCEL: "Cancelar",
              SUBMIT: "Sí, cancelar vuelo"
            },
            NO_CONTRACT: "No hay contrato disponible",
            LOADING: "Cargando en curso..."
          }
        }
      };
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/layout/layout.component */
      "Xn/w");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "8ifR");
      /* harmony import */


      var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/inputs/inputs.component */
      "ognC");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/outputs/outputs.component */
      "ZHSn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[// Angular Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], // Angular Material Modules
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], // Misc Modules
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__["InputsComponent"], _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__["OutputsComponent"]],
          imports: [// Angular Modules
          _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], // Angular Material Modules
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], // Misc Modules
          _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]],
          exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"], _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__["InputsComponent"], _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__["OutputsComponent"]]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _shared_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/ngrx/global/global.selectors */
      "KHEL");
      /* harmony import */


      var _shared_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/ngrx/global/global.actions */
      "2wFT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/components/navbar/navbar.component */
      "8ifR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(_store) {
          _classCallCheck(this, AppComponent);

          this._store = _store;
          this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        } // -------------------------------
        // - LIFE CYCLE HOOKS
        // -------------------------------


        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            // Update the current theme when it's changing
            this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_shared_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_4__["getCurrentTheme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubcriber)).subscribe(function (currentTheme) {
              // Remove active theme
              document.body.classList.remove(_this3.currentTheme); // Activate the new theme

              _this3.currentTheme = currentTheme;
              document.body.classList.add(_this3.currentTheme);
            }); // Set Default theme


            this._store.dispatch(_shared_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentTheme"]({
              currentTheme: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultTheme
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubcriber.next();

            this._unsubcriber.complete();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "main-container"], ["fxFlex", "64px", 1, "mat-elevation-z6"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-navbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Xn/w":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/layout/layout.component.ts ***!
      \**************************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function XnW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_router_router_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../ngrx/router/router.actions */
      "g+sT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function LayoutComponent_mat_list_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var component_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", component_r2 == null ? null : component_r2.link)("selected", ctx_r1.selectedPath === (component_r2 == null ? null : component_r2.link));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", component_r2 == null ? null : component_r2.name, " ");
        }
      }

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(_store) {
          _classCallCheck(this, LayoutComponent);

          this._store = _store;
          this.components = [];
          this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.components.push({
            name: 'CFAR Offer Banner',
            link: 'cfar-offer-banner'
          });
          this.components.push({
            name: 'CFAR Offer Banner Large',
            link: 'cfar-offer-banner-large'
          });
          this.components.push({
            name: 'CFAR Offer Dialog',
            link: 'cfar-offer-dialog'
          }); // Working items

          if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
            this.components.push({
              name: 'CFAR Exercise Dialog [WIP]',
              link: 'cfar-exercise-dialog'
            });
          }
        } // -------------------------------
        // - LIFE CYCLE HOOKS
        // -------------------------------


        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            // Update the selectedPath when it's changing
            this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_router_router_actions__WEBPACK_IMPORTED_MODULE_4__["selectRouteData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubcriber)).subscribe(function (data) {
              return _this4.selectedPath = data.path;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubcriber.next();

            this._unsubcriber.complete();
          }
        }, {
          key: "onScrollToTop",
          value: function onScrollToTop(event) {
            var _a;

            (_a = document.querySelector('#scroll-anchor')) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"]));
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        decls: 7,
        vars: 2,
        consts: [["fxLayout", "row", "fxLayoutAlign", "stretch center", 1, "layout-container"], ["fxFlex", "20", "fxFill", "", 1, "aside"], [3, "multiple"], ["componentsList", ""], [3, "routerLink", "selected", 4, "ngFor", "ngForOf"], ["fxFlex", "80", "fxFill", "", "id", "scroll-anchor", 1, "content"], [3, "activate"], [3, "routerLink", "selected"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-selection-list", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LayoutComponent_mat_list_option_4_Template, 2, 3, "mat-list-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "router-outlet", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function LayoutComponent_Template_router_outlet_activate_6_listener($event) {
              return ctx.onScrollToTop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.components);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "YXdr":
    /*!*********************************************!*\
      !*** ./projects/angular-sdk/src/i18n/en.ts ***!
      \*********************************************/

    /*! exports provided: locale */

    /***/
    function YXdr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      });

      var locale = {
        lang: 'en',
        data: {
          COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm',
            COUNTRY: {
              AFG: "Afghanistan",
              ALA: "Åland Islands",
              ALB: "Albania",
              DZA: "Algeria",
              ASM: "American Samoa",
              AND: "Andorra",
              AGO: "Angola",
              AIA: "Anguilla",
              ATA: "Antarctica",
              ATG: "Antigua and Barbuda",
              ARG: "Argentina",
              ARM: "Armenia",
              ABW: "Aruba",
              AUS: "Australia",
              AUT: "Austria",
              AZE: "Azerbaijan",
              BHS: "Bahamas",
              BHR: "Bahrain",
              BGD: "Bangladesh",
              BRB: "Barbados",
              BLR: "Belarus",
              BEL: "Belgium",
              BLZ: "Belize",
              BEN: "Benin",
              BMU: "Bermuda",
              BTN: "Bhutan",
              BOL: "Bolivia",
              BIH: "Bosnia and Herzegovina",
              BWA: "Botswana",
              BVT: "Bouvet Island",
              BRA: "Brazil",
              VGB: "British Virgin Islands",
              IOT: "British Indian Ocean Territory",
              BRN: "Brunei Darussalam",
              BGR: "Bulgaria",
              BFA: "Burkina Faso",
              BDI: "Burundi",
              KHM: "Cambodia",
              CMR: "Cameroon",
              CAN: "Canada",
              CPV: "Cape Verde",
              CYM: "Cayman Islands",
              CAF: "Central African Republic",
              TCD: "Chad",
              CHL: "Chile",
              CHN: "China",
              HKG: "Hong Kong",
              MAC: "Macau",
              CXR: "Christmas Island",
              CCK: "Cocos Islands",
              COL: "Colombia",
              COM: "Comoros",
              COG: "Republic of the Congo",
              COD: "Democratic Republic of the Congo",
              COK: "Cook Islands",
              CRI: "Costa Rica",
              CIV: "Ivory Coast",
              HRV: "Croatia",
              CUB: "Cuba",
              CYP: "Cyprus",
              CZE: "Czech Republic",
              DNK: "Denmark",
              DJI: "Djibouti",
              DMA: "Dominica",
              DOM: "Dominican Republic",
              ECU: "Equator",
              EGY: "Egypt",
              SLV: "Salvador",
              GNQ: "Equatorial Guinea",
              ERI: "Eritrea",
              EST: "Estonia",
              ETH: "Ethiopia",
              FLK: "Falkland Islands",
              FRO: "Faroe Islands",
              FJI: "Fiji",
              FIN: "Finland",
              FRA: "France",
              GUF: "French Guiana",
              PYF: "French Polynesia",
              ATF: "French Southern and Antarctic Lands",
              GAB: "Gabon",
              GMB: "Gambia",
              GEO: "Georgia",
              DEU: "Germany",
              GHA: "Ghana",
              GIB: "Gibraltar",
              GRC: "Greece",
              GRL: "Greenland",
              GRD: "Grenada",
              GLP: "Guadeloupe",
              GUM: "Guam",
              GTM: "Guatemala",
              GGY: "Guernsey",
              GIN: "Guinea",
              GNB: "Guinea-Bissau",
              GUY: "Guyana",
              HTI: "Haiti",
              HMD: "Heard and MacDonald Islands",
              VAT: "Holy See (Vatican)",
              HND: "Honduras",
              HUN: "Hungary",
              ISL: "Iceland",
              IND: "India",
              IDN: "Indonesia",
              IRN: "Iran",
              IRQ: "Iraq",
              IRL: "Ireland",
              IMN: "Isle of Man",
              ISR: "Israel",
              ITA: "Italy",
              JAM: "Jamaica",
              JPN: "Japan",
              JEY: "Jersey",
              JOR: "Jordan",
              KAZ: "Kazakhstan",
              KEN: "Kenya",
              KIR: "Kiribati",
              PRK: "North Korea",
              KOR: "South Korea",
              KWT: "Kuwait",
              KGZ: "Kyrgyzstan",
              LAO: "Laos",
              LVA: "Latvia",
              LBN: "Lebanon",
              LSO: "Lesotho",
              LBR: "Liberia",
              LBY: "Libya",
              LIE: "Liechtenstein",
              LTU: "Lithuania",
              LUX: "Luxembourg",
              MKD: "Macedonia",
              MDG: "Madagascar",
              MWI: "Malawi",
              MYS: "Malaysia",
              MDV: "Maldives",
              MLI: "Mali",
              MLT: "Malta",
              MHL: "Marshall Islands",
              MTQ: "Martinique",
              MRT: "Mauritania",
              MUS: "Mauritius",
              MYT: "Mayotte",
              MEX: "Mexico",
              FSM: "Micronesia",
              MDA: "Moldova",
              MCO: "Monaco",
              MNG: "Mongolia",
              MNE: "Montenegro",
              MSR: "Montserrat",
              MAR: "Morocco",
              MOZ: "Mozambique",
              MMR: "Myanmar",
              NAM: "Namibia",
              NRU: "Nauru",
              NPL: "Nepal",
              NLD: "Netherlands",
              NCL: "New Caledonia",
              NZL: "New Zealand",
              NIC: "Nicaragua",
              NER: "Niger",
              NGA: "Nigeria",
              NIU: "Niue",
              NFK: "Norfolk Island",
              MNP: "Northern Mariana Islands",
              NOR: "Norway",
              OMN: "Oman",
              PAK: "Pakistan",
              PLW: "Palau",
              PSE: "Palestine",
              PAN: "Panama",
              PNG: "Papua New Guinea",
              PRY: "Paraguay",
              PER: "Peru",
              PHL: "Philippines",
              PCN: "Pitcairn",
              POL: "Poland",
              PRT: "Portugal",
              PRI: "Puerto Rico",
              QAT: "Qatar",
              REU: "Reunion",
              ROU: "Romania",
              RUS: "Russia",
              RWA: "Rwanda",
              BLM: "Saint-Barthélemy",
              SHN: "Saint Helena",
              KNA: "Saint Kitts and Nevis",
              LCA: "Saint Lucia",
              MAF: "Saint-Martin (French part)",
              SXM: "Saint-Martin (Dutch part)",
              SPM: "Saint Pierre and Miquelon",
              VCT: "Saint Vincent and the Grenadines",
              WSM: "Samoa",
              SMR: "San Marino",
              STP: "Sao Tome and Principe",
              SAU: "Saudi Arabia",
              SEN: "Senegal",
              SRB: "Serbia",
              SYC: "Seychelles",
              SLE: "Sierra Leone",
              SGP: "Singapore",
              SVK: "Slovakia",
              SVN: "Slovenia",
              SLB: "Solomon Islands",
              SOM: "Somalia",
              ZAF: "South Africa",
              SGS: "South Georgia and the South Sandwich Islands",
              SSD: "South Sudan",
              ESP: "Spain",
              LKA: "Sri Lanka",
              SDN: "Sudan",
              SUR: "Suriname",
              SJM: "Svalbard and Jan Mayen",
              SWZ: "Eswatini",
              SWE: "Sweden",
              CHE: "Switzerland",
              SYR: "Syria",
              TWN: "Taiwan",
              TJK: "Tajikistan",
              TZA: "Tanzania",
              THA: "Thailand",
              TLS: "Timor-Leste",
              TGO: "Togo",
              TKL: "Tokelau",
              TON: "Tonga",
              TTO: "Trinidad and Tobago",
              TUN: "Tunisia",
              TUR: "Turkey",
              TKM: "Turkmenistan",
              TCA: "Turks and Caicos Islands",
              TUV: "Tuvalu",
              UGA: "Uganda",
              UKR: "Ukraine",
              ARE: "United Arab Emirates",
              GBR: "United Kingdom",
              USA: "United States",
              UMI: "Minor Outlying Islands of the United States",
              URY: "Uruguay",
              UZB: "Uzbekistan",
              VUT: "Vanuatu",
              VEN: "Venezuela",
              VNM: "Vietnam",
              VIR: "US Virgin Islands",
              WLF: "Wallis and Futuna",
              ESH: "Western Sahara",
              YEM: "Yemen",
              ZMB: "Zambia",
              ZWE: "Zimbabwe"
            }
          },
          CFAR_OFFER_BANNER: {
            TITLE: "Cancel your flight at any time, for any reason.",
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            BUTTON: {
              SELECT: "Select"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} Flight cost covered"
          },
          CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Cancel your flight at any time, for any reason.",
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            BUTTON: {
              CONTINUE: "Continue"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} Flight cost covered",
            NO_COVERAGE_OPTION: "I do not want to purchase Cancel For Any Reason.",
            CHOOSE_COVERAGE: "Please choose or decline Cancel For Any Reason."
          },
          CFAR_OFFER_DIALOG: {
            TITLE: "Cancel For Any Reason",
            POWERED_BY: "Powered by Hopper",
            VIEW_DETAILS: "View details",
            BUTTON: {
              CANCEL: "Continue Without Coverage",
              SUBMIT: "Continue With {{ coverage }} Coverage"
            },
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            TERMS_WARNING: "If you don't add this, your ticket is non-refundable.",
            TERMS_LINK_TEXT: "Terms & Conditions"
          },
          CFAR_EXERCISE_DIALOG: {
            TITLE: "Cancel flight",
            SUBTITLE: "Cancel For Any Reason",
            DEADLINE_SENTENCE_1: "Cancel your booking free of charge until ",
            DEADLINE_SENTENCE_2: "You'll receive a confirmation email and the trip status will be updated.",
            TO: " to ",
            DEPARTURE: "Departure:",
            ARRIVAL: "Arrival:",
            FLIGHT: "Flight:",
            PASSENGER: "{{ nbPassenger }} passenger",
            PASSENGERS: "{{ nbPassenger }} passengers",
            CHOOSE_REFUND_TYPE: "Choose your refund type",
            HOPPER_REFUND: "Hopper refund",
            AIRLINE_REFUND: "Airline refund",
            METHOD: "Method:",
            AMOUNT: "Airline:",
            REFUND_METHOD: "Refund method",
            BUTTON: {
              CANCEL: "Cancel",
              SUBMIT: "Yes, cancel flight"
            },
            NO_CONTRACT: "No contract available",
            LOADING: "Loading in progress..."
          }
        }
      };
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-highlightjs */
      "OtPg");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngrx-store-freeze */
      "PXG5");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "agSv");
      /* harmony import */


      var _shared_ngrx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/ngrx */
      "dS8Z");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__["storeFreeze"]] : [];

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [{
          provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
          useValue: {
            fullLibraryLoader: function fullLibraryLoader() {
              return __webpack_require__.e(
              /*! import() | highlight-js */
              "highlight-js").then(__webpack_require__.t.bind(null,
              /*! highlight.js */
              "FIf5", 7));
            }
          }
        }],
        imports: [[// Angular Modules
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // Misc Modules
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], // Custom Modules
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_shared_ngrx__WEBPACK_IMPORTED_MODULE_11__["reducers"], {
          metaReducers: metaReducers
        }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
          maxAge: 25,
          logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production
        }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
          imports: [// Angular Modules
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], // Misc Modules
          _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], // Custom Modules
          src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZHSn":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/outputs/outputs.component.ts ***!
      \****************************************************************/

    /*! exports provided: OutputsComponent */

    /***/
    function ZHSn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutputsComponent", function () {
        return OutputsComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");

      var _c0 = ["outputSort"];

      function OutputsComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OutputsComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r7.name);
        }
      }

      function OutputsComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function OutputsComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 12);
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", element_r8.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function OutputsComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
        }
      }

      function OutputsComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
        }
      }

      var OutputsComponent = /*#__PURE__*/function () {
        function OutputsComponent(_cdRef) {
          _classCallCheck(this, OutputsComponent);

          this._cdRef = _cdRef;
          this.displayedOutputsColumns = ['name', 'description'];
          this.outputsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        } // -----------------------------------------------
        // Life Cycle Hooks
        // -----------------------------------------------


        _createClass(OutputsComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.outputs && changes.outputs.currentValue) {
              this.outputsDataSource.data = this.outputs;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.outputsDataSource.sort = this.outputSort;

            this._cdRef.detectChanges();
          }
        }]);

        return OutputsComponent;
      }();

      OutputsComponent.ɵfac = function OutputsComponent_Factory(t) {
        return new (t || OutputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      OutputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OutputsComponent,
        selectors: [["app-outputs"]],
        viewQuery: function OutputsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outputSort = _t.first);
          }
        },
        inputs: {
          outputs: "outputs"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 13,
        vars: 3,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start"], ["mat-table", "", "matSort", "", "fxFlex", "100", 1, "mat-elevation-z4", "mb-16", 3, "dataSource"], ["outputSort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function OutputsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Outputs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, OutputsComponent_th_6_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OutputsComponent_td_7_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OutputsComponent_th_9_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OutputsComponent_td_10_Template, 1, 1, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OutputsComponent_tr_11_Template, 1, 0, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, OutputsComponent_tr_12_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.outputsDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedOutputsColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedOutputsColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRwdXRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "dS8Z":
    /*!**************************************!*\
      !*** ./src/app/shared/ngrx/index.ts ***!
      \**************************************/

    /*! exports provided: reducers */

    /***/
    function dS8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducers", function () {
        return reducers;
      });
      /* harmony import */


      var _global_global_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./global/global.reducer */
      "kMjd");
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");

      var reducers = {
        global: _global_global_reducer__WEBPACK_IMPORTED_MODULE_0__["globalReducer"],
        router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
      };
      /***/
    },

    /***/
    "e7Sd":
    /*!************************************************!*\
      !*** ./projects/angular-sdk/src/i18n/index.ts ***!
      \************************************************/

    /*! exports provided: Locales */

    /***/
    function e7Sd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Locales", function () {
        return Locales;
      });
      /* harmony import */


      var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./en */
      "YXdr");
      /* harmony import */


      var _fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fr */
      "eOS6");
      /* harmony import */


      var _es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./es */
      "O2Jr");
      /* harmony import */


      var _zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./zh */
      "FrS2"); // http://www.loc.gov/standards/iso639-2/php/code_list.php
      // Availables Languages


      var Locales = [_en__WEBPACK_IMPORTED_MODULE_0__["locale"], _fr__WEBPACK_IMPORTED_MODULE_1__["locale"], _es__WEBPACK_IMPORTED_MODULE_2__["locale"], _zh__WEBPACK_IMPORTED_MODULE_3__["locale"]];
      /***/
    },

    /***/
    "eOS6":
    /*!*********************************************!*\
      !*** ./projects/angular-sdk/src/i18n/fr.ts ***!
      \*********************************************/

    /*! exports provided: locale */

    /***/
    function eOS6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "locale", function () {
        return locale;
      });

      var locale = {
        lang: 'fr',
        data: {
          COMMON: {
            DATE_FORMAT: 'EEEE d MMMM y à h:mm:ss z',
            DATE_FORMAT_SHORT: 'dd/MM/YYYY hh:mm',
            COUNTRY: {
              AFG: "Afghanistan",
              ALA: "Îles Åland",
              ALB: "Albanie",
              DZA: "Algérie",
              ASM: "Samoa américaines",
              AND: "Andorre",
              AGO: "Angola",
              AIA: "Anguilla",
              ATA: "Antarctique",
              ATG: "Antigua-et-Barbuda",
              ARG: "Argentine",
              ARM: "Arménie",
              ABW: "Aruba",
              AUS: "Australie",
              AUT: "Autriche",
              AZE: "Azerbaïdjan",
              BHS: "Bahamas",
              BHR: "Bahreïn",
              BGD: "Bangladesh",
              BRB: "Barbade",
              BLR: "Biélorussie",
              BEL: "Belgique",
              BLZ: "Belize",
              BEN: "Bénin",
              BMU: "Bermudes",
              BTN: "Bhoutan",
              BOL: "Bolivie",
              BIH: "Bosnie-Herzégovine",
              BWA: "Botswana",
              BVT: "Île Bouvet",
              BRA: "Brésil",
              VGB: "British Virgin Islands",
              IOT: "Territoire britannique de l’Océan Indien",
              BRN: "Brunei Darussalam",
              BGR: "Bulgarie",
              BFA: "Burkina Faso",
              BDI: "Burundi",
              KHM: "Cambodge",
              CMR: "Cameroun",
              CAN: "Canada",
              CPV: "Cap-Vert",
              CYM: "Iles Cayman",
              CAF: "République centrafricaine",
              TCD: "Tchad",
              CHL: "Chili",
              CHN: "Chine",
              HKG: "Hong Kong",
              MAC: "Macao",
              CXR: "Île Christmas",
              CCK: "Îles Cocos",
              COL: "Colombie",
              COM: "Comores",
              COG: "République du Congo",
              COD: "République démocratique du Congo",
              COK: "Îles Cook",
              CRI: "Costa Rica",
              CIV: "Côte d’Ivoire",
              HRV: "Croatie",
              CUB: "Cuba",
              CYP: "Chypre",
              CZE: "République tchèque",
              DNK: "Danemark",
              DJI: "Djibouti",
              DMA: "Dominique",
              DOM: "République dominicaine",
              ECU: "Équateur",
              EGY: "Égypte",
              SLV: "Salvador",
              GNQ: "Guinée équatoriale",
              ERI: "Érythrée",
              EST: "Estonie",
              ETH: "Éthiopie",
              FLK: "Îles Falkland",
              FRO: "Îles Féroé",
              FJI: "Fidji",
              FIN: "Finlande",
              FRA: "France",
              GUF: "Guyane française",
              PYF: "Polynésie française",
              ATF: "Terres australes et antarctiques françaises",
              GAB: "Gabon",
              GMB: "Gambie",
              GEO: "Géorgie",
              DEU: "Allemagne",
              GHA: "Ghana",
              GIB: "Gibraltar",
              GRC: "Grèce",
              GRL: "Groenland",
              GRD: "Grenade",
              GLP: "Guadeloupe",
              GUM: "Guam",
              GTM: "Guatemala",
              GGY: "Guernesey",
              GIN: "Guinée",
              GNB: "Guinée-Bissau",
              GUY: "Guyane",
              HTI: "Haïti",
              HMD: "Îles Heard-et-MacDonald",
              VAT: "Saint-Siège (Vatican)",
              HND: "Honduras",
              HUN: "Hongrie",
              ISL: "Islande",
              IND: "Inde",
              IDN: "Indonésie",
              IRN: "Iran",
              IRQ: "Irak",
              IRL: "Irlande",
              IMN: "Ile de Man",
              ISR: "Israël",
              ITA: "Italie",
              JAM: "Jamaïque",
              JPN: "Japon",
              JEY: "Jersey",
              JOR: "Jordanie",
              KAZ: "Kazakhstan",
              KEN: "Kenya",
              KIR: "Kiribati",
              PRK: "Corée du Nord",
              KOR: "Corée du Sud",
              KWT: "Koweït",
              KGZ: "Kirghizistan",
              LAO: "Laos",
              LVA: "Lettonie",
              LBN: "Liban",
              LSO: "Lesotho",
              LBR: "Libéria",
              LBY: "Libye",
              LIE: "Liechtenstein",
              LTU: "Lituanie",
              LUX: "Luxembourg",
              MKD: "Macédoine",
              MDG: "Madagascar",
              MWI: "Malawi",
              MYS: "Malaisie",
              MDV: "Maldives",
              MLI: "Mali",
              MLT: "Malte",
              MHL: "Îles Marshall",
              MTQ: "Martinique",
              MRT: "Mauritanie",
              MUS: "Maurice",
              MYT: "Mayotte",
              MEX: "Mexique",
              FSM: "Micronésie",
              MDA: "Moldavie",
              MCO: "Monaco",
              MNG: "Mongolie",
              MNE: "Monténégro",
              MSR: "Montserrat",
              MAR: "Maroc",
              MOZ: "Mozambique",
              MMR: "Myanmar",
              NAM: "Namibie",
              NRU: "Nauru",
              NPL: "Népal",
              NLD: "Pays-Bas",
              NCL: "Nouvelle-Calédonie",
              NZL: "Nouvelle-Zélande",
              NIC: "Nicaragua",
              NER: "Niger",
              NGA: "Nigeria",
              NIU: "Niue",
              NFK: "Île Norfolk",
              MNP: "Îles Mariannes du Nord",
              NOR: "Norvège",
              OMN: "Oman",
              PAK: "Pakistan",
              PLW: "Palau",
              PSE: "Palestine",
              PAN: "Panama",
              PNG: "Papouasie-Nouvelle-Guinée",
              PRY: "Paraguay",
              PER: "Pérou",
              PHL: "Philippines",
              PCN: "Pitcairn",
              POL: "Pologne",
              PRT: "Portugal",
              PRI: "Puerto Rico",
              QAT: "Qatar",
              REU: "Réunion",
              ROU: "Roumanie",
              RUS: "Russie",
              RWA: "Rwanda",
              BLM: "Saint-Barthélemy",
              SHN: "Sainte-Hélène",
              KNA: "Saint-Kitts-et-Nevis",
              LCA: "Sainte-Lucie",
              MAF: "Saint-Martin (partie française)",
              SXM: "Saint-Martin (partie néerlandaise)",
              SPM: "Saint-Pierre-et-Miquelon",
              VCT: "Saint-Vincent-et-les Grenadines",
              WSM: "Samoa",
              SMR: "Saint-Marin",
              STP: "Sao Tomé-et-Principe",
              SAU: "Arabie Saoudite",
              SEN: "Sénégal",
              SRB: "Serbie",
              SYC: "Seychelles",
              SLE: "Sierra Leone",
              SGP: "Singapour",
              SVK: "Slovaquie",
              SVN: "Slovénie",
              SLB: "Îles Salomon",
              SOM: "Somalie",
              ZAF: "Afrique du Sud",
              SGS: "Géorgie du Sud et les îles Sandwich du Sud",
              SSD: "Sud-Soudan",
              ESP: "Espagne",
              LKA: "Sri Lanka",
              SDN: "Soudan",
              SUR: "Suriname",
              SJM: "Svalbard et Jan Mayen",
              SWZ: "Eswatini",
              SWE: "Suède",
              CHE: "Suisse",
              SYR: "Syrie",
              TWN: "Taiwan",
              TJK: "Tadjikistan",
              TZA: "Tanzanie",
              THA: "Thaïlande",
              TLS: "Timor-Leste",
              TGO: "Togo",
              TKL: "Tokelau",
              TON: "Tonga",
              TTO: "Trinité-et-Tobago",
              TUN: "Tunisie",
              TUR: "Turquie",
              TKM: "Turkménistan",
              TCA: "Îles Turques-et-Caïques",
              TUV: "Tuvalu",
              UGA: "Ouganda",
              UKR: "Ukraine",
              ARE: "Émirats Arabes Unis",
              GBR: "Royaume-Uni",
              USA: "États-Unis",
              UMI: "Îles mineures éloignées des États-Unis",
              URY: "Uruguay",
              UZB: "Ouzbékistan",
              VUT: "Vanuatu",
              VEN: "Venezuela",
              VNM: "Viêt Nam",
              VIR: "Îles Vierges américaines",
              WLF: "Wallis-et-Futuna",
              ESH: "Sahara occidental",
              YEM: "Yémen",
              ZMB: "Zambie",
              ZWE: "Zimbabwe"
            }
          },
          CFAR_OFFER_BANNER: {
            TITLE: "Annulez votre vol à tout moment, pour quelque raison que ce soit.",
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            BUTTON: {
              SELECT: "Sélectionner"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} des frais de vol couverts"
          },
          CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Annulez votre vol à tout moment, pour quelque raison que ce soit.",
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            BUTTON: {
              CONTINUE: "Continuer"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} des frais de vol couverts",
            NO_COVERAGE_OPTION: "Je ne veux pas ajouter l'option 'Annuler pour une raison quelconque'.",
            CHOOSE_COVERAGE: "Veuillez choisir ou refuser 'Annuler pour une raison quelconque'."
          },
          CFAR_OFFER_DIALOG: {
            TITLE: "Annuler pour une raison quelconque",
            POWERED_BY: "Propulsé par Hopper",
            VIEW_DETAILS: "Voir détails",
            BUTTON: {
              CANCEL: "Continuer sans couverture",
              SUBMIT: "Continuer avec {{ coverage }} de couverture"
            },
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            TERMS_WARNING: "Si vous ne l'ajoutez pas, votre billet ne sera pas remboursable.",
            TERMS_LINK_TEXT: "Conditions d'utilisation"
          },
          CFAR_EXERCISE_DIALOG: {
            TITLE: "Annuler le vol",
            SUBTITLE: "Annuler pour une raison quelconque",
            DEADLINE_SENTENCE_1: "Annulez votre réservation sans frais jusqu'au ",
            DEADLINE_SENTENCE_2: "Vous recevrez un e-mail de confirmation et le statut du voyage sera mis à jour.",
            TO: " vers ",
            DEPARTURE: "Départ :",
            ARRIVAL: "Arrivée :",
            FLIGHT: "Vol :",
            PASSENGER: "{{ nbPassenger }} passager",
            PASSENGERS: "{{ nbPassenger }} passagers",
            CHOOSE_REFUND_TYPE: "Choisissez votre type de remboursement",
            HOPPER_REFUND: "Remboursement Hopper",
            AIRLINE_REFUND: "Remboursement de la compagnie aérienne",
            METHOD: "Méthode :",
            AMOUNT: "Montant :",
            REFUND_METHOD: "Mode de remboursement",
            BUTTON: {
              CANCEL: "Annuler",
              SUBMIT: "Oui, annuler le vol"
            },
            NO_CONTRACT: "Aucun contrat disponible",
            LOADING: "Chargement en cours..."
          }
        }
      };
      /***/
    },

    /***/
    "g+sT":
    /*!******************************************************!*\
      !*** ./src/app/shared/ngrx/router/router.actions.ts ***!
      \******************************************************/

    /*! exports provided: selectCurrentRoute, selectFragment, selectQueryParams, selectQueryParam, selectRouteParams, selectRouteParam, selectRouteData, selectUrl */

    /***/
    function gST(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectCurrentRoute", function () {
        return selectCurrentRoute;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectFragment", function () {
        return selectFragment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectQueryParams", function () {
        return selectQueryParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectQueryParam", function () {
        return selectQueryParam;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRouteParams", function () {
        return selectRouteParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRouteParam", function () {
        return selectRouteParam;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectRouteData", function () {
        return selectRouteData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectUrl", function () {
        return selectUrl;
      });
      /* harmony import */


      var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/router-store */
      "99NH");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');

      var _Object = Object(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"])(selectRouterState),
          selectCurrentRoute = _Object.selectCurrentRoute,
          selectFragment = _Object.selectFragment,
          selectQueryParams = _Object.selectQueryParams,
          selectQueryParam = _Object.selectQueryParam,
          selectRouteParams = _Object.selectRouteParams,
          selectRouteParam = _Object.selectRouteParam,
          selectRouteData = _Object.selectRouteData,
          selectUrl = _Object.selectUrl;
      /***/

    },

    /***/
    "kMjd":
    /*!******************************************************!*\
      !*** ./src/app/shared/ngrx/global/global.reducer.ts ***!
      \******************************************************/

    /*! exports provided: globalReducer */

    /***/
    function kMjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "globalReducer", function () {
        return globalReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./global.actions */
      "2wFT");

      var initialState = {
        currentLang: 'en',
        currentTheme: 'theme-light-hopper'
      };
      var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_global_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentLang"], function (state, _ref) {
        var currentLang = _ref.currentLang;
        return Object.assign(Object.assign({}, state), {
          currentLang: currentLang
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_global_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentTheme"], function (state, _ref2) {
        var currentTheme = _ref2.currentTheme;
        return Object.assign(Object.assign({}, state), {
          currentTheme: currentTheme
        });
      }));

      function globalReducer(state, action) {
        return reducer(state, action);
      }
      /***/

    },

    /***/
    "ognC":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/inputs/inputs.component.ts ***!
      \**************************************************************/

    /*! exports provided: InputsComponent */

    /***/
    function ognC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputsComponent", function () {
        return InputsComponent;
      });
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var _c0 = ["inputSort"];

      function InputsComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function InputsComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r9.name);
        }
      }

      function InputsComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function InputsComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 13);
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", element_r10.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function InputsComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function InputsComponent_td_13_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function InputsComponent_td_13_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function InputsComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputsComponent_td_13_mat_icon_1_Template, 2, 0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputsComponent_td_13_mat_icon_2_Template, 2, 0, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r11.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !element_r11.required);
        }
      }

      function InputsComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 18);
        }
      }

      function InputsComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
        }
      }

      var InputsComponent = /*#__PURE__*/function () {
        function InputsComponent(_cdRef) {
          _classCallCheck(this, InputsComponent);

          this._cdRef = _cdRef;
          this.displayedInputsColumns = ['name', 'description', 'required'];
          this.inputsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        } // -----------------------------------------------
        // Life Cycle Hooks
        // -----------------------------------------------


        _createClass(InputsComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.inputs && changes.inputs.currentValue) {
              this.inputsDataSource.data = this.inputs;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.inputsDataSource.sort = this.inputSort;

            this._cdRef.detectChanges();
          }
        }]);

        return InputsComponent;
      }();

      InputsComponent.ɵfac = function InputsComponent_Factory(t) {
        return new (t || InputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: InputsComponent,
        selectors: [["app-inputs"]],
        viewQuery: function InputsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputSort = _t.first);
          }
        },
        inputs: {
          inputs: "inputs"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 16,
        vars: 3,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start"], ["mat-table", "", "matSort", "", "fxFlex", "100", 1, "mat-elevation-z4", "mb-16", 3, "dataSource"], ["inputSort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "required"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["class", "required-icon", 4, "ngIf"], ["class", "optional-icon", 4, "ngIf"], [1, "required-icon"], [1, "optional-icon"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function InputsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inputs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, InputsComponent_th_6_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, InputsComponent_td_7_Template, 2, 1, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, InputsComponent_th_9_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, InputsComponent_td_10_Template, 1, 1, "td", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InputsComponent_th_12_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InputsComponent_td_13_Template, 3, 2, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InputsComponent_tr_14_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, InputsComponent_tr_15_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.inputsDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedInputsColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedInputsColumns);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundPageComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function () {
        return NotFoundPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var NotFoundPageComponent = /*#__PURE__*/_createClass(function NotFoundPageComponent() {
        _classCallCheck(this, NotFoundPageComponent);
      });

      NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) {
        return new (t || NotFoundPageComponent)();
      };

      NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundPageComponent,
        selectors: [["app-not-found-page"]],
        decls: 9,
        vars: 0,
        consts: [[1, "p-32"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["routerLink", "/", "mat-raised-button", "", "color", "primary"], [1, "mat-button-wrapper"]],
        template: function NotFoundPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We're sorry. The page you are looking for cannot be found.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/components/layout/layout.component */
      "Xn/w");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'guides',
        component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-pages-module */
          "pages-pages-module").then(__webpack_require__.bind(null,
          /*! ./pages/pages.module */
          "dgmN")).then(function (m) {
            return m.PagesModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: '/guides'
      }, {
        path: '**',
        component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.e81909e8347be4364189.js.map