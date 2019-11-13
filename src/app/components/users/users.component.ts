import { Component, OnInit } from "@angular/core";
import { UserManagementService } from "./../../services/usermanagement.service";
import { Router } from '@angular/router';
import { UserModel } from 'src/app/services/models/user.model';

@Component({
    selector: "userscomponent",
    templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {

    public users: UserModel[] = [];

    constructor(
        private userManagementService: UserManagementService,
        private router: Router
    ) {

    }

    ngOnInit() {
        const token = localStorage.getItem("token");
        if (!token) {
            this.router.navigate(["login"]);
            return;
        }
        this.userManagementService.listUsers(token, 1).subscribe(x => {
            this.users = x.Data;
        });
    }
}