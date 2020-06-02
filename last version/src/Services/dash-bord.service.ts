import { ApiService } from './../app/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashBordService {

  constructor( private apiService: ApiService) { }

  GetALLData():any
  {
     return this.apiService.get("DashBoard/GatAllData");
  }
}
