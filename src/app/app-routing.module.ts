import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicLayoutComponent } from './components/layout/basiclayout.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "",
    component: BasicLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
