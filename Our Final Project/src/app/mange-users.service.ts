import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
<<<<<<< HEAD
=======
import { ApiService } from './api.service';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
@Injectable({
  providedIn: 'root'
})
export class MangeUsersService {
<<<<<<< HEAD

  private url:String="https://localhost:44319/ManageUsers";
  constructor(private myhttp:Http) { }
  GetAllUsers(Pageindex,pagesize){
    return this.myhttp.get(this.url+"/GetList/"+Pageindex+"/"+pagesize);
   }
   ChangeStatus(id){

    return this.myhttp.get(this.url+"/ChangeStatus/"+id);
   }

   GetByID(id){
     return this.myhttp.get(this.url+"/Details/"+id);
   }

   Delete(id){
     return  this.myhttp.get(this.url+"/Delete/"+id);
   }
   Search(SearchOp,SearchText,Pagnum,PageSize)
   {
     return this.myhttp.get(this.url+"/Search/"+SearchOp+"/"+SearchText+"/"+Pagnum+"/"+PageSize);
=======
  
  constructor(private apiService:ApiService)  { }
  
  GetAllUsers(SerachOption,SerachText,Pageindex,pagesize) :any {
    return this.apiService.get(`ManageUsers/Search?SerachOption=${SerachOption}&SerachText=${SerachText}&PageIndex=${Pageindex}&PageSize=${pagesize}`);
   }
   
   ChangeStatus(id){

    return this.apiService.get(`ManageUsers/ChangeStatus?id=${id}`);
   }
   Details
   GetByID(id) :any{
     return this.apiService.get(`ManageUsers/Details?id=${id}`);
   }
   
   Delete(id){
     return  this.apiService.get(`ManageUsers/Delete?id=${id}`);
   }
   Search(SerachOption,SerachText,Pageindex,pagesize) :any
   {
     return this.apiService.get(`ManageUsers/Search?SerachOption=${SerachOption}&SerachText=${SerachText}&PageIndex=${Pageindex}&PageSize=${pagesize}`);
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
   }
}


