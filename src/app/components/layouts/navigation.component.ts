import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "navigation",
    templateUrl: "./navigation.component.html"
})
export class NavigationComponent implements OnInit {
    public IsLoggedIn: boolean;

    constructor(private router: Router) { }

    ngOnInit() {
        const token = localStorage.getItem("token");
        this.IsLoggedIn = !!token;
    }

    logout() {
        localStorage.clear();
        this.IsLoggedIn = false;
        this.router.navigate(["login"]);
    }
}