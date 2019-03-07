import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
import { CandidatePage }  from '../../pages/candidate/candidate';

/**
 * Generated class for the SelectCandidateDbModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-candidate-db-modal',
  templateUrl: 'select-candidate-db-modal.html',
})
export class SelectCandidateDbModalPage {
  selecteddetails:any;
  selectedType:any;
  token:string;
  scrData:any;
  interviewType:any;
  interviewName :any;
  reqId:string;
  submissionType:string;
  selectedScr:string;
  candidates:any;
  loginUser:any;
  candidateId:string;
  emailId:string;
  recScheduledDate:string;
  recScheduledTime:string;
  chancesOfExtension:string;
  educationalYear:string;
  isBlackListed:string;
  linkedInProfileURL:string;
  relocateWithFamily:string;
  id:string;
  willingToRelocate:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider,
    public util: UtilsProvider,
    public loadingCtrl:LoadingController,
    public viewCtrl : ViewController) {
    this.selecteddetails = navParams.get('selecteddetails');
    this.candidateId = this.selecteddetails[0].candidateId;
    this.emailId = this.selecteddetails[0].emailId;
    this.recScheduledDate = this.selecteddetails[0].recScheduledDate;
    this.recScheduledTime = this.selecteddetails[0].recScheduledTime;
    this.chancesOfExtension =this.selecteddetails[0].chancesOfExtension;
    this.educationalYear =this.selecteddetails[0].educationalYear;
    this.isBlackListed =this.selecteddetails[0].isBlackListed;
    this.linkedInProfileURL =this.selecteddetails[0].linkedInProfileURL;
    this.relocateWithFamily =this.selecteddetails[0].relocateWithFamily;
    this.willingToRelocate =this.selecteddetails[0].willingToRelocate;
    
   // this.interviewType = navParams.get('interviewType');
    this.reqId = navParams.get('reqId');
    this.loginUser = this.util.getSessionUser();

   console.log("selecteddetails",this.selecteddetails);
   console.log("candidateId",this.candidateId);
    this.token = this.util.getToken();
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCandidateDbModalPage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  cancelData(){
    this.viewCtrl.dismiss();

  }
 
 // onSelectChange(details) {
    // console.log("adi",details.submissionType);
    // if(details.submissionType == 'Zoom' || details.submissionType == 'Skype' || details.submissionType == 'Two way'){
    //   this.restProvider.getRequirementUserStatics(this.token,this.reqId)
    //   .then((res:any)=>{
    //     this.scrData = res;
    //    console.log('scrData',this.scrData) 
    //   },errrr=>{
    //   });
    // }
    // console.log(" selectedType",this.selectedType)
  
 // }
  onSelectChange(selectedValue) {
    console.log('Selected', selectedValue);
    this.submissionType = selectedValue;
    console.log("adyasa",this.submissionType); 
    if(this.submissionType == 'Zoom' || this.submissionType == 'Skype'){
      this.restProvider.getRequirementUserStatics(this.token,this.reqId)
      .then((data:any)=>{
        this.scrData = data
        console.log("rizwan",this.submissionType); 
      },errrr=>{
      });
   this.selectedScr = selectedValue;
     
      console.log("ssssssssssss",this.selectedScr); 

    }
    
  }

  submitCandidate(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();
   
    let jsonData={
      candidatesBean:{
        'candidateId': this.candidateId,
        'chancesOfExtension': this.chancesOfExtension,
        'educationalYear': this.educationalYear,
        'emailId': this.emailId,
        'internalSubEmailTemp': "",
        'isAlreadyAdded': false,
        'isBlackListed': this.isBlackListed,
        'linkedInProfileURL':this.linkedInProfileURL,
        'note': null,
        'recScheduledDate': this.recScheduledDate,
        'recScheduledTime': this.recScheduledTime,
        'relocateWithFamily': this.relocateWithFamily,
        'requirementId': this.reqId,
        'screenByUser': this.selectedScr,
        'screenByUserEmail': this.emailId,
        'screenByUserId': this.id,
        'subVendorId': null,
        'submissionType':this.submissionType,
        'willingToRelocate': this.willingToRelocate
      },
      user:this.loginUser
    }
    this.restProvider.addcandidates(this.token,jsonData)
    .then((data:any) => {
       
    },error => {
        this.util.showToast("Something went wrong.","ERROR");
        loading.dismiss();
       // console.log(error);
    });
    this.restProvider.candidates(this.token,this.reqId,this.loginUser)
    .then((data:any) => {
  
    },error => {
        this.util.showToast("Something went wrong.","ERROR");
        loading.dismiss();
       // console.log(error);
    });
    let jsonData2={
      candidatesBean:{
        body:"<!DOCTYPE html><body><p>Welcome to HOT</p></body></html>",
        candidatesId:[this.candidateId],
        isAlreadyAdded:false,
        requirementId:this.reqId,
        subject:"Candidate Added for the Requirement"
      },
      user:this.loginUser
    }
    this.restProvider.fromFrontend(this.token,jsonData2)
    .then((data:any) => {
      let jsonData3={
        candidatesBean:{
          candidateEmail:"<!DOCTYPE html><body><p>Welcome to HOT</p></body></html>",
          candidateId:this.candidateId,
          date:""
         
        },
        jwtDetails:{
          emailId:this.loginUser.emailId,
          firstName:this.loginUser.firstName,
          id:this.loginUser.id,
          lastName:this.loginUser.lastName,
          role:this.loginUser.role,
          userName:this.loginUser.userName
        },
        loginEmaild: this.loginUser.emailId,
        requirementId: this.reqId,
        screenByUser: this.selectedScr,
        screenByUserEmail: this.emailId,
        screenByUserId: this.id,
        submissionType: this.submissionType,
        time:""
      }
       if(this.submissionType == 'Zoom'){
        this.restProvider.zoomApi(this.token,jsonData3)
        .then((data:any) => {
         
        },error => {
            this.util.showToast("Something went wrong.","ERROR");
            loading.dismiss();
           // console.log(error);
        });
       }
     
       if(this.submissionType == 'Skype'){
        this.restProvider.skypeApi(this.token,jsonData3)
        .then((data:any) => {
         
        },error => {
            this.util.showToast("Something went wrong.","ERROR");
            loading.dismiss();
           // console.log(error);
        });
       }
    },error => {
        this.util.showToast("Something went wrong.","ERROR");
        loading.dismiss();
       // console.log(error);
    });
   
    
    
    
  }
}
