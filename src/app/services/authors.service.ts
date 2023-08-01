import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/author';

const URL = `${environment.apiUrl}authors`;

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(URL);
  }

  getAuthor(id: string): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${URL}/${id}`);
  }
}
