import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { BlogModule } from './pages/blog/blog.module';
import { ContactModule } from './pages/contact/contact.module';
import { PrivacyPolicyModule } from './pages/privacy-policy/privacy-policy.module';
import { AuthorModule } from './pages/author/author.module';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { PostModule } from './pages/post/post.module';
import { CategoryModule } from './pages/category/category.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
