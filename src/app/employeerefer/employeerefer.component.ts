import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Refer } from './refer.model';
@Component({
  selector: 'app-employeerefer',
  templateUrl: './employeerefer.component.html',
  styleUrls: ['./employeerefer.component.css']
})
export class EmployeereferComponent implements OnInit {
  public referalForm !: FormGroup;
  DataAdd :Refer  = new Refer();
public userDetails:any=[];
public userDetailsvalue:any=[];
public referData:any=[];
  constructor(private form: FormBuilder,private http: HttpClient,private api :ApiService,private router:Router)
  {
    this.referalForm = this.form.group({
      'firstname': ['',Validators.compose([Validators.required])],
      'middlename': ['',Validators.compose([Validators.required])],
      'lastname': ['',Validators.compose([Validators.required])],
      'email': ['',Validators.compose([Validators.required])],
      'contact':['',Validators.compose([Validators.required])],
      'phone': ['',Validators.compose([Validators.required])],
      'experience': ['',Validators.compose([Validators.required])],
      'skill': ['',Validators.compose([Validators.required])],
      'resume': ['',Validators.compose([Validators.required])],

      
    })
  }
  ngOnInit(): void {
    this.userDetails = localStorage.getItem('Employeepage');
    this.userDetailsvalue = JSON.parse(this.userDetails);
    this.getreferDetails();
  }
  register(){
    this.DataAdd.firstname = this.referalForm.value.firstname;
            this.DataAdd.middlename = this.referalForm.value.middlename;
            this.DataAdd.lastname = this.referalForm.value.lastname;
            this.DataAdd.email = this.referalForm.value.email;
             this.DataAdd.contact=this.referalForm.value.contact;
              this.DataAdd.phone=this.referalForm.value.phone;
            this.DataAdd.phone = this.referalForm.value.phone;
            this.DataAdd.experience=this.referalForm.value.experience;
            this.DataAdd.skill=this.referalForm.value.skill;
            this.DataAdd.resume=this.referalForm.value.resume;
            this.DataAdd.referedBy=this.userDetailsvalue.firstname;
            this.DataAdd.referedbyempId=this.userDetailsvalue.empid;
            console.log(this.DataAdd);
            this.api.createreferData(this.DataAdd)
            .subscribe((res:any)=>{
              alert("Register Sucessfully")
    
              let ref = document.getElementById('cancel')
              ref?.click();
              this.referalForm.reset();
    
    
            },
            )} 
            getreferDetails()
            {
              this.api.getAllRefer(this.userDetailsvalue.firstname).subscribe((res:any)=>
                {
                  this.referData=res;
             
                })
              }
          

}
