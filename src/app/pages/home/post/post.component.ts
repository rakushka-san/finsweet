import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() title: string = "";
    @Input() author: string = "";
    @Input() date: Date = new Date();
}
