import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [LoadingSpinnerComponent, FontAwesomeModule, FormsModule],
})
export class SharedModule {}
