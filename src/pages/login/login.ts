import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private auth: AuthProvider, private menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'main-menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  facebookLogin() {
  	this.auth.facebookLogin().then((success) => {
  		if(success) {
  			this.navCtrl.setRoot(HomePage);
  		}
  	});
  }

}
