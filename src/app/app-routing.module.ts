import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ArchiveComponent } from './archive/archive.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about-me', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'create-post', component: AddPostComponent },
  { path: 'post/:id', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
