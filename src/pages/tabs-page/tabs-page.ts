import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { TaiwanPage } from '../taiwan/news';
import { WorldPage } from '../world/news';
import { LifePage } from '../life/news';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = NewsPage;
  tab2Root: any = TaiwanPage;
  tab3Root: any = WorldPage;
  tab4Root: any = LifePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
