import { Component } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.scss'],
})
export class ReadNextComponent {
  posts: IPost[] = [];
  // posts: IPost[] = [
  //   {
  //     imgSrc: './../../../../../assets/img/post1.jpg',
  //     category: 'Startup',
  //     title: 'Design tips for designers that cover everything you need',
  //     description:
  //       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  //     author: 'John Doe',
  //     date: new Date(),
  //   },
  //   {
  //     imgSrc: './../../../../../assets/img/post2.jpg',
  //     category: 'Business',
  //     title: 'How to build rapport with your web design clients',
  //     description:
  //       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  //     author: 'John Doe',
  //     date: new Date(),
  //   },
  //   {
  //     imgSrc: './../../../../../assets/img/post3.jpg',
  //     category: 'Startup',
  //     title: 'Logo design trends to avoid in 2022',
  //     description:
  //       'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  //     author: 'John Doe',
  //     date: new Date(),
  //   },
  // ];
}
