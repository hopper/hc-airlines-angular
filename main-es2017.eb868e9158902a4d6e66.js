(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bburger/Git/hc-airlines-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "2wFT":
/*!******************************************************!*\
  !*** ./src/app/shared/ngrx/global/global.actions.ts ***!
  \******************************************************/
/*! exports provided: setCurrentLang, setCurrentTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLang", function() { return setCurrentLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentTheme", function() { return setCurrentTheme; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setCurrentLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Set the current language', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const setCurrentTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[TODO] Set the current theme', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "8ifR":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var projects_angular_sdk_src_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/angular-sdk/src/i18n */ "e7Sd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ngrx/global/global.actions */ "2wFT");
/* harmony import */ var _ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ngrx/global/global.selectors */ "KHEL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");

















function NavBarComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavBarComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const theme_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.onSetTheme(theme_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "palette");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](theme_r4);
} }
function NavBarComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavBarComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const language_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.onSetLanguage(language_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("svgIcon", "flag_", language_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, language_r7));
} }
class NavBarComponent {
    constructor(_matIconRegistry, _domSanitizer, _store) {
        this._matIconRegistry = _matIconRegistry;
        this._domSanitizer = _domSanitizer;
        this._store = _store;
        this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Set the current version
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
        // The languages ​​available depend on the languages ​​supported by the API
        this.languages = projects_angular_sdk_src_i18n__WEBPACK_IMPORTED_MODULE_1__["Locales"].map(x => x.lang);
        this.themes = [
            'theme-dark-hopper',
            'theme-light-hopper',
            'theme-light-blue'
        ];
        // Add SVG icons for each languages
        this.languages.forEach(language => {
            this._matIconRegistry.addSvgIcon("flag_" + language, this._domSanitizer.bypassSecurityTrustResourceUrl("assets/flags/" + language + ".svg"));
        });
    }
    // -------------------------------
    // - LIFE CYCLE HOOKS
    // -------------------------------
    ngOnInit() {
        // Update the current theme when it's changing
        this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentTheme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubcriber)).subscribe((currentTheme) => this.currentTheme = currentTheme);
        // update the currentLang when it's changing
        this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_6__["getCurrentLang"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubcriber)).subscribe((currentLanguage) => this.currentLang = currentLanguage);
    }
    ngOnDestroy() {
        this._unsubcriber.next();
        this._unsubcriber.complete();
    }
    // -------------------------------
    // - METHODS
    // -------------------------------
    onSetTheme(newTheme) {
        this._store.dispatch(_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentTheme"]({ currentTheme: newTheme }));
    }
    onSetLanguage(newLanguage) {
        this._store.dispatch(_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentLang"]({ currentLang: newLanguage }));
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-navbar"]], decls: 21, vars: 10, consts: [["color", "primary", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "mat-elevation-z4"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["routerLink", "/", 1, "pointer"], ["fxLayout", "row", "fxLayoutAlign", "end center"], ["mat-button", "", 3, "matMenuTriggerFor"], [1, "mr-8"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "mr-8", 3, "svgIcon"], ["languageMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "svgIcon"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    defaultTheme: "theme-light-blue",
    version: 'v2.2.0'
};


/***/ }),

/***/ "FrS2":
/*!*********************************************!*\
  !*** ./projects/angular-sdk/src/i18n/zh.ts ***!
  \*********************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'zh',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm a',
            COUNTRY: {
                AF: "阿富汗",
                AX: "奥兰群岛",
                AL: "阿尔巴尼亚",
                DZ: "阿尔及利亚",
                AS: "美属萨摩亚",
                AD: "安道尔",
                AO: "安哥拉",
                AI: "安圭拉",
                AQ: "南极洲",
                AG: "安提瓜和巴布达",
                AR: "阿根廷",
                AM: "亚美尼亚",
                AW: "阿鲁巴",
                AU: "澳大利亚",
                AT: "奥地利",
                AZ: "阿塞拜疆",
                BS: "巴哈马",
                BH: "巴林",
                BD: "孟加拉国",
                BB: "巴巴多斯",
                BY: "白俄罗斯",
                BE: "比利时",
                BZ: "伯利兹",
                BJ: "贝宁",
                BM: "百慕大",
                BT: "不丹",
                BO: "玻利维亚",
                BA: "波斯尼亚和黑塞哥维那",
                BW: "博茨瓦纳",
                BV: "布维岛",
                BR: "巴西",
                VG: "英属维尔京群岛",
                IO: "英属印度洋领地",
                BN: "文莱达鲁萨兰国",
                BG: "保加利亚",
                BF: "布基纳法索",
                BI: "布隆迪",
                KH: "柬埔寨",
                CM: "喀麦隆",
                CA: "加拿大",
                CV: "佛得角",
                KY: "开曼群岛",
                CF: "中非共和国",
                TD: "乍得",
                CL: "智利",
                CN: "中国",
                HK: "香港",
                MO: "澳门",
                CX: "圣诞岛",
                CC: "科科斯群岛",
                CO: "哥伦比亚",
                KM: "科摩罗",
                CG: "刚果共和国",
                CD: "刚果民主共和国",
                CK: "库克群岛",
                CR: "哥斯达黎加",
                CI: "象牙海岸",
                HR: "克罗地亚",
                CU: "古巴",
                CY: "塞浦路斯",
                CZ: "捷克共和国",
                DK: "丹麦",
                DJ: "吉布提",
                DM: "多米尼克",
                DO: "多米尼加共和国",
                EC: "赤道",
                EG: "埃及",
                SV: "萨尔瓦多",
                GQ: "赤道几内亚",
                ER: "厄立特里亚",
                EE: "爱沙尼亚",
                ET: "埃塞俄比亚",
                FK: "福克兰群岛",
                FO: "法罗群岛",
                FJ: "斐济",
                FI: "芬兰",
                FR: "法国",
                GF: "法属圭亚那",
                PF: "法属波利尼西亚",
                TF: "法属南部和南极土地",
                GA: "加蓬",
                GM: "冈比亚",
                GE: "格鲁吉亚",
                DE: "德国",
                GH: "加纳",
                GI: "直布罗陀",
                GR: "希腊",
                GL: "格陵兰",
                GD: "格林纳达",
                GP: "瓜德罗普",
                GU: "关岛",
                GT: "危地马拉",
                GG: "根西岛",
                GN: "几内亚",
                GW: "几内亚比绍",
                GY: "圭亚那",
                HT: "海地",
                HM: "赫德和麦克唐纳群岛",
                VA: "教廷（梵蒂冈）",
                HN: "洪都拉斯",
                HU: "匈牙利",
                IS: "冰岛",
                IN: "印度",
                ID: "印度尼西亚",
                IR: "伊朗",
                IQ: "伊拉克",
                IE: "爱尔兰",
                IM: "马恩岛",
                IL: "以色列",
                IT: "意大利",
                JM: "牙买加",
                JP: "日本",
                JE: "泽西",
                JO: "乔丹",
                KZ: "哈萨克斯坦",
                KE: "肯尼亚",
                KI: "基里巴斯",
                KP: "朝鲜",
                KR: "韩国",
                KW: "科威特",
                KG: "吉尔吉斯斯坦",
                LA: "老挝",
                LV: "拉脱维亚",
                LB: "黎巴嫩",
                LS: "莱索托",
                LR: "利比里亚",
                LY: "利比亚",
                LI: "列支敦士登",
                LT: "立陶宛",
                LU: "卢森堡",
                MK: "马其顿",
                MG: "马达加斯加",
                MW: "马拉维",
                MY: "马来西亚",
                MV: "马尔代夫",
                ML: "马里",
                MT: "马耳他",
                MH: "马绍尔群岛",
                MQ: "马提尼克岛",
                MR: "毛里塔尼亚",
                MU: "毛里求斯",
                YT: "马约特",
                MX: "墨西哥",
                FM: "密克罗尼西亚",
                MD: "摩尔多瓦",
                MC: "摩纳哥",
                MN: "蒙古",
                ME: "黑山",
                MS: "蒙特塞拉特",
                MA: "摩洛哥",
                MZ: "莫桑比克",
                MM: "缅甸",
                NA: "纳米比亚",
                NR: "瑙鲁",
                NP: "尼泊尔",
                NL: "荷兰",
                NC: "新喀里多尼亚",
                NZ: "新西兰",
                NI: "尼加拉瓜",
                NE: "尼日尔",
                NG: "尼日利亚",
                NU: "新",
                NF: "诺福克岛",
                MP: "北马里安群岛",
                NO: "挪威",
                OM: "阿曼",
                PK: "巴基斯坦",
                PW: "帕劳",
                PS: "巴勒斯坦",
                PA: "巴拿马",
                PG: "巴布亚新几内亚",
                PY: "巴拉圭",
                PE: "秘鲁",
                PH: "菲律宾",
                PN: "皮特凯恩",
                PL: "波兰",
                PT: "葡萄牙",
                PR: "波多黎各",
                QA: "卡塔尔",
                RE: "会议",
                RO: "罗马尼亚",
                RU: "俄罗斯",
                RW: "卢旺达",
                BL: "圣巴泰勒米",
                SH: "圣赫勒拿",
                KN: "圣基茨和尼维斯",
                LC: "圣卢西亚",
                MF: "圣马丁（法语部分）",
                SX: "圣马丁（荷兰部分）",
                PM: "圣皮埃尔和密克隆",
                VC: "圣文森特和格林纳丁斯",
                WS: "萨摩亚",
                SM: "圣马力诺",
                ST: "圣多美和普林西比",
                SA: "沙特阿拉伯",
                SN: "塞内加尔",
                RS: "塞尔维亚",
                SC: "塞舌尔",
                SL: "塞拉利昂",
                SG: "新加坡",
                SK: "斯洛伐克",
                SI: "斯洛文尼亚",
                SB: "所罗门群岛",
                SO: "索马里",
                ZA: "南非",
                GS: "南乔治亚和南桑威奇群岛",
                SS: "南苏丹",
                ES: "西班牙",
                LK: "斯里兰卡",
                SD: "苏丹",
                SR: "苏里南",
                SJ: "斯瓦尔巴和扬马延",
                SZ: "斯威士兰",
                SE: "瑞典",
                CH: "瑞士",
                SY: "叙利亚",
                TW: "台湾",
                TJ: "塔吉克斯坦",
                TZ: "坦桑尼亚",
                TH: "泰国",
                TL: "东帝汶",
                TG: "多哥",
                TK: "托克劳",
                TO: "汤加",
                TT: "特立尼达和多巴哥",
                TN: "突尼斯",
                TR: "土耳其",
                TM: "土库曼斯坦",
                TC: "特克斯和凯科斯群岛",
                TV: "图瓦卢",
                UG: "乌干达",
                UA: "乌克兰",
                AE: "阿拉伯联合酋长国",
                GB: "英国",
                US: "美国",
                UM: "美国外围小岛",
                UY: "乌拉圭",
                UZ: "乌兹别克斯坦",
                VU: "瓦努阿图",
                VE: "委内瑞拉",
                VN: "越南",
                VI: "美属维尔京群岛",
                WF: "瓦利斯和富图纳",
                EH: "西撒哈拉",
                YE: "也门",
                ZM: "赞比亚",
                ZW: "津巴布韦"
            }
        },
        CFAR_OFFER_BANNER: {
            TITLE: "随时以任何理由取消您的航班。",
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            BUTTON: {
                SELECT: "选择"
            },
            COVERAGE_PERCENTAGE: "承保飞行费用的 {{ coverage }}",
        },
        CFAR_OFFER_BANNER_LARGE: {
            TITLE: "随时以任何理由取消您的航班。",
            NO_OFFERS: "没有可用的优惠",
            LOADING: "正在加载优惠...",
            COVERAGE_PERCENTAGE: "承保飞行费用的 {{ coverage }}",
            NO_COVERAGE_OPTION: "我不想出于任何原因购买取消。",
            PRICE_PER_TRAVELER: "<span>每位乘客</span><span class='price-per-traveler'>{{ price }}</span>"
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
            REFUND_DETAILS_TITLE: "退款详情",
            REFUND_WARNING_MESSAGE: "您已在预订中购买了“出于任何原因取消”政策，该政策使您可以取消并获得 {{ amount }} 的退款”。如果您想取消整个行程和所有乘客的预订，您可以在下方开始退款流程",
            HOPPER_REFUND: "Hopper 退款",
            AIRLINE_REFUND: "航空公司退款",
            METHOD: "方法:",
            AMOUNT: "金额:",
            REFUND_METHOD: "退款方式",
            BUTTON: {
                CANCEL: "取消",
                SUBMIT: "是的,取消航班",
                BACK: "背部",
                CONTINUE: "继续",
                CLOSE: "关"
            },
            NO_CONTRACT: "没有可用的合同",
            LOADING: "正在加载...",
            LOADING_HYPERWALLET: "正在加载 Hyperwallet...",
            LOADING_HYPERWALLET_ERROR: "加载 Hyperwallet 时出错",
            STEP: {
                FIRST: "退款类型",
                SECOND: "一般信息",
                THIRD: "支付信息 [Hyperwallet]",
                FOURTH: "确认"
            },
            FORM: {
                PERSONAL_INFORMATION: "个人信息",
                FIRST_NAME: "名",
                FIRST_NAME_ERROR: "名字是必填项",
                MIDDLE_NAME: "中间名（可选)",
                LAST_NAME: "姓",
                LAST_NAME_ERROR: "姓氏是必填项",
                DATE_OF_BIRTH: "出生日期",
                DATE_OF_BIRTH_ERROR: "出生日期为必填项",
                HOME_ADDRESS: "家庭地址",
                ADDRESS_LINE_1: "地址第一行",
                ADDRESS_LINE_1_ERROR: "地址行 1 为必填项",
                ADDRESS_LINE_2: "地址行 2(可选)",
                CITY: "城市",
                CITY_ERROR: "城市为必填项",
                COUNTRY: "国家",
                COUNTRY_ERROR: "国家是必需的",
                STATE: "州/省",
                STATE_ERROR: "州/省为必填项",
                ZIP: "邮编/邮政编码",
                ZIP_ERROR: "邮政编码为必填项"
            },
            CONFIRMATION_MESSAGE_1: "您的航班已取消，正在处理您的退款。",
            CONFIRMATION_MESSAGE_2: "稍后将向 {{ userEmail }} 发送一封确认电子邮件，其中包含有关如何使用您的航空公司积分的详细信息",
            REFUND_DETAILS: "{{ amount }} 在 {{ method }}"
        }
    }
};


/***/ }),

/***/ "KHEL":
/*!********************************************************!*\
  !*** ./src/app/shared/ngrx/global/global.selectors.ts ***!
  \********************************************************/
/*! exports provided: getGlobalState, getCurrentLang, getCurrentTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalState", function() { return getGlobalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLang", function() { return getCurrentLang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const getGlobalState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('global');
const getCurrentLang = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalState, state => state.currentLang);
const getCurrentTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getGlobalState, state => state.currentTheme);


/***/ }),

/***/ "O2Jr":
/*!*********************************************!*\
  !*** ./projects/angular-sdk/src/i18n/es.ts ***!
  \*********************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'es',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm a',
            COUNTRY: {
                AF: "Afganistán",
                AX: "Islas Åland",
                AL: "Albania",
                DZ: "Argelia",
                AS: "Samoa Americana",
                AD: "Andorra",
                AO: "Angola",
                AI: "Anguila",
                AQ: "Antártida",
                AG: "Antigua y Barbuda",
                AR: "Argentina",
                AM: "Armenia",
                AW: "Aruba",
                AU: "Australia",
                AT: "Austria",
                AZ: "Azerbaiyán",
                BS: "Bahamas",
                BH: "Bahréin",
                BD: "Bangladés",
                BB: "Barbados",
                BY: "Bielorrusia",
                BE: "Bélgica",
                BZ: "Belice",
                BJ: "Benín",
                BM: "Bermudas",
                BT: "Bután",
                BO: "Bolivia",
                BA: "Bosnia y Herzegovina",
                BW: "Botsuana",
                BV: "Isla Bouvet",
                BR: "Brasil",
                VG: "Islas Vírgenes Británicas",
                IO: "Territorio Británico del Océano Índico",
                BN: "Brunéi Darussalam",
                BG: "Bulgaria",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Camboya",
                CM: "Camerún",
                CA: "Canadá",
                CV: "Cabo Verde",
                KY: "Islas Caimán",
                CF: "República Centroafricana",
                TD: "Chad",
                CL: "Chile",
                CN: "China",
                HK: "Hong Kong",
                MO: "Macao",
                CX: "Isla de Navidad",
                CC: "Islas Cocos",
                CO: "Colombia",
                KM: "Comoras",
                CG: "República del Congo",
                CD: "República Democrática del Congo",
                CK: "Islas Cook",
                CR: "Costa Rica",
                CI: "Costa de Marfil",
                HR: "Croacia",
                CU: "Cuba",
                CY: "Chipre",
                CZ: "República Checa",
                DK: "Dinamarca",
                DJ: "Yibuti",
                DM: "Dominica",
                DO: "República Dominicana",
                EC: "Ecuador",
                EG: "Egipto",
                SV: "Salvador",
                GQ: "Guinea Ecuatorial",
                ER: "Eritrea",
                EE: "Estonia",
                ET: "Etiopía",
                FK: "Islas Malvinas",
                FO: "Islas Feroe",
                FJ: "Fiyi",
                FI: "Finlandia",
                FR: "Francia",
                GF: "Guayana Francesa",
                PF: "Polinesia Francesa",
                TF: "Territorios Australes y Antárticos Franceses",
                GA: "Gabón",
                GM: "Gambia",
                GE: "Georgia",
                DE: "Alemania",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Grecia",
                GL: "Groenlandia",
                GD: "Granada",
                GP: "Guadalupe",
                GU: "Guam",
                GT: "Guatemala",
                GG: "Guernesey",
                GN: "Guinea",
                GW: "Guinea-Bisáu",
                GY: "Guyana",
                HT: "Haití",
                HM: "Islas Heard y McDonald",
                VA: "Santa Sede (Vaticano)",
                HN: "Honduras",
                HU: "Hungría",
                IS: "Islandia",
                IN: "India",
                ID: "Indonesia",
                IR: "Irán",
                IQ: "Irak",
                IE: "Irlanda",
                IM: "Isla de Man",
                IL: "Israel",
                IT: "Italia",
                JM: "Jamaica",
                JP: "Japón",
                JE: "Jersey",
                JO: "Jordania",
                KZ: "Kazajstán",
                KE: "Kenia",
                KI: "Kiribati",
                KP: "Corea del Norte",
                KR: "Corea del Sur",
                KW: "Kuwait",
                KG: "Kirguistán",
                LA: "Laos",
                LV: "Letonia",
                LB: "Líbano",
                LS: "Lesoto",
                LR: "Liberia",
                LY: "Libia",
                LI: "Liechtenstein",
                LT: "Lituania",
                LU: "Luxemburgo",
                MK: "Macedonia",
                MG: "Madagascar",
                MW: "Malaui",
                MY: "Malasia",
                MV: "Maldivas",
                ML: "Malí",
                MT: "Malta",
                MH: "Islas Marshall",
                MQ: "Martinica",
                MR: "Mauritania",
                MU: "Mauricio",
                YT: "Mayotte",
                MX: "México",
                FM: "Micronesia",
                MD: "Moldavia",
                MC: "Mónaco",
                MN: "Mongolia",
                ME: "Montenegro",
                MS: "Montserrat",
                MA: "Marruecos",
                MZ: "Mozambique",
                MM: "Birmania",
                NA: "Namibia",
                NR: "Nauru",
                NP: "Nepal",
                NL: "Países Bajos",
                NC: "Nueva Caledonia",
                NZ: "Nueva Zelanda",
                NI: "Nicaragua",
                NE: "Níger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Isla Norfolk",
                MP: "Islas Marianas del Norte",
                NO: "Noruega",
                OM: "Omán",
                PK: "Pakistán",
                PW: "Palaus",
                PS: "Palestina",
                PA: "Panamá",
                PG: "Papúa Nueva Guinea",
                PY: "Paraguay",
                PE: "Perú",
                PH: "Filipinas",
                PN: "Pitcairn",
                PL: "Polonia",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Catar",
                RE: "Reunión",
                RO: "Rumania",
                RU: "Rusia",
                RW: "Ruanda",
                BL: "San Bartolomé",
                SH: "Santa Elena",
                KN: "San Cristóbal y Nieves",
                LC: "Santa Lucía",
                MF: "San Martín (parte francesa)",
                SX: "San Martín (hojas holandesas)",
                PM: "San Pedro y Miquelón",
                VC: "San Vicente y las Granadinas",
                WS: "Samoa",
                SM: "San Marino",
                ST: "Santo Tomé y Príncipe",
                SA: "Arabia Saudita",
                SN: "Senegal",
                RS: "Serbia",
                SC: "Seychelles",
                SL: "Sierra Leona",
                SG: "Singapur",
                SK: "Eslovaquia",
                SI: "Eslovenia",
                SB: "Islas Salomón",
                SO: "Somalia",
                ZA: "Sudáfrica",
                GS: "Islas Georgias del Sur y Sandwich del Sur",
                SS: "Sudán del Sur",
                ES: "español",
                LK: "Sri Lanka",
                SD: "Sudán",
                SR: "Surinam",
                SJ: "Svalbard y Jan Mayen",
                SZ: "Esuatini",
                SE: "Suecia",
                CH: "Suiza",
                SY: "Siria",
                TW: "Taiwán",
                TJ: "Tayikistán",
                TZ: "Tanzania",
                TH: "Tailandia",
                TL: "Timor Oriental",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinidad y Tabago",
                TN: "Túnez",
                TR: "Turquía",
                TM: "Turkmenistán",
                TC: "Islas Turcas y Caicos",
                TV: "Tuvalu",
                UG: "Uganda",
                UA: "Ucrania",
                AE: "Emiratos Árabes Unidos",
                GB: "Reino Unido",
                US: "Estados Unidos",
                UM: "Islas menores alejadas de los Estados Unidos",
                UY: "Uruguay",
                UZ: "Uzbekistán",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Vietnam",
                VI: "Islas Vírgenes de los Estados Unidos",
                WF: "Wallis y Futuna",
                EH: "Sáhara Occidental",
                YE: "Yemen",
                ZM: "Zambia",
                ZW: "Zimbabue"
            }
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Cancele su vuelo en cualquier momento, por cualquier motivo.",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            BUTTON: {
                SELECT: "Seleccione"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} de los costos de vuelo cubiertos",
        },
        CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Cancele su vuelo en cualquier momento, por cualquier motivo.",
            NO_OFFERS: "No hay ofertas disponibles",
            LOADING: "Cargando ofertas en curso...",
            COVERAGE_PERCENTAGE: "{{ coverage }} de los costos de vuelo cubiertos",
            NO_COVERAGE_OPTION: "No quiero comprar Cancelar por cualquier motivo.",
            PRICE_PER_TRAVELER: "<span class='price-per-traveler'>{{ price }}</span><span>por pasajero</span>"
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
            REFUND_DETAILS_TITLE: "Detalles del reembolso",
            REFUND_WARNING_MESSAGE: "Ha adquirido una política de cancelación por cualquier motivo con su reserva, que le permite cancelar y obtener un reembolso de {{ amount }}. Si desea cancelar su reserva para todo el viaje y todos los pasajeros, puede iniciar el proceso de reembolso a continuación",
            HOPPER_REFUND: "Reembolso Hopper",
            AIRLINE_REFUND: "Reembolso de la aerolínea",
            METHOD: "Método:",
            AMOUNT: "Cantidad:",
            REFUND_METHOD: "Método de reembolso",
            BUTTON: {
                CANCEL: "Cancelar",
                SUBMIT: "Sí, cancelar vuelo",
                BACK: "Volver",
                CONTINUE: "Seguir",
                CLOSE: "Cerrar"
            },
            NO_CONTRACT: "No hay contrato disponible",
            LOADING: "Cargando en curso...",
            LOADING_HYPERWALLET: "Cargando Hyperwallet en curso...",
            LOADING_HYPERWALLET_ERROR: "Ocurrió un error al cargar Hyperwallet",
            STEP: {
                FIRST: "Tipo de reembolso",
                SECOND: "Información general",
                THIRD: "Información de pago [hyperwallet]",
                FOURTH: "Confirmación"
            },
            FORM: {
                PERSONAL_INFORMATION: "Informacion personal",
                FIRST_NAME: "El primer nombre",
                FIRST_NAME_ERROR: "Se requiere el primer nombre",
                MIDDLE_NAME: "Segundo nombre (Opcional)",
                LAST_NAME: "Apellido",
                LAST_NAME_ERROR: "Se requiere apellido",
                DATE_OF_BIRTH: "Fecha de nacimiento",
                DATE_OF_BIRTH_ERROR: "Se requiere la fecha de nacimiento",
                HOME_ADDRESS: "Direccion de casa",
                ADDRESS_LINE_1: "Dirección Línea 1",
                ADDRESS_LINE_1_ERROR: "La línea de dirección 1 es obligatoria",
                ADDRESS_LINE_2: "Línea de dirección 2 (opcional)",
                CITY: "Ciudad",
                CITY_ERROR: "Ciudad es requerida",
                COUNTRY: "País",
                COUNTRY_ERROR: "El país es obligatorio",
                STATE: "Provincia del estado",
                STATE_ERROR: "Se requiere estado/provincia",
                ZIP: "Código postal",
                ZIP_ERROR: "Se requiere código postal"
            },
            CONFIRMATION_MESSAGE_1: "Tu vuelo ha sido cancelado y tu reembolso está siendo procesado.",
            CONFIRMATION_MESSAGE_2: "En breve se enviará un correo electrónico de confirmación a {{ userEmail }} con detalles sobre cómo usar los créditos de las aerolíneas",
            REFUND_DETAILS: "{{ amount }} en {{ method }}"
        }
    }
};


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/layout.component */ "Xn/w");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "ognC");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/outputs/outputs.component */ "ZHSn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            // Angular Modules
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            // Angular Material Modules
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            // Misc Modules
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__["InputsComponent"],
        _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__["OutputsComponent"]], imports: [
        // Angular Modules
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        // Angular Material Modules
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        // Misc Modules
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]], exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_11__["InputsComponent"],
        _components_outputs_outputs_component__WEBPACK_IMPORTED_MODULE_14__["OutputsComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/ngrx/global/global.selectors */ "KHEL");
/* harmony import */ var _shared_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/ngrx/global/global.actions */ "2wFT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ "8ifR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











class AppComponent {
    constructor(_store) {
        this._store = _store;
        this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -------------------------------
    // - LIFE CYCLE HOOKS
    // -------------------------------
    ngOnInit() {
        // Update the current theme when it's changing
        this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_shared_ngrx_global_global_selectors__WEBPACK_IMPORTED_MODULE_4__["getCurrentTheme"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubcriber)).subscribe((currentTheme) => {
            // Remove active theme
            document.body.classList.remove(this.currentTheme);
            // Activate the new theme
            this.currentTheme = currentTheme;
            document.body.classList.add(this.currentTheme);
        });
        // Set Default theme
        this._store.dispatch(_shared_ngrx_global_global_actions__WEBPACK_IMPORTED_MODULE_5__["setCurrentTheme"]({ currentTheme: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].defaultTheme }));
    }
    ngOnDestroy() {
        this._unsubcriber.next();
        this._unsubcriber.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "main-container"], ["fxFlex", "64px", 1, "mat-elevation-z6"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "Xn/w":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_router_router_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ngrx/router/router.actions */ "g+sT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");











function LayoutComponent_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-list-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", component_r2 == null ? null : component_r2.link)("selected", ctx_r1.selectedPath === (component_r2 == null ? null : component_r2.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", component_r2 == null ? null : component_r2.name, " ");
} }
class LayoutComponent {
    constructor(_store) {
        this._store = _store;
        this.components = [];
        this._unsubcriber = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.components.push({ name: 'CFAR Offer Banner', link: 'cfar-offer-banner' });
        this.components.push({ name: 'CFAR Offer Banner Large', link: 'cfar-offer-banner-large' });
        this.components.push({ name: 'CFAR Offer Dialog', link: 'cfar-offer-dialog' });
        this.components.push({ name: 'CFAR Exercise Dialog', link: 'cfar-exercise-dialog' });
        // Working items
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        }
    }
    // -------------------------------
    // - LIFE CYCLE HOOKS
    // -------------------------------
    ngOnInit() {
        // Update the selectedPath when it's changing
        this._store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_ngrx_router_router_actions__WEBPACK_IMPORTED_MODULE_4__["selectRouteData"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubcriber)).subscribe((data) => this.selectedPath = data.path);
    }
    ngOnDestroy() {
        this._unsubcriber.next();
        this._unsubcriber.complete();
    }
    onScrollToTop(event) {
        var _a;
        (_a = document.querySelector('#scroll-anchor')) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 7, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "stretch center", 1, "layout-container"], ["fxFlex", "20", "fxFill", "", 1, "aside"], [3, "multiple"], ["componentsList", ""], [3, "routerLink", "selected", 4, "ngFor", "ngForOf"], ["fxFlex", "80", "fxFill", "", "id", "scroll-anchor", 1, "content"], [3, "activate"], [3, "routerLink", "selected"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-selection-list", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, LayoutComponent_mat_list_option_4_Template, 2, 3, "mat-list-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "router-outlet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("activate", function LayoutComponent_Template_router_outlet_activate_6_listener($event) { return ctx.onScrollToTop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.components);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YXdr":
/*!*********************************************!*\
  !*** ./projects/angular-sdk/src/i18n/en.ts ***!
  \*********************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'en',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE, MMMM d, y, h:mm:ss a z',
            DATE_FORMAT_SHORT: 'MM/dd/YYYY hh:mm a',
            COUNTRY: {
                AF: "Afghanistan",
                AX: "Åland Islands",
                AL: "Albania",
                DZ: "Algeria",
                AS: "American Samoa",
                AD: "Andorra",
                AO: "Angola",
                AI: "Anguilla",
                AQ: "Antarctica",
                AG: "Antigua and Barbuda",
                AR: "Argentina",
                AM: "Armenia",
                AW: "Aruba",
                AU: "Australia",
                AT: "Austria",
                AZ: "Azerbaijan",
                BS: "Bahamas",
                BH: "Bahrain",
                BD: "Bangladesh",
                BB: "Barbados",
                BY: "Belarus",
                BE: "Belgium",
                BZ: "Belize",
                BJ: "Benin",
                BM: "Bermuda",
                BT: "Bhutan",
                BO: "Bolivia",
                BA: "Bosnia and Herzegovina",
                BW: "Botswana",
                BV: "Bouvet Island",
                BR: "Brazil",
                VG: "British Virgin Islands",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                BG: "Bulgaria",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Cambodia",
                CM: "Cameroon",
                CA: "Canada",
                CV: "Cape Verde",
                KY: "Cayman Islands",
                CF: "Central African Republic",
                TD: "Chad",
                CL: "Chile",
                CN: "China",
                HK: "Hong Kong",
                MO: "Macau",
                CX: "Christmas Island",
                CC: "Cocos Islands",
                CO: "Colombia",
                KM: "Comoros",
                CG: "Republic of the Congo",
                CD: "Democratic Republic of the Congo",
                CK: "Cook Islands",
                CR: "Costa Rica",
                CI: "Ivory Coast",
                HR: "Croatia",
                CU: "Cuba",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                DJ: "Djibouti",
                DM: "Dominica",
                DO: "Dominican Republic",
                EC: "Equator",
                EG: "Egypt",
                SV: "Salvador",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                EE: "Estonia",
                ET: "Ethiopia",
                FK: "Falkland Islands",
                FO: "Faroe Islands",
                FJ: "Fiji",
                FI: "Finland",
                FR: "France",
                GF: "French Guiana",
                PF: "French Polynesia",
                TF: "French Southern and Antarctic Lands",
                GA: "Gabon",
                GM: "Gambia",
                GE: "Georgia",
                DE: "Germany",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GD: "Grenada",
                GP: "Guadeloupe",
                GU: "Guam",
                GT: "Guatemala",
                GG: "Guernsey",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                GY: "Guyana",
                HT: "Haiti",
                HM: "Heard and MacDonald Islands",
                VA: "Holy See (Vatican)",
                HN: "Honduras",
                HU: "Hungary",
                IS: "Iceland",
                IN: "India",
                ID: "Indonesia",
                IR: "Iran",
                IQ: "Iraq",
                IE: "Ireland",
                IM: "Isle of Man",
                IL: "Israel",
                IT: "Italy",
                JM: "Jamaica",
                JP: "Japan",
                JE: "Jersey",
                JO: "Jordan",
                KZ: "Kazakhstan",
                KE: "Kenya",
                KI: "Kiribati",
                KP: "North Korea",
                KR: "South Korea",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Laos",
                LV: "Latvia",
                LB: "Lebanon",
                LS: "Lesotho",
                LR: "Liberia",
                LY: "Libya",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MK: "Macedonia",
                MG: "Madagascar",
                MW: "Malawi",
                MY: "Malaysia",
                MV: "Maldives",
                ML: "Mali",
                MT: "Malta",
                MH: "Marshall Islands",
                MQ: "Martinique",
                MR: "Mauritania",
                MU: "Mauritius",
                YT: "Mayotte",
                MX: "Mexico",
                FM: "Micronesia",
                MD: "Moldova",
                MC: "Monaco",
                MN: "Mongolia",
                ME: "Montenegro",
                MS: "Montserrat",
                MA: "Morocco",
                MZ: "Mozambique",
                MM: "Myanmar",
                NA: "Namibia",
                NR: "Nauru",
                NP: "Nepal",
                NL: "Netherlands",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NI: "Nicaragua",
                NE: "Niger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Norfolk Island",
                MP: "Northern Mariana Islands",
                NO: "Norway",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "Palestine",
                PA: "Panama",
                PG: "Papua New Guinea",
                PY: "Paraguay",
                PE: "Peru",
                PH: "Philippines",
                PN: "Pitcairn",
                PL: "Poland",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Qatar",
                RE: "Reunion",
                RO: "Romania",
                RU: "Russia",
                RW: "Rwanda",
                BL: "Saint-Barthélemy",
                SH: "Saint Helena",
                KN: "Saint Kitts and Nevis",
                LC: "Saint Lucia",
                MF: "Saint-Martin (French part)",
                SX: "Saint-Martin (Dutch part)",
                PM: "Saint Pierre and Miquelon",
                VC: "Saint Vincent and the Grenadines",
                WS: "Samoa",
                SM: "San Marino",
                ST: "Sao Tome and Principe",
                SA: "Saudi Arabia",
                SN: "Senegal",
                RS: "Serbia",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SG: "Singapore",
                SK: "Slovakia",
                SI: "Slovenia",
                SB: "Solomon Islands",
                SO: "Somalia",
                ZA: "South Africa",
                GS: "South Georgia and the South Sandwich Islands",
                SS: "South Sudan",
                ES: "Spain",
                LK: "Sri Lanka",
                SD: "Sudan",
                SR: "Suriname",
                SJ: "Svalbard and Jan Mayen",
                SZ: "Eswatini",
                SE: "Sweden",
                CH: "Switzerland",
                SY: "Syria",
                TW: "Taiwan",
                TJ: "Tajikistan",
                TZ: "Tanzania",
                TH: "Thailand",
                TL: "Timor-Leste",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinidad and Tobago",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                TC: "Turks and Caicos Islands",
                TV: "Tuvalu",
                UG: "Uganda",
                UA: "Ukraine",
                AE: "United Arab Emirates",
                GB: "United Kingdom",
                US: "United States",
                UM: "Minor Outlying Islands of the United States",
                UY: "Uruguay",
                UZ: "Uzbekistan",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Vietnam",
                VI: "US Virgin Islands",
                WF: "Wallis and Futuna",
                EH: "Western Sahara",
                YE: "Yemen",
                ZM: "Zambia",
                ZW: "Zimbabwe"
            }
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Cancel your flight at any time, for any reason.",
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            BUTTON: {
                SELECT: "Select"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} Flight cost covered",
        },
        CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Cancel your flight at any time, for any reason.",
            NO_OFFERS: "No offer available",
            LOADING: "Loading offers in progress...",
            COVERAGE_PERCENTAGE: "{{ coverage }} Flight cost covered",
            NO_COVERAGE_OPTION: "I do not want to purchase Cancel For Any Reason.",
            PRICE_PER_TRAVELER: "<span class='price-per-traveler'>{{ price }}</span><span>per traveler</span>"
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
            REFUND_DETAILS_TITLE: "Refund details",
            REFUND_WARNING_MESSAGE: "You have purchased a Cancel For Any Reason policy with your booking, which enables you to cancel and get refunded of {{ amount }}. If you want to cancel your booking for the entire trip and all the passengers, you can start the refund process below",
            HOPPER_REFUND: "Hopper refund",
            AIRLINE_REFUND: "Airline refund",
            METHOD: "Method:",
            AMOUNT: "Airline:",
            REFUND_METHOD: "Refund method",
            BUTTON: {
                CANCEL: "Cancel",
                SUBMIT: "Yes, cancel flight",
                BACK: "Back",
                CONTINUE: "Continue",
                CLOSE: "Close"
            },
            NO_CONTRACT: "No contract available",
            LOADING: "Loading in progress...",
            LOADING_HYPERWALLET: "Loading Hyperwallet in progress...",
            LOADING_HYPERWALLET_ERROR: "An error occured while loading Hyperwallet",
            STEP: {
                FIRST: "Refund type",
                SECOND: "General information",
                THIRD: "Payment information [hyperwallet]",
                FOURTH: "Confirmation"
            },
            FORM: {
                PERSONAL_INFORMATION: "Personal Information",
                FIRST_NAME: "First name",
                FIRST_NAME_ERROR: "First name is required",
                MIDDLE_NAME: "Middle name (optional)",
                LAST_NAME: "Last name",
                LAST_NAME_ERROR: "Last name is required",
                DATE_OF_BIRTH: "Date of birth",
                DATE_OF_BIRTH_ERROR: "Date of birth is required",
                HOME_ADDRESS: "Home Address",
                ADDRESS_LINE_1: "Address line 1",
                ADDRESS_LINE_1_ERROR: "Address line 1 is required",
                ADDRESS_LINE_2: "Address line 2 (optional)",
                CITY: "City",
                CITY_ERROR: "City is required",
                COUNTRY: "Country",
                COUNTRY_ERROR: "Country is required",
                STATE: "State/Province",
                STATE_ERROR: "State/Province is required",
                ZIP: "Zip/Postal Code",
                ZIP_ERROR: "Zip/Postal Code is required"
            },
            CONFIRMATION_MESSAGE_1: "Your flight has been canceled and your refund is being processed.",
            CONFIRMATION_MESSAGE_2: "A confirmation email will be sent shortly to {{ userEmail }} with details on how to use your airlines credits",
            REFUND_DETAILS: "{{ amount }} in {{ method }}"
        }
    }
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngrx-store-freeze */ "PXG5");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _shared_ngrx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/ngrx */ "dS8Z");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_9__["storeFreeze"]] : [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HIGHLIGHT_OPTIONS"],
            useValue: {
                fullLibraryLoader: () => __webpack_require__.e(/*! import() | highlight-js */ "highlight-js").then(__webpack_require__.t.bind(null, /*! highlight.js */ "FIf5", 7)),
            }
        }
    ], imports: [[
            // Angular Modules
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            // Misc Modules
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            // Custom Modules
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_shared_ngrx__WEBPACK_IMPORTED_MODULE_11__["reducers"], { metaReducers }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [
        // Angular Modules
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        // Misc Modules
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        // Custom Modules
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_12__["StoreRouterConnectingModule"]] }); })();


/***/ }),

/***/ "ZHSn":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/outputs/outputs.component.ts ***!
  \****************************************************************/
/*! exports provided: OutputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputsComponent", function() { return OutputsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");





const _c0 = ["outputSort"];
function OutputsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OutputsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r7.name);
} }
function OutputsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OutputsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 12);
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", element_r8.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function OutputsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
} }
function OutputsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
} }
class OutputsComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.displayedOutputsColumns = ['name', 'description'];
        this.outputsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
    }
    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------
    ngOnChanges(changes) {
        if (changes.outputs && changes.outputs.currentValue) {
            this.outputsDataSource.data = this.outputs;
        }
    }
    ngAfterViewInit() {
        this.outputsDataSource.sort = this.outputSort;
        this._cdRef.detectChanges();
    }
}
OutputsComponent.ɵfac = function OutputsComponent_Factory(t) { return new (t || OutputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
OutputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OutputsComponent, selectors: [["app-outputs"]], viewQuery: function OutputsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outputSort = _t.first);
    } }, inputs: { outputs: "outputs" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 3, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start"], ["mat-table", "", "matSort", "", "fxFlex", "100", 1, "mat-elevation-z4", "mb-16", 3, "dataSource"], ["outputSort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", ""]], template: function OutputsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.outputsDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedOutputsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedOutputsColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRwdXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "dS8Z":
/*!**************************************!*\
  !*** ./src/app/shared/ngrx/index.ts ***!
  \**************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _global_global_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/global.reducer */ "kMjd");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");


const reducers = {
    global: _global_global_reducer__WEBPACK_IMPORTED_MODULE_0__["globalReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};


/***/ }),

/***/ "e7Sd":
/*!************************************************!*\
  !*** ./projects/angular-sdk/src/i18n/index.ts ***!
  \************************************************/
/*! exports provided: Locales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locales", function() { return Locales; });
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en */ "YXdr");
/* harmony import */ var _fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr */ "eOS6");
/* harmony import */ var _es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./es */ "O2Jr");
/* harmony import */ var _zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh */ "FrS2");
// http://www.loc.gov/standards/iso639-2/php/code_list.php




// Availables Languages
const Locales = [_en__WEBPACK_IMPORTED_MODULE_0__["locale"], _fr__WEBPACK_IMPORTED_MODULE_1__["locale"], _es__WEBPACK_IMPORTED_MODULE_2__["locale"], _zh__WEBPACK_IMPORTED_MODULE_3__["locale"]];


/***/ }),

/***/ "eOS6":
/*!*********************************************!*\
  !*** ./projects/angular-sdk/src/i18n/fr.ts ***!
  \*********************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
const locale = {
    lang: 'fr',
    data: {
        COMMON: {
            DATE_FORMAT: 'EEEE d MMMM y à HH:mm:ss z',
            DATE_FORMAT_SHORT: 'dd/MM/YYYY HH:mm',
            COUNTRY: {
                AF: "Afghanistan",
                AX: "Îles Åland",
                AL: "Albanie",
                DZ: "Algérie",
                AS: "Samoa américaines",
                AD: "Andorre",
                AO: "Angola",
                AI: "Anguilla",
                AQ: "Antarctique",
                AG: "Antigua-et-Barbuda",
                AR: "Argentine",
                AM: "Arménie",
                AW: "Aruba",
                AU: "Australie",
                AT: "Autriche",
                AZ: "Azerbaïdjan",
                BS: "Bahamas",
                BH: "Bahreïn",
                BD: "Bangladesh",
                BB: "Barbade",
                BY: "Biélorussie",
                BE: "Belgique",
                BZ: "Belize",
                BJ: "Bénin",
                BM: "Bermudes",
                BT: "Bhoutan",
                BO: "Bolivie",
                BA: "Bosnie-Herzégovine",
                BW: "Botswana",
                BV: "Île Bouvet",
                BR: "Brésil",
                VG: "British Virgin Islands",
                IO: "Territoire britannique de l’Océan Indien",
                BN: "Brunei Darussalam",
                BG: "Bulgarie",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Cambodge",
                CM: "Cameroun",
                CA: "Canada",
                CV: "Cap-Vert",
                KY: "Iles Cayman",
                CF: "République centrafricaine",
                TD: "Tchad",
                CL: "Chili",
                CN: "Chine",
                HK: "Hong Kong",
                MO: "Macao",
                CX: "Île Christmas",
                CC: "Îles Cocos",
                CO: "Colombie",
                KM: "Comores",
                CG: "République du Congo",
                CD: "République démocratique du Congo",
                CK: "Îles Cook",
                CR: "Costa Rica",
                CI: "Côte d’Ivoire",
                HR: "Croatie",
                CU: "Cuba",
                CY: "Chypre",
                CZ: "République tchèque",
                DK: "Danemark",
                DJ: "Djibouti",
                DM: "Dominique",
                DO: "République dominicaine",
                EC: "Équateur",
                EG: "Égypte",
                SV: "Salvador",
                GQ: "Guinée équatoriale",
                ER: "Érythrée",
                EE: "Estonie",
                ET: "Éthiopie",
                FK: "Îles Falkland",
                FO: "Îles Féroé",
                FJ: "Fidji",
                FI: "Finlande",
                FR: "France",
                GF: "Guyane française",
                PF: "Polynésie française",
                TF: "Terres australes et antarctiques françaises",
                GA: "Gabon",
                GM: "Gambie",
                GE: "Géorgie",
                DE: "Allemagne",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Grèce",
                GL: "Groenland",
                GD: "Grenade",
                GP: "Guadeloupe",
                GU: "Guam",
                GT: "Guatemala",
                GG: "Guernesey",
                GN: "Guinée",
                GW: "Guinée-Bissau",
                GY: "Guyane",
                HT: "Haïti",
                HM: "Îles Heard-et-MacDonald",
                VA: "Saint-Siège (Vatican)",
                HN: "Honduras",
                HU: "Hongrie",
                IS: "Islande",
                IN: "Inde",
                ID: "Indonésie",
                IR: "Iran",
                IQ: "Irak",
                IE: "Irlande",
                IM: "Ile de Man",
                IL: "Israël",
                IT: "Italie",
                JM: "Jamaïque",
                JP: "Japon",
                JE: "Jersey",
                JO: "Jordanie",
                KZ: "Kazakhstan",
                KE: "Kenya",
                KI: "Kiribati",
                KP: "Corée du Nord",
                KR: "Corée du Sud",
                KW: "Koweït",
                KG: "Kirghizistan",
                LA: "Laos",
                LV: "Lettonie",
                LB: "Liban",
                LS: "Lesotho",
                LR: "Libéria",
                LY: "Libye",
                LI: "Liechtenstein",
                LT: "Lituanie",
                LU: "Luxembourg",
                MK: "Macédoine",
                MG: "Madagascar",
                MW: "Malawi",
                MY: "Malaisie",
                MV: "Maldives",
                ML: "Mali",
                MT: "Malte",
                MH: "Îles Marshall",
                MQ: "Martinique",
                MR: "Mauritanie",
                MU: "Maurice",
                YT: "Mayotte",
                MX: "Mexique",
                FM: "Micronésie",
                MD: "Moldavie",
                MC: "Monaco",
                MN: "Mongolie",
                ME: "Monténégro",
                MS: "Montserrat",
                MA: "Maroc",
                MZ: "Mozambique",
                MM: "Myanmar",
                NA: "Namibie",
                NR: "Nauru",
                NP: "Népal",
                NL: "Pays-Bas",
                NC: "Nouvelle-Calédonie",
                NZ: "Nouvelle-Zélande",
                NI: "Nicaragua",
                NE: "Niger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Île Norfolk",
                MP: "Îles Mariannes du Nord",
                NO: "Norvège",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "Palestine",
                PA: "Panama",
                PG: "Papouasie-Nouvelle-Guinée",
                PY: "Paraguay",
                PE: "Pérou",
                PH: "Philippines",
                PN: "Pitcairn",
                PL: "Pologne",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Qatar",
                RE: "Réunion",
                RO: "Roumanie",
                RU: "Russie",
                RW: "Rwanda",
                BL: "Saint-Barthélemy",
                SH: "Sainte-Hélène",
                KN: "Saint-Kitts-et-Nevis",
                LC: "Sainte-Lucie",
                MF: "Saint-Martin (partie française)",
                SX: "Saint-Martin (partie néerlandaise)",
                PM: "Saint-Pierre-et-Miquelon",
                VC: "Saint-Vincent-et-les Grenadines",
                WS: "Samoa",
                SM: "Saint-Marin",
                ST: "Sao Tomé-et-Principe",
                SA: "Arabie Saoudite",
                SN: "Sénégal",
                RS: "Serbie",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SG: "Singapour",
                SK: "Slovaquie",
                SI: "Slovénie",
                SB: "Îles Salomon",
                SO: "Somalie",
                ZA: "Afrique du Sud",
                GS: "Géorgie du Sud et les îles Sandwich du Sud",
                SS: "Sud-Soudan",
                ES: "Espagne",
                LK: "Sri Lanka",
                SD: "Soudan",
                SR: "Suriname",
                SJ: "Svalbard et Jan Mayen",
                SZ: "Eswatini",
                SE: "Suède",
                CH: "Suisse",
                SY: "Syrie",
                TW: "Taiwan",
                TJ: "Tadjikistan",
                TZ: "Tanzanie",
                TH: "Thaïlande",
                TL: "Timor-Leste",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinité-et-Tobago",
                TN: "Tunisie",
                TR: "Turquie",
                TM: "Turkménistan",
                TC: "Îles Turques-et-Caïques",
                TV: "Tuvalu",
                UG: "Ouganda",
                UA: "Ukraine",
                AE: "Émirats Arabes Unis",
                GB: "Royaume-Uni",
                US: "États-Unis",
                UM: "Îles mineures éloignées des États-Unis",
                UY: "Uruguay",
                UZ: "Ouzbékistan",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Viêt Nam",
                VI: "Îles Vierges américaines",
                WF: "Wallis-et-Futuna",
                EH: "Sahara occidental",
                YE: "Yémen",
                ZM: "Zambie",
                ZW: "Zimbabwe"
            }
        },
        CFAR_OFFER_BANNER: {
            TITLE: "Annulez votre vol à tout moment, pour quelque raison que ce soit.",
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            BUTTON: {
                SELECT: "Sélectionner"
            },
            COVERAGE_PERCENTAGE: "{{ coverage }} des frais de vol couverts",
        },
        CFAR_OFFER_BANNER_LARGE: {
            TITLE: "Annulez votre vol à tout moment, pour quelque raison que ce soit.",
            NO_OFFERS: "Aucune offre disponible",
            LOADING: "Chargement des offres en cours...",
            COVERAGE_PERCENTAGE: "{{ coverage }} des frais de vol couverts",
            NO_COVERAGE_OPTION: "Je ne veux pas ajouter l'option 'Annuler pour une raison quelconque'.",
            PRICE_PER_TRAVELER: "<span class='price-per-traveler'>{{ price }}</span><span>par passager</span>"
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
            REFUND_DETAILS_TITLE: "Détails du remboursement",
            REFUND_WARNING_MESSAGE: "Vous avez souscrit à l'option 'CFAR' avec votre réservation, qui vous permet d'annuler et d'être remboursé de {{ amount }}. Si vous souhaitez annuler votre réservation pour l'ensemble du voyage et tous les passagers, vous pouvez lancer le processus de remboursement ci-dessous",
            HOPPER_REFUND: "Remboursement Hopper",
            AIRLINE_REFUND: "Remboursement de la compagnie aérienne",
            METHOD: "Méthode :",
            AMOUNT: "Montant :",
            REFUND_METHOD: "Mode de remboursement",
            BUTTON: {
                CANCEL: "Annuler",
                SUBMIT: "Oui, annuler le vol",
                BACK: "Retour",
                CONTINUE: "Continuer",
                CLOSE: "Fermer"
            },
            NO_CONTRACT: "Aucun contrat disponible",
            LOADING: "Chargement en cours...",
            LOADING_HYPERWALLET: "Chargement d'Hyperwallet en cours...",
            LOADING_HYPERWALLET_ERROR: "Une erreur est survenue lors du chargement d'Hyperwallet",
            STEP: {
                FIRST: "Type de remboursement",
                SECOND: "Informations générales",
                THIRD: "Information du paiement",
                FOURTH: "Confirmation"
            },
            FORM: {
                PERSONAL_INFORMATION: "Informations personnelles",
                FIRST_NAME: "Prénom",
                FIRST_NAME_ERROR: "Le prénom est requis",
                MIDDLE_NAME: "Deuxième nom (optionnel)",
                LAST_NAME: "Nom",
                LAST_NAME_ERROR: "Le nom est requis",
                DATE_OF_BIRTH: "Date de naissance",
                DATE_OF_BIRTH_ERROR: "La date de naissance est requise",
                HOME_ADDRESS: "Domicile",
                ADDRESS_LINE_1: "Adresse",
                ADDRESS_LINE_1_ERROR: "L'adresse est requise",
                ADDRESS_LINE_2: "Complément d'adresse (optionnel)",
                CITY: "Ville",
                CITY_ERROR: "La ville est requise",
                COUNTRY: "Pays",
                COUNTRY_ERROR: "Le pays est requis",
                STATE: "Région",
                STATE_ERROR: "La région est requise",
                ZIP: "Code postal",
                ZIP_ERROR: "Le code postal est requis"
            },
            CONFIRMATION_MESSAGE_1: "Votre vol a été remboursé and votre remboursement est en train d'être traité.",
            CONFIRMATION_MESSAGE_2: "Un mail de confirmation va être envoyé à l'adresse {{ userEmail }} avec les détails sur la manière d'utiliser votre crédit",
            REFUND_DETAILS: "{{ amount }} en {{ method }}"
        }
    }
};


/***/ }),

/***/ "g+sT":
/*!******************************************************!*\
  !*** ./src/app/shared/ngrx/router/router.actions.ts ***!
  \******************************************************/
/*! exports provided: selectCurrentRoute, selectFragment, selectQueryParams, selectQueryParam, selectRouteParams, selectRouteParam, selectRouteData, selectUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCurrentRoute", function() { return selectCurrentRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFragment", function() { return selectFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParams", function() { return selectQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectQueryParam", function() { return selectQueryParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParams", function() { return selectRouteParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteParam", function() { return selectRouteParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouteData", function() { return selectRouteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUrl", function() { return selectUrl; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "99NH");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('router');
const { selectCurrentRoute, // select the current route
selectFragment, // select the current route fragment
selectQueryParams, // select the current route query params
selectQueryParam, // factory function to select a query param
selectRouteParams, // select the current route params
selectRouteParam, // factory function to select a route param
selectRouteData, // select the current route data
selectUrl, } = Object(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["getSelectors"])(selectRouterState);


/***/ }),

/***/ "kMjd":
/*!******************************************************!*\
  !*** ./src/app/shared/ngrx/global/global.reducer.ts ***!
  \******************************************************/
/*! exports provided: globalReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalReducer", function() { return globalReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.actions */ "2wFT");


const initialState = {
    currentLang: 'en',
    currentTheme: 'theme-light-hopper'
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_global_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentLang"], (state, { currentLang }) => (Object.assign(Object.assign({}, state), { currentLang: currentLang }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_global_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentTheme"], (state, { currentTheme }) => (Object.assign(Object.assign({}, state), { currentTheme: currentTheme }))));
function globalReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "ognC":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/inputs/inputs.component.ts ***!
  \**************************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







const _c0 = ["inputSort"];
function InputsComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputsComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r9.name);
} }
function InputsComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputsComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "td", 13);
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", element_r10.description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function InputsComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputsComponent_td_13_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputsComponent_td_13_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InputsComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputsComponent_td_13_mat_icon_1_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InputsComponent_td_13_mat_icon_2_Template, 2, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", element_r11.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !element_r11.required);
} }
function InputsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 18);
} }
function InputsComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 19);
} }
class InputsComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.displayedInputsColumns = ['name', 'description', 'required'];
        this.inputsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
    }
    // -----------------------------------------------
    // Life Cycle Hooks
    // -----------------------------------------------
    ngOnChanges(changes) {
        if (changes.inputs && changes.inputs.currentValue) {
            this.inputsDataSource.data = this.inputs;
        }
    }
    ngAfterViewInit() {
        this.inputsDataSource.sort = this.inputSort;
        this._cdRef.detectChanges();
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], viewQuery: function InputsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputSort = _t.first);
    } }, inputs: { inputs: "inputs" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 3, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start"], ["mat-table", "", "matSort", "", "fxFlex", "100", 1, "mat-elevation-z4", "mb-16", 3, "dataSource"], ["inputSort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "required"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["class", "required-icon", 4, "ngIf"], ["class", "optional-icon", 4, "ngIf"], [1, "required-icon"], [1, "optional-icon"], ["mat-header-row", ""], ["mat-row", ""]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.inputsDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedInputsColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedInputsColumns);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "v2M4":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class NotFoundPageComponent {
}
NotFoundPageComponent.ɵfac = function NotFoundPageComponent_Factory(t) { return new (t || NotFoundPageComponent)(); };
NotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageComponent, selectors: [["app-not-found-page"]], decls: 9, vars: 0, consts: [[1, "p-32"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["routerLink", "/", "mat-raised-button", "", "color", "primary"], [1, "mat-button-wrapper"]], template: function NotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "v2M4");
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ "Xn/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: 'guides',
        component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesModule)
    },
    { path: '', pathMatch: 'full', redirectTo: '/guides' },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2017.eb868e9158902a4d6e66.js.map