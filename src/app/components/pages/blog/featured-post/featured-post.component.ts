import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent {
    exampleAuthor = 'John Doe';
    exampleDate = new Date('2022-05-23');
}
