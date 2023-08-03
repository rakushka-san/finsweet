import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeModule } from './components/pages/home/home.module';
import { BlogModule } from './components/pages/blog/blog.module';
import { ContactModule } from './components/pages/contact/contact.module';
import { PrivacyPolicyModule } from './components/pages/privacy-policy/privacy-policy.module';
import { AuthorModule } from './components/pages/author/author.module';
import { AboutUsModule } from './components/pages/about-us/about-us.module';
import { PostModule } from './components/pages/post/post.module';
import { CategoryModule } from './components/pages/category/category.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    BlogModule,
    ContactModule,
    PrivacyPolicyModule,
    AuthorModule,
    AboutUsModule,
    PostModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
