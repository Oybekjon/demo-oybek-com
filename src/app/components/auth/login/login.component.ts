import { Component } from "@angular/core";

@Component({
    selector: "logincomponent",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    public message: string;
    public email: string;
    public emailError: string;
    public password: string;
    public passwordError: string;

    public isLoading: boolean = false;
    login() { 
        
    }
}