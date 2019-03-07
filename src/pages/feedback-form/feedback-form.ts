import { Component } from '@angular/core';
import { App,IonicPage,NavController, NavParams,LoadingController,PopoverController,ModalController,ViewController,AlertController} from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the FeedbackFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback-form',
  templateUrl: 'feedback-form.html',
})
export class FeedbackFormPage {
  token:string;
  cId:string;
  reqId:string;
  candidateLink:string;
  submissionType:string;
  loginUser:any;
  result:any;
  result2:any;
  ZoomResponse:any;
  value:any;
  topic:string;
  start_time:string;
  start_url:string;
  candidateObject:any={};
  skills:string;
  skillType:string;
  candidateSkillsSet:any=[];
  subArray:Array<Object> = [];
  firstName:string;
  lastName:string;
  emailId:string;
  cellPhoneNumber:string;
  currentLocation:string;
  score:string='';
  comment:string;
  finalVerdictChange:string;
  details:any;
  secondarySkill:string;
  primarySkill:string;
  workflowId:string;
  
  constructor(public navCtrl: NavController,
    public util: UtilsProvider,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public navParams: NavParams) {
    this.token = this.util.getToken();
    this.cId =navParams.get('cId');
    this.reqId =navParams.get('reqId');
    
    this.loginUser = this.util.getSessionUser(); 
    this.submissionType =navParams.get('submissionType');
    this.candidateLink =navParams.get('candidateLink').replace('https://interviews.skype.com/interviews?code=',"");
    console.log('start_url',this.candidateLink);
    
      this.getFeedbackForms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackFormPage');
  }

  getFeedbackForms(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    
    loading.present();
    this.restProvider.editRequirements(this.reqId,this.token)
    .then((res:any) => {
      this.details= res;
      this.workflowId = this.details.workflowId;
      this.primarySkill =this.details.primarySkill;
      this.secondarySkill =this.details.secondarySkill;


      let primaryskillname ;
      let secondaryskillname;
      primaryskillname = (this.primarySkill.split(','));
      secondaryskillname = this.secondarySkill.split(",");

      Object.keys(primaryskillname).forEach(key=> {
        if(primaryskillname[key] != ""){
          this.subArray.push({
                'skill':primaryskillname[key],
                'score':0,
                'candidateId': this.cId,
                'positionId':this.reqId
          });
        }
     
      });

      Object.keys(secondaryskillname).forEach(key=> {
        if(secondaryskillname[key] != ""){
          this.subArray.push({
                'skill':secondaryskillname[key],
                'score':0,
                'candidateId': this.cId,
                'positionId':this.reqId
          });
        }
       
       
      });
      console.log('rizwan',this.subArray);

     this.subArray = this.subArray;
      
    },error => {
      loading.dismiss();
    });
    this.restProvider.responseBycandidateId(this.token,this.cId)
    .then((res:any) => {
      this.result = res['Candidate Details'];
      this.firstName = this.result.firstName;
      this.lastName = this.result.lastName;
      this.emailId = this.result.emailId;
      this.cellPhoneNumber = this.result.cellPhoneNumber;
      this.currentLocation = this.result.currentLocation;
      this.candidateSkillsSet = this.result.candidateSkillsSet[0];
      this.skillType = this.result.candidateSkillsSet.skillType;
      this.skills =  this.result.candidateSkillsSet.skills;
     

      loading.dismiss();
    },error => {
      loading.dismiss();
    });
    if(this.submissionType == 'Zoom'){
      this.restProvider.interviewResponse(this.token,this.candidateLink,this.reqId,this.cId)
      .then((res:any) => {
        this.result2 = res;
        this.ZoomResponse =this.result2.ZoomResponse
        this.value =JSON.parse(this.ZoomResponse);
        this.topic = this.value.topic;
        this.start_time = this.value.start_time;
        this.start_url = (this.value.start_url).substring(0,27);
        this.candidateObject = this.result2.candidateObject;
        this.candidateSkillsSet = this.result2.candidateObject.candidateSkillsSet[0];
        this.skills =  this.candidateSkillsSet.skills;
        this.skillType =  this.candidateSkillsSet.skillType;
        console.log(" this.primarySkill", this.skills);
        console.log(" this.secondarySkill", this.skillType);
        console.log(" this.candidateSkillsSet", this.candidateSkillsSet);
  
        let skillname ;
       skillname = (this.skillType);
       
        Object.keys(skillname).forEach(key=> {
          if(skillname[key] == 'PrimarySkill'){
            this.skills;
            alert("hhh")
          }else{
            this.skills;
            alert("......")
          }
         
        });
  
       
        console.log('this.value',this.value);
        loading.dismiss();
        
      },error => {
        loading.dismiss();
      });  
    }
   
  }

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if(this.comment == undefined || this.comment == ""){
      this.util.showToast("Please enter comment.","ERROR");
      return;
    }
  
    if(this.finalVerdictChange == undefined || this.finalVerdictChange == "" ){
      this.util.showToast("Please select Feedback.","ERROR");
      return;
      
    }
 
      let jsonData = {
          "cId": this.cId,
          candidateSelfRatingResponseList:this.subArray,
          "feedBack": this.comment,
          "notes":"",
          "other":"",
          "reqId":this.reqId,
          "score":this.score,
          "screenerId":this.loginUser.id,
          "status":this.finalVerdictChange,
          "userName":this.loginUser.userName

        }
 
        console.log("json",jsonData);
        loading.present();   
          this.restProvider.screenerFeedBack(this.token,jsonData)
            .then(data => {
      
              loading.dismiss();
              this.util.showToast("Successfully Submitted.","SUCCESS");
              // console.log("data",data); 
               //this.viewCtrl.dismiss('SUCCESS');
            },error => {
                loading.dismiss();
                this.util.showToast("Something went wrong.","ERROR");
                console.log(error);
            });
          
         
  }
  goBack(){
    this.navCtrl.pop();
  }
 
}
