import {Component} from "@angular/core";
import {Livres} from "../../model/Livres";
import {ListService} from "../services/list.service";
import {MenuController, ModalController} from "ionic-angular";
import {LendBookPage} from "../lendBook/lendBook";

@Component({
  selector: 'page-unicLivres',
  templateUrl: 'book.html'
})

export  class BookListPage {


  LivresList: Livres[];
  constructor( private  livresService : ListService,
               private menuCtl: MenuController,
               private modalCtl: ModalController,
             ){

  }
  ionViewWillEnter(){
    this.LivresList = this.livresService.livresList.slice();
  }

  onLoadLivre(index : number){
   let modal=  this.modalCtl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtl.open();
  }
}

