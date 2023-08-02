import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPost } from '../models/post';

const URL = `${environment.apiUrl}posts`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(author?: string, category?: string): Observable<IPost[]> {
    const params = new HttpParams();

    if (author) params.set('author', author);
    if (category) params.set('category', category);

    return this.http.get<IPost[]>(URL, { params });
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${URL}/${id}`);
  }
}
