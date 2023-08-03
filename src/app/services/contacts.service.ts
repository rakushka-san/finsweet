import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from '../models/contact';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = `${environment.apiUrl}contacts`;

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  postContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>(URL, contact);
  }
}
