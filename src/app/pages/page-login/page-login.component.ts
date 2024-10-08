import { Component } from '@angular/core';
import { LoginComponent } from '../../auth/login/login.component';
@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {
}
