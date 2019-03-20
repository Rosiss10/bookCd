import {Component} from "@angular/core";
import {BookListPage} from "../book/book";
import {HomePage} from "../home/home";
import {ListCdPage} from "../cd/cd";

@Component({
  selector: 'page-tabs',
  templateUrl : 'tabs.html'
})

export class TabsPage {
  LivrePage = BookListPage;
  unicCdPage = ListCdPage;

}
