import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoadingController, MenuController, ToastController} from "ionic-angular";
import {Subscription} from "rxjs";
import {Livres} from "../../model/Livres";
import {ListService} from "../services/list.service";

@Component({
  selector: 'page-settings',
  templateUrl:  'settings.html'
})

export class SettingsPage  {
  Livressubscription: Subscription;

  LivresList: Livres[];
  constructor(private menuCtl: MenuController,
              private listeService: ListService,
              private toastCtl: ToastController,
              private loadinCtl:LoadingController){

  }
  onToggleMenu(){
    this.menuCtl.open();
  }

  onSaveList(){
    let loader = this.loadinCtl.create({
      content: 'Sauvegarder en cours...'
    });
    loader.present();
    this.listeService.saveData().then(
      ()=>{
        loader.dismiss();
        this.toastCtl.create({
          message : 'Données sauvegardées !',
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error)=> {
        loader.dismiss();
        this.toastCtl.create({
          message: error,
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    );
  }

  onFetchist(){
    let loader = this.loadinCtl.create({
      content: 'Récupération en cours...'
    });
    loader.present();
    this.listeService.retrieveData().then(
      ()=>{
        loader.dismiss();
        this.toastCtl.create({
          message : 'Données récupérées !',
          duration: 4000,
          position: 'bottom'
        }).present();
      }
    ).catch(
      (error)=> {
        loader.dismiss();
        this.toastCtl.create({
          message: error,
          duration: 4000,
          position: 'bottom'
        }).present();
        console.log(error);
      }
    );
  }

}
