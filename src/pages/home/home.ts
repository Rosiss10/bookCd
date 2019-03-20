import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Livres} from "../../model/Livres";
import {Cd} from "../../model/Cd";
import {ListService} from "../services/list.service";

import {LendBookPage} from "../lendBook/lendBook";
import {LendCdPage} from "../lendCd/lendCd";
import {BookListPage} from "../book/book";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  LivresList : Livres[];
  cdList: Cd [];

  constructor(public navCtrl: NavController,
              private  livresService : ListService,
              private cdService: ListService,
              private modalCtl : ModalController) {

  }
  ionViewWillEnter(){
    // notre attribut appareilsList va cherhcer les information dans appareilService puis en fais une copie
    this.LivresList = this.livresService.livresList.slice()
    this.cdList = this.cdService.cdList.slice();
  }

  onLoadLivre(index : number){
    let modal1 = this.modalCtl.create(LendBookPage, {index : index});
    modal1.present();
  }

  onLoadCd(index : number){
    let modal2 = this.modalCtl.create(LendCdPage, {index: index});
    modal2.present();
  }

}
