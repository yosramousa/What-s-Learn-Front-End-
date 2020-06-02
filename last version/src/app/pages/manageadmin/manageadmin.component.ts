import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageAdminService } from 'app/manage-admin.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-manageadmin',
  templateUrl: './manageadmin.component.html',
  styleUrls: ['./manageadmin.component.css']
})
export class ManageadminComponent implements OnInit {
  public CategoryFormControl = new FormControl("");
  popoverTitle :string; 
  popoverMessage :string
  confirmClicked :boolean;
  cancelClicked :boolean;
  [x: string]: any;
  name: string;
  email:string;
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
<<<<<<< HEAD:Our Final Project/src/app/pages/manageadmin/manageadmin.component.ts
    
    if (!this.SaerchText) 
    {
      this.SaerchText = " ";
      this.SearchOp=0;
    }
    console.log(this.SaerchText, this.SearchOp)
    this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {
      if (res.Successed == true) {
       // this.Filter();
        this.Admins = res.Data;
        console.log(this.Admins)
        
        this.count=res.Count
        this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",this.NumOfPages)
=======
    console.log(this.SaerchText, this.SearchOp)
    this.manageAdminService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {
      if (res.json().Successed == true) {
        this.Filter();
        this.Users = res.json().Data;
        console.log(this.Users)
>>>>>>> 5d02b3d438d7b34d860cd62f75211c80ab16d1b3:last version/src/app/pages/manageadmin/manageadmin.component.ts
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
  addnewadmin(){
    this.router.navigate(['/adminlayout/addadmin/']);
  }
  admindetails(id) {
    this.router.navigate(['/adminlayout/details/' + id]);
  }
  SortBYNameAsc()
  {
    document.getElementById("desc").style.color="gainsboro";
    document.getElementById("Asc").style.color="black";

    this.manageAdminService.SortByNameASc(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Admins = res.Data;
        console.log(this.Admins)
        
        this.count=res.Count
        this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }
  SortBYNameDesc()
  {
   
    document.getElementById("Asc").style.color="gainsboro";
    document.getElementById("desc").style.color="black";

    this.manageAdminService.SortByNameDesc(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Admins = res.Data;
        console.log(this.Admins)
        
        this.count=res.Count
        this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }
  SortBYStatus(Icon)
  {
    Icon.target.style.color="black"
    this.manageAdminService.SortByStatus(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Admins = res.Data;
        console.log(this.Admins)
        
        this.count=res.Count
        this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }

}
