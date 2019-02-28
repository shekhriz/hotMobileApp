import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillManagementPage } from './skill-management';

@NgModule({
  declarations: [
    SkillManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillManagementPage),
  ],
})
export class SkillManagementPageModule {}
