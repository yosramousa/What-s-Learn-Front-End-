import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EditUserLinksService {

  constructor(private apiService : ApiService) { }

  
  GetUserSkill():any{
    return this.apiService.get(`UserSocialLink/GetList`)
  }

  UpdateUserSkill(links):any{
    return this.apiService.post(`UserSocialLink/Update`, JSON.stringify(links))
  }
}
