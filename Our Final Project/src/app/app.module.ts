import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { NgModule } from '@angular/core';
import { AddadminComponent } from './pages/addadmin/addadmin.component';
import { ManageuserComponent } from './pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from './pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from './pages/manageskill/manageskill.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditadminprofileComponent } from './pages/editadminprofile/editadminprofile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ManagecategoryComponent } from './pages/managecategory/managecategory.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { AddchildcategoryComponent } from './pages/addchildcategory/addchildcategory.component';
import { BrowserModule } from '@angular/platform-browser';
import { InboxComponent } from './pages/inbox/inbox.component';
<<<<<<< HEAD
import { UserdetailComponent } from './pages/userdetail/userdetail.component';
=======
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
import { ManageadminComponent } from './pages/manageadmin/manageadmin.component';
import { AdmindetailsComponent } from './pages/admindetails/admindetails.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailsComponent } from './pages/details/details.component';
import { EdituserdetailsComponent } from './pages/edituserdetails/edituserdetails.component';
import { MangeUsersService } from './mange-users.service';
import { ApiService } from './api.service';





@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditadminprofileComponent,
    AdminregistrationComponent,
    EditcategoryComponent,
    AddchildcategoryComponent,
    InboxComponent,
<<<<<<< HEAD
    UserdetailComponent,
=======
>>>>>>> d4b0febf2047281da60591fd7230203cbb880329
    ManagecategoryComponent,
    AddadminComponent,
    EnrollmentrequestComponent,
    ManageuserComponent,
    ManageskillComponent,
    DashboardComponent,
    ProfileComponent,
    ManageadminComponent,
    AdmindetailsComponent,
    AddcategoryComponent,
    DetailsComponent,
    EdituserdetailsComponent,
   


    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    HttpModule,
    ReactiveFormsModule,
  
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot()
 
   
  ],
  providers: [
    MangeUsersService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
