import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserSkillService {

  constructor(private apiService:ApiService) { }

  DeleteUserSkill(id):any{
    return this.apiService.get(`UserSkill/Delete?id=${id}`)
  }
  
  PostUserSkill(skill) :any 
  {
    return this.apiService.post(`UserSkill/Post`,JSON.stringify(skill))
  }

  
  UpdateUserSkill(skill):any{
    return this.apiService.post(`UserSkill/Update`, JSON.stringify(skill))
  }

  GetByID(id):any{
    return this.apiService.get(`UserSkill/GetByID?id=${id}`)
  }

}
