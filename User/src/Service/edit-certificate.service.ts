import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EditCertificateService {

  constructor(private apiService:ApiService) { }


  GetUserCert():any{
    return this.apiService.get(`UserCertificate/GetList`)
  }

  UpdateUserCert(Certs):any{
    return this.apiService.post(`UserCertificate/Update`, JSON.stringify(Certs))
  }

  uploadImage(files):any{
    return this.apiService.upload("File/Upload",files);
   }

   DeleteUserCert(id):any{
    return this.apiService.get(`UserCertificate/Delete?id=${id}`)
  }
  
  PostUserCert(cert) :any 
  {
    return this.apiService.post(`UserCertificate/Post`,JSON.stringify(cert))
  }

  GetByID(id):any
  {
    return this.apiService.get(`UserCertificate/GetByID?id=${id}`)
  }
}
