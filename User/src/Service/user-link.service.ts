import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserLinkService {

  constructor(private apiService:ApiService) { }

  DeleteUserLinkl(id):any{
    return this.apiService.get(`UserSocialLink/Delete?id=${id}`)
  }
  
  PostUserLink(link) :any 
  {
    return this.apiService.post(`UserSocialLink/Post`,JSON.stringify(link))
  }

  UpdateUserLink(link):any{
    return this.apiService.post(`UserSocialLink/Update`, JSON.stringify(link))
  }

  GetByID(id):any{
    return this.apiService.get(`UserSocialLink/GetByID?id=${id}`)
  }
}
