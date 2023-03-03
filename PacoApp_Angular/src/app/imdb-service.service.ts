import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from './pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {
  constructor(private http: HttpClient) {}

  getLista(url: string): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(url);
  }
  getActores(url:string){
    return this.http.get<Pelicula[]>(url);

  }

}