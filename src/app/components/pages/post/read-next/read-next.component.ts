import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { RandomService } from 'src/app/services/random.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.scss'],
})
export class ReadNextComponent implements OnInit {
  posts$: Observable<IPost[]> | undefined;

  constructor(
    private postsService: PostsService,
    private randomService: RandomService
  ) {}

  ngOnInit(): void {
    this.postsService
      .getPostsCount()
      .pipe(first())
      .subscribe((count) => {
        this.posts$ = this.postsService.getPosts(
          3,
          this.randomService.getRandomInt(count - 3)
        );
      });
  }
}
