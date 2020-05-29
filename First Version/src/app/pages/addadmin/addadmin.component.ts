import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  subsciption: any;
  name :string  ;
  password :string;
  email: string;
  phone: string;
  address: string;
  image: string;
  age: number;

  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  Genders = [
    {id: 1, name: "Male"},
    {id: 2, name: "Female"}]

  @Output() add = new EventEmitter()
  AddAdmin(){
    let admin = {
      username: this.name,
      password: this.password,
      age: this.age,
      email: this.email,
      address: this.address,
      phone:this.phone,
      image:this.image,
     
    };
    this.add.emit(admin);
    if(!admin==null)
    this.router.navigate(['/addadmin'])
  }

  }

