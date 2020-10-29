import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';
import { Car } from 'src/app/shared/models/car.model';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit, OnDestroy {
  isLoading = true;
  isNew: boolean;
  car = new Car();
  subscriptionsArr: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.id !== 'new')
        this.subscriptionsArr.push(
          this.apiService.getCar(params.id).subscribe(
            (res) => {
              this.car = res;
              this.isNew = false;
              this.isLoading = false;
            },
            (error) => {
              console.log(error);
              this.isLoading = false;
            }
          )
        );
      else {
        this.isNew = true;
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    if (this.isNew)
      this.subscriptionsArr.push(
        this.apiService.createCar(this.car).subscribe(
          (res) => this.router.navigateByUrl('cars'),
          (error) => {
            console.log(error);
            this.isLoading = false;
          }
        )
      );
    else
      this.subscriptionsArr.push(
        this.apiService.updateCar(this.car).subscribe(
          (res) => this.router.navigateByUrl('cars'),
          (error) => {
            console.log(error);
            this.isLoading = false;
          }
        )
      );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptionsArr)
      subscription.unsubscribe();
  }
}
