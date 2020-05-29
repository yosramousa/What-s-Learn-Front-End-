import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  name:string ;
  email:string ;
  address:string ;
  gender:string ;
  phone:string ;
  age:number ;
  constructor() { }

  ngOnInit(): void {
  }

}
