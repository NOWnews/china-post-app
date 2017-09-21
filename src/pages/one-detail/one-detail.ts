import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavParams } from 'ionic-angular';

import { OneData } from '../../providers/one-data';

@Component({
  selector: 'page-one-detail',
  templateUrl: 'one-detail.html'
})
export class OneDetailPage {
  news: any;

  constructor(
    public dataProvider: OneData,
    public navParams: NavParams,
    protected _sanitizer: DomSanitizer,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load(this.navParams.data.newsId).subscribe((data: any) => {
      this.news = data;
      this._sanitizer.bypassSecurityTrustHtml(this.news.content);
    });
  }
}