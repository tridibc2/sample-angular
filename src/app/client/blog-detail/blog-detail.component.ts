import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../../models/blogpost';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  public currentBlog: Blogpost;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogpostService: BlogpostService,
    private titleService: Title
  ) { 
    console.log('blog-detail component called')
  }

  ngOnInit() {

    console.log('blog-detail ngOnInit called')

    let myBlogId = this.route.snapshot.paramMap.get('id');
    console.log(myBlogId);
    this.currentBlog = this.blogpostService.getSingleBlogInformation(myBlogId).subscribe(
          
                (data: Blogpost) =>{
                  console.log(data);
                  this.currentBlog = data;
                  },
                  
                error =>{
                  console.log("some error occured");
                  console.log(error.errorMessage);

                })
    
    

    this.titleService.setTitle('Blog Detail');
  }

  ngOnDestroy(){
    ('blog-detail component destroyed')
  }

}
