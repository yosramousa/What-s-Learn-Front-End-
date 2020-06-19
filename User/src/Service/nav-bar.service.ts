import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(private apiService: ApiService) { }

   GetData(ID,Level):any
  {
     return this.apiService.get(`Home/GetAll`)

  }


}
