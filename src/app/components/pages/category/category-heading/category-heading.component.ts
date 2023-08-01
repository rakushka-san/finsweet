import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss'],
})
export class CategoryHeadingComponent {
  @Input() category: string = 'Business';
  @Input() description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.';
}
