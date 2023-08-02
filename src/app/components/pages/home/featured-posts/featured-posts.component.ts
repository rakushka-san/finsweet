import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss'],
})
export class FeaturedPostsComponent implements OnInit {
  featuredPost: IPost | undefined;
  posts: IPost[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.featuredPost = posts[1];
      this.posts = posts.slice(2, 6);
    });
  }
}
