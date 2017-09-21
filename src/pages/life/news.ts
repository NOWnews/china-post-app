import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LifeData } from '../../providers/life-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class LifePage {
  categories: any;

  constructor(
    public navCtrl: NavController,
    public catData: LifeData
  ) {}

  ionViewDidLoad() {
    this.catData.getCategories().subscribe((categories: any[]) => {
      this.categories = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
