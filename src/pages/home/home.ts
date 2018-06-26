import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// import { RegistrationPage } from '../registration/registration';
// import { LoginPage } from '../login/login';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  toLogin() {
    this.navCtrl.push("login");
  }

  toRegister() {
    this.navCtrl.push("registration");
  }

}
