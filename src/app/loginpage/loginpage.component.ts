import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
   public loginForm !:FormGroup;
   public storedPassword:any;
   public typedofPassword:any;
  constructor(private http:HttpClient,private form :FormBuilder,private api:ApiService,private router:Router) {
   this.loginForm=this.form.group({
    'email':['',Validators.compose([Validators.required])],
   })
   }
   
  ngOnInit(): void {
  }
  getPasswordValue()
  {
    const typedEmailValue=this.loginForm.value.email;
   const getLocalValue:any=localStorage.getItem('storedPassword')
    const passwordDetailsvalue = JSON.parse(getLocalValue);
    if(passwordDetailsvalue.email==typedEmailValue)
    {
     this.typedofPassword=passwordDetailsvalue.password;   
    }
    else
    {
      this.typedofPassword="";
    }
  
  }
  login()
  {
    if(this.loginForm.invalid)
    {
      alert("Please enter the value")
    }
    const myPassword=(<HTMLInputElement>document.getElementById("password")).value;
  this.api.CheckLogin(this.loginForm.value.email,myPassword).subscribe((res:any)=>
    {
     const employeedata:any=res;
     console.log(employeedata,"employeedata");
     if(employeedata)
     {
      localStorage.setItem('Employeepage',JSON.stringify(employeedata));
    this.loginForm.reset();
    this.router.navigate(['/Timesheet']);
  }
     else
     {
      alert("Invalid Email and Password");
     }
    
    })
    }
    rememberMe()
    {
      const storedValue:any={
        'email':this.loginForm.value.email,
        'password':this.loginForm.value.password
      };
      console.log(storedValue,"storedValue");
       this.storedPassword=localStorage.setItem('storedPassword',JSON.stringify(storedValue));
     
    }

  }