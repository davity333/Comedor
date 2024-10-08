import { Component } from '@angular/core';
import { RegisterComponent } from '../../auth/register/register.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [HeaderComponent, RegisterComponent],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.css'
})
export class PageRegisterComponent {

}
