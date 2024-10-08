import { Component } from '@angular/core';
import { IntroductionComponent } from '../../models/modelsHome/introduction/introduction.component';
import { DestacadoComponent } from '../../models/modelsHome/destacado/destacado.component';
import { ServicioDomicilioComponent } from '../../models/modelsHome/servicio-domicilio/servicio-domicilio.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { HeaderAdminComponent } from '../../models/header-admin/header-admin.component';
@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [HeaderAdminComponent, MenuAdminComponent, IntroductionComponent, DestacadoComponent, ServicioDomicilioComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
