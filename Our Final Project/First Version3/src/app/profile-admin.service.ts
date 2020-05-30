import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdminService {
  private url:String="https://localhost:44319/AdminProfile";
  constructor(private myhttp:Http) { }



  GetAdminProfile(){
    return this.myhttp.get(this.url+"/GetProfile");
  }
}
