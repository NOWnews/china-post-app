import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { NewsData } from '../../providers/news-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: '../news/news.html'
})
export class TaiwanPage {
  categories: any;
  hasNews: boolean;
  catId: number = 2;

  constructor(
    public navCtrl: NavController,
    public catData: NewsData
  ) {}

  ionViewDidLoad() {
    this.catData.getCategories(this.catId).subscribe((categories: any[]) => {
      if (categories.length){
        this.hasNews = true;
      }
      categories.map((news: any)=>{
        news.image = news.image || 'assets/img/default/S_Taiwan.png';
        return news;
      })
      this.categories = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
