import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService:ApiService) { }

  AddUser(User):any{
    return this.apiService.post(`User/Post`, JSON.stringify(User))
  }

  uploadImage(files):any{
    return this.apiService.upload("File/Upload",files);
   }

   GetProfile():any{
  
    return this.apiService.get(`UserProfile/GetProfile`);
    }

  Update(User): any{
    return  this.apiService.post("UserProfile/UpdateProfile", JSON.stringify(User));
  }
  upload(files):any{
    return this.apiService.upload("File/Upload",files);
   }

   GetEditProfile():any{
    return this.apiService.get(`UserProfile/GetEditProfile`);
    }

}
