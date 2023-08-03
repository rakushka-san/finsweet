import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISubscription } from '../models/subscription';
import { Observable } from 'rxjs';

const URL = `${environment.apiUrl}subscriptions`;

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(private http: HttpClient) {}

  postSubscription(subscription: ISubscription): Observable<ISubscription> {
    return this.http.post<ISubscription>(URL, subscription);
  }
}
