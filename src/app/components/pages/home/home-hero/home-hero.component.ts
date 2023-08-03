import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent implements OnInit {
  featuredPost$: Observable<IPost> | undefined;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.featuredPost$ = this.postsService
      .getPosts(1)
      .pipe(map((value) => value[0]));
  }
}
