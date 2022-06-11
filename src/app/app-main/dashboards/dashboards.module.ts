import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { MainDashboardsComponent } from './main-dashboards/main-dashboards.component';


@NgModule({
  declarations: [
    MainDashboardsComponent
  ],
  imports: [
    CommonModule,
    DashboardsRoutingModule
  ]
})
export class DashboardsModule { }
