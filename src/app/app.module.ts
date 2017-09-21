import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { TabsPage } from '../pages/tabs-page/tabs-page';
import { NewsPage } from '../pages/news/news';
import { TaiwanPage } from '../pages/taiwan/news';
import { WorldPage } from '../pages/world/news';
import { LifePage } from '../pages/life/news';
import { OneDetailPage } from '../pages/one-detail/one-detail';

import { NewsData } from '../providers/news-data';
import { TaiwanData } from '../providers/taiwan-data';
import { LifeData } from '../providers/life-data';
import { WorldData } from '../providers/world-data';
import { OneData } from '../providers/one-data';


@NgModule({
  declarations: [
    ConferenceApp,
    TabsPage,
    NewsPage,
    TaiwanPage,
    WorldPage,
    LifePage,
    OneDetailPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: NewsPage, name: 'NewsPage', segment: 'news' },
        { component: TaiwanPage, name: 'TaiwanPage', segment: 'taiwan' },
        { component: WorldPage, name: 'WorldPage', segment: 'world' },
        { component: LifePage, name: 'LifePage', segment: 'life' },
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    TabsPage,
    NewsPage,
    TaiwanPage,
    WorldPage,
    LifePage,
    OneDetailPage,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsData,
    TaiwanData,
    LifeData,
    WorldData,
    OneData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
