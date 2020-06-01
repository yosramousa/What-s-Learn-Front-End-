import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageAdminService } from 'app/manage-admin.service';
import { environment } from  './../../../environments/environment'

@Component({
  selector: 'app-manageadmin',
  templateUrl: './manageadmin.component.html',
  styleUrls: ['./manageadmin.component.css']
})
export class ManageadminComponent implements OnInit {
  
  [x: string]: any;
  name: string;
  shows: number[] = [10, 15, 20, 25]
  pageSize = 10
  pageNumber = 0
  Admins: any[]
  Url=environment.api_url
  // : [{
  //   ID :number,
  //   Name : string,
  //   Status : string
  // }]
  GetAllsubscribe;
  Changesubscribe
  SerachOpts = [
    { ID: 0, name: "Chose Search Options" },
    { ID: 1, name: "Name" },
    // {ID: 2, name: "Track Name"},

  ];
  SaerchText: String
  SearchOp: number = 0


  constructor(private router: Router, private manageAdminService: ManageAdminService) { }

  ngOnInit(): void {
    console.log("Here")
    this.GetAllsubscribe = this.manageAdminService.Search(0, " ", this.pageNumber, this.pageSize)
      .subscribe(
        response => {
          console.log(response)
          if (response.Successed) {
            this.Admins = response.Data;
            console.log(this.Admins)
          } else {

          }
        },
        err => {
          console.log(err);
        }
      );
  }



  Change(id) {
    this.Changesubscribe = this.manageAdminService.ChangeStatus(id).subscribe(response => {
      console.log(response)
      this.GetAllsubscribe = this.manageAdminService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
        if (response.Successed == true) {
          this.Admins = response.Data;
          console.log(this.Admins)
        }
      })
    })
  }


  Delete(id) {
    this.manageAdminService.Delete(id).subscribe(res => {
      if (res) {
        console.log("Deleted")
        this.GetAllsubscribe = this.manageAdminService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
          if (response.Successed == true) {
            this.Admins = response.Data;
            console.log(this.Admins)
          }
        })
      }
    });
  }

  Search() {
    if (!this.SaerchText) this.SaerchText = " ";
    console.log(this.SaerchText, this.SearchOp)
    this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {
      if (res.Successed == true) {
        this.Filter();
        this.Users = res.Data;
        console.log(this.Users)
      }
    });
  }

  Filter() {
    if (!this.SaerchText) this.SaerchText = " ";
    console.log(this.pageSize)
    this.GetAllsubscribe = this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {
        this.Users = response.Data;
        console.log(this.Users)
      }
    })
  }

  Next() {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.GetAllsubscribe = this.manageAdminService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {
        this.Admins = response.Data;
        console.log(this.Admins)
      }
    })
  }
  Prev() {
    this.pageNumber--;
    console.log(this.pageNumber);
    this.GetAllsubscribe = this.manageAdminService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {
        this.Admins = response.Data;
        console.log(this.Admins)
      }
    })
  }
  adminDetails(id) {
    this.router.navigate(['/adminlayout/admindetails/' + id]);
  }
}
