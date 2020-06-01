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
  pageSize=10
  pageNumber=0
  Users: []
  GetAllsubscribe;
  Changesubscribe
  SerachOpts = [
    {ID: 0, name: "Chose Search Options"},
    {ID: 1, name: "Name"},
    {ID: 2, name: "Track Name"},
  
  ];
  SaerchText:String=" "
  SearchOp:number=0


  constructor( private router: Router ,private mangeUsersService: MangeUsersService) { }

  ngOnInit(): void {
   // console.log(this.pageNumber,this.pageSize)
    this.GetAllsubscribe = this.mangeUsersService.Search(0," ",this.pageNumber, this.pageSize).subscribe(response => {
<<<<<<< HEAD
      if (response.json().Successed == true) {
        //Data
        //Successed
        //Message
        //response.json().Message
       this.Users = response.json().Data;
       console.log("this.Users")

=======
      if (response.Successed == true) {
        
       this.Users = response.Data;
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
       console.log(this.Users)
      }(err=>
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
       this.GetAllsubscribe = this.mangeUsersService.Search(0," ",this.pageNumber, this.pageSize).subscribe(response => {
        if (response.json().Successed == true) {
          
          this.Users = response.json().Data;
          console.log(this.Users)
        }
      })
      
       })

     
  }

  Delete(id){

    this.mangeUsersService.Delete(id).subscribe(res=>{
      if(res)
      {
        document.getElementById("delalert").style.visibility="visible";
        this.Filter()

      }

    });


  }

  Search()
  {
    console.log(this.SaerchText,this.SearchOp)
    this.mangeUsersService.Search(this.SearchOp,this.SaerchText,this.pageNumber,this.pageSize).subscribe(res=>{

<<<<<<< HEAD
      if (res.json().Successed == true) {
       
        this.Users = res.json().Data;
=======
      if (res.Successed == true) {
       
        this.Users = res.Data;
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329

        console.log(this.Users)
      } else console.log("False")



    });

  }

  Filter()
  {
    this.GetAllsubscribe = this.mangeUsersService.Search(this.SearchOp,this.SaerchText,this.pageNumber, this.pageSize).subscribe(response => {
<<<<<<< HEAD
      if (response.json().Successed == true) {
=======
      if (response.Successed == true) {
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
        //Data
        //Successed
        //Message
        //response.json().Message
<<<<<<< HEAD
       this.Users = response.json().Data;
=======
       this.Users = response.Data;
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
       
       console.log(this.Users)
      }



    })
  }
  Next()
  {
    this.pageNumber++;
    console.log(this.pageNumber);
    this.Filter()
    

  }
  Prev()
  {
    this.pageNumber--;
    console.log(this.pageNumber);

    this.Filter()
    

  }
  details(id){
    this.router.navigate(['/adminlayout/details/' + id]);
  }
}


