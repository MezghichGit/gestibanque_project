import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: any;
  password: any;

  invalidLogin = false;
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {

    this.loginservice.authenticate(this.username, this.password).subscribe(
      (data:any) => {
        this.router.navigate(['/dashboard'])
                this.invalidLogin = false
        //console.log(data.roles[0])
       /* if(data.roles[0]==='SUPER_ADMIN'){
                this.router.navigate(['/dashboard'])
                this.invalidLogin = false
        }
        else if(data.roles[0]==='AGENT')
        {
          this.router.navigate(['/dashboardAgent'])
                this.invalidLogin = false
               //alert("Ok2")
        }*/
      },
      (error:any) => {
        this.invalidLogin = true
        console.log(error)
      }
    );
  }
}
