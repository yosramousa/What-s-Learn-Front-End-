import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
    description : string ;
    image : string;
    link :string;
    video:string;
    file:string;
    subsciption;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  savedescribtion() {
    console.log("any thing")

    let admin= {
      description : this.description,
      image :this.image,
      link :this.link,
    video :this.video,
      file :this.file,
    };

    this.router.navigate(['managecategory'])
}}
