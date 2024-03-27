import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepassordComponent } from './changepassord/changepassord.component';
import { ResetpassordComponent } from './resetpassord/resetpassord.component';

const routes: Routes = [
  {path:'',redirectTo:'change',pathMatch:'full'},

  {path:'change',component:ChangepassordComponent},
  {path:'reset',component:ResetpassordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
