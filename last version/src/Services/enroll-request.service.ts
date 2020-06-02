import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollRequestService {

  constructor(private apiService:ApiService) { }

  GetAllRequests(PageIndex,PageSize) :any  {
    return this.apiService.get(`EnrollemntRequest/GetList?PageIndex=${PageIndex}&PageSize=${PageSize}`);
   }

   Search(SerachOption,SerachText,PageIndex,PageSize) :any {
    return this.apiService.get(`EnrollemntRequest/Search?SerachOption=${SerachOption}&SerachText=${SerachText}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
   }

   Cancel(id) :any{
    return this.apiService.get(`EnrollemntRequest/Cancel?id=${id}`);
  }

  
  Approve(id) :any{

    return this.apiService.get(`EnrollemntRequest/Approve?id=${id}`);
  }

}