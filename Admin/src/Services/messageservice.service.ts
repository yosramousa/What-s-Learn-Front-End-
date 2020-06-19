import { ApiService } from 'Services/api.service';
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  [x: string]: any;
  constructor(private apiService :ApiService) { }
  
//   GetAdminDetails(){
//     return this.apiService.get(`${this.URL}admins`)
//   }
//   GetAdminByID(id){
//     return this.apiService.get(`${this.URL}admins/${id}`)
//   }
 
//   addAdmin(admin){
//    return this.apiService.post(`${this.URL}admins`,admin)
//  }
 //  GetAdmineDetails(username,password){
 // return this.Http.post(' http://localhost:3000/admins',{username,password});

 //  }
  GetAllAdmin(){
   return this.apiService.get('http://localhost:3000/admins');
  }
  AdminLogin(){}

  Seen(id)
  {
    return this.myHttp.get('http://localhost:3000/admins');

  }
}
