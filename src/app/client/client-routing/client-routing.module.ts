import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailComponent } from '../blog-detail/blog-detail.component';
import { BlogByCategoryComponent } from '../blog-by-category/blog-by-category.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { PricingComponent } from '../pricing/pricing.component';
import { RecentBlogComponent } from '../recent-blog/recent-blog.component';


const routes: Routes = [
  {path: 'blog/:id', component: BlogDetailComponent},
 /* {path: 'bycategory/:categoryId', component: BlogByCategoryComponent},
  {path: 'recent', component: RecentBlogComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'pricing', component: PricingComponent} */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
