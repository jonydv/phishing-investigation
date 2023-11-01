import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, filter, tap } from 'rxjs';
import { FormInterface } from './form.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  formData$: BehaviorSubject<FormInterface | null> =
    new BehaviorSubject<FormInterface | null>(null);
  apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  setEmail(email: string) {
    this.formData$.next({ email });
  }

  setPassword(password: string) {
    this.formData$.next({ ...this.formData$.value, password });
  }

  getFormData(): Observable<FormInterface> {
    return this.formData$.asObservable().pipe(filter(Boolean));
  }

  postUserData(): Observable<any> {
    const url = `${this.apiBaseUrl}/users`;
    const user = {
      email: this.formData$.value?.email!,
      password: this.formData$.value?.password,
    };
    return this.http.post(url, user).pipe(tap(console.log));
  }
}
