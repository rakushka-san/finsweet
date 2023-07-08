import { Component, Input } from '@angular/core';

interface IAuthor {
    imgSrc: string
    name: string
    position: string
    company: string
}

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
    @Input() take: number = 0;

    authors: IAuthor[] = [
        {
            imgSrc: './../../../../assets/img/person1.jpg',
            name: 'Floyd Miles',
            position: 'Content Writer',
            company: 'Company'
        },
        {
            imgSrc: './../../../../assets/img/person2.jpg',
            name: 'Dianne Russell',
            position: 'Content Writer',
            company: 'Company'
        },
        {
            imgSrc: './../../../../assets/img/person3.jpg',
            name: 'Jenny Wilson',
            position: 'Content Writer',
            company: 'Company'
        },
        {
            imgSrc: './../../../../assets/img/person4.jpg',
            name: 'Leslie Alexander',
            position: 'Content Writer',
            company: 'Company'
        },
    ]
}
