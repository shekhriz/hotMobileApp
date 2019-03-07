import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the HomemodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homemodal',
  templateUrl: 'homemodal.html',
})
export class HomemodalPage {
  reruirements:any;
  lastMileStone:string;
  addNoMoreCandidateDate:string;
  CREATED_DATE:any;
  screenerAddedDate:string;
  addCandidateDate:string;
  questionApprovedDate:string;
  questionSubmittedDate:string;
  questionsAddedDate:string;
  jobTitle:string;
  items:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl : ViewController) {
      this.reruirements = navParams.get('reruirements');
      this.jobTitle =  this.reruirements.jobTitle;
      this.lastMileStone = this.reruirements.lastMileStone;
      this.addNoMoreCandidateDate = this.reruirements.addNoMoreCandidateDate;
      this.CREATED_DATE = (this.reruirements.CREATED_DATE);
      this.screenerAddedDate =this.reruirements.screenerAddedDate;
      this.addCandidateDate = this.reruirements.addCandidateDate;
      this.questionApprovedDate =this.reruirements.questionApprovedDate;
      this.questionSubmittedDate = this.reruirements.questionSubmittedDate;
      this.questionsAddedDate =  this.reruirements.questionsAddedDate;
    console.log('CREATED_DATE',this.CREATED_DATE)

  
  
 

  if(this.lastMileStone == 'CandidateAdded'){
    if(this.addNoMoreCandidateDate == '0'){
      this.items = [
     
        {
          title: 'Create Requirement',
          content:this.CREATED_DATE,  
          icon: 'checkmark',
        //  time: {title: new Date(this.CREATED_DATE)}
        },
        {
          title: 'Add Screener ',
          content: this.screenerAddedDate,  
          icon: 'checkmark',
        },
        {
          title: 'Add Questions',
          content: this.questionsAddedDate,  
          icon: 'checkmark',
        }, {
          title: 'Submit Questions',
          content: this.questionSubmittedDate,  
          icon: 'checkmark',
        }, {
          title: 'Approve Questions',
          content: this.questionApprovedDate,  
          icon: 'checkmark',
        }, {
          title: 'Add Candidates',
          content:this.addCandidateDate,  
          icon: 'checkmark',
        }, {
            title: 'Add No more Candidates',
          //  content: this.CREATED_DATE,  
             icon2: 'radio-button-off',
        }, {
          title: 'Close Requirements',
        //  content: this.CREATED_DATE,  
          icon2: 'lock',
        }
      ]
    }else{
      this.items = [
     
        {
          title: 'Create Requirement',
          content:  this.CREATED_DATE,  
          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
          content:this.screenerAddedDate,  
          icon: 'checkmark',
        },
        {
          title: 'Add Questions',
          content: this.questionApprovedDate,  
          icon: 'checkmark',
        }, {
          title: 'Submit Questions',
          content: this.questionSubmittedDate,  
          icon: 'checkmark',
        }, {
          title: 'Approve Questions',
          content: this.questionApprovedDate,  
          icon: 'checkmark',
        }, {
          title: 'Add Candidates',
          content: this.addCandidateDate,  
          icon: 'checkmark',
        }, {
            title: 'Add No more Candidates',
           // content: 'Parsley ',  
             icon3: 'radio-button-on',
        }, {
          title: 'Close Requirements',
          //content: 'Parsley ',  
          icon2: 'lock',
        }
      ]
    }
   
  }
  if(this.lastMileStone == 'TechQuestionsApproved'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        content: this.questionsAddedDate,  

        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        content: this.questionSubmittedDate,  

        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        content: this.questionApprovedDate,  

        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
     //   content: this.addCandidateDate,  

        icon2: 'lock',
      }, {
        title: 'Add No more Candidates',
        icon2: 'lock',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'TechScreenerToBeAdded'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon3: 'radio-button-on',
      },
      {
        title: 'Add Questions',
        content: this.questionsAddedDate,  

        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        content: this.questionSubmittedDate,  

        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        content: this.questionApprovedDate,  
        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
        content: this.addCandidateDate,  

        icon: 'checkmark',
      }, {
        title: 'Add No more Candidates',
        icon2: 'radio-button-off',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'TechQuestionsRejected'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        content: this.questionsAddedDate,  

        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        content: this.questionSubmittedDate,  

        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
      //  content: this.questionApprovedDate,  

        icon2: 'radio-button-off',
      }, {
        title: 'Add Candidates',
       // content: this.addCandidateDate,  

        icon2: 'lock',
      }, {
        title: 'Add No more Candidates',
        icon2: 'lock',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'TechnicalScreenerRemoved'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
      //  content: this.screenerAddedDate,  

        icon3: 'radio-button-on',
      },
      {
        title: 'Add Questions',
     //   content: this.questionsAddedDate,  

        icon2: 'radio-button-off',
      }, {
        title: 'Submit Questions',
      //  content: this.questionSubmittedDate,  

        icon2: 'lock',
      }, {
        title: 'Approve Questions',
       // content: this.questionApprovedDate,  

        icon2: 'lock',
      }, {
        title: 'Add Candidates',
        //content: this.addCandidateDate,  

        icon2: 'lock',
      }, {
        title: 'Add No more Candidates',
        icon2: 'lock',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'TechQuestionsApproved'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        content: this.questionsAddedDate,  

        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        content: this.questionSubmittedDate,  

        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        content: this.questionApprovedDate,  

        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
      //  content: this.addCandidateDate,  

        icon2: 'lock',
      }, {
        title: 'Add No more Candidates',
        icon2: 'lock',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'TechScreenerAdded'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        //content: this.questionsAddedDate,  

        icon2: 'radio-button-off',
      }, {
        title: 'Submit Questions',
        //content: this.questionSubmittedDate,  

        icon2: 'lock',
      }, {
        title: 'Approve Questions',
       // content: this.questionApprovedDate,  

        icon2: 'lock',
      }, {
        title: 'Add Candidates',
        //content: this.addCandidateDate,  

        icon2: 'lock',
      }, {
        title: 'Add No more Candidates',
        icon2: 'lock',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }
  if(this.lastMileStone == 'RequirementCreated'){
    if(this.addNoMoreCandidateDate == '0'){
      this.items = [
     
        {
          title: 'Create Requirement',
          content:this.CREATED_DATE,  

          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
        //  content: this.screenerAddedDate,  

          icon2: 'lock',
        },
        {
          title: 'Add Questions',
          //content: this.questionsAddedDate,  

          icon2: 'lock',
        }, {
          title: 'Submit Questions',
         // content: this.questionSubmittedDate,  

          icon2: 'lock',
        }, {
          title: 'Approve Questions',
        //content: this.questionApprovedDate,  

          icon2: 'lock',
        }, {
          title: 'Add Candidates',
        //  content: this.addCandidateDate,  

          icon2: 'lock',
        }, {
          title: 'Add No more Candidates',
          icon2: 'lock',
        }, {
          title: 'Close Requirements',
          icon2: 'lock',
        }
      ]
    }else{
      this.items = [
     
        {
          title: 'Create Requirement',
          content:this.CREATED_DATE,  

          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
       //   content: this.screenerAddedDate,  

          icon2: 'lock',
        },
        {
          title: 'Add Questions',
        //  content: this.questionsAddedDate,  

          icon2: 'lock',
        }, {
          title: 'Submit Questions',
        //  content: this.questionSubmittedDate,  

          icon2: 'lock',
        }, {
          title: 'Approve Questions',
       // content: this.questionApprovedDate,  

          icon2: 'lock',
        }, {
          title: 'Add Candidates',
       //   content: this.addCandidateDate,  

          icon2: 'lock',
        }, {
            title: 'Add No more Candidates',
             icon: 'checkmark',
        }, {
          title: 'Close Requirements',
          icon2: 'lock',
        }
      ]
    }
   
  }
  if(this.lastMileStone == 'RequirementClosed'){
    this.items = [
     
      {
        title: 'Create Requirement',
        content:this.CREATED_DATE,  

        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        content: this.screenerAddedDate,  

        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        content: this.questionsAddedDate,  

        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        content: this.questionSubmittedDate,  

        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        content: this.questionApprovedDate,  

        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
        content: this.addCandidateDate,  

        icon: 'checkmark',
      }, {
        title: 'Add No more Candidates',
        icon: 'checkmark',
      }, {
        title: 'Close Requirements',
        icon2: 'lock',
      }
    ]
  }

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomemodalPage');
  }
  goBack(){
    this.viewCtrl.dismiss();
  }
}
