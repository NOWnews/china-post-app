import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

import { NewsData } from '../../providers/news-data';
import { CategoriesData } from '../../providers/categories-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: '../news/news.html'
})
export class EditorialPage {
  @ViewChild('navbar') slider: Slides;

  categories: any;
  categoriesList: any;
  catSlides: any;

  constructor(
    public navCtrl: NavController,
    public catData: NewsData,
    public catListData: CategoriesData
  ) { }

  onSlideWillChange(s: Slides) {
    console.log(`onSlideWillChange: ${s}`);
  }

  onSlideDidChange(s: Slides) {
    console.log(`onSlideDidChange: ${s}`);
  }

  onSlideDrag(s: Slides) {
    if (!this.slider.freeMode){
      this.slider.freeMode = true;
    }
    console.log(`onSlideDrag: ${s}`);
  }

  ionViewDidLoad() {
    this.catData.getCategories().subscribe((categories: any[]) => {
      categories.map((news: any)=>{
        news.image = news.image || 'http://www.chinapost.com.tw/news_images/20170920/viewpoint.jpg';
        return news;
      })
      this.categories = categories;
      this.catSlides = categories.slice(0,5);
    });
    this.catListData.getCategoriesList().subscribe((categories: any[]) => {
      this.categoriesList = categories;
    });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

}
