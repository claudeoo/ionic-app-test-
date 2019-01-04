import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailFilmPage } from '../detail-film/detail-film';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private API_URL= "http://localhost:8080";

  private film:any =  {
        title: null,
        soustitre: null,
        description: null,
        publishedAt: null,
        author: [],
        genre: null,
        price: null, 
  };

  private filmList:any = [];


  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               
              ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 7; i++) {
      this.items.push({
        title: 'Film ' + i,
        note: 'Acceder au film n' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

    DeleteFilm(pos){
        this.items.splice(pos,1);
        console.log("supprime");
    }


  ionViewDidLoad() {
    this.clearFilm
  }

  clearFilm(){
    this.film = {
      title: null,
      soustitre: null,
      description: null,
      publishedAt: null,
      author: [],
      genre: null,
      price: null,
    };
  }
  GoToRegister(item){
      this.navCtrl.push(RegisterPage, {
        item: item
      });
}

  GoToDetail(){
    this.navCtrl.push(DetailFilmPage);
  }

}
