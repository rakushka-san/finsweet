import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() postId: string = '';
  @Input() imgSrc: string = '';
  @Input() category: string = '';
  @Input() categoryId: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
