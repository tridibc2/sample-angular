import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../blogpost.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Category } from '../../models/category';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.css']
})
export class BlogCategoryComponent implements OnInit {

  public categories: Category;


  constructor(private blogpostService: BlogpostService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
/*     let myBlogcatrgory = this.route.snapshot.paramMap.get('category');
    console.log(myBlogcatrgory);
    this.route.params.subscribe(params => { console.log(params) });
    this.blogpostService.viewByCategory(myBlogcatrgory).subscribe(
      data =>{
        console.log(data);
        this.categories = data["category"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    ); */


    this.blogpostService.getCategories().subscribe(
        (data: Category) => {
        console.log(data);
        this.categories = data;
      }, error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      });
  }
} 
