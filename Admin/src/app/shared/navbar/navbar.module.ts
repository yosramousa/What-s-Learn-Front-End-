import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
// import { AngularMaterialModuleModule } from 'app/angular-material-module/angular-material-module.module';


@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent ],
    providers: [

    ],
})

export class NavbarModule {}
