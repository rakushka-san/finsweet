import { Component } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-author-posts',
  templateUrl: './author-posts.component.html',
  styleUrls: ['./author-posts.component.scss'],
})
export class AuthorPostsComponent {
  posts: IPost[] = [
    {
      imgSrc: './../../../../assets/img/author-post1.jpg',
      category: 'Business',
      title: 'Font sizes in UI design: The complete guide to follow',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imgSrc: './../../../../assets/img/author-post2.jpg',
      category: 'Economy',
      title: 'How to build rapport with your web design clients',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
}
