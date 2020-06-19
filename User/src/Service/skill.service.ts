import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiService:ApiService) { }
  
  GetSkills() :any{
    return this.apiService.get(`Skill/GetAllSkills`)

  }

  GetUserSkill():any{
    return this.apiService.get(`UserSkill/GetList`)
  }

  UpdateUserSkill(Skills):any{
    return this.apiService.post(`UserSkill/Update`, JSON.stringify(Skills))
  }

  
}
