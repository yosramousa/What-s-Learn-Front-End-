import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  [x: string]: any;
  readonly URL = "http://localhost:3000/";
  constructor(private myHttp :HttpClient) { }
  
  GetAdminDetails(){
    return this.myHttp.get(`${this.URL}admins`)
  }
  GetAdminByID(id){
    return this.myHttp.get(`${this.URL}admins/${id}`)
  }
 
  addAdmin(admin){
   return this.myHttp.post(`${this.URL}admins`,admin)
 }
 //  GetAdmineDetails(username,password){
 // return this.Http.post(' http://localhost:3000/admins',{username,password});

 //  }
  GetAllAdmin(){
   return this.myHttp.get('http://localhost:3000/admins');
  }

  //https://localhost:44319/ManageUsers/GetList
    
 
  AdminLogin(){}
}
