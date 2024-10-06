import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { HeaderComponent } from './header/header.component';
import {TimesheetapplyComponent} from './timesheetapply/timesheetapply.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {HourshistoryComponent} from './hourshistory/hourshistory.component';
import {LeavemanagementComponent} from './leavemanagement/leavemanagement.component';
import {EmployeereferComponent} from './employeerefer/employeerefer.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:"login",component:LoginpageComponent},
  {path:"forget",component:ForgetpageComponent},
  {path:'header',component:HeaderComponent},
  {path:'Timesheetapply',component:TimesheetapplyComponent},
  {path:'Timesheet',component:TimesheetComponent},
  {path:'Hourshistory',component:HourshistoryComponent},
  {path:'Leavelist',component:LeavemanagementComponent},
  {path:'Employeerefer',component:EmployeereferComponent},
  {path:'HolidayList',component:HolidaylistComponent},
  {path:'Home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
