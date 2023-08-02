import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-post',
  templateUrl: './recommended-post.component.html',
  styleUrls: ['./recommended-post.component.scss'],
})
export class RecommendedPostComponent {
  @Input() imgSrc: string = '';
  @Input() authorId: string = '';
  @Input() authorName: string = '';
  @Input() postId: string = '';
  @Input() date: Date = new Date();
  @Input() title: string = '';
  @Input() description: string = '';
}
