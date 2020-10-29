import { Car } from './../models/car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  gerCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/`);
  }
}
