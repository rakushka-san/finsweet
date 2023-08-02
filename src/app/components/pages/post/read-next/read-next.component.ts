import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.scss'],
})
export class ReadNextComponent implements OnInit {
  posts: IPost[] = [];

  constructor(
    private postsService: PostsService,
    private randomService: RandomService
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      const index = this.randomService.getRandomInt(posts.length - 3);
      this.posts = posts.slice(index, index + 3);
    });
  }
}
