import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';

import { CategoryComponent } from './../shared/categories/category/category.component';
import { AuthorsComponent } from './../shared/authors/authors.component';
import { AuthorComponent } from './../shared/authors/author/author.component';
import { CategoriesComponent } from './../shared/categories/categories.component';
import { AuthorDateComponent } from './../shared/author-date/author-date.component';
import { JoinTeamComponent } from '../shared/join-team/join-team.component';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    AuthorDateComponent,
    CategoriesComponent,
    CategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    JoinTeamComponent,
    SocialsComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    AuthorDateComponent,
    CategoriesComponent,
    CategoryComponent,
    AuthorsComponent,
    AuthorComponent,
    JoinTeamComponent,
    SocialsComponent,
  ],
})
export class SharedModule {}
