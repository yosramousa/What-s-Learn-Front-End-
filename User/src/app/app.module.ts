import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { TrackComponent } from './track/track.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditCertificateComponent } from './edit-certificate/edit-certificate.component';
import { EditUserLinksComponent } from './edit-user-links/edit-user-links.component';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CertificatePopupComponent } from './certificate-popup/certificate-popup.component';
import {
  MatMenuModule
} from '@angular/material/menu';
import {
  MatDialogModule
} from '@angular/material/dialog';
import { SkillPopupComponent } from './skill-popup/skill-popup.component';
import { LinkPopupComponent } from './link-popup/link-popup.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ArchieveComponent } from './archieve/archieve.component';
import { RouterStateSnapshot } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AddlinkComponent } from './addlink/addlink.component';
import { AddcertificateComponent } from './addcertificate/addcertificate.component';
import { AddskillComponent } from './addskill/addskill.component';
import { ImgcertificateComponent } from './imgcertificate/imgcertificate.component';


@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    SignINComponent,
    SignUpComponent,
    MainCategoryComponent,
    EditProfileComponent,
    SubCategoryComponent,
    TrackComponent,
    ProfileComponent,
    NotFoundComponent,
    EditCertificateComponent,
    EditUserLinksComponent,
    CertificatePopupComponent,
    SkillPopupComponent,
    LinkPopupComponent,
    CourseDetailsComponent,
    ArchieveComponent,
    AddlinkComponent,
    AddcertificateComponent,
    AddskillComponent,
    ImgcertificateComponent,


  ],
  imports: [

    MatMenuModule,

    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger',
    }),
    ToastrModule.forRoot(

      {
        timeOut: 3000,
        easeTime: 5000
      }
    )
  ],
  entryComponents: [CertificatePopupComponent, AddlinkComponent],

  providers: [

    {provide:
    
      LocationStrategy 
    , useClass :HashLocationStrategy

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
