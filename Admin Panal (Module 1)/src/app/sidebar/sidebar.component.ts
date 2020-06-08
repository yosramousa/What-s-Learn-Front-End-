import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/adminlayout/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/adminlayout/profile', title: 'Profile', icon: ' nc-single-02', class: '' },
    { path: '/adminlayout/managecategory', title: 'Manage Category', icon: 'nc-single-copy-04', class: '' },
    { path: '/adminlayout/manageadmin', title: 'Manage Admin', icon: 'nc-circle-10', class: '' },
    { path: '/adminlayout/manageuser', title: 'Manage Users', icon: 'nc-badge', class: '' },
    { path: '/adminlayout/manageskill', title: 'Manage Skills', icon: 'nc-trophy', class: '' },
    { path: '/adminlayout/enrollmentrequest', title: 'Enrollment Request', icon: 'nc-email-85', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

    AdminName:string
    public menuItems: any[];
    ngOnInit() {
        this.AdminName=localStorage.getItem("AdminName")
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
