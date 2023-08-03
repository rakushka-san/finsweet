import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss'],
})
export class ContactContentComponent {
  status: string = '';
  error: boolean = false;
  contactQueries: Array<string> = ['Query 1', 'Query 2', 'Query 3'];

  contactForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    query: new FormControl<string>(this.contactQueries[0]),
    message: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private contactsService: ContactsService) {}

  onContactSubmit(): void {
    this.contactsService
      .postContact(this.contactForm.value)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.status = 'Success!';
          this.error = false;
          this.contactForm.reset();
        },
        error: (err) => {
          this.status = 'Error';
          this.error = true;
        },
      });
  }
}
