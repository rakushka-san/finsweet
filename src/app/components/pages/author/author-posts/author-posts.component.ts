import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap, switchMap } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-author-posts',
  templateUrl: './author-posts.component.html',
  styleUrls: ['./author-posts.component.scss'],
})
export class AuthorPostsComponent implements OnInit {
  posts$: Observable<IPost[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.route.paramMap.pipe(
      switchMap((paramMap) => paramMap.getAll('id')),
      mergeMap((id) => {
        return this.postsService.getPosts(undefined, undefined, id);
      })
    );
  }
}
