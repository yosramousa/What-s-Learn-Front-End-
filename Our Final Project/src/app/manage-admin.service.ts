import { Injectable } from '@angular/core';
import { Http, RequestOptions , Headers } from '@angular/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ManageAdminService {

  
  constructor(private apiService:ApiService) { }
  
  GetAllUsers(Pageindex,pagesize){
    return this.apiService.get(`MangeAdmins/GetList?pageIndex=${Pageindex}&pageSize=${pagesize}`);
   }
   ChangeStatus(id){
<<<<<<< HEAD
    return this.apiService.get(`MangeAdmins/ChangeStatus/${id}`);
   }
   Delete(id){
     return  this.apiService.get(`MangeAdmins/Delete/${id}`);
=======
    return this.apiService.get(`MangeAdmins/ChangeStatus?id=${id}`);
   }
   Delete(id){
     return  this.apiService.get(`MangeAdmins/Delete?id=${id}`);
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
   }
   Search(SearchOp,SearchText,PageIndex,PageSize) : any
   {
     return this.apiService
     .get(`MangeAdmins/Search?SearchOp=${SearchOp}&SearchText=${SearchText}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
   }

   Add(Admin): any{
     return  this.apiService.post("MangeAdmins/Post", JSON.stringify(Admin));
   }
<<<<<<< HEAD
=======
   
   GetByID(id) : any
   {
     return this.apiService.get(`MangeAdmins/GetByID?id=${id}`);
   }
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
}

