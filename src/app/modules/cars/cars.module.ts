import { CarRowComponent } from './car-row/car-row.component';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [CarsComponent, CarRowComponent, CarDetailsComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule],
})
export class CarsModule {}
