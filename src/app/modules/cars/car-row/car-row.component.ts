import { Component, Input, OnInit } from '@angular/core';

import { Car } from 'src/app/shared/models/car.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[car-row]',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.scss'],
})
export class CarRowComponent implements OnInit {
  @Input() car: Car;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
