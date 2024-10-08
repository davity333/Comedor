import { Component } from '@angular/core';
import { TituleComponent } from '../../components/titule/titule.component';
import { AlimentosService, Foods, PedidoIndividual } from '../../services/alimentos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [TituleComponent, CommonModule],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
    ventas : Foods[] = [];
    ventaTotal : number=0;

    borrador: any[] = [
      { names: "sandwich", condimentos: "verduras y pollo", precio: 12 },
      { names: "pizza", condimentos: "queso y pepperoni", precio: 20 },
      { names: "hamburguesa", condimentos: "carne, lechuga y tomate", precio: 15 },
      { names: "tacos", condimentos: "carne asada y salsa", precio: 10 },
      { names: "ensalada", condimentos: "lechuga, tomate y aderezo", precio: 8 },
      { names: "burrito", condimentos: "frijoles y carne", precio: 12 },
    ];

    constructor(private vents:AlimentosService){
    }

    ngOnInit(){
      this.ventas = this.vents.getVentas();
      this.ventaTotal=this.vents.ventaTotal(this.ventaTotal);
    }
}
