import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ManagecategoryComponent } from '../../pages/managecategory/managecategory.component';
import { AddadminComponent } from '../../pages/addadmin/addadmin.component';
import { ManageuserComponent } from '../../pages/manageuser/manageuser.component';
import { EnrollmentrequestComponent } from '../../pages/enrollmentrequest/enrollmentrequest.component';
import { ManageskillComponent } from '../../pages/manageskill/manageskill.component';
import { EditadminprofileComponent } from '../../pages/editadminprofile/editadminprofile.component';
import { AdminregistrationComponent } from '../../pages/adminregistration/adminregistration.component';
import { EditcategoryComponent } from '../../pages/editcategory/editcategory.component';
import { AddchildcategoryComponent } from '../../pages/addchildcategory/addchildcategory.component';
import { InboxComponent } from '../../pages/inbox/inbox.component';
import { UserdetailComponent } from '../../pages/userdetail/userdetail.component';
import { ManageadminComponent } from '../../pages/manageadmin/manageadmin.component';
import { AdmindetailsComponent } from '../../pages/admindetails/admindetails.component';
import { AddcategoryComponent } from '../../pages/addcategory/addcategory.component';
import { DetailsComponent } from '../../pages/details/details.component';
import { EdituserdetailsComponent } from '../../pages/edituserdetails/edituserdetails.component';
import { EditskillComponent } from '../../pages/editskill/editskill.component';
// import { NotificationComponent } from '../../pages/notification/notification.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'managecategory', component: ManagecategoryComponent },
    { path: 'addadmin', component: AddadminComponent },
    { path: 'manageuser', component: ManageuserComponent },
    { path: 'managadmin', component: ManageadminComponent },
    { path: 'enrollmentrequest', component: EnrollmentrequestComponent },
    { path: 'manageskill', component: ManageskillComponent },
    { path: 'adminregistration', component: AdminregistrationComponent },
    { path: 'Editadminprofile', component: EditadminprofileComponent },
    { path: 'Editcategory', component: EditcategoryComponent },
    { path: 'Addchildcategory', component: AddchildcategoryComponent },
    { path: 'Inbox', component: InboxComponent },
    { path: 'userdetail', component: UserdetailComponent },
    { path: 'Admindetails', component: AdmindetailsComponent },
    { path: 'Addcategory', component: AddcategoryComponent },
    { path: 'details/:ID', component: DetailsComponent},
    { path: 'edituserdetails', component: EdituserdetailsComponent },
    // { path: 'editskill', component: EditskillComponent },
    // { path: 'notification', component: NotificationComponent },

];
