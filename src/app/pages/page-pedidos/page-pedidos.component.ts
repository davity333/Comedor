import { Component } from '@angular/core';
import { PedidosComponent } from '../../models/pedidos/pedidos.component';
import { MenuAdminComponent } from '../../components/menu-admin/menu-admin.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-page-pedidos',
  standalone: true,
  imports: [HeaderComponent, PedidosComponent, MenuAdminComponent],
  templateUrl: './page-pedidos.component.html',
  styleUrl: './page-pedidos.component.css'
})
export class PagePedidosComponent {

}
