import { RouterModule, Routes } from '@angular/router';

import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: ':id', component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
