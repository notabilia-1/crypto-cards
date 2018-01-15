import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserDataProvider {

  constructor(private store: Storage) {
    console.log('Hello UserDataProvider Provider');
  }

  getData() {
  	return this.store.get('userData');
  }

}
