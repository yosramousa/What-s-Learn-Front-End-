import { AddcategoryComponent } from './../addcategory/addcategory.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MangeUsersService } from './../../../Services/mange-users.service';

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




        console.log(this.Response)

      });

  }

}
