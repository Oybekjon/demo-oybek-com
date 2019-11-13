import { Component, OnInit } from "@angular/core";
import { UserManagementService } from "./../../services/usermanagement.service";
import { Router } from '@angular/router';
import { UserModel } from 'src/app/services/models/user.model';

@Component({
    selector: "usercreate",
    templateUrl: "./usercreate.component.html"
})
export class UserCreateComponent implements OnInit {
    public FirstName: string;
    public LastName: string;
    public Email: string;
    public Password: string;
    public IsAdmin: boolean;

    constructor(
        private router: Router,
        private userManagementService: UserManagementService
    ) { }
    ngOnInit() {
        const token = localStorage.getItem("token");
        if (!token) {
            this.router.navigate(["login"]);
        }
    }

    create() {
        const token = localStorage.getItem("token");
        this.userManagementService.createUser(token, {
            FirstName: this.FirstName,
            LastName: this.LastName,
            Email: this.Email,
            Password: this.Password,
            Role: this.IsAdmin ? "Admin" : "User"
        }).subscribe(x => {
            this.router.navigate(["users"]);
        });
    }
}