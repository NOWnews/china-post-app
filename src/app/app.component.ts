import { Component, ViewChild } from '@angular/core';

import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs-page/tabs-page';
import { NewsPage } from '../pages/news/news';
import { TaiwanPage } from '../pages/taiwan/news';
import { WorldPage } from '../pages/world/news';
import { LifePage } from '../pages/life/news';


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {

  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'News', name: 'TabsPage', component: TabsPage, tabComponent: NewsPage, index: 0, icon: 'home' },
    { title: 'Taiwan', name: 'TabsPage', component: TabsPage, tabComponent: TaiwanPage, index: 1, icon: 'logo-reddit' },
    { title: 'World', name: 'TabsPage', component: TabsPage, tabComponent: WorldPage, index: 2, icon: 'globe' },
    { title: 'Life', name: 'TabsPage', component: TabsPage, tabComponent: LifePage, index: 3, icon: 'walk' },
  ];
  rootPage: any;

  constructor(
    public platform: Platform,
    public storage: Storage,
    public splashScreen: SplashScreen
  ) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
      .then((hasSeenTutorial) => {
        if (hasSeenTutorial) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = TabsPage;
        }
        this.platformReady()
      });
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

  }

  platformReady() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
