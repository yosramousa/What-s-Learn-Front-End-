import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private apiService: ApiService) { }

  
  GetAll(PageIndex,PageSize):any{
    return this.apiService.get(`Home/GetAllMainCategory?PageSize=${PageSize}&PageIndex=${PageIndex}`)
  }
  GetLevelDetails(ID,Level,PageIndex,PageSize):any{
    return this.apiService.get(`Home/GetByID?ID=${ID}&Level=${Level}&PageIndex=${PageIndex}&PageSize=${PageSize}`)
  }
  Enroll(TrackID):any{
    return this.apiService.get(`Home/Enroll?TrackID=${TrackID}`)
  }
}
