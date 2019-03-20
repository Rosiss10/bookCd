import {Component} from "@angular/core";
import {Cd} from "../../model/Cd";
import {MenuController, ModalController, NavController} from "ionic-angular";


import {ListService} from "../services/list.service";
import {LendCdPage} from "../lendCd/lendCd";

@Component({
  selector: 'page-unicCD',
  templateUrl : 'cd.html'
})
export  class ListCdPage {

  CdList: Cd[];
  constructor( private cdLivres: ListService,
               private modalCtl: ModalController,
               private  menuCtl: MenuController){
  }

  ionViewWillEnter(){
    this.CdList = this.cdLivres.cdList.slice()
  }

  onLoadCd(index : number){
    let modal=  this.modalCtl.create(LendCdPage, {index: index});
    modal.present();
  }
  onToggleMenu(){
    this.menuCtl.open();
  }
}
