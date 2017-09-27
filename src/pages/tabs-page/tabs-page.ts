import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { TaiwanPage } from '../taiwan/news';
import { WorldPage } from '../world/news';
import { AsiaPage } from '../asia/news';
import { BusinessPage } from '../business/news';
import { SportsPage } from '../sports/news';
import { TravelPage } from '../travel/news';
import { ArtPage } from '../art/news';
import { EditorialPage } from '../editorial/news';
import { HightlightPage } from '../hightlight/news';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = NewsPage;
  tab2Root: any = TaiwanPage;
  tab3Root: any = WorldPage;
  tab4Root: any = AsiaPage;
  tab5Root: any = BusinessPage;
  tab6Root: any = SportsPage;
  tab7Root: any = TravelPage;
  tab8Root: any = ArtPage;
  tab9Root: any = EditorialPage;
  tab10Root: any = HightlightPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
