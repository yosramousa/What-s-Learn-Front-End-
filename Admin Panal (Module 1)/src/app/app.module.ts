import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ManagecategoryComponent } from './pages/managecategory/managecategory.component';
import { ManageadminComponent } from './pages/manageadmin/manageadmin.component';
import { ManageskillComponent } from './pages/manageskill/manageskill.component';
import { ManageuserComponent } from './pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from './pages/enrollmentrequest/enrollmentrequest.component';
 
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module'; 

import { EditadminprofileComponent } from './pages/editadminprofile/editadminprofile.component';
import { AddadminComponent } from './pages/addadmin/addadmin.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
// import { AddchildcategoryComponent } from './pages/addchildcategory/addchildcategory.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { UserdetailComponent } from './pages/userdetail/userdetail.component';

import { AdmindetailsComponent } from './pages/admindetails/admindetails.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './pages/details/details.component';
import { EdituserdetailsComponent } from './pages/edituserdetails/edituserdetails.component';
import { MangeUsersService } from 'Services/mange-users.service';
import { ApiService } from 'Services/api.service';
import { EditskillComponent } from './pages/editskill/editskill.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AdminLayoutRoutes } from './layouts/admin-layout/admin-layout.routing';
import { AngularMaterialModuleModule } from './angular-material-module/angular-material-module.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddchildcategoryComponent } from './pages/addchildcategory/addchildcategory.component';
import { MsgdetailsComponent } from './pages/msgdetails/msgdetails.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditadminprofileComponent,
    AdminregistrationComponent,
    EditcategoryComponent,
    DashboardComponent,
    InboxComponent,
    UserdetailComponent,
    ManagecategoryComponent,
    AddadminComponent,
    EnrollmentrequestComponent,
    ManageuserComponent,
    ManageskillComponent,
    AddchildcategoryComponent,
    ProfileComponent,
    ManageadminComponent,
    AdmindetailsComponent,
    AddcategoryComponent,
    DetailsComponent,
    EdituserdetailsComponent,
    EditskillComponent,
    NotificationComponent,
    MsgdetailsComponent,
    NotFoundComponent,
    
  ],
  
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AdminLayoutModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    HttpModule,
    ReactiveFormsModule,
    // AngularMaterialModuleModule,
    MatDialogModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
    }),
    SidebarModule,
    NavbarModule,
    // ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', children:AdminLayoutRoutes },
      { path: '', children:AppRoutes },
  
   
  ])],
  entryComponents:[ EditskillComponent, NotificationComponent],
  providers: [
    MangeUsersService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
