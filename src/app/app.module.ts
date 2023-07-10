import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { BlogModule } from './pages/blog/blog.module';
import { ContactModule } from './pages/contact/contact.module';
import { PrivacyPolicyModule } from './pages/privacy-policy/privacy-policy.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    HomeModule,
    BlogModule,
    ContactModule,
    PrivacyPolicyModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
