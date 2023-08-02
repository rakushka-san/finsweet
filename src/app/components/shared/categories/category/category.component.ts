import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
    @Input() imgSrc: string = "";
    @Input() name: string = "";
    @Input() description: string = "";
}
