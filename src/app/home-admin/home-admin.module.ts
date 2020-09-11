import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeAdminRoutingModule,
    MaterialModule,
  ]
})
export class HomeAdminModule { }
