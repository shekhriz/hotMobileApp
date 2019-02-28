import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicationSettingPage } from './application-setting';

@NgModule({
  declarations: [
    ApplicationSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplicationSettingPage),
  ],
})
export class ApplicationSettingPageModule {}
