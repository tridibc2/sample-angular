import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlogpostService } from '../../client/blogpost.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  public firstName: any;
  public lastName: any;
  public email: any;
  public password: any;
  public mobileNumber: any;


  constructor(public router: Router,
    public blogpostService: BlogpostService,
    private toastr: ToastrManager) { }

  ngOnInit() {
  }

  public signInUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.signupFunction();

    }

  }

  public goToSignIn: any = () => {

    this.router.navigate(['/login']);

  }

  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warningToastr('enter first name')
     

    } else if (!this.lastName) {
      this.toastr.warningToastr('enter last name')

    } else if (!this.mobileNumber) {
      this.toastr.warningToastr('enter mobile')

    } else if (!this.email) {
      this.toastr.warningToastr('enter email')

    } else if (!this.password) {
      this.toastr.warningToastr('enter password')

    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        email: this.email,
        password: this.password
      }

      console.log(data);

      this.blogpostService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.successToastr('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

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
