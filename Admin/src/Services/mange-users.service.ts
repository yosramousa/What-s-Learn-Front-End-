import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class MangeUsersService {

  constructor(private apiService: ApiService) { }

  GetAllUsers(SerachOption, SerachText, Pageindex, pagesize): any {
    return this.apiService.get(`ManageUsers/Search?SerachOption=${SerachOption}&SerachText=${SerachText}&PageIndex=${Pageindex}&PageSize=${pagesize}`);
  }

  ChangeStatus(id):any {
 
    return this.apiService.get(`ManageUsers/ChangeStatus?id=${id}`);
  }
  GetByID(id): any {
    return this.apiService.get(`ManageUsers/Details?id=${id}`);
  }
 
  Delete(id) {
    return this.apiService.get(`ManageUsers/Delete?id=${id}`);
  }
  Search(SortBy,SerachOption, SerachText, Pageindex, pagesize): any {
    return this.apiService.get(`ManageUsers/Search?SortBy=${SortBy}&SerachOption=${SerachOption}&SerachText=${SerachText}&PageIndex=${Pageindex}&PageSize=${pagesize}`);
  }
  SortByNameASc(Pageindex, pagesize):any{
    return this.apiService.get(`ManageUsers/SortByNameAsc?pageIndex=${Pageindex}&pageSize=${pagesize}`)
  }
  SortByNameDesc(Pageindex, pagesize):any{
   return this.apiService.get(`ManageUsers/SortByNameDesc?pageIndex=${Pageindex}&pageSize=${pagesize}`)
 }
 SortByStatus(Pageindex, pagesize):any{
   return this.apiService.get(`ManageUsers/SortByStatus?pageIndex=${Pageindex}&pageSize=${pagesize}`)
 }
}


