import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { FormInterface } from './form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formData$: BehaviorSubject<FormInterface | null> =
    new BehaviorSubject<FormInterface | null>(null);
  constructor() {}

  setEmail(email: string) {
    this.formData$.next({ email });
  }

  setPassword(password: string) {
    this.formData$.next({ ...this.formData$.value, password });
  }

  getFormData(): Observable<FormInterface> {
    return this.formData$.asObservable().pipe(filter(Boolean));
  }
}
