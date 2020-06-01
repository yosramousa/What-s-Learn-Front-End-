import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { HttpClient} from '@angular/common/http';
=======
import { ApiService } from './api.service';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
<<<<<<< HEAD
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
=======
  
  constructor(private apiService:ApiService) { }


  ChangeStatus(id){

    return this.apiService.get(`Inbox/ChangeStatus?id=${id}`);
   }

   GetMessages(pageIndex,pageSize) :any{
    console.log("OnGetMessages")

     this.apiService.get(`Inbox/GetAll?pageIndex=${pageIndex}&pageSize${pageSize}`)
   }
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
}
