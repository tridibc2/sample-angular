import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlogpostService } from '../../client/blogpost.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  pageTitle = "Create Blog"

  createBlogForm: FormGroup;
  public imagePath: string;

  public blogTitle:string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public blogAuthor: string;
  public categories = [];


  constructor(private blogpostService: BlogpostService, private toastr: ToastrManager, private router: Router,
    private _http: HttpClient, private formBuilder: FormBuilder, private titleService: Title) {

    console.log('CreateBlogComponent component constructor called');

   }

  ngOnInit() {
    console.log("CreateBlogComponent onInIt called");
    this.titleService.setTitle(this.pageTitle);
    this.getCategories();
    this.createBlogForm = this.formBuilder.group({
      blogTitle: ['', Validators.required],
      blogDescription: ['', Validators.required],
      blogBodyHtml: ['', Validators.required],
      blogCategory: [''],
      blogAuthor: ['', Validators.required],
      imagePath:['']
    })

    /* this.blogpostService.getCategories().subscribe(
      data => {
        console.log(data)
        this.categories = data["data"]
      },
      error => {
        console.log(error.errorMessage);
      }
    ) */
}



onSelectedFile(event) {
  const file = event.target.files[0];
  this.createBlogForm.get('imagePath').setValue(file)
  console.log(file)
}

public createBlog(): any {

  const formData = new FormData();

  formData.append('imagePath', this.createBlogForm.get('imagePath').value);
  // console.log('AAA'+  this.createBlogForm.get('blogCategory').value);
  formData.append('title', this.createBlogForm.get('blogTitle').value);
  formData.append('description', this.createBlogForm.get('blogDescription').value);
  formData.append('blogBody', this.createBlogForm.get('blogBodyHtml').value);
  formData.append('category', this.createBlogForm.get('blogCategory').value);
  formData.append('author', this.createBlogForm.get('blogAuthor').value);
   
//   for(var pair of formData.entries()) {
//     console.log(pair[0]+ ', '+ pair[1]); 
// }

  this.blogpostService.createBlog(formData).subscribe(

    data => {
      console.log(data)
      
      this.toastr.successToastr('Blog Posted Susseccfully!', 'Success!');
       setTimeout(() =>{
          this.router.navigate(['/']);
        }, 1000)

    },

    error => {
      console.log(error);
      console.log(error.errorMessage);
      this.toastr.errorToastr('This is not good!', 'Oops!');
      this.router.navigate(['/']);
    })
}

getCategories() {
  this.blogpostService.getCategories()
    .subscribe((res: any) => {
      this.categories = res["data"]
      console.log(this.categories);
    }, err => {
      console.log(err);
    });
}

}
