import { Component,OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheetapply',
  templateUrl: './timesheetapply.component.html',
  styleUrls: ['./timesheetapply.component.css']
})
export class TimesheetapplyComponent implements OnInit {
public hoursDetails:any;
public hoursDetailsValue:any
public totalHoursValue:any;
public userDetails:any;
public userDetailsvalue:any;
public LeaveDetails:any=[];
public LeaveDetailsValue:any;
public totalleaveHoursValue:any;
public totalMyHoursdetails:any;
public TotalHoursArr:any=[];
constructor(private api:ApiService,private router:Router)
{

}
  ngOnInit(): void {
    this.hoursDetails = sessionStorage.getItem('timesheet');
    this.hoursDetailsValue = JSON.parse(this.hoursDetails);
    console.log(this.hoursDetailsValue,"hoursDetailsValue");
    this.userDetails = localStorage.getItem('Employeepage');
    this.userDetailsvalue = JSON.parse(this.userDetails);
  }
  getHoursvalue()
  {
     const mondayvalue=parseInt((<HTMLInputElement>document.getElementById("monValue"))?.value || '0');
     const thusdayValue=parseInt((<HTMLInputElement>document.getElementById("tueValue")).value || '0' );
     const wednesdayValue=parseInt((<HTMLInputElement>document.getElementById("wedValue")).value || '0' );
     const thursdayValue=parseInt((<HTMLInputElement>document.getElementById("thursValue")).value || '0');
     const fridayValue=parseInt((<HTMLInputElement>document.getElementById("friValue")).value || '0' );
    this.totalHoursValue=mondayvalue+thusdayValue+wednesdayValue+thursdayValue+fridayValue;


  }
  getApplyHoursdetails()
  {
   const hoursDetailbytotal:any={
   'firstname':this.userDetailsvalue.firstname,
   'email':this.userDetailsvalue.email,
   'phone':this.userDetailsvalue.phone,
   'empid':this.userDetailsvalue.empid,
    'project':this.userDetailsvalue.TeamName,
    'Activty':'Grow and Run',
    'Day1':
    {
      'Hours':(<HTMLInputElement>document.getElementById("monValue"))?.value,
      'Date':this.hoursDetailsValue[1]
    },
    'Day2':
    {
      'Hours':(<HTMLInputElement>document.getElementById("tueValue"))?.value,
      'Date':this.hoursDetailsValue[2]
    },    'Day3':
    {
      'Hours':(<HTMLInputElement>document.getElementById("wedValue"))?.value,
      'Date':this.hoursDetailsValue[3]
    },    'Day4':
    {
      'Hours':(<HTMLInputElement>document.getElementById("thursValue"))?.value,
      'Date':this.hoursDetailsValue[4]
    },    'Day5':
    {
      'Hours':(<HTMLInputElement>document.getElementById("friValue"))?.value,
      'Date':this.hoursDetailsValue[5]
    },
    'Total':this.totalHoursValue,
    'Leave':this.LeaveDetails[0].TypeofLeave,
     'leavedate':this.LeaveDetails[0].Date,
     'reason':this.LeaveDetails[0].Reason,
     'status':'pending',
     'approver':this.userDetailsvalue.CM,
     'datefrom':this.hoursDetailsValue[0],
     'dateto':this.hoursDetailsValue[6],
     'leaveHour':this.LeaveDetails[0].Date ? 8 : 0
 }
   this.TotalHoursArr.push(hoursDetailbytotal);
   console.log(this.TotalHoursArr,"tottttttt");
   this.api.applyHoursDetails(hoursDetailbytotal).subscribe((res:any)=>
  {
    console.log("posted successfuly")
  })
  this.router.navigate(['/Timesheet']);

  }

   
applyLeave()
{
  const TempLeave:any={
   'Project':this.userDetailsvalue.TeamName,
   'TypeofLeave':(<HTMLInputElement>document.getElementById("leavetype")).value.split('-')[0].trim(),
   'Reason':(<HTMLInputElement>document.getElementById("reason")).value,
   'Date':(<HTMLInputElement>document.getElementById("dateofleave")).value,
  }
  this.LeaveDetails.push(TempLeave);
  const mondayvalue=parseInt((<HTMLInputElement>document.getElementById("monValueOne"))?.value ||'0');
  const thusdayValue=parseInt((<HTMLInputElement>document.getElementById("tueValueOne"))?.value || '0');
  const wednesdayValue=parseInt((<HTMLInputElement>document.getElementById("wedValueOne"))?.value || '0');
  const thursdayValue=parseInt((<HTMLInputElement>document.getElementById("thursValueOne"))?.value || '0');
  const fridayValue=parseInt((<HTMLInputElement>document.getElementById("friValueOne"))?.value || '0');
 this.totalleaveHoursValue=mondayvalue+thusdayValue+wednesdayValue+thursdayValue+fridayValue;
  this.totalMyHoursdetails=this.totalleaveHoursValue  +this.totalHoursValue || 0;
  

}

}
