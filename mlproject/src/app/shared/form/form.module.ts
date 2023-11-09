import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, SpinnerModule],
  exports: [FormComponent],
})
export class FormModule {}
