import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { ICategory } from 'src/app/models/category';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Observable, mergeMap, switchMap } from 'rxjs';
// import { ITag } from 'src/app/models/tag';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss'],
})
export class CategoryContentComponent implements OnInit {
  posts: Observable<IPost[]> | undefined;
  categories: Observable<ICategory[]> = this.categoriesService.getCategories();

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.posts = this.route.paramMap.pipe(
      switchMap((paramMap) => paramMap.getAll('id')),
      mergeMap((id) =>
        this.postsService.getPosts(undefined, undefined, undefined, id)
      )
    );
  }

  // tags: ITag[] = [];
}
