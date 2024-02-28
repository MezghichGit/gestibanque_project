import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent implements OnInit{
  constructor(private service: ActualiteService) { }

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


}
