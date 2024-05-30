import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import(`./modules/login.module`).then((m) => m.LoginModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import(`./modules/welcome.module`).then((m) => m.WelcomeModule),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
