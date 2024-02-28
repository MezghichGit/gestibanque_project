import { Component } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-actualite',
  templateUrl: './list-actualite.component.html',
  styleUrl: './list-actualite.component.css'
})
export class ListActualiteComponent {
  constructor(private service: ActualiteService, private router: Router) { }
  actualites:any;
  ngOnInit() {
    this.refreshListComptes();
  }
  refreshListComptes() {
    this.service.getAllActualites().subscribe(
      (response:any) => {
        this.actualites = response;
        console.log(this.actualites);
      }
    );
  }

  addActualite(){
    this.router.navigate(['/dashboard/addActualite']);
  }
}
