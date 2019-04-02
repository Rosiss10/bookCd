import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";

import {Cd} from "../../model/Cd";
import {ListService} from "../services/list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector : 'page-cd',
  templateUrl: 'lendCd.html'
})

export  class LendCdPage {

  index : number;
  cdList: Cd;
  constructor( private navParam: NavParams,
               private ViewCtl : ViewController,
               private cdService : ListService){

  }

  ngOnInit(){
    this.index = this.navParam.get('index');
    this.cdList = this.cdService.cdList[this.index];
  }

  dissModal(){
    this.ViewCtl.dismiss();
  }

  onToggleCd(){
    this.cdList.etat = !this.cdList.etat
  }

  onSubmitForm(form: NgForm){
    this.cdList.etat = !this.cdList.etat
    if(this.cdList.etat==false){
      this.cdList.namePersonne = '';
      this.cdService.saveListCD();
      this.dissModal();

    }else{
      this.cdService.saveListCD();
      console.log(form.value);

      this.dissModal();
    }

  }

}
