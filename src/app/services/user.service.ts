import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlRegistration = environment.baseUrl+'api/auth/signup';

  constructor(private Http: HttpClient) { }

  createUser(user: any) {
    return this.Http.post(this.urlRegistration, user);
  }

  getAllUsers() {
    return this.Http.get(environment.baseUrl+"users");
  }

  getAllAgents() {
    return this.Http.get(environment.baseUrl+"users/agents");
  }
}
