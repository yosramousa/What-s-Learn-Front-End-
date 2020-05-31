import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {
  
  constructor(private apiService:ApiService) { }


  ChangeStatus(id){

    return this.apiService.get(`Inbox/ChangeStatus?id=${id}`);
   }

   GetMessages(pageIndex,pageSize) :any{
    console.log("OnGetMessages")

     this.apiService.get(`Inbox/GetAll?pageIndex=${pageIndex}&pageSize${pageSize}`)
   }
}
