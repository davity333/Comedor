import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TituleComponent } from '../../../components/titule/titule.component';
import { CommonModule } from '@angular/common';
import { AlimentosService, Foods } from '../../../services/alimentos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cards-breakfasts',
  standalone: true,
  imports: [TituleComponent, CommonModule],
  templateUrl: './cards-breakfasts.component.html',
  styleUrl: './cards-breakfasts.component.css'
})
export class CardsBreakfastsComponent implements OnInit{
@Input() Titulo:string='';

  desayunos:Foods[] = [];

  constructor(private carrito:AlimentosService){}

  ngOnInit(){
    this.desayunos = this.carrito.getBreakfasts();
  }

  agregarCarrito(product: any) {
    Swal.fire({
      title: "Desayuno agregado!",
      text: product.names,
      icon: "success"
    });
    this.carrito.addCar(product.names, product.condimentos, product.precio);
    this.carrito.priceTotal(product.precio);
}



}
