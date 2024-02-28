import { Component } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrl: './add-actualite.component.css'
})
export class AddActualiteComponent {
  constructor(private service: ActualiteService, private router: Router) { }


  persistActualite(actualite:any){
    this.service.createActualite(actualite).subscribe(
      data => {
        this.router.navigate(["/dashboard/listActualite"])
        console.log(data);
    });
  }
}
