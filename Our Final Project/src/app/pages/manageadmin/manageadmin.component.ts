import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageAdminService } from 'app/manage-admin.service';

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
  Admins: []
  GetAllsubscribe;
  Changesubscribe
  SerachOpts = [
    { ID: 0, name: "Chose Search Options" },
    { ID: 1, name: "Name" },
    // {ID: 2, name: "Track Name"},

  ];
  SaerchText: String = " "
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
        if (response.json().Successed == true) {
          this.Admins = response.json().Data;
          console.log(this.Admins)
        }
      })
    })
  }


  Delete(id) {
    this.manageAdminService.Delete(id).subscribe(res => {
      if (res) {
        this.Filter()
        document.getElementById("delalert").style.visibility = "visible";
      }
    });
  }

  Search() {
    console.log(this.SaerchText, this.SearchOp)
    this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {
      if (res.json().Successed == true) {
        this.Filter();
        this.Users = res.json().Data;
        console.log(this.Users)
      }
    });
  }

  Filter() {
    this.GetAllsubscribe = this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(response => {
      if (response.json().Successed == true) {
        this.Users = response.json().Data;
        console.log(this.Users)
      }
    })
  }

  Next() {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.Filter()
  }
  Prev() {
    this.pageNumber--;
    console.log(this.pageNumber);
    this.Filter()
  }
  admindetails(id) {
    this.router.navigate(['/adminlayout/editadminprofile/' + id]);
  }
}
