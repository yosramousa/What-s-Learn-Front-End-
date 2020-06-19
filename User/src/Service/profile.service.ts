import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService:ApiService) { }



  GetProfile():any{
    return this.apiService.get(`UserProfile/GetProfile`);

  }

  UserCourseDetails(id):any{
    return this.apiService.get(`UserProfile/GetCourseByID?id=${id}`);
  }

  FinishedCourse(courseID,TrackID):any{
    return this.apiService.get(`UserProfile/FinishCourse?CourseID=${courseID}&TrackID=${TrackID}`)
  }
}
