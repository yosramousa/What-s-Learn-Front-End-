import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/Service/course.service';
import { FormControl } from '@angular/forms';
import { ProfileService } from 'src/Service/profile.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseID
  TrackID
  course
  Url = `${environment.api_url}Uploads`
  public CategoryFormControl = new FormControl("");
  popoverTitle: string;
  popoverMessage: string
  confirmClicked: boolean;
  cancelClicked: boolean;
  confirmButtonType: string

  constructor(private profileService: ProfileService, private route: Router
    , private courseService: CourseService,
    private router: ActivatedRoute
    , private renderer: Renderer2, private element: ElementRef) {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Enroll this Track ';
    this.confirmClicked = false;
    this.cancelClicked = false;
  }

  ngOnInit(): void {

    this.courseID = this.router.snapshot.params["CourseId"]
    this.TrackID = this.router.snapshot.params["TrackId"]
    this.GetCourse();

    window.scrollTo(0, 0)

  }

  GetCourse() {

    this.courseService.UserCourseDetails(this.courseID, this.TrackID).subscribe(res => {
      if (res.Successed) {
        this.course = res.Data
        console.log(this.course)

      }
      console.log(res)

    }, er => {
      console.log(er)

    })
  }
  downloadFile(file) {
    window.open(`${this.Url}/${file}`)
  }

  Finished() {
    console.log(event)
    this.profileService.FinishedCourse(this.courseID, this.TrackID).subscribe(res => {

      console.log(res)
      if (res.Successed) {
        this.GetCourse();

        // event.target.disabled = true;
      } else {
        //   event.target.checked = false;
      }
    })
  }

  //summy
  //smarter asp
  //windows azure
}



