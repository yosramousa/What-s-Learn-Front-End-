import { AddcategoryComponent } from './../addcategory/addcategory.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MangeUsersService } from 'app/mange-users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  ID;
  TrackInfo: {

    TrackName,
    FinshedCourses,
    Progress,
    CuurentCourse,
    FutureCourses
  }
  User
  // {

  //   name: string,
  //   email: string,
  //   address: string,
  //   gender: string,
  //   phone: string,
  //   age: number,
  //   education: string,

  //   Tracks: {TrackName, FinshedCourses, Progress,CuurentCourse,FutureCourses}[]
  // }
  Response
  subscripber

  constructor(private myActivatedRoute: ActivatedRoute, private mangeUsersService: MangeUsersService) {


  }

  ngOnInit(): void {
    this.ID = this.myActivatedRoute.snapshot.params['ID'];
    this.subscripber = this.mangeUsersService.GetByID(this.ID = this.myActivatedRoute.snapshot.params['ID'])
      .subscribe(res => {
        this.Response = res.Data
        this.User = this.Response
        // this.User.name = this.Response.Name
        // this.User.email = this.Response.Email
        // this.User.address = this.Response.Adress
        // this.User.age = this.Response.Age
        // this.User.education = this.Response.Education
        // this.User.gender = this.Response.Gender
        // this.User.phone = this.Response.Phone
        // this.Response.Tracks.forEach((value)=> {

        //   this.TrackInfo.Progress=value.Progress
        //   this.TrackInfo.CuurentCourse=value.CuurentCourse
        //   this.TrackInfo.FinshedCourses=value.FinshedCourses
        //   this.TrackInfo.FutureCourses=value.FutureCourses
        //   this.TrackInfo.TrackName=value.TrackName
        //   this.User.Tracks.push(this.TrackInfo)
        //});





        console.log(this.Response)

      });

  }

}
