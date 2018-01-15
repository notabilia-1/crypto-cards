import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-cards',
  templateUrl: 'my-cards.html',
})
export class MyCardsPage {
  selectedItem: any;

  cards: Array<{name: string, background: string, image: string, level: number, description: string, training: number, speed: number, cost: number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.menuCtrl.enable(false, "main-menu");

    this.cards = [];

    const information = [
      {name: 'barbarian', background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian-bg.jpg', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png', description: 'The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.'},
      {name: 'archer', background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer-bg.jpg', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png', description: 'The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape, a leather belt and an attached small pouch.'},
      {name: 'giant', background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png', description: 'Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show them a turret or cannon and you\'ll see their fury unleashed!'},
      {name: 'goblin', background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin-bg.jpg', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png', description: 'These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless.'},
      {name: 'wizard', background: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg', image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png', description: 'The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts of destruction on anything, land or sky!'}
    ];
    const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 12; i++) {
      let n = Math.floor(Math.random() * information.length);

      this.cards.push({
        name: information[n].name,
        background: information[n].background,
        image: information[n].image,
        level: levels[Math.floor(Math.random() * levels.length)],
        description: information[n].description,
        training: Math.floor(Math.random() * 50),
        speed: Math.floor(Math.random() * 50),
        cost: Math.floor(Math.random() * 50)
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCardsPage');
  }

  openCard(event, card) {
    this.showAlert(card. name);
  }

  showAlert(name) {
    let alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'You clicked the ' + name,
      buttons: ['OK']
    });

    alert.present();
  }

}
