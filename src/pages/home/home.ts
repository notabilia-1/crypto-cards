import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { LoginPage} from '../../pages/login/login';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private auth: AuthProvider, private alertCtrl: AlertController) {

  }

  logout() {
  	this.auth.logout().then((success) => {
  		if(success) {
  			this.navCtrl.setRoot(LoginPage);
  		}
      else {
        this.presentLogoutErrorAlert();
      }
  	});
  }

  private presentLogoutErrorAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Error logging out of application',
      buttons: ['Ok', 'Report']
    });

    alert.present();
  }

}
