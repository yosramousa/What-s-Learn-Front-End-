import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
// import { AngularMaterialModuleModule } from 'app/angular-material-module/angular-material-module.module';


@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ],
    providers: [
    
    ],
})

export class SidebarModule {}
