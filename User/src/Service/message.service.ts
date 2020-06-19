import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private apiService:ApiService) { }

  SendMessage(message):any{
    return this.apiService.post(`ContactUS/Post`,JSON.stringify(message))
  }
}
