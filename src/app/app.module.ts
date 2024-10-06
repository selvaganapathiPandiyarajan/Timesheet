import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { LeavemanagementComponent } from './leavemanagement/leavemanagement.component';
import { EmployeereferComponent } from './employeerefer/employeerefer.component';
import { TimesheetapplyComponent } from './timesheetapply/timesheetapply.component';
import { HourshistoryComponent } from './hourshistory/hourshistory.component';
import { FilterPipe } from './filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ForgetpageComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    TimesheetComponent,
    HolidaylistComponent,
    LeavemanagementComponent,
    EmployeereferComponent,
    TimesheetapplyComponent,
    HourshistoryComponent,
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule, 
    FullCalendarModule ,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
