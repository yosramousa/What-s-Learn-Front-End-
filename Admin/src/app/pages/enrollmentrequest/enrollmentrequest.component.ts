import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageAdminService } from './../../../Services/manage-admin.service';
import { EnrollRequestService } from 'Services/enroll-request.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enrollmentrequest',
  templateUrl: './enrollmentrequest.component.html',
  styleUrls: ['./enrollmentrequest.component.css']
})
export class EnrollmentrequestComponent implements OnInit {
  number: number;
  name: string;
  subsciption;
  constructor(private router: Router,
     private enrollRequestService: EnrollRequestService,
     private toastr :ToastrService) { }
  PageSize = 5
  PageIndex = 0
  SearchOption = 0
  SearchText=" "
  Messages: []
  count: number
  numbers
  NumOfPages
  ngOnInit(): void {
   this.Search()
  }
  shows: number[] = [10, 15, 20, 25]

  SerachOptions = [
    { ID: 0, name: "Choose Search Options" },
    { ID: 1, name: "Name" },
    { ID: 2, name: "Track Name" },

  ];
  ApproveRequest(id) {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.enrollRequestService.Approve(id).subscribe(
      res => {
        if (res)
          console.log("Approved")
        this.enrollRequestService.GetAllRequests(this.PageIndex, this.PageSize)
          .subscribe(res => {
            this.Messages = res.Data;
            this.toastr.success("Request Approved Successfully","Done",{
              easeTime:500,
              timeOut:4000
            })
          })
      }
    )
  }

  Cancel(id) {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.enrollRequestService.Cancel(id).subscribe(
      res => {
        if (res)
          console.log("Canceled")

        this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
          .subscribe(res => {
            this.Messages = res.Data;
          })
          this.toastr.success("Request Canceled Successfully","Done",{
            easeTime:500,
            timeOut:4000
          })
      }
    )
  }

  Search() {
    this.SearchText=this.SearchText.trim();
    if ((this.SearchText == undefined || this.SearchOption == undefined
    )) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(res)
        this.count = res.Count
        this.NumOfPages = Math.round(this.count / this.PageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i).splice(0, 5)

      })
  }


  Next() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex++;
    this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
      })

  }
  Prev() {
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.PageIndex--;
    console.log(this.PageIndex);

    this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
      .subscribe(res => {
        this.Messages = res.Data;
        console.log(this.Messages)
      })

  }

  Filter() {
   
  this.Search()
  }
  MoveTo(num) {
    this.PageIndex = num;

    this.Search();

  }
}
