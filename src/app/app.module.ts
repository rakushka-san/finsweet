import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeroComponent } from './pages/home/home-hero/home-hero.component';
import { FeaturedPostsComponent } from './pages/home/featured-posts/featured-posts.component';
import { AuthorDateComponent } from './pages/shared/author-date/author-date.component';
import { PostComponent } from './pages/home/post/post.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { CategoriesComponent } from './pages/shared/categories/categories.component';
import { ChooseCategoryComponent } from './pages/home/choose-category/choose-category.component';
import { CategoryComponent } from './pages/shared/categories/category/category.component';
import { SpecialComponent } from './pages/home/special/special.component';
import { AuthorsListComponent } from './pages/home/authors-list/authors-list.component';
import { AuthorsComponent } from './pages/shared/authors/authors.component';
import { AuthorComponent } from './pages/shared/authors/author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeHeroComponent,
    FeaturedPostsComponent,
    AuthorDateComponent,
    PostComponent,
    AboutUsComponent,
    CategoriesComponent,
    ChooseCategoryComponent,
    CategoryComponent,
    SpecialComponent,
    AuthorsListComponent,
    AuthorsComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
