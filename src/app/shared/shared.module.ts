import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoadingSpinnerComponent, FontAwesomeModule],
})
export class SharedModule {}
