import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../../models/blogpost';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  public allBlogs: Blogpost;

  constructor(public blogpostService:BlogpostService) { 
  console.log('Home component constructor called');
}

ngOnInit() {
  console.log("home onInIt called")
  this.blogpostService.getAllBlogs().subscribe(

    (data: Blogpost) =>{
      console.log(data);
      this.allBlogs = data;
    },
    error =>{
      console.log("some error occured");
      console.log(error.errorMessage);
    }
  )

  console.log(this.allBlogs);
  
}

ngOnDestroy() {
  console.log("home component destroyed")
}

}
