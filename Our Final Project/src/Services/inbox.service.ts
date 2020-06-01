import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private apiService:ApiService) { }
  
  GetMessages(pageIndex,pageSize) :any{
    return this.apiService.get(`Inbox/GetAll?pageIndex=${pageIndex}&pageSize=${pageSize}`)

  }

  Search(SearchOption,SearchText,pageIndex,pageSize):any{
    return this.apiService.get(`Inbox/Search?SearchOption=${SearchOption}&SearchText=${SearchText}&pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }

  Delete(id){
    return this.apiService.get(`Inbox/Delete?id=${id}`)

  }

  GetByID(id):any{
    return this.apiService.get(`Inbox/GetByID?id=${id}`)
    
  }
}
