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

  getPostsCount(): Observable<number> {
    return this.http.get<number>(`${URL}/count`);
  }

  getPosts(
    limit?: number,
    skip?: number,
    author?: string,
    category?: string
  ): Observable<IPost[]> {
    let params = new HttpParams();

    if (limit) params = params.set('limit', limit);
    if (skip) params = params.set('skip', skip);
    if (author) params = params.set('author', author);
    if (category) params = params.set('category', category);

    return this.http.get<IPost[]>(URL, { params });
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${URL}/${id}`);
  }
}
