import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { NewsPage } from '../news/news';
import { TaiwanPage } from '../taiwan/news';
import { WorldPage } from '../world/news';
import { LifePage } from '../life/news';
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
  tab4Root: any = LifePage;
  tab5Root: any = AsiaPage;
  tab6Root: any = BusinessPage;
  tab7Root: any = SportsPage;
  tab8Root: any = TravelPage;
  tab9Root: any = ArtPage;
  tab10Root: any = EditorialPage;
  tab11Root: any = HightlightPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
