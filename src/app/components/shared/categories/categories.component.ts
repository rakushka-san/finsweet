import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<ICategory[]> | undefined;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
  }
}
