import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit {
  featuredPost$: Observable<IPost> | undefined;
  posts$: Observable<IPost[]> | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.featuredPost$ = this.postsService
      .getPosts(1, 1)
      .pipe(map((value) => value[0]));
    this.posts$ = this.postsService.getPosts(4, 2);
  }
}
