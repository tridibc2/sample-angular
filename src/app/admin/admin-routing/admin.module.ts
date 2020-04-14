import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from '../admin/admin.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { ManageBlogsComponent } from '../manage-blogs/manage-blogs.component';
import { CreateBlogComponent } from '../create-blog/create-blog.component';
import { EditBlogComponent } from '../edit-blog/edit-blog.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    SignupComponent,
    LoginComponent,
    ManageBlogsComponent,
    CreateBlogComponent,
    EditBlogComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
