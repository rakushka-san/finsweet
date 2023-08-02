import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap, switchMap } from 'rxjs';
import { IAuthor } from 'src/app/models/author';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-heading',
  templateUrl: './author-heading.component.html',
  styleUrls: ['./author-heading.component.scss'],
})
export class AuthorHeadingComponent implements OnInit {
  author$: Observable<IAuthor> | undefined;

  constructor(
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    this.author$ = this.route.paramMap.pipe(
      switchMap((paramMap) => paramMap.getAll('id')),
      mergeMap((id) => {
        return this.authorsService.getAuthor(id);
      })
    );
  }
}
