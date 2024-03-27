import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangepassordComponent } from './changepassord/changepassord.component';
import { ResetpassordComponent } from './resetpassord/resetpassord.component';


@NgModule({
  declarations: [
    ChangepassordComponent,
    ResetpassordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
