import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-recent-blog',
  templateUrl: './recent-blog.component.html',
  styleUrls: ['./recent-blog.component.css']
})
export class RecentBlogComponent implements OnInit {

  public blogs;

  constructor(public blogpostService:BlogpostService) { }

  ngOnInit() {
    this.blogpostService.getRecentBlogs().subscribe(
      data =>{
        console.log(data);
        this.blogs = data;
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

}
