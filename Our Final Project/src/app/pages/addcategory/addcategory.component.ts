import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageserviceService } from 'app/messageservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  description :string ;
  image : string ;
  link :string ;
  video:string ;
  file:string ;
  subsciption;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  saveDescribtion() {
    console.log("any thing")

    let admin= {
      description : this.description,
      image :this.image,
      link :this.link,
    video :this.video,
      file :this.file,
    };

    this.router.navigate(['managecategory'])}
    funsubmit(){}
}
