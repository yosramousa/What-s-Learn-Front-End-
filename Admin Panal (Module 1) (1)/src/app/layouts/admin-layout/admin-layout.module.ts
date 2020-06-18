import { SidebarModule } from './../../sidebar/sidebar.module';
import { NavbarModule } from './../../shared/navbar/navbar.module';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
// import { ProfileComponent } from '../../pages/profile/profile.component';
// import { ManagecategoryComponent } from '../../pages/managecategory/managecategory.component';
// import { AddadminComponent } from '../../pages/addadmin/addadmin.component';
// import { ManageuserComponent } from '../../pages/manageuser/manageuser.component';
// import { EnrollmentrequestComponent } from '../../pages/enrollmentrequest/enrollmentrequest.component';
// import { ManageskillComponent } from '../../pages/manageskill/manageskill.component';
// import { AdminregistrationComponent } from '../../pages/adminregistration/adminregistration.component';
// import { EditcategoryComponent } from '../../pages/editcategory/editcategory.component';
// import { AddchildcategoryComponent } from '../../pages/addchildcategory/addchildcategory.component';
// import { InboxComponent } from '../../pages/inbox/inbox.component';
// import { UserdetailComponent } from '../../pages/userdetail/userdetail.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModuleModule } from 'app/angular-material-module/angular-material-module.module';

// import { EditadminprofileComponent } from 'app/pages/editadminprofile/editadminprofile.component';
// import { ManageadminComponent } from '../../pages/manageadmin/manageadmin.component';
// import { AdmindetailsComponent } from '../../pages/admindetails/admindetails.component';
// import { AddcategoryComponent } from '../../pages/addcategory/addcategory.component';
// import { DetailsComponent } from '../../pages/details/details.component';
// import { EdituserdetailsComponent } from '../../pages/edituserdetails/edituserdetails.component';
// import { EditskillComponent } from '../../pages/editskill/editskill.component';
// import { NotificationComponent } from '../../pages/notification/notification.component';

export const AppRoutes: Routes = [
  
  // {path: 'adminregistration',component: AdminregistrationComponent },
  {path: 'adminLayout',component: AdminLayoutComponent,
    children: [
        {
          path: '',redirectTo: 'adminregistratin',pathMatch: 'full'},
          // { path: 'dashboard', component: DashboardComponent, },
           ]},
           { path: '**', redirectTo: '/adminregistration',}
          ];




@NgModule({
  imports: [

    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    

   
  
  ],
  declarations: [
    // DashboardComponent,
    // ProfileComponent,
    // ManagecategoryComponent,
    // AddadminComponent,
    // ManageuserComponent,
    // EnrollmentrequestComponent,
    // ManageskillComponent,
    // AdminregistrationComponent,
    // EditcategoryComponent,
    // AddchildcategoryComponent,
    // InboxComponent,
    // UserdetailComponent,
    // ManageadminComponent,
    // // AdmindetailsComponent,
    // // AddcategoryComponent,
    // DetailsComponent,
    // EdituserdetailsComponent,
    // EditskillComponent,
    // NotificationComponent
    // EditadminprofileComponent
   
  
  
  ]
})


export class AdminLayoutModule implements OnInit { 
constructor() {}

ngOnInit(): void{

}
// AdminLayout(){
//   const dialogConfig =new MatDialogConfig();
//   dialogConfig.autoFocus =true;
//   dialogConfig.disableClose =true;
//   dialogConfig.width ="40%";
//   dialogConfig.height ="100%";
// }


}