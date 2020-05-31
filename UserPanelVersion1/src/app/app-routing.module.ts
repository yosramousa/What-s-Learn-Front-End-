import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from'./navbar/navbar.component';
import {FooterComponent} from'./footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import { from } from 'rxjs';


const routes: Routes = [
{path:'navbar-component' ,component:NavbarComponent},
{path:'home-component' ,component:HomeComponent},
{path:'about-component' ,component:AboutComponent},
{path:'contactus-component' ,component:ContactusComponent},
{path:'footer-componant' ,component:FooterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
