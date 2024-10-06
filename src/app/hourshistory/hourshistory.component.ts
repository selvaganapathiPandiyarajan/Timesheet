import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hourshistory',
  templateUrl: './hourshistory.component.html',
  styleUrls: ['./hourshistory.component.css']
})
export class HourshistoryComponent implements OnInit{
  public userDetails:any;
  public userDetailsvalue:any;
  public Hoursdata:any=[];
  search: string ="";

  constructor(private api:ApiService)
  {

  }
  ngOnInit(): void {
    this.userDetails = localStorage.getItem('Employeepage');
    this.userDetailsvalue = JSON.parse(this.userDetails);
    this.getAllhoursDetails();
  }
  getAllhoursDetails()
    {
      this.api.getAllhours(this.userDetailsvalue.firstname).subscribe((res:any)=>
        {
          this.Hoursdata=res;
     
        })
      }
      calculateTotal(leavehours:any,totalhour:any)
      {
       const leaveHours=leavehours;
       const totalHour=totalhour;
       const total=parseInt(leaveHours)+parseInt(totalHour);
       return total
      }
}
