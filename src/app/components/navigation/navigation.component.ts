import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private authService: AuthService, private router: Router) { }

  resetKey(): void {
    if (confirm("Are you sure you want to navigate out? Data will be lost")) {
      this.authService.deautheticate()
    }
    else {
      const currentUrl = this.router.url;
      this.router.navigate([currentUrl]);

    }
  }
}
