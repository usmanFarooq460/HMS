import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app-main/dashboards/dashboards.module').then(
        (m) => m.DashboardsModule
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./Accounts/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Pharmacy',
    loadChildren: () =>
      import('./app-main/pharmacy/pharmacy.module').then(
        (m) => m.PharmacyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
