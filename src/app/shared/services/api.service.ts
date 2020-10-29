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

  createCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.url}/cars`, car);
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/cars`);
  }

  deleteCar(id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/cars/${id}`);
  }
}
