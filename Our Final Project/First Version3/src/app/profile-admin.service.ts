import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdminService {
  private url:String="https://localhost:44319/MangeAdmins";
  constructor(private myhttp:Http) { }



  GetByID(id)
  {
    return this.myhttp.get(this.url+"/Details/"+id);
  }
}
