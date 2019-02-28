import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController,ModalController,AlertController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UtilsProvider } from '../../providers/utils/utils';
import { HomePage } from '../home/home';
import { VideoModalPage }  from '../../pages/video-modal/video-modal';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  token:string;
  loginUser:any = {};
  videosDetails:any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public util: UtilsProvider,
    public restProvider:RestProvider,
    public viewCtrl : ViewController,
    public alertCtrl: AlertController,
    public modalCtrl:ModalController,) {
      this.token = this.util.getToken();
      this.loginUser = this.util.getSessionUser();
      this.TechnicalScreener();

      console.log('this.token',this.token);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenerListPage');
  }

  TechnicalScreener(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.restProvider.getLibraryVideos(this.token)
    .then( res=> {
      this.videosDetails = res;
     
      console.log('this.userVideoLink',this.videosDetails);
    
      loading.dismiss();
     
    },error => {
      loading.dismiss();
    });
  }
  goBack()
  {
    this.navCtrl.push(HomePage)

  }
  viewDetails(user){
    let chooseModal = this.modalCtrl.create(VideoModalPage,{userid:user});
    console.log("this.userIdccccccccccc",user)
    chooseModal.present(); 
  }
  delete(user){
    let confirm = this.alertCtrl.create({
      title: 'Screener Name: '+user.firstName,
      message: 'Are you sure you want to delete this video?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            
            
            
            loading.present();
            this.restProvider.deleteVideo(this.token,user.id)
            .then(data => {
             
              loading.dismiss();
            
              this.util.showToast(" Deleted sucessfuly","SUCCESS");
             
            },error => {
              loading.dismiss();
              this.util.showToast("Something went wrong.","ERROR");
            })
          }
        }
      ]
    });
    confirm.present();
  }

}
