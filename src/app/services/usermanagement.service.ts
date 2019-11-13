import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { UserModel } from "./models/user.model";
import { ListViewModel } from "./models/common.models";
import { HttpClient } from "@angular/common/http"
import { UserExtendedModel } from './models/userextended.model';
import { map } from "rxjs/operators"

@Injectable({
    providedIn: 'root'
})
export class UserManagementService {
    private managementUrl: string = "http://demo.oybek.com/api/UserManagement";
    constructor(private http: HttpClient) { }
    listUsers(token: string, pageNumber: number): Observable<ListViewModel<UserModel>> {
        if (typeof pageNumber !== "number" || pageNumber != pageNumber || pageNumber <= 0) {
            pageNumber = 1;
        }
        const url = `${this.managementUrl}?pageNumber=${pageNumber}`;
        return this.http.get<ListViewModel<UserModel>>(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }

    createUser(token: string, model: UserExtendedModel): Observable<UserExtendedModel> {
        if (!model)
            throw Error("model cannot be null");
        return this.http.post<{
            Data: UserExtendedModel,
            Success: true
        }>(this.managementUrl, model, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).pipe(map(x => {
            return x.Data
        }));
    }
}
