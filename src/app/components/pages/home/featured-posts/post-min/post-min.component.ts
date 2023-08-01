import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-min',
  templateUrl: './post-min.component.html',
  styleUrls: ['./post-min.component.scss'],
})
export class PostMinComponent {
  @Input() title: string = '';
  @Input() author: string = '';
  @Input() date: Date = new Date();
}
