import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: "logincomponent",
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    public isLoading: boolean = false;
    public email: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router) {

    }

    ngOnInit() {
        const token = localStorage.getItem("token");
        if (token) {
            this.router.navigate(["users"]);
        }
    }

    login() {
        this.authService.authenticate(this.email, this.password).subscribe(x => {
            localStorage.setItem("token", x.access_token);
            this.router.navigate(["users"]);
        });
    }
}