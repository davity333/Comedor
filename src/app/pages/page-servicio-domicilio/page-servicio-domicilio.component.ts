import { Component } from '@angular/core';
import { ServicioDomicilioComponent } from '../../models/servicio-domicilio/servicio-domicilio.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-page-servicio-domicilio',
  standalone: true,
  imports: [HeaderComponent, ServicioDomicilioComponent],
  templateUrl: './page-servicio-domicilio.component.html',
  styleUrl: './page-servicio-domicilio.component.css'
})
export class PageServicioDomicilioComponent {

}
