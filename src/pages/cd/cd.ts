import {Component, OnInit} from "@angular/core";
import {Cd} from "../../model/Cd";
import {MenuController, ModalController, NavController} from "ionic-angular";


import {ListService} from "../services/list.service";
import {LendCdPage} from "../lendCd/lendCd";
import {Subscription} from "rxjs";
import {Livres} from "../../model/Livres";

@Component({
  selector: 'page-unicCD',
  templateUrl : 'cd.html'
})
export  class ListCdPage implements OnInit{
  cdSbscription: Subscription;
  CdList: Cd[];
  constructor( private cdLivres: ListService,
               private modalCtl: ModalController,
               private  menuCtl: MenuController){
  }

  ngOnInit(): void {
    this.cdSbscription = this.cdLivres.cdList$.subscribe(
      (cd:  Cd[]) => {
        this.CdList = cd;
      }
    );
    this.cdLivres.fetchListCD();

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


