import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreenStatusModalPage } from './screen-status-modal';

@NgModule({
  declarations: [
    ScreenStatusModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreenStatusModalPage),
  ],
})
export class ScreenStatusModalPageModule {}
