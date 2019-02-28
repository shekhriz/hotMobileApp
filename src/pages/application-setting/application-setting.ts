import { Component } from '@angular/core';
import { IonicPage,NavController,MenuController, NavParams,LoadingController,PopoverController,AlertController,ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ApplicationSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application-setting',
  templateUrl: 'application-setting.html',
})
export class ApplicationSettingPage {
token:string;
details:any={};

  constructor(public util: UtilsProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public viewCtrl : ViewController) {
      this.token = this.util.getToken();
      this.settings();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationSettingPage');
  }
  settings(){
  
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();
    this.restProvider.settings(this.token)
    .then((data:any) => {
        this.details = data;
        
        loading.dismiss();
      console.log("hhhhhasdsdhh",this.details);
      
    },error => {
        this.util.showToast("Something went wrong.","ERROR");
        loading.dismiss();
       // console.log(error);
    });
    
    
     
  }

  goBack(){
    this.navCtrl.pop();
  }

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    
    let jsonData = {
     
      'active':this.details.active,
      'bucketName':this.details.bucketName,
      'bucketURL':this.details.bucketURL,
      'createdBy':this.details.createdBy,
      'createdDate':this.details.createdDate,
      'domainName':this.details.domainName,
      'emailId':this.details.emailId,
      'emailPassword':this.details.emailPassword,
      'id':this.details.id,
      'introductionVideo':this.details.introductionVideo,
      'path':this.details.path,
      'updatedDate':this.details.updatedDate,
      'userName':this.details.userName,
      
    }
    
    console.log(jsonData);
  
    loading.present();   
      this.restProvider.settingsUpdate(this.token,jsonData)
        .then(data => {
          
          loading.dismiss();
          this.util.showToast("Successfully Submitted.","SUCCESS");
        },error => {
          loading.dismiss();
          this.util.showToast("Something went wrong.","ERROR");
          console.log(error);
      });

  }
}
