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
  items:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl : ViewController) {
      this.reruirements = navParams.get('reruirements');
      this.lastMileStone = this.reruirements.lastMileStone
      this.addNoMoreCandidateDate = this.reruirements.addNoMoreCandidateDate
    console.log('reruirements',this.reruirements)

  
  // this.items = [
   
  //   {
  //     title: 'Create Requirement',
  //    // content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
    
  //     time: {subtitle: '4/16/2013', title: '21:30'}
  //   },
  //   {
  //     title: 'Add Screener ',
  //     //content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
     
  //     time: {subtitle: 'January', title: '29'}
  //   },
  //   {
  //     title: 'Add Questions',
  //    // content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
    
  //     time: {title: 'Short Text'}
  //   }, {
  //     title: 'Submit Questions',
  //    // content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
   
  //     time: {title: 'Short Text'}
  //   }, {
  //     title: 'Approve Questions',
  //    // content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
  //     time: {title: 'Short Text'}
  //   }, {
  //     title: 'Add Candidates',
  //   //  content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     icon2:'checkmark',
  //     time: {title: 'Short Text'}
  //   }, {
  //     title: 'Add No more Candidates',
  //    // content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //     //icon2:'checkmark',
  //     time: {title: 'Short Text'}
  //   }, {
  //     title: 'Close Requirements',
  //   //  content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
  //     icon: 'lock',
  //    // icon2:'checkmark',
  //     time: {title: 'Short Text'}
  //   }
  // ]


 

  if(this.lastMileStone == 'CandidateAdded'){
    if(this.addNoMoreCandidateDate == '0'){
      this.items = [
     
        {
          title: 'Create Requirement',
          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
          icon: 'checkmark',
        },
        {
          title: 'Add Questions',
          icon: 'checkmark',
        }, {
          title: 'Submit Questions',
          icon: 'checkmark',
        }, {
          title: 'Approve Questions',
          icon: 'checkmark',
        }, {
          title: 'Add Candidates',
          icon: 'checkmark',
        }, {
            title: 'Add No more Candidates',
             icon2: 'radio-button-off',
        }, {
          title: 'Close Requirements',
          icon2: 'lock',
        }
      ]
    }else{
      this.items = [
     
        {
          title: 'Create Requirement',
          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
          icon: 'checkmark',
        },
        {
          title: 'Add Questions',
          icon: 'checkmark',
        }, {
          title: 'Submit Questions',
          icon: 'checkmark',
        }, {
          title: 'Approve Questions',
          icon: 'checkmark',
        }, {
          title: 'Add Candidates',
          icon: 'checkmark',
        }, {
            title: 'Add No more Candidates',
             icon3: 'radio-button-on',
        }, {
          title: 'Close Requirements',
          icon2: 'lock',
        }
      ]
    }
   
  }
  if(this.lastMileStone == 'TechQuestionsApproved'){
    this.items = [
     
      {
        title: 'Create Requirement',
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon3: 'radio-button-on',
      },
      {
        title: 'Add Questions',
        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
        icon2: 'checkmark',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon2: 'radio-button-off',
      }, {
        title: 'Add Candidates',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon3: 'radio-button-on',
      },
      {
        title: 'Add Questions',
        icon2: 'radio-button-off',
      }, {
        title: 'Submit Questions',
        icon2: 'lock',
      }, {
        title: 'Approve Questions',
        icon2: 'lock',
      }, {
        title: 'Add Candidates',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        icon: 'checkmark',
      }, {
        title: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        icon2: 'radio-button-off',
      }, {
        title: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon2: 'radio-button-off',
      }, {
        title: 'Add Candidates',
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
          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
          icon2: 'lock',
        },
        {
          title: 'Add Questions',
          icon2: 'lock',
        }, {
          title2: 'Submit Questions',
          icon2: 'lock',
        }, {
          title: 'Approve Questions',
          icon2: 'lock',
        }, {
          title: 'Add Candidates',
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
          icon: 'checkmark',
        },
        {
          title: 'Add Screener ',
          icon2: 'lock',
        },
        {
          title: 'Add Questions',
          icon2: 'lock',
        }, {
          title: 'Submit Questions',
          icon2: 'lock',
        }, {
          title: 'Approve Questions',
          icon2: 'lock',
        }, {
          title: 'Add Candidates',
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
        icon: 'checkmark',
      },
      {
        title: 'Add Screener ',
        icon: 'checkmark',
      },
      {
        title: 'Add Questions',
        icon: 'checkmark',
      }, {
        title2: 'Submit Questions',
        icon: 'checkmark',
      }, {
        title: 'Approve Questions',
        icon: 'checkmark',
      }, {
        title: 'Add Candidates',
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
