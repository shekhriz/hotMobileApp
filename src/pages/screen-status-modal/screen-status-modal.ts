import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController,ModalController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UtilsProvider } from '../../providers/utils/utils';
/**
 * Generated class for the ScreenStatusModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screen-status-modal',
  templateUrl: 'screen-status-modal.html',
})
export class ScreenStatusModalPage {
  positionId:string;
  token:string;
  loginUser:any = {};
  internalData:any;
  jobTitle:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public util: UtilsProvider,
    public restProvider:RestProvider,
    public viewCtrl : ViewController,) {
    this.positionId = navParams.get('positionId');
    this.jobTitle = navParams.get('jobTitle');
    this.token = this.util.getToken();
    this.loginUser = this.util.getSessionUser();
      this.ManagerOfRecruitingById();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternalSubmisssionModalPage');
  }
  ManagerOfRecruitingById(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.restProvider.getRequirementCandidateStatics(this.token,this.positionId)
    .then( res=> {
      this.internalData = res;
      console.log("this.accMgr",this.internalData)
      loading.dismiss();
     
    },error => {
      loading.dismiss();
    });
  }
  goBack(){
    this.viewCtrl.dismiss();
  }
}