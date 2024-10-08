import { Component } from '@angular/core';
import { TituleComponent } from '../../../components/titule/titule.component';
import { CommonModule } from '@angular/common';
import { AlimentosService, Foods } from '../../../services/alimentos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-dinners',
  standalone: true,
  imports: [TituleComponent, CommonModule],
  templateUrl: './card-dinners.component.html',
  styleUrl: './card-dinners.component.css'
})
export class CardDinnersComponent {
  cenas:Foods[] = [];

  constructor(private carrito:AlimentosService){}

  ngOnInit(){
    this.cenas = this.carrito.getDinners();
  }

  agregarCarrito(product:any){
    Swal.fire({
      title: "Cena Agregada!",
      text: product.names,
      icon: "success"
    });
      this.carrito.addCar(product.names, product.condimentos, product.precio)
      this.carrito.priceTotal(product.precio)
  }

}
