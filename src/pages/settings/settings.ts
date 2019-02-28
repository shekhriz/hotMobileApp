import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams,LoadingController,ViewController,ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { UtilsProvider } from '../../providers/utils/utils';
import { ApplicationSettingPage }  from '../../pages/application-setting/application-setting';
import { RecruiterScoringPage }  from '../../pages/recruiter-scoring/recruiter-scoring';
import { SubvendorScoringPage }  from '../../pages/subvendor-scoring/subvendor-scoring';
import { ScreenerScoringPage }  from '../../pages/screener-scoring/screener-scoring';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the SettingsPage page.
 * Auther: Shekh Rizwan
 * Team: HOT Team
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider,
    public viewCtrl : ViewController,
    public util: UtilsProvider,
    public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  appSetting(){
    this.navCtrl.push(ApplicationSettingPage);
  }

  RecruiterScoring(){
    this.navCtrl.push(RecruiterScoringPage);
  }
  SubvendorScoring(){
    this.navCtrl.push(SubvendorScoringPage);
  }
  ScreenerScoring(){
    this.navCtrl.push(ScreenerScoringPage);

  }
  goBack(){
    this.navCtrl.push(HomePage)
  }
}
