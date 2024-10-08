import { Component } from '@angular/core';
import { HeaderComponent } from "../../models/header/header.component";
import { IntroductionComponent } from '../../models/modelsHome/introduction/introduction.component';
import { DestacadoComponent } from '../../models/modelsHome/destacado/destacado.component';
import { ServicioDomicilioComponent } from '../../models/modelsHome/servicio-domicilio/servicio-domicilio.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, IntroductionComponent, DestacadoComponent, ServicioDomicilioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    
}
