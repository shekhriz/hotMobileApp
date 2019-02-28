import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,ViewController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../../pages/login/login';
import {App} from 'ionic-angular';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  loginUser:any;
  token:string;
  currentPw:string;
  newPw:string;
  confirmPw:string;
  result:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public util: UtilsProvider,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public viewCtrl : ViewController,
    public app: App) {
      this.token = this.util.getToken();
      this.loginUser = this.util.getSessionUser();
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  changePassword(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if(this.currentPw == undefined || this.currentPw == "" ){
      this.util.showToast("Please enter  Current Password.","ERROR");
      return;
      
    }
    if(this.newPw == undefined || this.newPw == "" ){
      this.util.showToast("Please enter  New Password.","ERROR");
      return;
      
    }
    if(this.confirmPw == undefined || this.confirmPw == "" ){
      this.util.showToast("Please enter  Confirm Password.","ERROR");
      return;
      
    }
    if(this.newPw != this.confirmPw ){
      this.util.showToast("Password does not match.","ERROR");
      return;
      
    }
    let jsonData = {
      'currentPassword': this.currentPw,
      'loginPswd': this.loginUser.password,
      'newPassword': this.newPw,
      'userId': this.loginUser.id
    }
    console.log('loginPswd',this.loginUser.password);
    loading.present();  
    this.restProvider.changePassword(this.token,jsonData)
    .then((res:any)=>{
      loading.dismiss();
      this.result = res;
      this.util.showToast("Successfully Submitted.","SUCCESS");
      this.app.getActiveNav().setRoot(LoginPage);  
    },errrr=>{
      loading.dismiss();
      this.util.showToast("Something went wrong.","ERROR");
    });
  }

}
