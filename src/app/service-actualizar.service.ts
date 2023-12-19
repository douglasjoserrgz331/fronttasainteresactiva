import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceActualizarService {
  private apiUrl = 'http://localhost:8080/api/actualizar'; // URL de la API de consultar en Spring Boot

  constructor(private http: HttpClient) { }

  actualizarDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}