import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  constructor(private fb: Facebook, public store: Storage) {
    console.log('Hello AuthProvider Provider');
    fb.browserInit(172205126702140, "v2.8")
  }

  static readonly fbPermissions = ['public_profile', 'email'];

  isFaceboookLoggedIn() {
    return new Promise((resolve) => {
      this.fb.getLoginStatus()
      .then((res) => {
        if(res.status === 'connected') {
          const uid = res.authResponse.userID;
          console.log("User is logged in: " + uid);
          resolve(true);
        } else if (res.status === 'not_authorized') {
          console.log("User is not authorized");
          resolve(false);
        } else {
          resolve(false);
        }
      })
      .catch(e => {
        console.log('Error checked Facebook login status', e);
        resolve(false);
      });
    });
  }

  facebookLogin() {
    return new Promise((resolve) => {
      this.fb.login(AuthProvider.fbPermissions)
      .then((res: FacebookLoginResponse) => {
        console.log('Logged into Facebook!', res);

        this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
        .then(profile => {
          const userData = {
            email: profile['email'],
            first_name: profile['first_name'],
            picture: profile['picture_large']['data']['url'],
            username: profile['name']
          };
          console.log(userData);
          this.store.set('userData', userData);
        });
        resolve(true);
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        resolve(false);
      });
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.fb.logout()
      .then(() => {
        this.store.set('userData', {});
        resolve(true);
      })
      .catch(e => {
        console.log('Error logging out of Facebook', e);
        resolve(false);
      });
    });
  }

}
