import {Component, OnInit} from "@angular/core";
import {Livres} from "../../model/Livres";
import {ListService} from "../services/list.service";
import {MenuController, ModalController} from "ionic-angular";
import {LendBookPage} from "../lendBook/lendBook";
import {Subscription} from "rxjs";

@Component({
  selector: 'page-unicLivres',
  templateUrl: 'book.html'
})

export  class BookListPage implements OnInit {
  Livressubscription: Subscription;

  LivresList: Livres[];
  constructor( private  livresService : ListService,
               private menuCtl: MenuController,
               private modalCtl: ModalController,
             ){

  }
  ngOnInit() {
   //this.LivresList = this.livresService.livresList.slice();

    this.Livressubscription = this.livresService.livresList$.subscribe(
      (livre:  Livres[]) => {
        this.LivresList = livre;
      }
    );
    this.livresService.fetchList();

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
  ngOnDestroy(): void {
    //Pour eviter tout compertement inatendu
    this.Livressubscription.unsubscribe();
  }
}

