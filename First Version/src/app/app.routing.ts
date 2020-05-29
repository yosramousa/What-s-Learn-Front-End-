import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditadminprofileComponent } from './pages/editadminprofile/editadminprofile.component';
import { EditcategoryComponent } from './pages/editcategory/editcategory.component';
import { AddchildcategoryComponent } from './pages/addchildcategory/addchildcategory.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { UserdetailComponent } from './pages/userdetail/userdetail.component';
import { AdminregistrationComponent } from './pages/adminregistration/adminregistration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { ManagecategoryComponent } from './pages/managecategory/managecategory.component';
import { AddadminComponent } from './pages/addadmin/addadmin.component';
import { ManageuserComponent } from './pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from './pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from './pages/manageskill/manageskill.component';
import { ManageadminComponent } from './pages/manageadmin/manageadmin.component';
import { AdmindetailsComponent } from './pages/admindetails/admindetails.component';
import { AddcategoryComponent } from './pages/addcategory/addcategory.component';
import { DetailsComponent } from './pages/details/details.component';
import { EdituserdetailsComponent } from './pages/edituserdetails/edituserdetails.component';


export const AppRoutes: Routes = [
  
    {path: 'adminregistration',component: AdminregistrationComponent },
      {path: 'dashboard',component: DashboardComponent },

    {path: 'adminlayout',component: AdminLayoutComponent,
      children: [
          
         
            { path: 'dashboard', component: DashboardComponent, },


                {
                      path: 'managecategory',
                      component: ManagecategoryComponent,
                      
                      },
                      {
                        path: 'addcategory',
                        component: AddcategoryComponent,
                        },
                        {
                          path: 'editcategory',
                          component: EditcategoryComponent,
                          },
                      {
                      path: 'inbox',
                            component:InboxComponent,
                            },
                            {
                      path: 'userdetail',
                             component:UserdetailComponent,
                                    },
                                    {
                                    path: 'details/:ID',
                              component:DetailsComponent,
                              
                               
                                    },
                           
                              {
                       path: 'editadminprofile', 
                              component: EditadminprofileComponent },

          
                               { 

                                path: 'manageuser', 
                                component: ManageuserComponent},
                        
                        { path: 'details', component: DetailsComponent },
                               
                        {
                      path: 'profile', 
                                component: ProfileComponent,
                        children: [
                        { path: 'editadminprofile', component: EditadminprofileComponent },]},
                        {
                          path: 'manageuser', 
                                    component: ManageuserComponent,
                            children: [
                            { path: 'details', component: DetailsComponent },]},

  
    { path: 'managecategory', component: ManagecategoryComponent },
    { path: 'manageadmin', component: ManageadminComponent },
    { path: 'addadmin', component: AddadminComponent },
    { path: 'manageuser', component: ManageuserComponent },
    { path: 'enrollmentrequest', component: EnrollmentrequestComponent },
    { path: 'manageskill', component: ManageskillComponent },
    { path: 'adminregistration', component: AdminregistrationComponent },
    { path: 'admindetails', component: AdmindetailsComponent },
    { path: 'Editcategory', component: EditcategoryComponent },
    { path: 'Addcategory', component: AddcategoryComponent },
    { path: 'Inbox', component: InboxComponent },
    { path: 'userdetail', component: UserdetailComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'edituserdetails', component: EdituserdetailsComponent },
    {path: '',redirectTo: 'adminregistratin',pathMatch: 'full'},
    
             ]
            },
             { path: '**', redirectTo: '/adminregistration',}
            ];

            
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditadminprofileComponent,
    AdminregistrationComponent,
    EditcategoryComponent,
    AddchildcategoryComponent,
    InboxComponent,
    UserdetailComponent,
    DashboardComponent,
    ProfileComponent,
    ManageadminComponent,
    AddcategoryComponent,
    DetailsComponent,
    EdituserdetailsComponent
   
  ],

            imports: [
              BrowserAnimationsModule,
              BrowserModule,
              HttpClientModule,
              NgbModule,
              FormsModule,
              CommonModule,
              RouterModule.forRoot(AppRoutes,{
                useHash: true
              }),
              SidebarModule,
              NavbarModule,
              ToastrModule.forRoot()
           
             
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
          export class AppModule { }
          

            
    
 
  // // {
  // //   path: '',
  // //   component: AdminLayoutComponent,
  // //   children: [
  // //       {
  // //     path: '',
  // //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  // // }]},
 
  // {
  //   path: '**',
  //   redirectTo: '/adminregistration',pathMatch:'full'
  // }
            


  