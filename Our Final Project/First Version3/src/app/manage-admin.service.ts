import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ManageAdminService {

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
   }
}
