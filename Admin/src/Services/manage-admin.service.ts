import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ManageAdminService {


  constructor(private apiService: ApiService) { }

  GetAllUsers(Pageindex, pagesize) {
    return this.apiService.get(`MangeAdmins/GetList?pageIndex=${Pageindex}&pageSize=${pagesize}`);
  }
  ChangeStatus(id) {
    return this.apiService.get(`MangeAdmins/ChangeStatus?id=${id}`);
  }
  Delete(id) {
    return this.apiService.get(`MangeAdmins/Delete?id=${id}`);
  }
  Search(SortBy,SearchOp, SearchText, PageIndex, PageSize): any {
    return this.apiService
      .get(`MangeAdmins/Search?SortBy=${SortBy}&SearchOp=${SearchOp}&SearchText=${SearchText}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
  }

  Add(Admin): any {
    return this.apiService.post("MangeAdmins/Post", JSON.stringify(Admin));
  }

  GetByID(id): any {
    return this.apiService.get(`MangeAdmins/Details?id=${id}`);
  }
  upload(files):any{
    return this.apiService.upload("File/Upload",files);
   }
  //  SortByNameASc(Pageindex, pagesize):any{
  //    return this.apiService.get(`MangeAdmins/SortByNameAsc?pageIndex=${Pageindex}&pageSize=${pagesize}`)
  //  }
  //  SortByNameDesc(Pageindex, pagesize):any{
  //   return this.apiService.get(`MangeAdmins/SortByNameDesc?pageIndex=${Pageindex}&pageSize=${pagesize}`)
  // }
  // SortByStatus(Pageindex, pagesize):any{
  //   return this.apiService.get(`MangeAdmins/SortByStatus?pageIndex=${Pageindex}&pageSize=${pagesize}`)
  // }
}

