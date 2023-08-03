import { Component, Input, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/models/author';
import { AuthorsService } from 'src/app/services/authors.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  @Input() take: number = 0;

  authors$: Observable<IAuthor[]> | undefined;

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authors$ = this.authorsService
      .getAuthors()
      .pipe(map((authors) => authors.slice(0, this.take)));
  }
}
