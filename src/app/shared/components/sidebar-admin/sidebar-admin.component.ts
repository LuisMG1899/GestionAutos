import { Component, Input, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'house', class: '' },
  { path: 'marcas-admin/admin', title: 'Marcas', icon: 'dns', class: '' },
  { path: 'usuario-admin', title: 'Usuarios', icon: 'supervisor_account', class: '' },
  { path: 'autos-admin/autos', title: 'Autos', icon: 'drive_eta', class: '' }
];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {
  @Input() Username: string;
  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu(): boolean {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

}
