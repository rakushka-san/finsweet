import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
