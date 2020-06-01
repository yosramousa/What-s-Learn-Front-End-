import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from 'app/messageservice.service';

@Component({
  selector: 'app-enrollmentrequest',
  templateUrl: './enrollmentrequest.component.html',
  styleUrls: ['./enrollmentrequest.component.css']
})
export class EnrollmentrequestComponent implements OnInit {
  number :number;
  name:string;
  subsciption;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
    // $('#myTab a').on('click', function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })
    
  }
  shows = [
    {id: 1, number: 10},
    {id: 2,number: 25},
    {id: 3, number: 50},
    {id: 4, number: 100}
  ]
  searches = [
    {id: 4,name: "ID"},
    {id: 1, name: "Name"},
    {id: 2,name: "Childs"},
    {id: 3, name: "Parent"},

  ]
}
