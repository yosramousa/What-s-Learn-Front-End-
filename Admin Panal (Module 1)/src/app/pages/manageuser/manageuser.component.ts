import { MangeUsersService } from './../../../Services/mange-users.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  public CategoryFormControl = new FormControl("");
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;
  name: string;
  email:string;
  shows: number[] = [10, 15, 20, 25]
  pageSize=10
  pageNumber=0
  Users: []
  GetAllsubscribe;
  Changesubscribe
  SerachOpts = [
    {ID: 0, name: "Choose Search Options"},
    {ID: 1, name: "Name"},
    {ID: 2, name: "Track Name"},
  
  ];
  SaerchText:String=" "
  SearchOp:number=0


  constructor( private router: Router ,private mangeUsersService: MangeUsersService) { 

    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete ';
    this.confirmClicked = false;
     this.cancelClicked = false;
  }
  count
  NumOfPages
  numbers
  SortBy= 0;
  ngOnInit(): void {
    // console.log(this.pageNumber,this.pageSize)
    this.GetAllsubscribe = this.mangeUsersService.Search(this.SortBy,0, " ", this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {

        this.Users = response.Data;
        console.log(this.Users)
        this.count = response.Count
        this.NumOfPages = Math.round(this.count / this.pageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i);

      } (err =>
        console.log(err)
      )



    })
  }
  tracks = [
    { id: 1, name: "Main Category" },
    { id: 2, name: "Sub Ctegory" },
    { id: 3, name: "Track" },
    { id: 4, name: "Course" },
  ]

  Change(id) {

    this.Changesubscribe = this.mangeUsersService.ChangeStatus(id).subscribe(response => {
      console.log(response)
      this.Search()

    });
}

  Delete(id) {

    this.mangeUsersService.Delete(id).subscribe(res => {
      if (res) {
        document.getElementById("delalert").style.visibility = "visible";
        this.Search()

      }

    });


  }

  Search() {
    this.SaerchText = this.SaerchText.trim();
    if (!this.SaerchText) {
      this.SaerchText = " ";
      this.SearchOp = 0;
    }

    console.log(this.SaerchText, this.SearchOp)
    this.mangeUsersService.Search(this.SortBy,this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {

      if (res.Successed == true) {

        this.Users = res.Data;
        this.count = res.Count
        this.NumOfPages = Math.round(this.count / this.pageSize)
        this.numbers = Array(this.NumOfPages).fill(1).map((x, i) => i);

        console.log(this.Users)
      } else console.log("False")



    });

  }

  Filter() {
    this.Search();
  }

  Next() {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.Search()


  }
  Prev() {
    this.pageNumber--;
    console.log(this.pageNumber);

    this.Search()


  }
  details(id) {
    this.router.navigate(['/adminlayout/details/' + id]);
  }
  SortBYNameAsc() {
    this.pageNumber = 0;

    document.getElementById("NameAsc").style.color = "black";
    document.getElementById("NameDesc").style.color = "gainsboro";
    this.SortBy = 2;
    this.Search()
  }
  SortBYNameDesc() {
    this.pageNumber = 0;

    document.getElementById("NameAsc").style.color = "gainsboro";
    document.getElementById("NameDesc").style.color = "black";
    this.SortBy = 3
    this.Search();


  }
  SortBYStatusAsc() {
    this.pageNumber = 0;

    document.getElementById("StatusAsc").style.color = "black";
    document.getElementById("Statusdesc").style.color = "gainsboro";
    this.SortBy = 6
    this.Search();

  }
  SortBYStatusDesc() {
    this.pageNumber = 0;

    document.getElementById("StatusAsc").style.color = "gainsboro";
    document.getElementById("Statusdesc").style.color = "black";
    this.SortBy = 7
    this.Search();

  }
  SortBYIDAsc() {
    this.pageNumber = 0;
    document.getElementById("IDAsc").style.color = "black";
    document.getElementById("IDdesc").style.color = "gainsboro";
    this.SortBy = 0
    this.Search();

  }
  SortBYIDDesc() {
    this.pageNumber = 0;

    document.getElementById("IDAsc").style.color = "gainsboro";
    document.getElementById("IDdesc").style.color = "black";
    this.SortBy = 1
    this.Search();

  }
  MoveTo(num) {
    this.pageNumber = num;
    this.Search();

  }
 
}


