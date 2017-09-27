import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { WorldData } from '../../providers/world-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: '../news/news.html'
})
export class WorldPage {
  categories: any;
  hasNews: boolean;

  constructor(
    public navCtrl: NavController,
    public catData: WorldData
  ) {}

  ionViewDidLoad() {
    this.catData.getCategories().subscribe((categories: any[]) => {
      categories.map((news: any)=>{
        news.image = news.image || 'assets/img/default/S_World.png';
        return news;
      })
      this.categories = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
