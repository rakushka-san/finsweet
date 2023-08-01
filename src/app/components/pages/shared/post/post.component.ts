import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() imgSrc: string = "";
    @Input() category: string = "";
    @Input() title: string = "";
    @Input() description: string = "";
}
