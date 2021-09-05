import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  files: object[] = [];
  index: any;
  showFileModal: boolean = false;
  pickedDocument: {} = {};
  downloadJsonHref: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.files = JSON.parse(localStorage.getItem('files')).reverse().slice(0, 3)
  }
  openModalHandler(index: number) {
    this.showFileModal = true;
    this.pickedDocument = this.files[index]
  }

  onModalClose() {
    this.showFileModal = false;
  }

  generateDownloadJsonUri(index: number) {
    let jsonToDownload = JSON.stringify(this.files[index], null, 2);
    let uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonToDownload));
    this.downloadJsonHref = uri;
  }
}
