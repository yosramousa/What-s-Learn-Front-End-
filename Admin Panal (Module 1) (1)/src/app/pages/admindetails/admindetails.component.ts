import { Component, OnInit } from '@angular/core';
import { ManageAdminService } from './../../../Services/manage-admin.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private myActivatedRoute: ActivatedRoute, private manageAdmin :ManageAdminService ) { }
Admin
Url=environment.api_url

  ngOnInit(): void {
    this.myActivatedRoute.snapshot.params['ID']
    this.manageAdmin.GetByID(this.myActivatedRoute.snapshot.params['ID']).subscribe(res=>{
     
      this.Admin = res.Data;
      console.log(this.Admin)
    })
  }

}
