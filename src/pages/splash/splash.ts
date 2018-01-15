import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  loader: any;

  constructor(private navCtrl: NavController, private splashScreen: SplashScreen, private auth: AuthProvider, private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.showLoader();

      this.auth.isFaceboookLoggedIn().then((isLoggedIn) => {
        if(isLoggedIn) {
          this.loader.dismiss();
          this.navCtrl.setRoot(HomePage);
        } else {
          this.loader.dismiss();
          this.navCtrl.setRoot(LoginPage);
        }
      });
    }, 4000);

  }

  showLoader() {

    this.loader = this.loadingCtrl.create({
      content: "Checking authentication..."
    });

    this.loader.present();

  }

}
