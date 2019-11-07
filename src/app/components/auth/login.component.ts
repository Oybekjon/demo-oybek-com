import { Component } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: "logincomponent",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    public isLoading: boolean = false;
    public email: string;
    public password: string;

    constructor(private authService: AuthService) {

    }

    login() {
        this.authService.authenticate(this.email, this.password).subscribe(x => {
            console.log(x.access_token);
        });
    }
}