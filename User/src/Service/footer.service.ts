import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private apiService : ApiService) { }

  GetMainCategory():any{
    return this.apiService.get(`Home/GetMainCategory`)
  }
}
