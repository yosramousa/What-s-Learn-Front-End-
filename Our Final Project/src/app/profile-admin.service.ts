import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdminService {
  constructor(private apiService:ApiService) { }



  GetAdminProfile() :any{
    return this.apiService.get(`AdminProfile/GetProfile`);
  }

  Update(Admin): any{
    return  this.apiService.post("AdminProfile/Update", JSON.stringify(Admin));
  }
}
