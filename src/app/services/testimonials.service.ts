import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ITestimonial } from '../models/testimonial';

const URL = `${environment.apiUrl}testimonials`;

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<ITestimonial[]> {
    return this.http.get<ITestimonial[]>(URL);
  }
}
