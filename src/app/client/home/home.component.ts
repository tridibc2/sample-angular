import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ContactModalComponent } from '../shared/contact-modal/contact-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

   @ViewChild('myModal') myModal:ElementRef;

  constructor(private modalService: NgbModal) { }
  ngOnInit() { }

  ngAfterViewInit () {
     setTimeout(() =>{
       this.myModal.nativeElement.click();
     }, 15000)
  }

  openModal() {
    this.modalService.open(ContactModalComponent);
  }

}
