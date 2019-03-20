import {Component} from "@angular/core";
import {Livres} from "../../model/Livres";
import {NavParams, ViewController} from "ionic-angular";
import {ListService} from "../services/list.service";

@Component({
  selector : 'page-livres',
  templateUrl: 'lendBook.html'
})

export  class LendBookPage {

  index: number;
  LivreList : Livres;
  constructor( private navParam: NavParams, private ViewCtl : ViewController, private LivreService : ListService){

  }

  ngOnInit(){
    this.index = this.navParam.get('index');
    this.LivreList = this.LivreService.livresList[this.index];
  }

  dissModal(){
    this.ViewCtl.dismiss();
  }
  onToggleLivre(){
    this.LivreList.etat = !this.LivreList.etat
  }

}
