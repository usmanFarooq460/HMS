import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyMainComponentComponent } from "./pharmacy-main-component/pharmacy-main-component.component"

@NgModule({
  declarations: [
    PharmacyMainComponentComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule
  ]
})
export class PharmacyModule { }
