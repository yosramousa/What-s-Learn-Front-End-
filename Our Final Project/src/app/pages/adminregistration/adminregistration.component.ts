import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'Services/auth.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  Email :string  ;
  Password :string;
  subsciption;
  IsValid=false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  AdminLogin() {
   
        let admin= {
          Email : this.Email,
          Password :this.Password
        };
this.subsciption = this.authService.LogIn(admin).subscribe(res=>
  {
    console.log(res)
    if(res.Successed)
    {
      localStorage.setItem("Token", res.Data.Token)
      localStorage.setItem("AdminID", res.Data.ID)
      localStorage.setItem("AdminName", res.Data.Name)
      localStorage.setItem("AdminEmail", res.Data.Email)
      this.IsValid=false;
      this.router.navigate(['adminlayout/profile'])
    } else{
      this.IsValid=true
    }

  }
  )
        
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


  
