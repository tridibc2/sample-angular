import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BlogpostService } from '../../client/blogpost.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn = false;

  public email: any;
  public password: any;

  constructor(
    public router: Router,
    public blogpostService: BlogpostService,
    private toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.blogpostService.logout()
  }

  public signInUsingKeypress: any = (event: any) => {

    if (event.keyCode === 13) { // 13 is keycode of enter.

      this.signinFunction();

    }

  }

  public signinFunction: any = () => {
    if(!this.email){
      this.toastr.warningToastr('Enter your email', 'Oops!');
    
    } else if(!this.password){
      this.toastr.warningToastr('Enter your password', 'Oops!');

    } else {

      let data = {
        email: this.email,
        password: this.password
      } 
      this.blogpostService.signinFunction(data).subscribe((apiResponse) =>{
        console.log(apiResponse);
        if(apiResponse.status === 200){
          
          Cookie.set('authtoken', apiResponse.data.authToken);
          Cookie.set('userId', apiResponse.data.userDetails.userId);
          Cookie.set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

          this.blogpostService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
          this.isLoggedIn = true;
          this.router.navigate(['/admin/blog']);
        } else {
          this.toastr.errorToastr('Some Error Occured', 'Oops!');
        }
        
      }, (err) =>{
        this.toastr.errorToastr('Some Error Occured', 'Oops!');
        }
      )} //end of condition

  } //end of signinFunction

}
