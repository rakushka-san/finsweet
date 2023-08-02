import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { PostComponent } from './post.component';
import { PostHeadingComponent } from './post-heading/post-heading.component';
import { PostContentComponent } from './post-content/post-content.component';
import { ReadNextComponent } from './read-next/read-next.component';
import { RecommendedPostComponent } from './read-next/recommended-post/recommended-post.component';

@NgModule({
  declarations: [
    PostComponent,
    PostHeadingComponent,
    PostContentComponent,
    ReadNextComponent,
    RecommendedPostComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PostModule {}
