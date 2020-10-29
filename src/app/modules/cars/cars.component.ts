import { Component, OnDestroy, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';
import { Car } from 'src/app/shared/models/car.model';
import { Subject } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit, OnDestroy {
  faPlus = faPlus;
  isLoading = true;
  cars: Car[];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger = new Subject<null>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCars().subscribe(
      (res) => {
        this.cars = res;
        this.dtTrigger.next();
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  onAddClicked(): void {}

  onEditCar(): void {}

  onDeleteCar(index: number): void {
    this.isLoading = true;

    this.apiService.deleteCar(this.cars[index]._id).subscribe(
      (res) => {
        this.cars.splice(index, 1);
        this.isLoading = false;
        this.dtTrigger.next();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
