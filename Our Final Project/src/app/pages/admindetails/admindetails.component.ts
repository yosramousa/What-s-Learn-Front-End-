import { Component, OnInit } from '@angular/core';
import { ManageAdminService } from 'app/manage-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private myActivatedRoute: ActivatedRoute, private manageAdmin :ManageAdminService ) { }
Admin
  ngOnInit(): void {
    this.myActivatedRoute.snapshot.params['ID']
    this.manageAdmin.GetByID(this.myActivatedRoute.snapshot.params['ID']).subscribe(res=>{
     
      this.Admin = res.Data;
      console.log(this.Admin)
    })
  }

}
