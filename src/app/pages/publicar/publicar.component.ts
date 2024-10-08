import { Component } from '@angular/core';
import { FormComponent } from '../../models/modelsAlta/form/form.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-publicar',
  standalone: true,
  imports: [HeaderComponent, FormComponent, MenuAdminComponent],
  templateUrl: './publicar.component.html',
  styleUrl: './publicar.component.css'
})
export class PublicarComponent {

}
