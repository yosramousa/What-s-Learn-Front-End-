import { ApiService } from 'app/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageCategoryService {

  constructor(private apiService: ApiService) { }

  Search(level,SearchBy,SearchText,PageIndex,PageSize):any
   {
    return this.apiService
    .get(`ManageCategory/Search?SearchIn=${level}&SearchBy=${SearchBy}&SearchText=${SearchText}&PageIndex=${PageIndex}&PageSize=${PageSize}`);
   }

   Delete(level,ID):any
   {
    return this.apiService
    .get(`ManageCategory/Delete?level=${level}&ID=${ID}`);
    
   }
   GetByID(level,ID):any
   {
     if(level==1)
     {

      return this.apiService
      .get(`MainCategory/GetByID?ID=${ID}`);
     }
     else if(level==2)
     {
      return this.apiService
      .get(`SubCategory/GetByID?ID=${ID}`);
    
     }
     else if(level==3)
     {
      return this.apiService
      .get(`Track/GetByID?ID=${ID}`);
    

     }
     else if(level==4)
     {
      return this.apiService
      .get(`Course/GetByID?ID=${ID}`);
    

     }
   }
   Update(level,Data):any
   {
    if(level==1)
    {

     return this.apiService
     .post(`MainCategory/Update`,JSON.stringify(Data));
    }
    else if(level==2)
    {
      return this.apiService
      .post(`SubCategory/Update`,JSON.stringify(Data));
     
    }
    else if(level==3)
    {
      return this.apiService
      .post(`Track/Update`,JSON.stringify(Data));
     

    }
    else if(level==4)
    {
      return this.apiService
      .post(`Course/Update`,JSON.stringify(Data));
     

    }

   }

   
   Add(level,Data):any
   {
     if(level==0)
     {
      return this.apiService
      .post(`MainCategory/Post`,JSON.stringify(Data));
    
     }
    if(level==1)
    {

     return this.apiService
     .post(`SubCategory/Post`,JSON.stringify(Data));
    }
    else if(level==2)
    {
      return this.apiService
      .post(`Track/Post`,JSON.stringify(Data));
     
    }
    else if(level==3)
    {
      return this.apiService
      .post(`Course/Post`,JSON.stringify(Data));
     

    }

   

   }
   AddTrackCourse(CourseID,TrackID):any{
    return this.apiService
    .post(`TrackCourse/Post`,JSON.stringify({ID:0,TrackID:TrackID,CourseID:CourseID}));
  

   }

   upload(files):any{
    return this.apiService.upload("File/Upload",files);
   }


}
