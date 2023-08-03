import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @ViewChild('footer', { static: false }) footer: ElementRef | undefined;

  status: string = '';
  error: boolean = false;

  subscriptionForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private subscriptionsService: SubscriptionsService) {}

  onSubmit(): void {
    this.subscriptionsService
      .postSubscription(this.subscriptionForm.value)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.status = 'Success!';
          this.error = false;
          this.subscriptionForm.reset();
        },
        error: (error) => {
          this.status = 'Error';
          this.error = true;
        },
      });
  }

  scrollToTop(): void {
    this.footer?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
