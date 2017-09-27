import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

import { NewsData } from '../../providers/news-data';
// import { CategoriesData } from '../../providers/categories-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  @ViewChild('navbar') slider: Slides;

  categories: any;
  // categoriesList: any;
  catSlides: any;
  hasNews: boolean;
  catId: number = 1;

  constructor(
    public navCtrl: NavController,
    public catData: NewsData,
    // public catListData: CategoriesData
  ) { }

  // onSlideWillChange(s: Slides) {
  //   console.log(`onSlideWillChange: ${s}`);
  // }

  // onSlideDidChange(s: Slides) {
  //   console.log(`onSlideDidChange: ${s}`);
  // }

  // onSlideDrag(s: Slides) {
  //   if (!this.slider.freeMode){
  //     this.slider.freeMode = true;
  //   }
  //   console.log(`onSlideDrag: ${s}`);
  // }

  ionViewDidLoad() {
    this.catData.getCategories(this.catId).subscribe((categories: any[]) => {
      if (categories.length){
        this.hasNews = true;
      }
      categories.map((news: any)=>{
        news.image = news.image || 'assets/img/default/S_Topnews.png';
        return news;
      })
      this.catSlides = categories.slice(0,5);
      this.categories = categories.slice(5);
    });
    // this.catListData.getCategoriesList().subscribe((categories: any[]) => {
    //   this.categoriesList = categories;
    // });
  }

  goToCategory(news: any) {
    this.navCtrl.push(OneDetailPage, { newsId: news.newsId });
  }

  doRefresh(refresher: any) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.catData.getCategories(8).subscribe((categories: any[]) => {
        if (categories.length){
          this.hasNews = true;
        }
        categories.map((news: any)=>{
          news.image = news.image || 'assets/img/default/S_Topnews.png';
          return news;
        })
        this.catSlides = categories.slice(0,5);
        this.categories = categories.slice(5);
      });
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll: any) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.catData.getCategories(8).subscribe((categories: any[]) => {
        categories.map((news: any)=>{
          news.image = news.image || 'assets/img/default/S_Topnews.png';
          this.categories.push(news);
          return news;
        })
      });

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
