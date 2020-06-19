import { HomeService } from './../../Service/home.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
MianCats=new Array()
PagSize
PageNumber:0
Url=`${environment.api_url}Uploads/`
UserID = localStorage.getItem("UserID")
constructor(private homservice: HomeService,private router:Router) { }
numbers
  ngOnInit(): void {
    this.PageNumber=0;
    this.PagSize=12
    this.GetAll()
    window.scrollTo(0, 0)
   

  }
 GetAll()
 {
  this.homservice.GetAll(this.PageNumber,this.PagSize).subscribe(res=>{
    console.log(res)
    this.MianCats=res.Data
    console.log( this.MianCats.slice(0,4))
    console.log( this.MianCats.slice(4,8))
    console.log( this.MianCats.slice(8,12))
    this.numbers = Array(this.MianCats.length/3).fill(1).map((x, i) => i)
    console.log("nmus",this.numbers)

  },er=>{

  })
 }
  Next(){
    this.PageNumber++
    this.GetAll()
  }
  Prev(){
    this.PageNumber--
    this.GetAll()
  }
  Details(id)
  {
    this.router.navigate([`main-catogory/${id}`]);
    //console.log(id)
  }
}
