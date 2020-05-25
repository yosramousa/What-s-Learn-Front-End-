import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';

import { NavbarModule} from './shared/navbar/navbar.module';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { AdminloginComponent } from './adminlogin/adminlogin.component';
// import { ManagecategoryComponent } from './pages/managecategory/managecategory.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  

  
    AdminloginComponent,
    // ManagecategoryComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
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
