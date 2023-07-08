import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss']
})
export class FeaturedPostsComponent {
    exampleAuthor = "John Doe";
    exampleDate = new Date("2022-05-23");
    exampleTitle = "8 Figma design systems that you can download for free today.";
}
