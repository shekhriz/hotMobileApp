import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user :any = {};
  userId:string;
  name:string;
  morData:any;
  vosData:any;
  rolls:any;
  skillArray:Array<Object> = [];
 
  loginUser:any;
  token:any;
  id:string;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public util:UtilsProvider,
    public restProvider :RestProvider ) {
     
     this.token = this.util.getToken();
     this.userId = navParams.get('userId');
    
   
     this.loginUser = this.util.getSessionUser();
     this.id= this.loginUser.id;
     console.log("this.loginUser",this.loginUser);
     console.log("this.id",this.id);
   

    this.getUserById();
    this.getRoles();
    
    this.managerOfRecruiting();  
    this.vpOfSales();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  getRoles(){
    this.restProvider.groupName(this.token)
    .then((res:any)=>{
      this.rolls = res;
    },errrr=>{
    });
  }

    
  getUserById(){
    this.restProvider.editUsers(this.id,this.token)
    .then(data => {
      this.user = data;
      this.skillArray = this.user.technicalScreenerDetailsDSkillsSet;
      console.log(this.user);
      
    },error => {
        this.util.showToast("Something went wrong.","ERROR");
       
        console.log(error);
    });

  }
  managerOfRecruiting(){
    this.restProvider.managerOfRecruiting(0,this.token)
    .then((res:any)=>{
        this.morData = res;
    },errrr=>{
    });
  }
  vpOfSales(){
    this.restProvider.vpOfSales(0,this.token)
    .then((res:any)=>{
      this.vosData = res;
    },errrr=>{
      
    });
  }
  


updateUser(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  

  
  

  let jsonData = {
  
    user :{
      addressOne: this.user.addressOne,
      addressTwo:  this.user.addressTwo,
      alternateContact:  this.user.alternateContact,
      city:  this.user.city,
      contactNumber:  this.user.contactNumber,
      country:  this.user.country,
      emailId:  this.user.emailId,
      expectedPayRange:  this.user.expectedPayRange,
      firstName:  this.user.firstName,
      id:  this.user.id,
      lastName:  this.user.lastName,
      reportingMgrOfRecID:  this.user.reportingMgrOfRecID,
      reportingMgrOfRecName:  this.user.reportingMgrOfRecName,
      reportingVpOfSalesID:  this.user.reportingVpOfSalesID,
      reportingVpOfSalesName:  this.user.reportingVpOfSalesName,
      role:  this.user.role,
      state:  this.user.state,
      userName:  this.user.userName,
      zipCode:  this.user.zipCode
    },
    userJwtBean: {
      emailId: this.loginUser.emailId,
      firstName: this.loginUser.firstName,
      id: this.loginUser.id,
      role: this.loginUser.role,
      userName: this.loginUser.userName
    }
   
     
    
  }
  console.log(jsonData);

  loading.present();   
    this.restProvider.updateUserById(jsonData,this.token)
      .then(data => {
        this.util.saveSessionUser(data);
        loading.dismiss();
        this.util.showToast("Successfully Submitted.","SUCCESS");
        
      },error => {
          loading.dismiss();
          this.util.showToast("Something went wrong.","ERROR");
          console.log(error);
      });
  
}

isReadonly() {
  return this.isReadonly;   //return true/false 
}
}

