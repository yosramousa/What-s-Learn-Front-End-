import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ManagecategoryComponent } from '../../pages/managecategory/managecategory.component';
import { AddadminComponent } from '../../pages/addadmin/addadmin.component';
import { ManageuserComponent } from '../../pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from '../../pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from '../../pages/manageskill/manageskill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditadminprofileComponent } from '../../pages/editadminprofile/editadminprofile.component';
import { AdminregistrationComponent } from '../../pages/adminregistration/adminregistration.component';
import { EditcategoryComponent } from '../../pages/editcategory/editcategory.component';
import { AddchildcategoryComponent } from '../../pages/addchildcategory/addchildcategory.component';
import { InboxComponent } from '../../pages/inbox/inbox.component';
import { UserdetailComponent } from '../../pages/userdetail/userdetail.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { ManageadminComponent } from '../../pages/manageadmin/manageadmin.component';
import { AdmindetailsComponent } from '../../pages/admindetails/admindetails.component';
import { AddcategoryComponent } from '../../pages/addcategory/addcategory.component';
import { DetailsComponent } from '../../pages/details/details.component';
import { EdituserdetailsComponent } from '../../pages/edituserdetails/edituserdetails.component';

export const AppRoutes: Routes = [
  
  {path: 'adminregistration',component: AdminregistrationComponent },
  {path: 'adminLayout',component: AdminLayoutComponent,
    children: [
        {
          path: '',redirectTo: 'adminregistratin',pathMatch: 'full'},
          { path: 'dashboard', component: DashboardComponent, },
           ]},
           { path: '**', redirectTo: '/adminregistration',}
          ];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ManagecategoryComponent,
    AddadminComponent,
    ManageuserComponent,
    EnrollmentrequestComponent,
    ManageskillComponent,
    AdminregistrationComponent,
    EditadminprofileComponent,
    EditcategoryComponent,
    AddchildcategoryComponent,
    InboxComponent,
    UserdetailComponent,
    ManageadminComponent,
    AdmindetailsComponent,
    AddcategoryComponent,
    DetailsComponent,
    EdituserdetailsComponent
   
  
  
  ]
})

export class AdminLayoutModule { }
