import { Component } from '@angular/core';

interface ICategory {
    imgSrc: string
    name: string
    description: string
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
    categories: ICategory[] = [
        {
            imgSrc: './../../../../assets/img/business-icon.svg',
            name: 'Business',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
            imgSrc: './../../../../assets/img/startup-icon.svg',
            name: 'Startup',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
            imgSrc: './../../../../assets/img/economy-icon.svg',
            name: 'Economy',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
            imgSrc: './../../../../assets/img/technology-icon.svg',
            name: 'Technology',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        }
    ]
}
