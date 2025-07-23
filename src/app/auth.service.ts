import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isSignedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
