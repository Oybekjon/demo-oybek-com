import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from "./layouts/navigation.component";
import { BasicLayoutComponent } from "./layouts/basiclayout.component";
import { LoginComponent } from "./auth/login.component";

@NgModule({
    declarations: [
        NavigationComponent,
        BasicLayoutComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        NavigationComponent,
        BasicLayoutComponent,
        LoginComponent
    ]
})
export class ComponentsModule { }