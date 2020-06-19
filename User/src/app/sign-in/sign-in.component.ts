import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/Service/auth.service';
import { NavBarService } from 'src/Service/nav-bar.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignINComponent implements OnInit {

  subsciption
  IsValid = true
  constructor(private router: Router, private authService: AuthService,
    private nav: NavBarService, private route: ActivatedRoute, private toastr: ToastrService
  ) { }
  Url = `${environment.api_url}Uploads/`

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }
  returnUrl
  UserLogin(form) {
    console.log(form.value)

    // let user = {
    //   Email: this.Email,
    //   Password: this.Password
    // };
    this.subsciption = this.authService.LogIn(form.value).subscribe(res => {
      //  console.log(res)
      if (res.Successed) {
        localStorage.setItem("Token", res.Data.Token)
        localStorage.setItem("UserID", res.Data.ID)
        localStorage.setItem("UserName", res.Data.Name)
        localStorage.setItem("UserEmail", res.Data.Email)
        this.IsValid = true
        this.toastr.success("Successfully Sign In", '', {
          timeOut: 1000, easeTime: 1000
        }).onHidden.subscribe(() => {
          if (localStorage.getItem('Url') == null) {
            window.location.href = `${window.location.origin}/#/home`
          } else {

            window.location.href = localStorage.getItem('Url')
          }
        })

      } else {
        this.IsValid = false
      }

    }, err => {
      console.log(err)
    }

    )

  }


}