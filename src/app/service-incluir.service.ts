import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceIncluirService {
  private apiUrl = 'http://localhost:8080/api/incluir'; // URL de la API de incluir en Spring Boot

  constructor(private http: HttpClient) { }

  incluirDatos(datos: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, datos);
  }
}