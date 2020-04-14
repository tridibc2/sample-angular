import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogpostService } from '../../client/blogpost.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isLoggedIn = true;

  constructor(public router: Router, public blogpostService: BlogpostService) { }

  ngOnInit() {
  }

  public logout() {
    this.blogpostService.logout().subscribe(
      data =>{
        console.log(data);
        localStorage.removeItem('userInfo');
        this.isLoggedIn = false;
        this.router.navigate(['/home']);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
    
  }

}
