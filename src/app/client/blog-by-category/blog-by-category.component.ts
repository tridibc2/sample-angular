import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../blogpost.service';

@Component({
  selector: 'app-blog-by-category',
  templateUrl: './blog-by-category.component.html',
  styleUrls: ['./blog-by-category.component.css']
})
export class BlogByCategoryComponent implements OnInit {

  public allBlogs = [];

  constructor(private route: ActivatedRoute, private blogpostService: BlogpostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let myCategoryId = this.route.snapshot.paramMap.get('categoryId');
      console.log(myCategoryId)
      this.getPostsByCategory(myCategoryId);
    });
  }

  getPostsByCategory(id: any) {
    // this.allBlogs = [];
    this.blogpostService.getPostsByCategory(id)
      .subscribe((res: any) => {
        this.allBlogs = res.data;
        console.log(this.allBlogs);
      }, err => {
        console.log(err);
      });
  }

}
