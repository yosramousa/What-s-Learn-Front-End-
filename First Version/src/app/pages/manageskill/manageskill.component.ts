import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageskill',
  templateUrl: './manageskill.component.html',
  styleUrls: ['./manageskill.component.css']
})
export class ManageskillComponent implements OnInit {
   skill:string ;
   skillname:string;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }

}
