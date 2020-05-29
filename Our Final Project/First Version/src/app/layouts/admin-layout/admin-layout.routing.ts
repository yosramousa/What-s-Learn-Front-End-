import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ManagecategoryComponent } from '../../pages/managecategory/managecategory.component';
import { AddadminComponent } from '../../pages/addadmin/addadmin.component';
import { ManageuserComponent } from '../../pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from '../../pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from '../../pages/manageskill/manageskill.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'managecategory', component: ManagecategoryComponent },
    { path: 'addadmin', component: AddadminComponent },
    { path: 'manageuser', component: ManageuserComponent },
    { path: 'enrollmentrequest', component: EnrollmentrequestComponent },
    { path: 'manageskill', component: ManageskillComponent },
    






];
