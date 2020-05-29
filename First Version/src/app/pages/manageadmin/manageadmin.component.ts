import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageadmin',
  templateUrl: './manageadmin.component.html',
  styleUrls: ['./manageadmin.component.css']
})
export class ManageadminComponent implements OnInit {
  name:string;
  ID:number;
  levelname: string;
  number:number;

  search : string ;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  Search(){



  }
  shows = [
    {id: 1, number: 10},
    {id: 2,number: 25},
    {id: 3, number: 50},
    {id: 4, number: 100}
  ]
  numbers = [
    {ID: 1, id: 10},
    {id: 2,name: ""},
   
  ]

}
