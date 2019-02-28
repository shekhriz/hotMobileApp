import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { LoginPage } from '../../pages/login/login';
import { SettingsPage } from '../../pages/settings/settings';
import {App} from 'ionic-angular';
import { ProfilePage }  from '../../pages/profile/profile';
import { SkillManagementPage }  from '../../pages/skill-management/skill-management';
import { ChangePasswordPage }  from '../../pages/change-password/change-password';
import { VideoPage }  from '../../pages/video/video';


/**
 * Generated class for the PopoverComponent component.
 * Auther: Shekh Rizwan
 * Team: HOT Team
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  text: string;
  constructor(public viewCtrl: ViewController,
              public util: UtilsProvider,public app: App) {
  }

  // This mathod is use to navigate the page from popover menu
  gotoPage(pageName) {
    this.viewCtrl.dismiss();
    if(pageName === "SETTINGS"){
      this.app.getActiveNav().setRoot(SettingsPage);

    }else if(pageName === "PROFILE"){
      this.app.getActiveNav().setRoot(ProfilePage);

    }else if(pageName === "SKILLS"){
      this.app.getActiveNav().setRoot(SkillManagementPage);     

    }else if(pageName === "VIDEOS"){
      this.app.getActiveNav().setRoot(VideoPage);     
      
    }else if(pageName === "CHANGE PASSWORD"){
      this.app.getActiveNav().setRoot(ChangePasswordPage);     
      
    }
  }

  logout(){
      this.viewCtrl.dismiss();
      this.util.removeAllLocalStorage();
      this.app.getActiveNav().setRoot(LoginPage);
  }


}
