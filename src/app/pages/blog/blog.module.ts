import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { SharedModule } from '../shared/shared.module';

import { FeaturedPostComponent } from './featured-post/featured-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './all-posts/post/post.component';


@NgModule({
  declarations: [
    BlogComponent,
    FeaturedPostComponent,
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
