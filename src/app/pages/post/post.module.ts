import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostComponent } from './post.component';
import { PostHeadingComponent } from './post-heading/post-heading.component';

@NgModule({
  declarations: [PostComponent, PostHeadingComponent],
  imports: [CommonModule, RouterModule],
})
export class PostModule {}
