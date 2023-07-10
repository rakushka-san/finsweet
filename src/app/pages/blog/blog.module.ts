import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { SharedModule } from '../shared/shared.module';

import { FeaturedPostComponent } from './featured-post/featured-post.component';


@NgModule({
  declarations: [
    BlogComponent,
    FeaturedPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
