import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector:    'page-forgot-pass',
  templateUrl: 'forgot-pass.html'
})
export class ForgotPassPage {
  public formData: any;

  constructor(
    public navCtrl:     NavController,
    public navParams:   NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.formData = { };
  }

  ionViewDidLoad() {
  }

  // RESET PASSWORD TASTS
  resetPass(){
    // TODO
    let loader = this.loadingCtrl.create();
    loader.present();

    // IF SUCCESS, RETURN TO LOGIN PAGE
    setTimeout(() => {  // THIS TIMEOUT IS UNNECESSARY, IT'S JUST FOR THE EXAMPLE
      loader.dismiss();
      this.navCtrl.pop();  //  RETURN TO LOGIN PAGE
    }, 1000);
  }

}
