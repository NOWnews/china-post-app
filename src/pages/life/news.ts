import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LifeData } from '../../providers/life-data';
import { CategoriesData } from '../../providers/categories-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: '../news/news.html'
})
export class LifePage {
  categories: any;
  categoriesList: any;
  hasNews: boolean;

  constructor(
    public navCtrl: NavController,
    public catData: LifeData,
    public catListData: CategoriesData
  ) {}

  ionViewDidLoad() {
    this.catData.getCategories().subscribe((categories: any[]) => {
      if (categories.length) {
        this.hasNews = true;
      }
      this.categories = categories;
    });
    this.catListData.getCategoriesList().subscribe((categories: any[]) => {
      this.categoriesList = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
