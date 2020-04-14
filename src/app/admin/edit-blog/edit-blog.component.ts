import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogpostService } from '../../client/blogpost.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  public authToken: any;
  public userInfo: any;

  
  public currentBlog;
  public categories = [];

  constructor(private blogpostService: BlogpostService, private _route: ActivatedRoute, private router: Router, public toastr: ToastrManager) {
    console.log("blogedit ngOnInIt called");
   }

  ngOnInit() {

    this.authToken = Cookie.get('authtoken');
    this.userInfo = this.blogpostService.getUserInfoFromLocalStorage();

    this.checkStatus();

    console.log("blogEdit ngOnInIt called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
     this.blogpostService.getSingleBlogInformation(myBlogId).subscribe(
          
                data =>{
                  console.log(data);
                  this.currentBlog = data;
                  console.log(this.currentBlog);
                  },
                  
                error =>{
                  console.log("some error occured");
                  console.log(error.errorMessage);

                })
  }

  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {

      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  } // end checkStatus


  public editThisBlog(): any {
    this.blogpostService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data =>{
        console.log(data);
        this.toastr.successToastr('Blog Edited Successfully.', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['/blog', this.currentBlog.blogId]);
        }, 1000)
      },
      error =>{
        console.log(error);
        console.log(error.errorMessage);
        this.toastr.errorToastr('Some Error Occured.', 'Oops!');
      }
    )
    
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

