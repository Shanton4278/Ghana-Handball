import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { signInModel } from '../models/authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  signin(item:signInModel):Observable<any>{
    return this.http.post<signInModel>(environment.baseUrl + '/admin/login', item)
  }
}
