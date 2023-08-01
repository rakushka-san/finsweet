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
    title: '',
    description: '',
    category: '',
    author: '',
    date: new Date(),
    imgSrc: '',
  };

  categoryName: string = '';
  authorName: string = '';

  constructor(
    private postsService: PostsService,
    private authorsService: AuthorsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.postsService
      .getPosts()
      .pipe(
        mergeMap((posts) => {
          this.featuredPost = posts[0];

          return forkJoin([
            this.authorsService.getAuthor(this.featuredPost.author),
            this.categoriesService.getCategory(this.featuredPost.category),
          ]);
        })
      )
      .subscribe(([author, category]) => {
        this.authorName = author.name;
        this.categoryName = category.name;
      });
  }
}
