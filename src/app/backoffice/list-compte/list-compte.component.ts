import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrl: './list-compte.component.css'
})
export class ListCompteComponent {

  constructor(private service: UserService, private router: Router) { }
  users:any;
  ngOnInit() {
    this.refreshListComptes();
  }
  refreshListComptes() {
    this.service.getAllUsers().subscribe(
      (response:any) => {
        this.users = response;
        console.log(this.users);
      }
    );
  }
}
