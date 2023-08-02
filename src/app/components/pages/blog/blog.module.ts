import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { SharedModule } from './../../shared/shared.module';

import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

@NgModule({
  declarations: [
    BlogComponent,
    FeaturedPostComponent,
    AllPostsComponent,
    AllCategoriesComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class BlogModule {}
