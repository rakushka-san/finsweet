import { Component, Input, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/models/author';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  @Input() take: number = 0;

  authors: IAuthor[] = [];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((authors) => {
      this.authors = authors.slice(0, this.take);
    });
  }
}
