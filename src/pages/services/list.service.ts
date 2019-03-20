import {Livres} from "../../model/Livres";
import {Cd} from "../../model/Cd";

export class ListService {

  livresList : Livres[] = [
    {
      title : 'Ionic',
      description : [
        'Framework Mobile',
        'Angular JS',
        'Programmation Mobile'
      ],
      etat : false
    },
    {
      title : 'Android Studio',
      description : [
        'IDE',
        'Java',
        'Programmation Mobile'
      ],
      etat : true

    },
    {
      title : 'Laravel',
      description : [
        'Framework php',
        'PHP',
        'Programmation Web'
      ],
      etat : false

    }


  ]

  cdList: Cd [] = [
    {
      title : 'Le Monde',
      description : [

        'audio',
        '13 listes'

      ],
      etat : true
    },
    {
      title : 'MHD',
      description : [

        'Videos',
        '14 listes'

      ],
      etat : false

    },
    {
      title : 'PAPA WEMBA',
      description : [

        'audio',
        '17 listes'

      ],
      etat : true

    }
  ]


}
