import { Component } from '@angular/core';
import { VentasComponent } from '../../models/ventas/ventas.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { HeaderComponent } from '../../models/header/header.component';
import { TituleComponent } from '../../components/titule/titule.component';
import { HeaderAdminComponent } from "../../models/header-admin/header-admin.component";
@Component({
  selector: 'app-page-ventas',
  standalone: true,
  imports: [HeaderComponent, MenuAdminComponent, TituleComponent, VentasComponent, HeaderAdminComponent],
  templateUrl: './page-ventas.component.html',
  styleUrl: './page-ventas.component.css'
})
export class PageVentasComponent {

}
