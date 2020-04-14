import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('myModal') myModal:ElementRef;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    this.modalService.open(ContactModalComponent);
  }

}
