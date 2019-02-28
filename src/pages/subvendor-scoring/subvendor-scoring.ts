import { Component } from '@angular/core';
import { IonicPage,NavController,MenuController, NavParams,LoadingController,PopoverController,AlertController,ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the SubvendorScoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subvendor-scoring',
  templateUrl: 'subvendor-scoring.html',
})
export class SubvendorScoringPage {
  token:string;
  schemaDetails:any;
  savingDate:string;
  selectedClient:string;
  subvendorDetails:any={};
  showDiv:boolean= true;
  showDiv2:boolean =false;
  objDetails:any;
  novice:number;
  candidateSubmitted:string;
  answered:string;
  unAnswered:string;
  approved:string;
  clientRejection:string;
  blacklisted:string;
  submitToClient:string;
  clientConfirmation:string;
  clientInterview:string;
  averageMin:number;
  averageMax :number;
  goodMin:number;
  goodMax :number;
  expertMin:number;
  expertMax :number;
  guruMin:number;
  guruMax:number;
  noviceMin:number=0;
  isActive:boolean;
  isenabled:boolean=false;
  disabled:boolean= false;
  isReadonly:boolean = true;
  isSelectenabled:boolean = false;
  isReadonlyRatings:boolean= true;
  isReadonlyRatings2:boolean= true;
  loginUser:any={};
    constructor(public util: UtilsProvider,
      public navParams: NavParams,
      public navCtrl: NavController,
      public popoverCtrl: PopoverController,
      public loadingCtrl: LoadingController,
      public restProvider: RestProvider,
      public viewCtrl : ViewController) {
        this.token = this.util.getToken();
        this.subVendorDetails();
      this.loginUser = this.util.getSessionUser();

      //  this.cancel();
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ApplicationSettingPage');
    }
    subVendorDetails(){
    
      
      this.restProvider.subVendorDetails(this.token)
      .then((data:any) => {
          this.schemaDetails = data;
         
       

        console.log("hhhhhasdsdhh",this.schemaDetails);
       
        let ActiveData = [];
        Object.keys(this.schemaDetails).forEach(key=> {
            if(this.schemaDetails[key].isActive){
              ActiveData.push(this.schemaDetails[key]);
            
              this.objDetails = (ActiveData);
            
              this.candidateSubmitted = this.objDetails[0].candidateSubmitted;
              this.answered =this.objDetails[0].answered;
              this.approved = this.objDetails[0].approved;
              this.clientRejection = this.objDetails[0].clientRejection;
              this.blacklisted = this.objDetails[0].blacklisted;
              this.unAnswered = this.objDetails[0].unAnswered;
              this.submitToClient = this.objDetails[0].submitToClient;
              this.clientConfirmation = this.objDetails[0].clientConfirmation;
              this.clientInterview = this.objDetails[0].clientInterview;
              this.novice =this.objDetails[0].novice;
              
              this.averageMin =  this.novice +1;
              this.averageMax = this.objDetails[0].average;
              this.goodMin = +this.averageMax ;
              this.goodMax =  this.objDetails[0].good;
              this.expertMin =  this.goodMax +1;
              this.expertMax =  this.objDetails[0].expert;
              this.guruMin = this.expertMax +1;
              this.guruMax =  this.objDetails[0].guru;

             console.log("this.objDetails", this.objDetails);
             console.log("novice", this.novice);
            }
            console.log("this.objDetails", this.objDetails);
          //  this.novice =this.objDetails.novice;
            console.log("novice", this.novice);
           
            

        });
        
      },error => {
          this.util.showToast("Something went wrong.","ERROR");
        
      });
      this.isSelectenabled= false; 
      
       
    }
    onSelectChange(selectedValue){
    
      console.log(selectedValue);

     // this.selectedClient = selectedValue.substring(0,1);
      this.subvendorDetails = selectedValue;
      this.averageMin = this.subvendorDetails.novice +1;
      this.goodMin = this.subvendorDetails.average +1;
      this.expertMin = this.subvendorDetails.good +1;
      this.guruMin = this.subvendorDetails.expert +1;
      this.showDiv2 = true;
      this.showDiv = false;
      this.isActive = this.subvendorDetails.isActive
      if(this.isActive == true){
        this.isenabled = true
      }else{
        this.isenabled = false;

      }
      this.isReadonly = true;
       console.log('showDiv', this.showDiv);
       console.log('subvendorDetails', this.subvendorDetails);
   
    }
    goBack(){
      this.navCtrl.pop();
    }
   
  addNew(){
    
    let ActiveData = [];
    Object.keys(this.schemaDetails).forEach(key=> {
      if(this.schemaDetails[key].isActive){
        ActiveData.push(this.schemaDetails[key]);
      
      this.objDetails = (ActiveData);
    this.objDetails={};
              this.candidateSubmitted = null;
              this.answered =null;
              this.approved = null;
              this.clientRejection = null;
              this.blacklisted = null;
              this.unAnswered = null;
              this.submitToClient = null;
              this.clientConfirmation = null;
              this.clientInterview = null;
              this.novice = null;
              this.averageMin= 0;
              this. averageMax = null;
              this.goodMin = 0;
              this.goodMax = null;
              this.expertMax = null;
              this.expertMin = 0;
              this.guruMax = null;
              this.guruMin = 0;
              
             
    this.showDiv2 = false;
    this.showDiv = true;
    this.isenabled = true;
    this.isSelectenabled = true;
    this.isReadonly = false;
    this.isReadonlyRatings = true;
    this.isReadonlyRatings2 = false;
    console.log('objDetails', this.objDetails);
      }
     
      });
   
  }

  onBlurMethod1(){
   
    this.averageMin =+this.novice + +1;
    console.log("averageMin",this.averageMin) ;
    
   }
   onBlurMethod2(){
    this.averageMax = this. averageMax ;
    this.goodMin =  +this.averageMax + +1;
   }
   onBlurMethod3(){
    this.goodMax =  this.goodMax;
    this.expertMin =  +this.goodMax + +1;
   }
   onBlurMethod4(){
    this.expertMax =  this.expertMax;
    this.guruMin = +this.expertMax + +1;
    
   }
   onBlur(){
    this.guruMax =  +this.candidateSubmitted + +this.answered + +this.approved + +this.submitToClient + +this.clientConfirmation + +this.clientInterview;
   console.log('this.guruMax',this.guruMax);
  }
 
    submit(){
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      if(this.candidateSubmitted == undefined || this.candidateSubmitted == "" ){
        this.util.showToast("Please enter a Candidate .","ERROR");
        return;
      }
      if(this.answered == undefined || this.answered == "" ){
        this.util.showToast("Please enter Candidate Answered .","ERROR");
        return;
      } if(this.unAnswered == undefined || this.unAnswered == "" ){
        this.util.showToast("Please enter Candidate Unanswered for 48Hrs.","ERROR");
        return;
      } if(this.approved == undefined || this.approved == "" ){
        this.util.showToast("Please enter Candidate Approved .","ERROR");
        return;
      } if(this.clientRejection == undefined || this.clientRejection == "" ){
        this.util.showToast("Please enter Candidate Rejected .","ERROR");
        return;
      } if(this.blacklisted == undefined || this.blacklisted == "" ){
        this.util.showToast("Please enter Candidate Blacklisted .","ERROR");
        return;
      } if(this.submitToClient == undefined || this.submitToClient == "" ){
        this.util.showToast("Please enter Candidate Submitted to Client .","ERROR");
        return;
      } if(this.clientConfirmation == undefined || this.clientConfirmation == "" ){
        this.util.showToast("Please enter Client Confirmed.","ERROR");
        return;
      } if(this.clientInterview == undefined || this.clientInterview == "" ){
        this.util.showToast("Please enter Client Interview Scheduled .","ERROR");
        return;
      }
      

      if(this.novice == undefined || this.novice == null ){
        this.util.showToast("Please Rate Novice no. .","ERROR");
        return;
      }
     
      if(this.novice > this.averageMin ){
        this.util.showToast("Novice max value should be less than Average min value. .","ERROR");
        return;
      }
      if(this.averageMax == undefined || this.averageMax == null ){
        this.util.showToast("Please Rate average no. .","ERROR");
        return;
      }
      if(this.averageMax  <=   this.averageMin  ){
        this.util.showToast("Average min value should be less than Average max value. .","ERROR");
        return;
      }
      if(this.goodMax == undefined || this.goodMax == null ){
        this.util.showToast("Please Rate good no. .","ERROR");
        return;
      }
      if(this.goodMax <= this.goodMin){
        this.util.showToast("Good min value should be less than Good max value. .","ERROR");
        return;
      }
      if(this.expertMax <= this.expertMin){
        this.util.showToast("Expert min value should be less than Expert max value. .","ERROR");
        return;
      }
      if(this.expertMax == undefined || this.expertMax == null ){
        this.util.showToast("Please Rate Expert no..","ERROR");
        return;
      }
      console.log("this.expertMax",this.expertMax);
      console.log("this.guruMax",this.guruMax);
      if(this.guruMax <= this.expertMax){
        this.util.showToast("Expert max value should be less than Guru max value. .","ERROR");
        return;
      }
     

      let jsonData = {
        
        'active':true,
        'answered': this.answered,
        'approved': this.approved,
        'average': this.averageMax,
        'averageMin' : this.averageMin,
        'blacklisted': this.blacklisted,
        'candidateSubmitted':this.candidateSubmitted,
        'clientConfirmation': this.clientConfirmation,
        'clientInterview': this.clientInterview,
        'clientRejection': this.clientRejection,
        'created_by': this.loginUser.role,
        'expert': this.expertMax,
        'expertMin': this.expertMin,
        'good': this.goodMax,
        'goodMin':this.goodMin,
        'guru': this.guruMax,
        'guruMin':this.guruMin,
        'id': null,
        'novice': this.novice,
        'noviceMin': 0,
        'rejected': this.clientRejection,     
        'submitToClient': this.submitToClient,
        'unAnswered': this.unAnswered
    
  }
      loading.present();   
      this.restProvider.subvendorScoringSchema(this.token,jsonData)
      .then(data => {
        
        loading.dismiss();
        this.util.showToast("Successfully Submitted.","SUCCESS");
      },error => {
        loading.dismiss();
        this.util.showToast("Something went wrong.","ERROR");
        console.log(error);
    });

        this.restProvider.subVendorDetails(this.token)
          .then(data => {
        
          },error => {
           
        });
  
    }
    
    cancel(){
     
      this.subVendorDetails();  
      
    }
    Revert(id){
    
      this.restProvider.revertSubVendorSchema(this.token,id)
      .then(data => {
      
        this.util.showToast("Successfully Submitted.","SUCCESS");
      },error => {
      
        this.util.showToast("Something went wrong.","ERROR");
        console.log(error);
    });
    }
    
  }
  