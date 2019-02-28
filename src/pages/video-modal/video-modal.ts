import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController,ModalController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UtilsProvider } from '../../providers/utils/utils';

/**
 * Generated class for the VideoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-modal',
  templateUrl: 'video-modal.html',
})
export class VideoModalPage {
  user:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public util: UtilsProvider,
    public restProvider:RestProvider,
    public viewCtrl : ViewController,
    
    public modalCtrl:ModalController) {
      this.user = navParams.get('userid');
console.log('user',this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoModalPage');
  }
  cancelData(){
    this.navCtrl.pop();
  }

}
