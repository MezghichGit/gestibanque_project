import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrl: './add-agent.component.css'
})
export class AddAgentComponent {
  agent:any;
  constructor(
    private userService: UserService,
    private router: Router) { }

 //Gets called when the user selects an image
 /*public onFileChanged(event:any) {
  //Select File
  this.selectedFile = event.target.files[0];
  //console.log(this.selectedFile);
}*/


  persistAgent(myform:any){
    this.agent = {
      'username': myform.value.username,
      'email': myform.value.email,
      'password': myform.value.password,
      'nom': myform.value.nom,
      'prenom': myform.value.prenom,
      'telephone': myform.value.telephone,
      'matricule': myform.value.matricule,
      'role':["agent"]
    }
    console.log(this.agent);

  this.userService.createUser(this.agent).subscribe(

    (response :any)=> {
      myform.resetForm(myform);
      this.router.navigate(['dashboard/listAgent']);
    },

    error => {
       console.log(error)
    }

  );
}
}
