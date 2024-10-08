import { Component } from '@angular/core';
import { TituleComponent } from '../../components/titule/titule.component';
import { OnInit } from '@angular/core';
import { AlimentosService, Foods } from '../../services/alimentos.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [TituleComponent, CommonModule, RouterLink],
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {

  pedidoIndividual:any=[]=[];

  constructor(private pedido:AlimentosService){

  }

  ngOnInit(){
    this.pedidoIndividual=this.pedido.getPedidoIndividual();
    console.log(localStorage.getItem("pedidoPlatillo"))
    console.log(localStorage.getItem("pedidoUsuario"))
}

eliminar(i:number, nombre:string, condimentos:string, precio:number){
    this.pedido.deletedPedidoAdmin(i, nombre, condimentos, precio)
    this.pedido.ventaTotal(precio);
    console.log(i) 
}

}
