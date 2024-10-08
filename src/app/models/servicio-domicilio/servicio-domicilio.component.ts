import { Component } from '@angular/core';
import { TituleComponent } from '../../components/titule/titule.component';
import { OnInit } from '@angular/core';
import { AlimentosService, Foods } from '../../services/alimentos.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-servicio-domicilio',
  standalone: true,
  imports: [TituleComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './servicio-domicilio.component.html',
  styleUrl: './servicio-domicilio.component.css'
})
export class ServicioDomicilioComponent {

  pedido : FormGroup
  carrito:Foods[]=[];
  precioTotal:number=0;

  constructor(private platillos:AlimentosService){
    this.pedido = new FormGroup({
      nombre: new FormControl('', Validators.required),
      domicilio : new FormControl('', Validators.required)
    })
  }

  ngOnInit(){
    this.carrito=this.platillos.getCarrito();
    console.log("carrito: "+this.carrito)
    this.precioTotal=this.platillos.priceTotal(this.precioTotal);
  }

  enviarPedido(nombre: string, domicilio:string){
    if (this.carrito.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Carrito vacio",
        text: "No se pudo realizar el pedido",
        footer: '<a href="#">Agrega alimentos para poder realizar esta acción</a>'
      });
      return;
  }

    Swal.fire({
      title: "Confirma tu pedido",
      text: "Haz click en 'Enviar' para continuar con este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, confirmar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmado!",
          text: "Tu pedido se a enviado a tu domicilio.",
          icon: "success",
          
        });

        /*
        this.platillos.addNamePedido(nombre,domicilio);
        this.platillos.addPedido(this.carrito)
        */
        this.carrito.forEach((food) => {
          this.platillos.addPedidoIndividual(food.names, food.condimentos, food.precio, nombre, domicilio);
        });
      }
    })
    };
  

  eliminar(object:any, index:number){
    this.platillos.deletedProductCar(index);
    this.precioTotal = this.platillos.subtrackPrices(object.precio);
  }


}
