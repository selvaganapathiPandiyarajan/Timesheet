import { Component, OnInit, Type } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leavemanagement',
  templateUrl: './leavemanagement.component.html',
  styleUrls: ['./leavemanagement.component.css']
})
export class LeavemanagementComponent implements OnInit {
  public userDetails:any;
  public userDetailsvalue:any;
  public totaldayofHoliday:Number=0;
  public Hoursdata:any=[];
  public LeaveArray:any=[];
  search: string ="";
  public sickArr:any=[];
  public CLArr:any=[];
  public PRArr:any=[];
public optionArr:any=[];

  constructor(private api:ApiService)
  {

  }
  ngOnInit(): void {
    this.userDetails = localStorage.getItem('Employeepage');
    this.userDetailsvalue = JSON.parse(this.userDetails);
    this.totalHoliday();
    this.getAllhoursDetails();
  }
totalHoliday()
{
  this.totaldayofHoliday=(parseInt(this.userDetailsvalue.CL)+parseInt(this.userDetailsvalue.Sick)+parseInt(this.userDetailsvalue.PR));
}
getAllhoursDetails()
{
  this.api.getAllhours(this.userDetailsvalue.firstname).subscribe((res:any)=>
    {
      this.Hoursdata=res;
      this.Hoursdata.map((e:any)=>
        {
          if(e.Leave === 'Sick Leave')
          {
            this.sickArr=this.Hoursdata;
            console.log(this.sickArr,"sickArr");
          }
          if(e.Leave === 'Sick Leave')
            {
              this.sickArr=this.Hoursdata;
              console.log(this.sickArr,"sickArr");
            }
          if(e.Leave === 'Causal Leave')
          {
            this.CLArr=this.Hoursdata;
          }
          if(e.Leave === 'Privillage Leave')
          {
            this.PRArr=this.Hoursdata;
          }
          if(e.Leave === 'option Leave')
          {
            this.optionArr=this.Hoursdata;
          }
        })
    })

   
  }


}
