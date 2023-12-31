import { Component, OnInit } from '@angular/core';
import { ITestimonial } from 'src/app/models/testimonial';
import { TestimonialsService } from 'src/app/services/testimonials.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: ITestimonial[] = [];
  currentTestimonial: ITestimonial | undefined;

  index: number = 0;

  constructor(private testimonialsService: TestimonialsService) {}

  ngOnInit(): void {
    this.testimonialsService
      .getTestimonials()
      .pipe(first())
      .subscribe((testimonials) => {
        this.testimonials = testimonials;
        this.updateTestimonial();
      });
  }

  onBack(): void {
    if (this.index == 0) {
      this.index = this.testimonials.length - 1;
    } else {
      this.index--;
    }

    this.updateTestimonial();
  }

  onNext(): void {
    if (this.index == this.testimonials.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }

    this.updateTestimonial();
  }

  updateTestimonial(): void {
    this.currentTestimonial = this.testimonials[this.index];
  }
}
