import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-api-input',
  templateUrl: './api-input.component.html',
  styleUrls: ['./api-input.component.css']
})
export class ApiInputComponent implements OnInit {
  apiKeyInput = null;
  showError = false;

  constructor(private apiService: ApiService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onApiKeyInsert(): void {
    this.apiService.getInfoFromApi(`https://custom-ocr.klippa.com/api/v1/?X-Auth-Key=${this.apiKeyInput}`).subscribe(res => {
      console.log(res)
      this.authService.autheticate()
      this.apiService.setApiKey(this.apiKeyInput);
      this.router.navigate(['/upload-new']);
    }, rej => {
      console.log(rej)
      this.showError = true
    })
  }
}
