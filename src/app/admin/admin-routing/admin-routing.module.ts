import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { ManageBlogsComponent } from '../manage-blogs/manage-blogs.component';
import { CreateBlogComponent } from '../create-blog/create-blog.component';
import { EditBlogComponent } from '../edit-blog/edit-blog.component'
import { AddCategoryComponent } from '../add-category/add-category.component';
/* import { BlogRouteGuardService } from './blog-route-guard.service'; */



const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
   { path: 'admin', component: AdminComponent },
   { path: 'admin/blog', component: ManageBlogsComponent/* , canActivate: [BlogRouteGuardService] */ },
   { path: 'admin/blog/create', component: CreateBlogComponent/* , canActivate: [BlogRouteGuardService] */ },
   { path: 'admin/blog/edit/:blogId', component: EditBlogComponent },
   { path: 'admin/blog/create/category', component: AddCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  /* providers: [BlogRouteGuardService] */
})
export class AdminRoutingModule { }
