import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { NavigationComponent } from "./layout/navigation.component";
import { BasicLayoutComponent } from "./layout/basiclayout.component";
import { LoginComponent } from "./auth/login/login.component";

@NgModule({
    declarations: [
        BasicLayoutComponent,
        NavigationComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        BasicLayoutComponent,
        NavigationComponent,
        LoginComponent
    ]
})
export class ComponentsModule { }