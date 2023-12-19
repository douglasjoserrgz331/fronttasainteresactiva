import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAnularService {
  private apiUrl = 'http://localhost:8080/api/anular'; // URL de la API de consultar en Spring Boot

  constructor(private http: HttpClient) { }

  anularDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}