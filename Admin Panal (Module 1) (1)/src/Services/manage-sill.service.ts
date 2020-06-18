import { ApiService } from './api.service'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageSillService {

  constructor(private apiService:ApiService) { }

  GetAll(SortBy,PageIndex,PageSize):any{

    return this.apiService.get(`ManageSkills/GetList?SortBy=${SortBy}&PageIndex=${PageIndex}&PageSize=${PageSize}`);


  } 
  Delete(id):any
  {
    return this.apiService.get(`ManageSkills/Delete?id=${id}`);

  }
  Add(obj):any
  {
    return this.apiService.post(`ManageSkills/Post`,JSON.stringify(obj));

  }
  Update(obj):any
  {
    return this.apiService.post(`ManageSkills/Update`,JSON.stringify(obj));

  }
  GetByID(id):any
  {
    return this.apiService.get(`ManageSkills/GetByID?id=${id}`);

  }
}
