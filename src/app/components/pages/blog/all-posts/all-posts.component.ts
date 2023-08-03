import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable, first, map } from 'rxjs';
import { IPost } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  @ViewChild('postsContainer') postsContainer:
    | ElementRef<HTMLDivElement>
    | undefined;

  posts$: Observable<IPost[]> | undefined;
  page$: BehaviorSubject<number> = new BehaviorSubject(1);
  totalPages$: Observable<number> | undefined;
  size: number = 5;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.totalPages$ = this.postsService.getPostsCount().pipe(
      first(),
      map((count) => Math.ceil(count / this.size))
    );
    this.page$.subscribe((page) => {
      this.posts$ = this.postsService.getPosts(
        this.size,
        (page - 1) * this.size
      );
    });
  }

  onPrevPage(): void {
    const currentPage = this.page$.value;
    if (currentPage !== 1) this.page$.next(currentPage - 1);
    this.scrollToTop();
  }

  onNextPage(): void {
    this.totalPages$?.subscribe((totalPages) => {
      const currentPage = this.page$.value;
      if (currentPage !== totalPages) this.page$.next(currentPage + 1);
    });
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.postsContainer?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
