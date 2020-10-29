import { CarCreationPopupComponent } from './car-creation-popup/car-creation-popup.component';
import { CarRowComponent } from './car-row/car-row.component';
import { CarsComponent } from './cars.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CarsComponent, CarCreationPopupComponent, CarRowComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule],
})
export class CarsModule {}
