import {Component, OnInit} from "@angular/core";
import {Livres} from "../../model/Livres";
import {NavParams, ViewController} from "ionic-angular";
import {ListService} from "../services/list.service";

import {NgForm} from "@angular/forms";
@Component({
  selector : 'page-livres',
  templateUrl: 'lendBook.html'
})

export  class LendBookPage  implements  OnInit{

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
    if(this.LivreList.etat==false){
      this.LivreList.namePersonne = '';
      this.dismissModal();
    }else{

    }

  }
  dismissModal(){
    this.ViewCtl.dismiss();
  }
  onSubmitForm(form: NgForm){
    this.LivreList.etat = !this.LivreList.etat
    if(this.LivreList.etat==false){
      this.LivreList.namePersonne = '';
      this.LivreService.saveList();
      this.dismissModal();

    }else{
      this.LivreService.saveList();
       console.log(form.value);

       this.dismissModal();
    }


    /** console.log(form.value);
    this.dismissModal()**/
  }

}
