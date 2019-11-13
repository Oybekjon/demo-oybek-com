import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from "./layouts/navigation.component";
import { BasicLayoutComponent } from "./layouts/basiclayout.component";
import { LoginComponent } from "./auth/login.component";
import { UsersComponent } from "./users/users.component";
import { UserCreateComponent } from "./users/usercreate.component";

@NgModule({
    declarations: [
        NavigationComponent,
        BasicLayoutComponent,
        LoginComponent,
        UsersComponent,
        UserCreateComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavigationComponent,
        BasicLayoutComponent,
        LoginComponent,
        UsersComponent,
        UserCreateComponent
    ]
})
export class ComponentsModule { }