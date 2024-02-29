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

  selectedFile!: File;


  persistBanque(banque:any){

    let banqueTemp = new FormData();
    banqueTemp.append('imageFile', this.selectedFile,this.selectedFile.name);
    banqueTemp.append('nom', banque.nom);
    banqueTemp.append('adresse', banque.adresse);
    banqueTemp.append('capital', banque.capital);


    this.service.createBanque(banqueTemp).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/dashboard/listBanque"])

    });
  }

    //Gets called when the user selects an image
    public onFileChanged(event:any) {
      //Select File
      this.selectedFile = event.target.files[0];
      //console.log(this.selectedFile);
    }
}
