import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyMainComponentComponent} from "./pharmacy-main-component/pharmacy-main-component.component"

const routes: Routes = [
  { path:'main',component:PharmacyMainComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
