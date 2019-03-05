import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ViewController,ModalController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UtilsProvider } from '../../providers/utils/utils';
import { HomePage } from '../home/home';
import { EditUserPage }  from '../../pages/edit-user/edit-user';
import { HomemodalPage }  from '../../pages/homemodal/homemodal';

/**
 * Generated class for the ViewAllRequirementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-all-requirements',
  templateUrl: 'view-all-requirements.html',
})
export class ViewAllRequirementsPage {
token:string;
  loginUser:any = {};
  requirementStatics:any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public util: UtilsProvider,
    public restProvider:RestProvider,
    public viewCtrl : ViewController,
    
    public modalCtrl:ModalController,) {
      this.token = this.util.getToken();
      this.loginUser = this.util.getSessionUser();
      this.getRequirementStatics();

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenerListPage');
  }

  getRequirementStatics(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let jsonData={
      'id':this.loginUser.id,
      'role':this.loginUser.role,
      'userName':this.loginUser.userName
    }
    this.restProvider.getRequirementStatics(jsonData,this.token)
    .then( res=> {
      this.requirementStatics = res;
     
      loading.dismiss();
      //console.log("this.trackRecr",this.newtrackRecr);
    },error => {
      loading.dismiss();
    });
    
  
     
  
  }
  openModal(reruirements){
    let chooseModal = this.modalCtrl.create(HomemodalPage,{reruirements:reruirements});
    console.log('lastMileStone',reruirements);
    chooseModal.present(); 
  }

  goBack()
  {
    this.navCtrl.push(HomePage)

  }
  gotoEditUser(id){
   
    this.navCtrl.push(EditUserPage,{userId:id});
console.log("id",id)
  }
}

