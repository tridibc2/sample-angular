import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlogpostService } from '../../client/blogpost.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public category: any;

  constructor(public router: Router,
    public blogpostService: BlogpostService,
    private toastr: ToastrManager) { }

  ngOnInit() {
  }

  public addCategotyUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.addCategoryFunction();

    }

  }

  public goToAdmin: any = () => {

    this.router.navigate(['/admin/blog']);

  }

  public addCategoryFunction: any = () => {

    if (!this.category) {
      this.toastr.warningToastr('enter first name')
    } else {

      let data = {
        categoryName: this.category
      }

      console.log(data);

      this.blogpostService.addCategoryFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.successToastr('Category added successfully!');

            setTimeout(() => {

              this.goToAdmin();

            }, 2000);

          } else {

            this.toastr.errorToastr(apiResponse.message);

          }

        }, (err) => {

          this.toastr.errorToastr('some error occured');

        });

    } // end condition

  } // end signupFunction

}
