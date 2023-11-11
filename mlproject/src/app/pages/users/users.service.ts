import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const url = `${this.apiBaseUrl}/users`;

    return this.http.get(url).pipe(tap(console.log));
  }
}
