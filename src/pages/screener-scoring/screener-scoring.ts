import { Component } from '@angular/core';
import { IonicPage,NavController,MenuController, NavParams,LoadingController,PopoverController,AlertController,ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the ScreenerScoringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screener-scoring',
  templateUrl: 'screener-scoring.html',
})
export class ScreenerScoringPage {
  token:string;
  loginUser:any={};
  schemaDetails:any;
  savingDate:string;
  selectedClient:string;
  Screenerdetails:any={};
  showDiv:boolean= true;
  showDiv2:boolean =false;
  objDetails:any;
  novice:number;
  canidateEvalIn24hrs:string;
  canidateEvalIn24To48hrs:string;

  canidateEvalIn48hrs:string;
  amRating:number;
  
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
    constructor(public util: UtilsProvider,
      public navParams: NavParams,
      public navCtrl: NavController,
      public popoverCtrl: PopoverController,
      public loadingCtrl: LoadingController,
      public restProvider: RestProvider,
      public viewCtrl : ViewController) {
        this.token = this.util.getToken();
      this.loginUser = this.util.getSessionUser();

        this.tsDetails();}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenerScoringPage');
  }
  tsDetails(){
    
    this.restProvider.tsDetails(this.token)
    .then((data:any) => {
        this.schemaDetails = data;
       
     

      console.log("hhhhhasdsdhh",this.schemaDetails);
     
      let ActiveData = [];
      Object.keys(this.schemaDetails).forEach(key=> {
          if(this.schemaDetails[key].isActive){
            ActiveData.push(this.schemaDetails[key]);
          
            this.objDetails = (ActiveData);
          
            this.canidateEvalIn24hrs = this.objDetails[0].canidateEvalIn24hrs;
            this.canidateEvalIn24To48hrs =this.objDetails[0].canidateEvalIn24To48hrs;
            this.canidateEvalIn48hrs = this.objDetails[0].canidateEvalIn48hrs;
            this.amRating = this.objDetails[0].amRating;
           this.novice= this.objDetails[0].novice;
            this.averageMin =  this.novice +1;
            this.averageMax = this.objDetails[0].average;
            this.goodMin = this.averageMax + 1;
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
    this.Screenerdetails = selectedValue;
    this.averageMin = this.Screenerdetails.novice +1;
    this.goodMin = this.Screenerdetails.average +1;
    this.expertMin = this.Screenerdetails.good +1;
    this.guruMin = this.Screenerdetails.expert +1;
    this.showDiv2 = true;
    this.showDiv = false;
    this.isActive = this.Screenerdetails.isActive
    if(this.isActive == true){
      this.isenabled = true
    }else{
      this.isenabled = false;

    }
    this.isReadonly = true;
     console.log('showDiv', this.showDiv);
     console.log('Screenerdetails', this.Screenerdetails);
 
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
            this.canidateEvalIn24hrs = null;
            this.canidateEvalIn24To48hrs =null;
            this.canidateEvalIn48hrs = null;
            this.amRating = null;
           
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
  this.guruMax = +((this.amRating)*5) + +this.canidateEvalIn24hrs;
 console.log('this.guruMax',this.guruMax);
}

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    if(this.canidateEvalIn24hrs == undefined || this.canidateEvalIn24hrs == "" ){
      this.util.showToast("Please enter Candidate  Evaluated in 24Hrs .","ERROR");
      return;
    } if(this.canidateEvalIn24To48hrs == undefined || this.canidateEvalIn24To48hrs == "" ){
      this.util.showToast("Please enter Candidate Evaluated in 24-48Hrs .","ERROR");
      return;
    } if(this.canidateEvalIn48hrs == undefined || this.canidateEvalIn48hrs == "" ){
      this.util.showToast("Please enter Candidate Evaluated after 48Hrs .","ERROR");
      return;
    } if(this.amRating == undefined || this.amRating == null ){
      this.util.showToast("Please enter Rating per Star.","ERROR");
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
      'amRating': this.amRating,
      'average': this.averageMax,
      'averageMin' : this.averageMin,
      'canidateEvalIn24To48hrs':this.canidateEvalIn24To48hrs,
      'canidateEvalIn24hrs': this.canidateEvalIn24hrs,
      'canidateEvalIn48hrs': this.canidateEvalIn48hrs,
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

      
    }
    loading.present();   
      this.restProvider.tsScoringSchema(this.token,jsonData)
        .then(data => {
          
          loading.dismiss();
          this.util.showToast("Successfully Submitted.","SUCCESS");
        },error => {
          loading.dismiss();
          this.util.showToast("Something went wrong.","ERROR");
          console.log(error);
      });
      this.restProvider.tsDetails(this.token)
        .then(data => {
      
        },error => {
         
      });

  }
 
  cancel(){
    this.tsDetails();  
    
  }

  Revert(id){
    let jsonData=3;
    this.restProvider.revertTsSchema(this.token,id)
    .then(data => {
    
      this.util.showToast("Successfully Submitted.","SUCCESS");
    },error => {
    
      this.util.showToast("Something went wrong.","ERROR");
      console.log(error);
  });
  }

}
