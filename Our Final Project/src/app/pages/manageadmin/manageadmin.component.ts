import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageAdminService } from 'app/manage-admin.service';
import { environment } from  './../../../environments/environment'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageadmin',
  templateUrl: './manageadmin.component.html',
  styleUrls: ['./manageadmin.component.css']
})
export class ManageadminComponent implements OnInit {
  
  [x: string]: any;
  name: string;
  NumOfPages=9;
  count:number
  numbers
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
    {ID: 2, name: "Email"},

  ];
  SaerchText: String
  SearchOp: number = 0
SortBy:number=0
adminID = localStorage.getItem('AdminID');

public CategoryFormControl = new FormControl("");
popoverTitle :string; 
popoverMessage :string
confirmClicked :boolean;
cancelClicked :boolean;
  constructor(private router: Router, private manageAdminService: ManageAdminService) 
  {
    this.popoverTitle = 'Confirm';
    this.popoverMessage = 'Are you sure to Delete ';
    this.confirmClicked = false;
     this.cancelClicked = false;
 
   }

  ngOnInit(): void {
    console.log("Here")
    this.GetAllsubscribe = this.manageAdminService.Search(this.SortBy,0, " ", this.pageNumber, this.pageSize)
      .subscribe(
        response => {
          console.log(response)
          if (response.Successed) {
            this.Admins = response.Data;
            console.log(this.Admins)
             this.count=response.Count
             this.NumOfPages=Math.round( this.count/this.pageSize)
            this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
             console.log(this.numbers)

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
      this.GetAllsubscribe = this.manageAdminService.Search(this.SortBy,0, " ", this.pageNumber, this.pageSize).subscribe(response => {
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
        this.GetAllsubscribe = this.manageAdminService.Search(this.SortBy,0, " ", this.pageNumber, this.pageSize).subscribe(response => {
          if (response.Successed == true) {
            this.Admins = response.Data;
            console.log(this.Admins)
          }
        })
        document.getElementById("delalert").style.visibility = "visible";

      }
    });
  }

  Search() {
    
    if (!this.SaerchText) 
    {
      this.SaerchText = " ";
      this.SearchOp=0;
    }
    console.log(this.SaerchText, this.SearchOp)
    this.manageAdminService.Search(this.SortBy,this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {
      if (res.Successed == true) {
       // this.Filter();
        this.Admins = res.Data;
        console.log(this.Admins)
        
        this.count=res.Count
        this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",this.NumOfPages)
      }
    });
  }

  Filter() {
    this.Search()
  }

  Next() {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.Search()
    
  }
  Prev() {
    this.pageNumber--;
   this.Search()
  }
  adminDetails(id) {
    this.router.navigate(['/adminlayout/admindetails/' + id]);
  }
  MoveTo(num)
  {
    this.pageNumber=num;
    this.Search();
  
  }
  SortBYNameAsc()
  {
   this.pageNumber =0;

    document.getElementById("NamAsc").style.color="black";
    document.getElementById("namedesc").style.color="gainsboro";
this.SortBy=2;
  this.Search()
  }
  SortBYNameDesc()
  {
   this.pageNumber =0;
    document.getElementById("NamAsc").style.color="gainsboro";
    document.getElementById("namedesc").style.color="black";
this.SortBy=3
this.Search();
  
  
  }
  SortBYEmailAsc()
  {
    this.pageNumber =0;
  
    document.getElementById("emAsc").style.color="black";
    document.getElementById("emdesc").style.color="gainsboro";
    this.SortBy=4
this.Search();

  }
  SortBYEmailDesc()
  {
    this.pageNumber =0;
  
    document.getElementById("emAsc").style.color="gainsboro";
    document.getElementById("emdesc").style.color="black";
    this.SortBy=5
    this.Search();

  }
  SortBYIDAsc()
  {
    this.pageNumber =0;
  
    document.getElementById("IDAsc").style.color="black";
    document.getElementById("IDdesc").style.color="gainsboro";
    this.SortBy=0
this.Search();

  }
  SortBYIDDesc()
  {
    this.pageNumber =0;
    document.getElementById("IDAsc").style.color="gainsboro";
    document.getElementById("IDdesc").style.color="black";
    this.SortBy=1

    this.Search();

  }

}

