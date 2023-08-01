import { HttpClient } from '@angular/common/http';
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
    return this.http.get<IPost[]>(
      `${URL}?author=${author ? author : ''}&category=${
        category ? category : ''
      }`
    );
  }

  getPost(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${URL}/${id}`);
  }
}
