import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apiKeyInput = null;
  keyIsValid = false;
  textExtraction = '';
  templates: string[] = [];
  templateChosen = "financial_full"
  selectedFile: File = null;
  parsingDocument = false;
  file: {} = null;
  fileUrl = null;
  userFiles: object[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiKeyInput = this.apiService.getApiKey()
    if (this.apiKeyInput) {
      this.getTemplates()

    }
    this.userFiles = JSON.parse(localStorage.getItem('files')) ? JSON.parse(localStorage.getItem('files')) : [];
  }

  onFileSelected(event: any): void {
    this.selectedFile = <File>event.target.files[0];
  }

  getTemplates(): void {
    this.apiService.getInfoFromApi(`https://custom-ocr.klippa.com/api/v1/templates?X-Auth-Key=${this.apiKeyInput}`).subscribe(res => {
      let templateData = res["data"]["templates"]
      for (let key in templateData) {
        this.templates.push(key)
      }
    }, rej => {
      console.log(rej)
    })
  }

  onFileUpload(): void {
    this.parsingDocument = true;
    const xAuth = new HttpHeaders({
      'X-Auth-Key': this.apiKeyInput
    })
    const fd = new FormData();
    fd.append('document', this.selectedFile, this.selectedFile.name);
    fd.append('pdf_text_extraction', this.textExtraction);
    fd.append('template', this.templateChosen);
    this.apiService.parseDocument('https://custom-ocr.klippa.com/api/v1/parseDocument', fd, { headers: xAuth }).subscribe(res => {
      this.file = res;
      this.userFiles.push(this.file)
      this.saveToLocalStorage()
      this.parsingDocument = false
    })
  }

  saveToLocalStorage() {
    localStorage.setItem('files', JSON.stringify(this.userFiles))
  }
}




