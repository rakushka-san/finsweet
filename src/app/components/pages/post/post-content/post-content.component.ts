import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent {
  @Input() imgSrc: string = './../../../../../assets/img/post-img.jpg';
}
