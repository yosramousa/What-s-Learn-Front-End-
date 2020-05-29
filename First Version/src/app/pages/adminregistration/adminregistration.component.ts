import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from 'app/messageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  name :string  ;
  password :string;
  subsciption;
  constructor(private router: Router, private msg: MessageserviceService) { }

  ngOnInit(): void {
  }
  
  AdminLogin() {
        console.log("yosra")
   
        let admin= {
          name : this.name,
          password :this.password
        };

        this.router.navigate(['adminlayout'])
  //   if(this.name=="yosra" && this.password=="88")
  //   {   console.log("yes")
  //   this.router.navigate(['adminlayout'])
  // }
  // else{
  //   console.log("no")

  // }
}}

   


    // this.subsciption = this.msg.GetAllAdmin().subscribe((Employees: any) => {
      
    //   Employees.forEach(emp => {
    //     if (emp.username == this.name && emp.password == this.password) {
    //       console.log("ok")
    //       this.router.navigate(['adminlayout'])
    //     }
    //     else console.log("Noo")

    //   });
    // }, (errs) => {
    //   console.log(errs)
    // })


  
