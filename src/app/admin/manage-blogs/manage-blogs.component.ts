import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogpostService } from '../../client/blogpost.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  
  title = 'Manage Blogs';
  public allBlogs;
  //public currentBlog;
  error: string;

  constructor(private blogpostService: BlogpostService,
    private router: Router,
    private toastr: ToastrManager,
    private route: ActivatedRoute,
    public vcr: ViewContainerRef) {
    console.log('ManageBlogsComponent component constructor called');
   }

  ngOnInit() {
    console.log("ManageBlogsComponent onInIt called")
  this.allBlogs = this.blogpostService.getAllBlogs().subscribe(

    data =>{
      console.log(data);
      this.allBlogs = data["data"];
    },
    error =>{
      console.log("some error occured");
      console.log(error.errorMessage);
    }
  )

  console.log(this.allBlogs);
  }

  public deleteThisBlog(blogId): any {
    this.blogpostService.deleteBlog(blogId).subscribe(
      data =>{
        console.log(data);
        this.ngOnInit();
        this.toastr.successToastr('This blog is successfully deleted.', 'Success!');
        setTimeout(() =>{
          this.router.navigate(['/home']);
        }, 100)
        
      },
      error =>{
        console.log(error);
        console.log(error.errorMessage);
        this.toastr.errorToastr('Some Error Occured.', 'Oops!');
      }
    )
  }

}
