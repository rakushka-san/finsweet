import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthorComponent } from './pages/author/author.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'post', component: PostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
