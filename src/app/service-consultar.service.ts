import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceConsultarService {
  private apiUrl = 'http://localhost:8080/api/consultar'; // URL de la API de consultar en Spring Boot

  constructor(private http: HttpClient) { }

  consultarDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}