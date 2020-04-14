import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpBackend, HttpParams } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  public allBlogs;
  public currentBlog;
  errorData: {};
  isLoggedIn = false;

  /* public baseUrl = 'http://localhost:4000/api/v1/blogs'; */

  public baseUrl = environment.baseUrl;


  constructor(private _http:HttpClient, private handler: HttpBackend) { }

  public getAllBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + 'featured_blogs.php').pipe(
      catchError(this.handleError)
    );
    console.log(myResponse);
    return myResponse;
   }

   public getRecentBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + 'recent_blogs.php').pipe(
      catchError(this.handleError)
    );
    console.log(myResponse);
    return myResponse;
   }

   public getSingleBlogInformation(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + 'getById.php?id=' + currentBlogId).pipe(
      catchError(this.handleError)
    );
    return myResponse;
  }

  public createBlog(formData): Observable<any> {
   
    
    // console.log('BBB'+  formData.get('category'));
    // const params = new HttpParams()
        // .set('title', formData.get('title'))
        // .set('description', formData.get('description'))
        // .set('blogBody', formData.get('blogBody'))
        // .set('category', formData.get('category'))
        // .set('author', formData.get('author'))

           
  
    let myResponse = this._http.post(this.baseUrl + '/create?authToken=' + Cookie.get('authtoken'), formData);

   //let myResponse = this._http.post('http://localhost/Angular7/fileUpload/upload.php', params);

    return myResponse;

  }


  public deleteBlog(blogId): any {
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete?authToken=' + Cookie.get('authtoken'), blogId);
    return myResponse;
    
  }

  public editBlog(blogId, blogData): Observable<any> {
    const params = new HttpParams()
        .set('title', blogData.title)
        .set('description', blogData.description)
        .set('blogBody', blogData.blogBody)
        .set('category', blogData.category)
        .set('author', blogData.author)
        .set('authToken', Cookie.get('authtoken'))

    let myResponse = this._http.put(this.baseUrl + '/edit' + '/' + blogId + '?authToken=' + Cookie.get('authtoken'), blogData);
    return myResponse;
  }

  public getPostsByCategory(currentBlogCategoryId): any {
    let myResponse = this._http.get(this.baseUrl + '/view/by/category' + '/' + currentBlogCategoryId).pipe(
      catchError(this.handleError)
    );
    return myResponse;
  }

  public getCategories(): any {
    let myResponse = this._http.get(this.baseUrl + 'categories.php').pipe(
      catchError(this.handleError)
    );
    console.log(myResponse);
    return myResponse;
   }

   public contactForm(formData): Observable<any> {
  
    let myResponse = this._http.post(this.baseUrl + '/send/mail', formData);
    // console.log('AAA'+formData.get('name'))
    return myResponse;
  }

  public addCategoryFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('categoryName', data.categoryName)

    return this._http.post(`${this.baseUrl}/create/category`, params);

  } // end of addCategoryFunction

  public getUserInfoFromLocalStorage: any = () =>{
    return JSON.parse(localStorage.getItem('userInfo'));
  }
  
  public setUserInfoInLocalStorage: any = (data) =>{
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  public signinFunction(data): Observable<any>{

    const params = new HttpParams()
    
    .set('email', data.email)
    .set('password', data.password)
    .set('authToken', Cookie.get('authtoken'))

    let myResponse = this._http.post(`${this.baseUrl}/login`, params)
    .pipe(
    catchError(this.handleError)
  );
  this.isLoggedIn = true;
  return myResponse;
  }

  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)

    return this._http.post(`${this.baseUrl}/signup`, params);

  } // end of signupFunction function.

  public logout(): any {
    localStorage.removeItem('userInfo')
    let myResponse = this._http.get(this.baseUrl + '/logout').pipe(
      catchError(this.handleError)
    );
    this.isLoggedIn = false;
    return myResponse;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

}
