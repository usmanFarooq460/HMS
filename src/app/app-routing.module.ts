import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./Accounts/login/login.component"

const routes: Routes = [
  {
    path: 'Pharmacy',
    loadChildren: () =>
      import('./app-main/pharmacy/pharmacy.module').then(
        (m) => m.PharmacyModule
      ),
  },
  { path:"",component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
