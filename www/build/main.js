webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_book__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cd_cd__ = __webpack_require__(394);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.LivrePage = __WEBPACK_IMPORTED_MODULE_1__book_book__["a" /* BookListPage */];
        this.unicCdPage = __WEBPACK_IMPORTED_MODULE_2__cd_cd__["a" /* ListCdPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="LivrePage" tabTitle="Livre" tabIcon="bookmarks"></ion-tab>\n  <ion-tab [root]="unicCdPage" tabTitle="CD" tabIcon="disc"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/tabs/tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_list_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lendBook_lendBook__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListPage = /** @class */ (function () {
    function BookListPage(livresService, menuCtl, modalCtl) {
        this.livresService = livresService;
        this.menuCtl = menuCtl;
        this.modalCtl = modalCtl;
    }
    BookListPage.prototype.ngOnInit = function () {
        //this.LivresList = this.livresService.livresList.slice();
        var _this = this;
        this.Livressubscription = this.livresService.livresList$.subscribe(function (livre) {
            _this.LivresList = livre;
        });
        this.livresService.fetchList();
    };
    BookListPage.prototype.ionViewWillEnter = function () {
        this.LivresList = this.livresService.livresList.slice();
    };
    BookListPage.prototype.onLoadLivre = function (index) {
        var modal = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_3__lendBook_lendBook__["a" /* LendBookPage */], { index: index });
        modal.present();
    };
    BookListPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    BookListPage.prototype.ngOnDestroy = function () {
        //Pour eviter tout compertement inatendu
        this.Livressubscription.unsubscribe();
    };
    BookListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unicLivres',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/book/book.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button="" menuToggle="" (click)="onToggleMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Liste des Livres\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Cette liste contient les livres et leurs Etats</p>\n  <button ion-item\n          icon-start\n          *ngFor="let livres of LivresList;\n          let i = index"\n          (click)="onLoadLivre(i)">\n    <ion-icon name="bookmarks" [color]="livres.etat ? \'secondary\' : \'danger\' "></ion-icon>\n    {{livres.title}}\n    <p *ngIf="livres.namePersonne">{{livres.namePersonne}}</p>\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/book/book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */]])
    ], BookListPage);
    return BookListPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendBookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LendBookPage = /** @class */ (function () {
    function LendBookPage(navParam, ViewCtl, LivreService) {
        this.navParam = navParam;
        this.ViewCtl = ViewCtl;
        this.LivreService = LivreService;
    }
    LendBookPage.prototype.ngOnInit = function () {
        this.index = this.navParam.get('index');
        this.LivreList = this.LivreService.livresList[this.index];
    };
    LendBookPage.prototype.dissModal = function () {
        this.ViewCtl.dismiss();
    };
    LendBookPage.prototype.onToggleLivre = function () {
        this.LivreList.etat = !this.LivreList.etat;
        if (this.LivreList.etat == false) {
            this.LivreList.namePersonne = '';
            this.dismissModal();
        }
        else {
        }
    };
    LendBookPage.prototype.dismissModal = function () {
        this.ViewCtl.dismiss();
    };
    LendBookPage.prototype.onSubmitForm = function (form) {
        this.LivreList.etat = !this.LivreList.etat;
        if (this.LivreList.etat == false) {
            this.LivreList.namePersonne = '';
            this.LivreService.saveList();
            this.dismissModal();
        }
        else {
            this.LivreService.saveList();
            console.log(form.value);
            this.dismissModal();
        }
        /** console.log(form.value);
        this.dismissModal()**/
    };
    LendBookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livres',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/lendBook/lendBook.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="dissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>\n      Livres\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-card [ngClass]="{\'is-On\':LivreList.etat, \'is-Off\':!LivreList.etat}">\n  <ion-card-header>\n    <ion-title>\n      {{LivreList.title}}\n    </ion-title>\n  </ion-card-header>\n  <ion-card-content>\n   <p *ngFor="let Livre of LivreList.description">{{Livre}}</p>\n  </ion-card-content>\n\n</ion-card>\n\n  <form #f="ngForm" (ngSubmit)="onSubmitForm(f)" >\n    <ion-list>\n      <ion-item>\n        <ion-label>Nom de la personne qui emprunte</ion-label>\n      </ion-item>\n      <ion-input type="text" name="namePersonne"\n                 [disabled]="LivreList.etat"\n                 ngModel required=""\n                 placeholder="Tapez le Nom ici afin de preter un livre"\n                 [(ngModel)]="LivreList.namePersonne"></ion-input>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button [disabled]="!f.valid || LivreList.etat" color="secondary" type="submit" full>Preter</button>\n        </ion-col>\n        <ion-col>\n          <button color="orange" ion-button [disabled]="!LivreList.etat " ion-button type="submit"  full>Recuperer</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/lendBook/lendBook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]])
    ], LendBookPage);
    return LendBookPage;
}());

//# sourceMappingURL=lendBook.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LendCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LendCdPage = /** @class */ (function () {
    function LendCdPage(navParam, ViewCtl, cdService) {
        this.navParam = navParam;
        this.ViewCtl = ViewCtl;
        this.cdService = cdService;
    }
    LendCdPage.prototype.ngOnInit = function () {
        this.index = this.navParam.get('index');
        this.cdList = this.cdService.cdList[this.index];
    };
    LendCdPage.prototype.dissModal = function () {
        this.ViewCtl.dismiss();
    };
    LendCdPage.prototype.onToggleCd = function () {
        this.cdList.etat = !this.cdList.etat;
    };
    LendCdPage.prototype.onSubmitForm = function (form) {
        this.cdList.etat = !this.cdList.etat;
        if (this.cdList.etat == false) {
            this.cdList.namePersonne = '';
            this.cdService.saveListCD();
            this.dissModal();
        }
        else {
            this.cdService.saveListCD();
            console.log(form.value);
            this.dissModal();
        }
    };
    LendCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cd',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/lendCd/lendCd.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button clear color="danger" (click)="dissModal()">Fermer</button>\n    </ion-buttons>\n    <ion-title>\n      CD\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card [ngClass]="{\'is-On\':cdList.etat, \'is-Off\':!cdList.etat}">\n  <ion-card-header>\n    <ion-title>\n      {{cdList.title}}\n    </ion-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p *ngFor="let cdList of cdList.description">{{cdList}}</p>\n  </ion-card-content>\n  </ion-card>\n  <form #f="ngForm" (ngSubmit)="onSubmitForm(f)" >\n    <ion-list>\n      <ion-item>\n        <ion-label>Nom de la personne qui emprunte</ion-label>\n      </ion-item>\n      <ion-input type="text" name="namePersonne"\n                 [disabled]="cdList.etat"\n                 ngModel required=""\n                 placeholder="Tapez le Nom ici afin de preter un cd"\n                 [(ngModel)]="cdList.namePersonne"></ion-input>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button [disabled]="!f.valid || cdList.etat" color="secondary" type="submit" full>Preter</button>\n        </ion-col>\n        <ion-col>\n          <button color="orange" ion-button [disabled]="!cdList.etat " ion-button type="submit"  full>Recuperer</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/lendCd/lendCd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */]])
    ], LendCdPage);
    return LendCdPage;
}());

//# sourceMappingURL=lendCd.js.map

/***/ }),

/***/ 201:
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
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 246:
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
webpackEmptyAsyncContext.id = 246;

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lendCd_lendCd__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListCdPage = /** @class */ (function () {
    function ListCdPage(cdLivres, modalCtl, menuCtl) {
        this.cdLivres = cdLivres;
        this.modalCtl = modalCtl;
        this.menuCtl = menuCtl;
    }
    ListCdPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cdSbscription = this.cdLivres.cdList$.subscribe(function (cd) {
            _this.CdList = cd;
        });
        this.cdLivres.fetchListCD();
    };
    ListCdPage.prototype.ionViewWillEnter = function () {
        this.CdList = this.cdLivres.cdList.slice();
    };
    ListCdPage.prototype.onLoadCd = function (index) {
        var modal = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_3__lendCd_lendCd__["a" /* LendCdPage */], { index: index });
        modal.present();
    };
    ListCdPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    ListCdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unicCD',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/cd/cd.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button="" menuToggle="" (click)="onToggleMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Liste des CD\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Cette liste contient les cd et leurs Etats</p>\n  <button ion-item\n          icon-start\n          *ngFor="let Cd of CdList;\n          let i = index"\n          (click)="onLoadCd(i)">\n    <ion-icon name="disc" [color]="Cd.etat ? \'secondary\' : \'danger\' "></ion-icon>\n    {{Cd.title}}\n    <p *ngIf="Cd.namePersonne">{{Cd.namePersonne}}</p>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/cd/cd.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], ListCdPage);
    return ListCdPage;
}());

//# sourceMappingURL=cd.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(menuCtl, listeService, toastCtl, loadinCtl) {
        this.menuCtl = menuCtl;
        this.listeService = listeService;
        this.toastCtl = toastCtl;
        this.loadinCtl = loadinCtl;
    }
    SettingsPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    SettingsPage.prototype.onSaveList = function () {
        var _this = this;
        var loader = this.loadinCtl.create({
            content: 'Sauvegarder en cours...'
        });
        loader.present();
        this.listeService.saveData().then(function () {
            loader.dismiss();
            _this.toastCtl.create({
                message: 'Données sauvegardées !',
                duration: 4000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtl.create({
                message: error,
                duration: 4000,
                position: 'bottom'
            }).present();
        });
    };
    SettingsPage.prototype.onFetchist = function () {
        var _this = this;
        var loader = this.loadinCtl.create({
            content: 'Récupération en cours...'
        });
        loader.present();
        this.listeService.retrieveData().then(function () {
            loader.dismiss();
            _this.toastCtl.create({
                message: 'Données récupérées !',
                duration: 4000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            loader.dismiss();
            _this.toastCtl.create({
                message: error,
                duration: 4000,
                position: 'bottom'
            }).present();
            console.log(error);
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button="" menuToggle="" (click)="onToggleMenu()">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Réglage</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Modifier les Reglage de l\'application ici</p>\n  <ion-card>\n    <ion-card-header>Données</ion-card-header>\n    <ion-card-content>\n      <button ion-button block outline (click)="onSaveList()">Enregistrer</button>\n      <button ion-button block outline (click)="onFetchist()">Récupérer</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthPage = /** @class */ (function () {
    function AuthPage(authService, menuCtl, formBuilder, navCtl, navParams) {
        this.authService = authService;
        this.menuCtl = menuCtl;
        this.formBuilder = formBuilder;
        this.navCtl = navCtl;
        this.navParams = navParams;
    }
    AuthPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get('mode');
        this.initForm();
    };
    AuthPage.prototype.onToggleMenu = function () {
        this.menuCtl.open();
    };
    AuthPage.prototype.initForm = function () {
        this.authForm = this.formBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    AuthPage.prototype.onSubmitForm = function () {
        var _this = this;
        var email = this.authForm.get('email').value;
        var password = this.authForm.get('password').value;
        if (this.mode === 'new') {
            this.authService.signUpUser(email, password).then(function () {
                _this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
        else if (this.mode === 'connect') {
            this.authService.signInUser(email, password).then(function () {
                _this.navCtl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-auth',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/auth/auth.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="onToggleMenu()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n        <ion-title *ngIf="mode === \'new\'">Nouvel utilisateur</ion-title>\n    <ion-title *ngIf="mode === \'connect\'">Connexion</ion-title>\n    <ion-title>\n\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="authForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Adresse mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Mot de passe</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button full (click)="onSubmitForm()">Soumettre</button>\n    <span ion-text color="danger">{{ errorMessage }}</span>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/auth/auth.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavParams */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (user) {
                resolve(user);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signOut();
    };
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_services_list_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_lendCd_lendCd__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lendBook_lendBook__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_book_book__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cd_cd__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_services_auth_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(382);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lendCd_lendCd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lendBook_lendBook__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_book_book__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cd_cd__["a" /* ListCdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_lendCd_lendCd__["a" /* LendCdPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lendBook_lendBook__["a" /* LendBookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_book_book__["a" /* BookListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cd_cd__["a" /* ListCdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_auth_auth__["a" /* AuthPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__pages_services_list_service__["a" /* ListService */],
                __WEBPACK_IMPORTED_MODULE_14__pages_services_auth_service__["a" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_book_book__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtl) {
        var _this = this;
        this.menuCtl = menuCtl;
        this.tabsPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settingsPage = __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */];
        this.bookListPage = __WEBPACK_IMPORTED_MODULE_8__pages_book_book__["a" /* BookListPage */];
        this.authPage = __WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCEl-hecPpZl11Kt0B6KeTLaFhREo7gAI4",
                authDomain: "livrecd-1d1ec.firebaseapp.com",
                databaseURL: "https://livrecd-1d1ec.firebaseio.com",
                projectId: "livrecd-1d1ec",
                storageBucket: "livrecd-1d1ec.appspot.com",
                messagingSenderId: "251867734944"
            };
            __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
            __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    _this.isAuth = true;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    _this.isAuth = false;
                    _this.content.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_auth_auth__["a" /* AuthPage */], { mode: 'connect' });
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onNavigate = function (page, data) {
        this.content.setRoot(page, data ? data : null);
        this.menuCtl.close();
    };
    MyApp.prototype.onDisconnect = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut();
        this.menuCtl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      <button ion-item icon-start (click)="onNavigate(tabsPage)" *ngIf="isAuth">\n        <ion-icon name="home" color="primary"></ion-icon>\n        Acceuil\n      </button>\n\n      <button ion-item icon-start (click)="onNavigate(settingsPage)" *ngIf="isAuth">\n        <ion-icon name="options" color="primary"></ion-icon>\n        Réglage\n      </button>\n\n      <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'new\'})" *ngIf="!isAuth">\n        <ion-icon name="person-add"></ion-icon>\n        Nouvel Utilisateur\n      </button>\n      <button ion-item icon-start (click)="onNavigate(authPage, {mode: \'connect\'})" *ngIf="!isAuth">\n        <ion-icon name="person"></ion-icon>\n        Connexion\n      </button>\n\n      <button ion-item icon-start (click)="onDisconnect()" *ngIf="isAuth">\n        <ion-icon name="exit" color="danger"></ion-icon>\n        Déconnexion\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="tabsPage" #content></ion-nav>\n\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListService = /** @class */ (function () {
    function ListService(storage) {
        this.storage = storage;
        this.livresList$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.livresList = [
            {
                title: 'Ionic',
                description: [
                    'Framework Mobile',
                    'Angular JS',
                    'Programmation Mobile'
                ],
                etat: false,
                namePersonne: ''
            },
            {
                title: 'Android Studio',
                description: [
                    'IDE',
                    'Java',
                    'Programmation Mobile'
                ],
                etat: true,
                namePersonne: 'Sagesse'
            },
            {
                title: 'Laravel',
                description: [
                    'Framework php',
                    'PHP',
                    'Programmation Web'
                ],
                etat: false,
                namePersonne: ''
            }
        ];
        this.cdList$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Subject"]();
        this.cdList = [
            {
                title: 'Le Monde',
                description: [
                    'audio',
                    '13 listes'
                ],
                etat: true,
                namePersonne: 'Allane'
            },
            {
                title: 'MHD',
                description: [
                    'Videos',
                    '14 listes'
                ],
                etat: false,
                namePersonne: ''
            },
            {
                title: 'PAPA WEMBA',
                description: [
                    'audio',
                    '17 listes'
                ],
                etat: true,
                namePersonne: 'Sarah'
            }
        ];
    }
    ListService.prototype.emitList = function () {
        this.livresList$.next(this.livresList.slice());
    };
    ListService.prototype.saveList = function () {
        this.storage.set('livres', this.livresList);
    };
    ListService.prototype.fetchList = function () {
        var _this = this;
        this.storage.get('livres').then(function (list) {
            if (list && list.length) {
                _this.livresList = list.slice();
            }
            _this.emitList();
        });
    };
    ListService.prototype.saveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('livres').set(_this.livresList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ListService.prototype.retrieveData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('livres').once('value').then(function (data) {
                _this.livresList = data.val();
                _this.emitList();
                resolve('DOnnées récupérées avec succès !');
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ListService.prototype.emitListCD = function () {
        this.cdList$.next(this.cdList.slice());
    };
    ListService.prototype.saveListCD = function () {
        this.storage.set('cd', this.cdList);
    };
    ListService.prototype.fetchListCD = function () {
        var _this = this;
        this.storage.get('cd').then(function (list) {
            if (list && list.length) {
                _this.cdList = list.slice();
            }
            _this.emitListCD();
        });
    };
    ListService.prototype.saveDataCD = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('cd').set(_this.cdList).then(function (data) {
                resolve(data);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ListService.prototype.retrieveDataCD = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('cd').once('value').then(function (data) {
                _this.cdList = data.val();
                _this.emitList();
                resolve('DOnnées récupérées avec succès !');
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ListService);
    return ListService;
}());

//# sourceMappingURL=list.service.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_list_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lendBook_lendBook__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lendCd_lendCd__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, livresService, cdService, modalCtl) {
        this.navCtrl = navCtrl;
        this.livresService = livresService;
        this.cdService = cdService;
        this.modalCtl = modalCtl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        // notre attribut appareilsList va cherhcer les information dans appareilService puis en fais une copie
        this.LivresList = this.livresService.livresList.slice();
        this.cdList = this.cdService.cdList.slice();
    };
    HomePage.prototype.onLoadLivre = function (index) {
        var modal1 = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_3__lendBook_lendBook__["a" /* LendBookPage */], { index: index });
        modal1.present();
    };
    HomePage.prototype.onLoadCd = function (index) {
        var modal2 = this.modalCtl.create(__WEBPACK_IMPORTED_MODULE_4__lendCd_lendCd__["a" /* LendCdPage */], { index: index });
        modal2.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sagesse/ionic/LivreCD/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Acceuil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <button ion-item\n          icon-start\n          *ngFor="let livres of LivresList;\n          let i = index"\n          (click)="onLoadLivre(i)">\n    <ion-icon name="bookmarks" color ="secondary"></ion-icon>\n    {{livres.title}}\n  </button>\n  <button ion-item\n          icon-start\n          *ngFor="let cd of cdList;let  i = index"\n          (click)="onLoadCd(i)">\n\n    <ion-icon name="disc" color="primary"></ion-icon>\n    {{cd.title}}\n  </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/sagesse/ionic/LivreCD/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_2__services_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map