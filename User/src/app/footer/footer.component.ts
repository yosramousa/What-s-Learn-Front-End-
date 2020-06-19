import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/Service/footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private footerService:FooterService , private router : Router) { }
  Result
  ngOnInit(): void {
    this.footerService.GetMainCategory().subscribe(res=>{
      this.Result = res.Data
      console.log(this.Result)
    })
  }

  GoTo(id){
    this.router.navigate([`/main-catogory/${id}`])
  }

}
