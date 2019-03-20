import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListService} from "../pages/services/list.service";

import {LendCdPage} from "../pages/lendCd/lendCd";
import {LendBookPage} from "../pages/lendBook/lendBook";
import {BookListPage} from "../pages/book/book";
import {TabsPage} from "../pages/tabs/tabs";
import {ListCdPage} from "../pages/cd/cd";
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LendCdPage,
    LendBookPage,
    BookListPage,
    ListCdPage,
    TabsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LendCdPage,
    LendBookPage,
    BookListPage,
    ListCdPage,
    TabsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
