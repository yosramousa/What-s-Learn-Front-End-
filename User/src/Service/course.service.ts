import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private apiService:ApiService) { }
  
  UserCourseDetails(CourseId,TreackID):any{
    return this.apiService.get(`UserProfile/GetCourse?CourseID=${CourseId}&TrackID=${TreackID}`);
  }
}
