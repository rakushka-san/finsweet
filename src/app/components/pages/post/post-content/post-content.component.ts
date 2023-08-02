import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap, switchMap } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss'],
})
export class PostContentComponent implements OnInit {
  @Input() imgSrc: string = './../../../../../assets/img/post-img.jpg';

  post$: Observable<IPost> | undefined;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.post$ = this.route.paramMap.pipe(
      switchMap((paramMap) => paramMap.getAll('id')),
      mergeMap((id) => {
        return this.postsService.getPost(id);
      })
    );
  }
}
