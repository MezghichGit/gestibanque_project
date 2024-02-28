import { Component } from '@angular/core';
import { BanqueService } from '../../services/banque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-banque',
  templateUrl: './add-banque.component.html',
  styleUrl: './add-banque.component.css'
})
export class AddBanqueComponent {


  constructor(private service: BanqueService, private router: Router) { }


  persistBanque(banque:any){
    this.service.createBanque(banque).subscribe(
      data => {
        this.router.navigate(["/dashboard/listBanque"])
        console.log(data);
    });
  }
}
