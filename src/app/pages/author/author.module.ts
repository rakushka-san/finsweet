import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AuthorComponent } from './author.component';
import { AuthorHeadingComponent } from './author-heading/author-heading.component';
import { AuthorPostsComponent } from './author-posts/author-posts.component';

@NgModule({
  declarations: [AuthorComponent, AuthorHeadingComponent, AuthorPostsComponent],
  imports: [CommonModule, SharedModule],
})
export class AuthorModule {}
