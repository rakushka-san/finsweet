import { Component } from '@angular/core';

import { IPost } from 'src/app/models/post';
import { ICategory } from 'src/app/models/category';
import { ITag } from 'src/app/models/tag';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss'],
})
export class CategoryContentComponent {
  posts: IPost[] = [
    {
      imgSrc: './../../../../assets/img/post1.jpg',
      category: 'Startup',
      title: 'Design tips for designers that cover everything you need',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      author: 'John Doe',
      date: new Date(),
    },
    {
      imgSrc: './../../../../assets/img/post2.jpg',
      category: 'Business',
      title: 'How to build rapport with your web design clients',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      author: 'John Doe',
      date: new Date(),
    },
    {
      imgSrc: './../../../../assets/img/post3.jpg',
      category: 'Startup',
      title: 'Logo design trends to avoid in 2022',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      author: 'John Doe',
      date: new Date(),
    },
    {
      imgSrc: './../../../../assets/img/post4.jpg',
      category: 'Technology',
      title: '8 Figma design systems you can download for free today',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      author: 'John Doe',
      date: new Date(),
    },
  ];

  categories: ICategory[] = [
    {
      imgSrc: './../../../../assets/img/business-icon.svg',
      name: 'Business',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgSrc: './../../../../assets/img/startup-icon.svg',
      name: 'Startup',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgSrc: './../../../../assets/img/economy-icon.svg',
      name: 'Economy',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgSrc: './../../../../assets/img/technology-icon.svg',
      name: 'Technology',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
  ];

  tags: ITag[] = [
    {
      name: 'Business',
    },
    {
      name: 'Experience',
    },
    {
      name: 'Screen',
    },
    {
      name: 'Technology',
    },
    {
      name: 'Marketing',
    },
    {
      name: 'Life',
    },
  ];
}
