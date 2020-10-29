import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';
import { Car } from 'src/app/shared/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  isLoading = true;
  cars: Car[];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCars().subscribe(
      (res) => {
        this.cars = res;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
