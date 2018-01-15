import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { SplashPage } from '../pages/splash/splash';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { MyCardsPage } from '../pages/my-cards/my-cards';
import { StorePage } from '../pages/store/store';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SplashPage;

  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private statusBar: StatusBar) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Account', component: AccountPage },
      { title: 'My Cards', component: MyCardsPage },
      { title: 'Store', component: StorePage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
