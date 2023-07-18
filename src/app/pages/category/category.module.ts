import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryHeadingComponent } from './category-heading/category-heading.component';

@NgModule({
  declarations: [CategoryComponent, CategoryHeadingComponent],
  imports: [CommonModule, RouterModule],
})
export class CategoryModule {}
