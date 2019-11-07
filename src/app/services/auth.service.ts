import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AuthResultModel } from './models/authresult.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(email: string, password: string): Observable<AuthResultModel> {
    const payload = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&grant_type=password`;
    return this.http.post<AuthResultModel>("http://demo.oybek.com/oauth/token", payload, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
}
