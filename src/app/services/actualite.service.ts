import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  constructor(private Http: HttpClient) { }

  createActualite(actualite: any) {
    return this.Http.post(environment.baseUrl + "actualites", actualite);
  }

  getAllActualites() {
    return this.Http.get(environment.baseUrl + "actualites");
  }

  deleteActu(idActu: any) {
    return this.Http.delete(environment.baseUrl + "actualites/" + idActu)
  }
}
