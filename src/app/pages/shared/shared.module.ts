import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryComponent } from './../shared/categories/category/category.component';
import { AuthorsComponent } from './../shared/authors/authors.component';
import { AuthorComponent } from './../shared/authors/author/author.component';
import { CategoriesComponent } from './../shared/categories/categories.component';
import { AuthorDateComponent } from './../shared/author-date/author-date.component';
import { JoinTeamComponent } from '../shared/join-team/join-team.component';

@NgModule({
  declarations: [
    AuthorDateComponent,
    CategoriesComponent,
    CategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    JoinTeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorDateComponent,
    CategoriesComponent,
    CategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    JoinTeamComponent
  ]
})
export class SharedModule { }
