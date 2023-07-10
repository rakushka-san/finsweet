import { Component } from '@angular/core';

interface IPost {
    imgSrc: string
    category: string
    title: string
    description: string
}

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent {
    posts: IPost[] = [
        {
            imgSrc: './../../../../assets/img/post1.jpg',
            category: 'Startup',
            title: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            imgSrc: './../../../../assets/img/post2.jpg',
            category: 'Business',
            title: 'How to build rapport with your web design clients',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            imgSrc: './../../../../assets/img/post3.jpg',
            category: 'Startup',
            title: 'Logo design trends to avoid in 2022',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            imgSrc: './../../../../assets/img/post4.jpg',
            category: 'Technology',
            title: '8 Figma design systems you can download for free today',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        },
        {
            imgSrc: './../../../../assets/img/post1.jpg',
            category: 'Economy',
            title: 'Font sizes in UI design: The complete guide to follow',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        }
    ]
}
