import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsDashboardRoutingModule } from './admins-dashboard-routing.module';
import { AdminsDashboardComponent } from './admins-dashboard.component';


@NgModule({
  declarations: [
    AdminsDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminsDashboardRoutingModule
  ]
})
export class AdminsDashboardModule { }
