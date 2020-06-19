import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService:ApiService) { }

  LogIn(Constrain): any{
    return this.apiService.post(`Admin/LogIn`,JSON.stringify(Constrain))
  }

}
