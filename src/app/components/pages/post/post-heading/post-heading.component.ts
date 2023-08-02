import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin, mergeMap, switchMap } from 'rxjs';
import { IAuthor } from 'src/app/models/author';
import { ICategory } from 'src/app/models/category';
import { IPost } from 'src/app/models/post';
import { AuthorsService } from 'src/app/services/authors.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-heading',
  templateUrl: './post-heading.component.html',
  styleUrls: ['./post-heading.component.scss'],
})
export class PostHeadingComponent implements OnInit {
  post$: Observable<IPost> | undefined;
  author$: Observable<IAuthor> | undefined;
  category$: Observable<ICategory> | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private authorsService: AuthorsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((paramMap) => paramMap.getAll('id')),
      mergeMap((id) => {
        return this.postsService.getPost(id);
      })
    );

    this.author$ = this.post$.pipe(
      mergeMap((post) => {
        return this.authorsService.getAuthor(post.author);
      })
    );

    this.category$ = this.post$.pipe(
      mergeMap((post) => {
        return this.categoriesService.getCategory(post.category);
      })
    );
  }
}
