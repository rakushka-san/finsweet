import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';
import { PostComponent } from './post/post.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { SpecialComponent } from './special/special.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { FeaturedInComponent } from './featured-in/featured-in.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroComponent,
    FeaturedPostsComponent,
    PostComponent,
    AboutUsComponent,
    ChooseCategoryComponent,
    SpecialComponent,
    AuthorsListComponent,
    FeaturedInComponent,
    TestimonialsComponent
    
  ],
  imports: [
    AppRoutingModule,
    CommonModule, 
    BrowserModule,
    SharedModule
  ]
})
export class HomeModule { }
