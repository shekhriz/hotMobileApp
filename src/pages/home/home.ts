import { Component } from '@angular/core';
import { NavController,MenuController,LoadingController ,ModalController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
import { HomemodalPage }  from '../../pages/homemodal/homemodal';
import { UsersPage } from '../../pages/users/users';
import { ClientsPage }  from '../../pages/clients/clients';
import { RequirementsPage } from '../../pages/requirements/requirements';
import { CandidateSidePage }  from '../../pages/candidate-side/candidate-side';
import { ViewAllRecruiterPage }  from '../../pages/view-all-recruiter/view-all-recruiter';
import { ViewAllScreenerPage }  from '../../pages/view-all-screener/view-all-screener';
import { ViewAllRequirementsPage }  from '../../pages/view-all-requirements/view-all-requirements';
import { EditUserPage }  from '../../pages/edit-user/edit-user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  requirementStatics:any;  
  trackRecr:any;
  trackTSc:any;
  newtrackRecr:any[] = [];
  newtrackTSc:any[] = [];
  hideMe:boolean;
  hiderec:boolean;
  hidets :boolean;
  totalUsers:number=0;
  approvedCandidates:number=0;
  closeRequirements:number=0;
  openRequirements:number=0;
  screenedCandidates:number=0;
  totalCandidates:number=0;
  totalClients:number=0;
  totalRequirements:number=0;
  unScreenedCandidates: number=0;


  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public util: UtilsProvider,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider,
              public modalCtrl: ModalController) {
                    this.menuCtrl.enable(true);
                    let token = this.util.getToken();
                    let user  = this.util.getSessionUser();
                    let jsonData = {
                      id:user.id,
                      role:user.role,
                      userName:user.userName
                    }

                    this.getDashBoardCounts(jsonData,token);
                    this.getRequirementStatics(jsonData,token);
                   
                    this.trackRec(token);
                    this.trackTS(token);
  }

  trackTS(token){
    this.restProvider.trackTS(token)
    .then(res => {
      this.trackTSc = res;
      this.newtrackTSc= this.trackTSc.tsTackingList;
     // console.log("this.trackTSc"+this.trackTSc);
    },error => {
    });
  }
  trackRec(token){
    this.restProvider.trackRec(token)
    .then( res=> {
      this.trackRecr = res;
      this.newtrackRecr = this.trackRecr.recTackingList;
      //console.log("this.trackRecr",this.newtrackRecr);
    },error => {
    });
  }
  getRequirementStatics(data,token){

    this.restProvider.getRequirementStatics(data,token)
    .then(res => {

      this.requirementStatics = res;
     // console.log("this.requirementStatics",this.requirementStatics);
    },error => {
      
    }); 
  }
  
  
  getDashBoardCounts(data,token){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.restProvider.getDashBoardCounts(data,token)
    .then((res:any) => {
      loading.dismiss();
      this.totalUsers=res.map.totalUsers;
      this.approvedCandidates=res.map.approvedCandidates;
      this.closeRequirements=res.map.closeRequirements;
      this.openRequirements=res.map.openRequirements;
      this.screenedCandidates=res.map.screenedCandidates;
      this.totalCandidates=res.map.totalCandidates;
      this.totalClients=res.map.totalClients;
      this.totalRequirements=res.map.totalRequirements;
      this.unScreenedCandidates= res.map.unScreenedCandidates;
    },error => {
      loading.dismiss();
    });  
  }
  
  gotoEditUser(id){
   
    this.navCtrl.push(EditUserPage,{userId:id});
console.log("id",id)
  }
  
  hide() {
    this.hideMe = !this.hideMe;
  }
  hideRec() {  
    this.hiderec = !this.hiderec;
  }
  hideTs(){
    this.hidets = !this.hidets;
  }

  gotoUsers(){
    this.navCtrl.push(UsersPage);
  }

  gotoRequirements(){
    this.navCtrl.push(RequirementsPage);

  }
  gotoClients(){
    this.navCtrl.push(ClientsPage);
  }
  gotoCandidates(){
    this.navCtrl.push(CandidateSidePage);

  }
  viewAllRequirements(){
    this.navCtrl.push(ViewAllRequirementsPage);
  }
  viewAllRecruiters(){
  this.navCtrl.push(ViewAllRecruiterPage);

  }
  viewAllScreener(){
  this.navCtrl.push(ViewAllScreenerPage);
    
  }
  openModal(reruirements){
    let chooseModal = this.modalCtrl.create(HomemodalPage,{reruirements:reruirements});
    console.log('lastMileStone',reruirements);
    chooseModal.present(); 
  }

}
