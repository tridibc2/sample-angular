import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogpostService } from '../../blogpost.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

  @ViewChild('modalClose') modalClose:ElementRef;

  ModalContactForm: FormGroup;

  public formName: string;
  public formEmail: string;
  public formPhone: number;
  public formMessage: string;

  constructor(public activeModal: NgbActiveModal, private router: Router, private blogpostService: BlogpostService, 
    private formBuilder: FormBuilder, private toastr: ToastrManager) { }

  ngOnInit() {
    this.ModalContactForm = this.formBuilder.group({
      formName: ['', Validators.required],
      formEmail: ['', Validators.required],
      formPhone: ['', Validators.required],
      formMessage: ['']
    })
  }

  public contact() {
/*      const formData = new FormData();

  formData.append('name', this.ModalContactForm.get('formName').value);
  formData.append('email', this.ModalContactForm.get('formEmail').value);
  formData.append('phone', this.ModalContactForm.get('formPhone').value);
  formData.append('message', this.ModalContactForm.get('formMessage').value); */

   let param =  {
    'name': this.ModalContactForm.get('formName').value,
    'email': this.ModalContactForm.get('formEmail').value,
    'phone': this.ModalContactForm.get('formPhone').value,
    'message': this.ModalContactForm.get('formMessage').value,
 } 

  this.blogpostService.contactForm(param).subscribe(

    data => {
      console.log(data)
      
      this.toastr.successToastr('Your contact information is saved Susseccfully!', 'Success!');

      this.modalClose.nativeElement.click();
    },

    error => {
      console.log(error);
      console.log(error.errorMessage);
      this.toastr.errorToastr('This is not good!', 'Oops!');
      this.router.navigate(['/']);
    })
    
  }

}
