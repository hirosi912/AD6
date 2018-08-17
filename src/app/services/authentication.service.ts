import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Globals } from '../globals';

import * as crypto from 'crypto-js';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    apiUrl ='';
    CryptoJS = crypto;

    constructor(
        private http: HttpClient, 
        private globals: Globals) {
            this.apiUrl = globals.ApiUrl + 'api/Auth/Login';            
     }

    login(userinfo: any) {        
        var key = this.CryptoJS.enc.Utf8.parse("2b7e151738aed2a6abf7158809cf4f3c");
        var iv = this.CryptoJS.enc.Utf8.parse("6352a4c2cff80677");
        var encrypted = this.CryptoJS.AES.encrypt(userinfo.password, key, {
            keySize: 128 / 8,
            mode: this.CryptoJS.mode.CBC,
            padding: this.CryptoJS.pad.Pkcs7,
            iv: iv
        });
        var pwd = encodeURIComponent(encrypted.toString());
        var data = 'grant_type=password&userid=' + userinfo.username + '&userpassword=' + pwd + '&remember=false';
        return this.http.post<any>(this.apiUrl, data, {headers: httpOptions.headers})
            .pipe(map(user => {

                // login successful if there's a jwt token in the response
                if (user && user.jobj.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.jobj.token));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}