import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { CategoryComponent } from './category.component';
import { CategoryHeadingComponent } from './category-heading/category-heading.component';
import { CategoryContentComponent } from './category-content/category-content.component';
import { CategoryItemComponent } from './category-content/category-item/category-item.component';
import { TagItemComponent } from './category-content/tag-item/tag-item.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryHeadingComponent,
    CategoryContentComponent,
    CategoryItemComponent,
    TagItemComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class CategoryModule {}
