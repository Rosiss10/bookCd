export  class Livres {
  title : string;
  description: string[];
  etat : boolean;
  namePersonne: string;

  constructor(){
    this.etat = false;
    this.namePersonne = '';
  }
}
