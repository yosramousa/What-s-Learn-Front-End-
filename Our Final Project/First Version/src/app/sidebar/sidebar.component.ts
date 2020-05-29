import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
    { path: '/profile', title: 'Profile', icon: 'nc-diamond', class: '' },
    { path: '/managecategory', title: 'Manage Category', icon: 'nc-diamond', class: '' },
    { path: '/addadmin', title: 'Add Admin', icon: 'nc-diamond', class: '' },
    { path: '/manageuser', title: 'Manage Users', icon: 'nc-caps-small', class: '' },
    { path: '/enrollmentrequest', title: 'Enrollment Request', icon: 'nc-caps-small', class: '' },
    { path: '/manageskill', title: 'Manage Skills', icon: 'nc-caps-small', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
