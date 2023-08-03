import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ICategory } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-heading',
  templateUrl: './category-heading.component.html',
  styleUrls: ['./category-heading.component.scss'],
})
export class CategoryHeadingComponent implements OnInit {
  category$: Observable<ICategory> | undefined;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.category$ = this.route.paramMap.pipe(
      switchMap((params) => params.getAll('id')),
      mergeMap((id) => this.categoriesService.getCategory(id))
    );
  }
}
