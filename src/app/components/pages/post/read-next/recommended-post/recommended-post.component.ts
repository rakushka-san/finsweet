import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.scss'],
})
export class RecommendedPostComponent {
  @Input() imgSrc: string = '';
  @Input() author: string = '';
  @Input() date: Date = new Date();
  @Input() title: string = '';
  @Input() description: string = '';
}
