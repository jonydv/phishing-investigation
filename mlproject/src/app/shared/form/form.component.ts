import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { Observable } from 'rxjs';
import { FormInterface } from './form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formData$: Observable<FormInterface> = this.formService.getFormData();
  form: FormGroup = this.fb.group(
    {
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    },
    { updateOn: 'change' }
  );
  constructor(private fb: FormBuilder, private formService: FormService) {}

  setEmail(): void {
    if (this.form.get('email')?.value) {
      this.formService.setEmail(this.form.get('email')?.value);
    }
  }

  onSubmit(): void {
    if (this.form.get('password')?.value) {
      this.formService.setPassword(this.form.get('password')?.value);
    }
    this.formData$.subscribe((data) => {
      if (data.email && data.password) {
        window.open('https://www.mercadolibre.com.ar/', '_self');
      }
    });
  }
}
