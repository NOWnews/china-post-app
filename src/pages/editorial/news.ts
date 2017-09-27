import { Component, ViewChild } from '@angular/core';

import { NavController, Slides } from 'ionic-angular';

import { NewsData } from '../../providers/news-data';
import { OneDetailPage } from '../one-detail/one-detail';

@Component({
  selector: 'page-news',
  templateUrl: '../news/news.html'
})
export class EditorialPage {
  @ViewChild('navbar') slider: Slides;

  categories: any;
  // categoriesList: any;
  catSlides: any;
  hasNews: boolean;
  catId: number = 9;
  page: number = 1;
  defaultImg: string = 'assets/img/default/S_Edutorial.png';

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
    this.catData.getCategories(this.catId, this.page).subscribe((categories: any[]) => {
      if (categories.length){
        this.hasNews = true;
      }
      categories.map((news: any)=>{
        news.image = news.image || this.defaultImg;
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
      this.catData.getCategories(this.catId, 1).subscribe((categories: any[]) => {
        if (categories.length){
          this.hasNews = true;
        }
        categories.map((news: any)=>{
          news.image = news.image || this.defaultImg;
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
      this.page++;
      this.catData.getCategories(this.catId, this.page).subscribe((categories: any[]) => {
        categories.map((news: any)=>{
          news.image = news.image || this.defaultImg;
          this.categories.push(news);
          return news;
        })
      });

      infiniteScroll.complete();
    }, 500);
  }
}
