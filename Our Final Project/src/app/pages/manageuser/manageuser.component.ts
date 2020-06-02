import { MangeUsersService } from './../../mange-users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  name: string;
  shows: number[] = [10, 15, 20, 25]
  pageSize = 10
  pageNumber = 0
  Users: []
  GetAllsubscribe;
  Changesubscribe
  SerachOpts = [
    { ID: 0, name: "Chose Search Options" },
    { ID: 1, name: "Name" },
    { ID: 2, name: "Track Name" },

  ];
  SaerchText: String = " "
  SearchOp: number = 0


  constructor(private router: Router, private mangeUsersService: MangeUsersService) { }

  ngOnInit(): void {
    // console.log(this.pageNumber,this.pageSize)
    this.GetAllsubscribe = this.mangeUsersService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {

        this.Users = response.Data;
        console.log(this.Users)
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
      this.GetAllsubscribe = this.mangeUsersService.Search(0, " ", this.pageNumber, this.pageSize).subscribe(response => {
        if (response.Successed == true) {

          this.Users = response.Data;
          console.log(this.Users)
        }
      })

    })


  }

  Delete(id) {

    this.mangeUsersService.Delete(id).subscribe(res => {
      if (res) {
        document.getElementById("delalert").style.visibility = "visible";
        this.Filter()

      }

    });


  }

  Search() {
    this.SaerchText=this.SaerchText.trim();
    if (!this.SaerchText) 
    {
      this.SaerchText = " ";
      this.SearchOp=0;
    }
 
    console.log(this.SaerchText, this.SearchOp)
    this.mangeUsersService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(res => {

      if (res.Successed == true) {

        this.Users = res.Data;

        console.log(this.Users)
      } else console.log("False")



    });

  }

  Filter() {
    this.GetAllsubscribe = this.mangeUsersService.Search(this.SearchOp, this.SaerchText, this.pageNumber, this.pageSize).subscribe(response => {
      if (response.Successed == true) {
        //Data
        //Successed
        //Message
        //response.json().Message
        this.Users = response.Data;

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
  details(id) {
    this.router.navigate(['/adminlayout/details/' + id]);
  }

  SortBYNameAsc(Icon)
  {
    document.getElementById("desc").style.color="gainsboro";
    document.getElementById("Asc").style.color="black";
    this.mangeUsersService.SortByNameASc(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Users = res.Data;
        console.log(this.Users)
        
      //  this.count=res.Count
       // this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       //this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }
  SortBYNameDesc(Icon)
  {
   

    document.getElementById("Asc").style.color="gainsboro";
    document.getElementById("desc").style.color="black";
    //console.log( Icon)
    this.mangeUsersService.SortByNameDesc(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Users = res.Data;
        console.log(this.Users)
        
       // this.count=res.Count
        //this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
      // this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }
  SortBYStatus(Icon)
  {
    Icon.target.style.color="black"
    this.mangeUsersService.SortByStatus(this.pageNumber,this.pageSize).subscribe(res => {
      if (res.Successed == true) {
      
        this.Users = res.Data;
        console.log(this.Users)
        
       // this.count=res.Count
       // this.NumOfPages=Math.ceil( this.count/this.pageSize)
        
       //this.numbers = Array(this.NumOfPages).fill(1).map((x,i)=>i);
        console.log("numes",res.Data)
      }
    });
  }
}


