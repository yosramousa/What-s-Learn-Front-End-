import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageUserService {

  // constructor(private apiService:ApiService) { }
  
  // GetAllUsers(Pageindex,pagesize){
  //   return this.apiService.get(`MangeAdmins/GetList?pageIndex=${Pageindex}&pageSize=${pagesize}`);
  //  }
  //  ChangeStatus(id){
  //   return this.apiService.get(`MangeAdmins/ChangeStatus/${id}`);
  //  }
  //  Delete(id){
  //    return  this.apiService.get(`MangeAdmins/Delete/${id}`);
  //  }
  //  Search(SearchOp,SearchText,PageIndex,PageSize) : any
  //  {
  //    return this.apiService
  //    .get(`MangeAdmins/Search?SearchOp=${SearchOp}&SearchText=${SearchText}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
  //  }

  //  Add(Admin): any{
  //    return  this.apiService.post("MangeAdmins/Post", JSON.stringify(Admin));
  //  }
}
