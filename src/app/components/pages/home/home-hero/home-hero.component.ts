import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  featuredPost: IPost = {
    _id: '',
    title: '',
    description: '',
    category: '',
    categoryName: '',
    author: '',
    authorName: '',
    date: new Date(),
    imgSrc: '',
    content: '',
  };

  categoryName: string = '';
  authorName: string = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.featuredPost = posts[0];
    });
  }
}
