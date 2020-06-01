import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from 'app/messageservice.service';
<<<<<<< HEAD
=======
import { ManageAdminService } from 'app/manage-admin.service';
import { EnrollRequestService } from 'Services/enroll-request.service';
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

@Component({
  selector: 'app-enrollmentrequest',
  templateUrl: './enrollmentrequest.component.html',
  styleUrls: ['./enrollmentrequest.component.css']
})
export class EnrollmentrequestComponent implements OnInit {
<<<<<<< HEAD
  number :number;
  name:string;
  subsciption;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
    // $('#myTab a').on('click', function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })
    
  }
  shows = [
    {id: 1, number: 10},
    {id: 2,number: 25},
    {id: 3, number: 50},
    {id: 4, number: 100}
  ]
  searches = [
    {id: 4,name: "ID"},
    {id: 1, name: "Name"},
    {id: 2,name: "Childs"},
    {id: 3, name: "Parent"},

  ]
=======
  number: number;
  name: string;
  subsciption;
  constructor(private router: Router, private enrollRequestService: EnrollRequestService) { }
  PageSize = 10
  PageIndex = 0
  SearchOption=0
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
        this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
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

  Filter(){
    if (!(this.SearchText || this.SearchOption)) {
      this.SearchOption = 0
      this.SearchText = " "
    }
    this.enrollRequestService.Search(this.SearchOption, this.SearchText, this.PageIndex, this.PageSize)
    .subscribe(res => {
      
      this.Messages = res.Data;
    })
  }
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
}
