import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from "./components/layouts/basiclayout.component";
import { LoginComponent } from "./components/auth/login.component";
import { UsersComponent } from "./components/users/users.component";
import { UserCreateComponent } from './components/users/usercreate.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
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
  },
  {
    path: "users",
    component: BasicLayoutComponent,
    children: [
      {
        path: "",
        component: UsersComponent
      },
      {
        path: "create",
        component: UserCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
