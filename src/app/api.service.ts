import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  CheckLogin(email:any,pass:any)
{
  const loginapiUrl='http://localhost:3000/employee'
  const Email=email;
  const Pass=pass;
  return this.http.get(`${loginapiUrl}/${Email}/${Pass}`);

}
getAllevent()
{
  const eventapiUrl='http://localhost:3000/getAllevent'
  return this.http.get(`${eventapiUrl}`);
}
getAllholiday()
{
  const hourapiUrl='http://localhost:3000/getAllholiday'
  return this.http.get(`${hourapiUrl}`);
}
createreferData(data:any)
{
  return this.http.post<any>("http://localhost:3000/refer/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
  
}
applyHoursDetails(data : any){
  return this.http.post<any>("http://localhost:3000/hoursHistory/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
getAllRefer(name:any)
{
  const referapiUrl='http://localhost:3000/getrefer';
  const firstName=name;
  return this.http.get(`${referapiUrl}/${firstName}`);
}
getAllhours(name:any)
{
  const hoursapiUrl='http://localhost:3000/getALLHours';
  const firstName=name;
  console.log(name,"name");
  return this.http.get(`${hoursapiUrl}/${firstName}`);
}
}

