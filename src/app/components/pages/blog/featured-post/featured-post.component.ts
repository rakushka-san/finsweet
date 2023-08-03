import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss'],
})
export class FeaturedPostComponent implements OnInit {
  featuredPost$: Observable<IPost> | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.featuredPost$ = this.postsService
      .getPosts(1)
      .pipe(map((value) => value[0]));
  }
}
