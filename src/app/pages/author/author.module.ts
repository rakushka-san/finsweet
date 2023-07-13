import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { AuthorComponent } from './author.component';
import { AuthorHeadingComponent } from './author-heading/author-heading.component';

@NgModule({
  declarations: [AuthorComponent, AuthorHeadingComponent],
  imports: [CommonModule, SharedModule],
})
export class AuthorModule {}
