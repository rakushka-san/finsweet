import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss'],
})
export class CategoryHeadingComponent implements OnInit {
  category: ICategory | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => params.getAll('id')),
        mergeMap((id) => this.categoriesService.getCategory(id))
      )
      .subscribe((category) => {
        this.category = category;
      });
  }
}
