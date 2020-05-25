import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ManagecategoryComponent } from '../../pages/managecategory/managecategory.component';
import { AddadminComponent } from '../../pages/addadmin/addadmin.component';
import { ManageuserComponent } from '../../pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from '../../pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from '../../pages/manageskill/manageskill.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ManagecategoryComponent,
    AddadminComponent,
    ManageuserComponent,
    EnrollmentrequestComponent,
    ManageskillComponent,
  
  
  ]
})

export class AdminLayoutModule { }
