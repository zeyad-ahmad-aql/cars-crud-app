import { CarDetailsComponent } from './car-details/car-details.component';
import { CarRowComponent } from './car-row/car-row.component';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CarsComponent, CarDetailsComponent, CarRowComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule, DataTablesModule],
})
export class CarsModule {}
