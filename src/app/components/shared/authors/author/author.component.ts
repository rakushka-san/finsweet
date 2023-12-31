import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {
  @Input() imgSrc: string = '';
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() company: string = '';
  @Input() socials: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  } = {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedIn: '',
  };
}
