import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-author-date',
  templateUrl: './author-date.component.html',
  styleUrls: ['./author-date.component.scss']
})
export class AuthorDateComponent {
    @Input() author: string = "";
    @Input() date: Date = new Date();
}
