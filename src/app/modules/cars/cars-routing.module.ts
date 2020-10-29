import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: CarsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
