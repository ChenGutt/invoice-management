import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  constructor() { }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.authenticated)
    })
    console.log(this.authenticated)
    return promise;
  }

  autheticate() {
    this.authenticated = true;
  }

  deautheticate() {
    this.authenticated = false;
    console.log(this.authenticated)
  }


}
