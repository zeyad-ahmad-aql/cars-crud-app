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

  getCar(id: string): Observable<Car> {
    return this.httpClient.get<Car>(`${this.url}/cars/${id}`);
  }

  getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/cars`);
  }

  updateCar(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.url}/cars/${car._id}`, car);
  }

  deleteCar(id: string): Observable<any> {
    return this.httpClient.delete(`${this.url}/cars/${id}`);
  }
}
