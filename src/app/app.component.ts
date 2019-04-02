import {Component, ViewChild} from '@angular/core';
import {MenuController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {TabsPage} from "../pages/tabs/tabs";
import {SettingsPage} from "../pages/settings/settings";

import * as firebase from 'firebase';
import {AuthPage} from "../pages/auth/auth";
import {BookListPage} from "../pages/book/book";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPage;
  settingsPage: any = SettingsPage;
  bookListPage: any = BookListPage;
  authPage: any = AuthPage;
  isAuth: boolean;
  @ViewChild('content') content

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtl : MenuController) {
    platform.ready().then(() => {
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
      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user)=>{
          if(user){
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          }else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'});
          }
        }
      )

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?:{}){
    this.content.setRoot(page, data ? data :null);
    this.menuCtl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtl.close();
  }
}

