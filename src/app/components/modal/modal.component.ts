import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() pickedDocument: {}
  @Output() onModalClose = new EventEmitter();
  documents: object[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.pickedDocument);
  }

  closeModal() {
    this.onModalClose.emit()
  }
}
