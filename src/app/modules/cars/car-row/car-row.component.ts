import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { Car } from 'src/app/shared/models/car.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[car-row]',
  templateUrl: './car-row.component.html',
  styleUrls: ['./car-row.component.scss'],
})
export class CarRowComponent implements OnInit {
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  @Input() car: Car;
  @Input() index: number;

  @Output() editCar = new EventEmitter<number>();
  @Output() deleteCar = new EventEmitter<number>();

  constructor() {}

  onEditClicked(): void {
    this.editCar.next(this.index);
  }

  onDeleteClicked(): void {
    this.deleteCar.next(this.index);
  }

  ngOnInit(): void {}
}
