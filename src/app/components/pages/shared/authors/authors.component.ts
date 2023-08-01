import { Component, Input, OnInit } from '@angular/core';
import { IAuthor } from 'src/app/models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {
  @Input() take: number = 0;

  authorsSource: IAuthor[] = [
    {
      imgSrc: './../../../../../assets/img/person1.jpg',
      name: 'Floyd Miles',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person2.jpg',
      name: 'Dianne Russell',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person3.jpg',
      name: 'Jenny Wilson',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person4.jpg',
      name: 'Leslie Alexander',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person5.jpg',
      name: 'Guy Hawkins',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person6.jpg',
      name: 'Eleanor Pena',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person7.jpg',
      name: 'Robert Fox',
      position: 'Content Writer',
      company: 'Company',
    },
    {
      imgSrc: './../../../../../assets/img/person8.jpg',
      name: 'Jacob Jones',
      position: 'Content Writer',
      company: 'Company',
    },
  ];

  authors: IAuthor[] = [];

  ngOnInit(): void {
    this.authors = this.authorsSource.slice(0, this.take);
  }
}
