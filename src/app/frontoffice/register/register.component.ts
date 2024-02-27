import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:any;
  invalidUser = false;
  validUser = false;
  errorMessage = "";
  successMessage = "";

  listRole : string[] =[]

  constructor(
    private userService: UserService,
    private router: Router) { }



  register(myform:any){
    this.user = {
      'username': myform.value.username,
      'email': myform.value.email,
      'password': myform.value.password
    }
    console.log(this.user);

  this.userService.createUser(this.user).subscribe(

    (response :any)=> {
      //this.router.navigate(['login']);

      //this.validUser = true
      //this.successMessage = response.message
      myform.resetForm(myform);
      this.router.navigate(['home/login']);
    },

    error => {
      this.invalidUser = true
      this.errorMessage = error.error.message
     // console.log(error)
    }

  );
}
}
