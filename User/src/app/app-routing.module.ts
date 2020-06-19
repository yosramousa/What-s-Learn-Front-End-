import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from'./navbar/navbar.component';
import {FooterComponent} from'./footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import { from } from 'rxjs';
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
import { CertificatePopupComponent } from './certificate-popup/certificate-popup.component';
import { SkillPopupComponent } from './skill-popup/skill-popup.component';
import { LinkPopupComponent } from './link-popup/link-popup.component';
import { CourseService } from 'src/Service/course.service';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ArchieveComponent } from './archieve/archieve.component';


const routes: Routes = [
{path:'navbar' ,component:NavbarComponent},
{path:'home' ,component:HomeComponent},
{path:'about' ,component:AboutComponent},
{path:'contactus' ,component:ContactusComponent},
{path:'footer' ,component:FooterComponent},
{path:'sign-in' ,component:SignINComponent},
{path:'sign-up' ,component:SignUpComponent},
{path:'edit-profile',component:EditProfileComponent},
{path:'main-catogory/:id' ,component:MainCategoryComponent},
{path:'sub-catogory/:id' ,component:SubCategoryComponent},
{path:'track/:id' ,component:TrackComponent},
{path:'profile',component:ProfileComponent},
{path:'edit-user-certificate',component:EditCertificateComponent},
{path:'edit-user-link',component:EditUserLinksComponent},
{path:'certPopUp/:id', component:CertificatePopupComponent },
{path:'skillpopup/:id' , component:SkillPopupComponent},
{path:'linkpopup/:id' , component:LinkPopupComponent},
{path:'course-details/:TrackId/:CourseId',component:CourseDetailsComponent},
{path:'archieve/:id',component:ArchieveComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
