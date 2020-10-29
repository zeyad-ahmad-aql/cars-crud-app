import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { ApiService } from 'src/app/shared/services/api.service';
import { Car } from 'src/app/shared/models/car.model';
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
  subscriptionsArr: Subscription[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptionsArr.push(
      this.apiService.getAllCars().subscribe(
        (res) => {
          this.cars = res;
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      )
    );
  }

  onAddClicked(): void {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onEditCar(index: number): void {
    this.router.navigate([this.cars[index]._id], {
      relativeTo: this.activatedRoute,
    });
  }

  onDeleteCar(index: number): void {
    this.isLoading = true;

    this.apiService.deleteCar(this.cars[index]._id).subscribe(
      (res) => {
        this.cars.splice(index, 1);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptionsArr)
      subscription.unsubscribe();
  }
}
