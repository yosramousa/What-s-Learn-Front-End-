import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ManageAdminService } from './../../../Services/manage-admin.service';
import { EnrollRequestService } from 'Services/enroll-request.service';

@Component({
  selector: 'app-enrollmentrequest',
  templateUrl: './enrollmentrequest.component.html',
  styleUrls: ['./enrollmentrequest.component.css']
})
export class EnrollmentrequestComponent implements OnInit {
  number: number;
  name: string;
  subsciption;
  constructor(private router: Router, private enrollRequestService: EnrollRequestService) { }
  PageSize = 10
  PageIndex = 0
  SearchOption = 0
  SearchText
  Messages: []
  ngOnInit(): void {
    this.enrollRequestService.GetAllRequests(this.PageIndex, this.PageSize).subscribe
      (res => {

        if (res.Successed) {
          console.log(res)
          this.Messages = res.Data;
          console.log(this.Messages)
        }
      }
      )
  }
  shows: number[] = [10, 15, 20, 25]

  SerachOptions = [
    { ID: 0, name: "Chose Search Options" },
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
            console.log(this.Messages)
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
        console.log(this.Messages)
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
}
