import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-heading',
  templateUrl: './post-heading.component.html',
  styleUrls: ['./post-heading.component.scss'],
})
export class PostHeadingComponent {
  @Input() profilePictureSrc: string =
    './../../../../assets/img/Profile picture.jpg';
  @Input() authorName: string = 'Andrew Jonson';
  @Input() authorId: string = '';
  @Input() date: Date = new Date();
  @Input() title: string = 'Step-by-step guide to choosing great font pairs';
  @Input() categoryIconSrc: string =
    './../../../../assets/img/startup-icon.svg';
  @Input() category: string = 'Startup';
}
