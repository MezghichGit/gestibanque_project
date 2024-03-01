import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  urlLogin = environment.baseUrl+'api/auth/signin';

  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any) {


    let userData:any = this.httpClient.post(this.urlLogin,
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
           sessionStorage.setItem('jwtToken', data.accessToken);
           sessionStorage.setItem('username', data.username);
           sessionStorage.setItem('email', data.email);
           sessionStorage.setItem('nom', data.nom);
           sessionStorage.setItem('prenom', data.prenom);
           userData = data;
           //console.log(userData)
           return userData;
        }
      )
    );
    return userData;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('jwtToken')
    sessionStorage.removeItem('email')
  }
}
