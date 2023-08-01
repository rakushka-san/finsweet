import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss'],
})
export class AuthorsListComponent {
  @Input() authorsToTake: number = 0;
}
