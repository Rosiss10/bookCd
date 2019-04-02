import {Livres} from "../../model/Livres";
import {Cd} from "../../model/Cd";
import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Storage} from "@ionic/storage";

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class ListService {


  constructor(private storage: Storage){
  }

  livresList$ =  new Subject<Livres[]>();
  livresList: Livres[] = [
    {
      title : 'Ionic',
      description : [
        'Framework Mobile',
        'Angular JS',
        'Programmation Mobile'
      ],
      etat : false,
      namePersonne: ''
    },
    {
      title : 'Android Studio',
      description : [
        'IDE',
        'Java',
        'Programmation Mobile'
      ],
      etat : true,
      namePersonne: 'Sagesse'
    },
    {
      title : 'Laravel',
      description : [
        'Framework php',
        'PHP',
        'Programmation Web'
      ],
      etat : false,
      namePersonne: ''

    }


  ]

  cdList$ =  new Subject<Cd[]>();
  cdList: Cd [] = [
    {
      title : 'Le Monde',
      description : [

        'audio',
        '13 listes'

      ],
      etat : true,
      namePersonne: 'Allane'
    },
    {
      title : 'MHD',
      description : [

        'Videos',
        '14 listes'

      ],
      etat : false,
      namePersonne: ''

    },
    {
      title : 'PAPA WEMBA',
      description : [

        'audio',
        '17 listes'

      ],
      etat : true,
      namePersonne:  'Sarah'

    }
  ]



  emitList(){
    this.livresList$.next(this.livresList.slice());
  }



  saveList(){
    this.storage.set('livres', this.livresList);
  }

  fetchList() {
    this.storage.get('livres').then(
      (list)=>{
        if(list && list.length) {
          this.livresList = list.slice();
        }
        this.emitList();
      }
    )
  }

  saveData(){
    return new Promise((resolve, reject)=> {
      firebase.database().ref('livres').set(this.livresList).then(
        (data: DataSnapshot) => {
          resolve(data)
        }).catch(
        (error)=>{
          reject(error);
        });
    });
  }
  retrieveData(){
    return new Promise((resolve, reject)=> {
      firebase.database().ref('livres').once('value').then(
        (data: DataSnapshot) => {
          this.livresList = data.val();
          this.emitList();
          resolve('DOnnées récupérées avec succès !');
        }).catch(
        (error) => {
          reject(error);
        });
    });
  }

  emitListCD(){
    this.cdList$.next(this.cdList.slice());
  }



  saveListCD(){
    this.storage.set('cd', this.cdList);
  }

  fetchListCD () {
    this.storage.get('cd').then(
      (list)=>{
        if(list && list.length) {
          this.cdList = list.slice();
        }
        this.emitListCD();
      }
    )
  }

  saveDataCD(){
    return new Promise((resolve, reject)=> {
      firebase.database().ref('cd').set(this.cdList).then(
        (data: DataSnapshot) => {
          resolve(data)
        }).catch(
        (error)=>{
          reject(error);
        });
    });
  }
  retrieveDataCD(){
    return new Promise((resolve, reject)=> {
      firebase.database().ref('cd').once('value').then(
        (data: DataSnapshot) => {
          this.cdList = data.val();
          this.emitList();
          resolve('DOnnées récupérées avec succès !');
        }).catch(
        (error) => {
          reject(error);
        });
    });
  }



}
