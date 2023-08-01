import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category';

const URL = `${environment.apiUrl}/categories`;

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(URL);
  }
}
