import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  private food: Foods[]=[];
  private foodDinner: Foods[]=[];
  private carrito: Foods[]=[];
  private precios: number[]=[];
  private total: number=0;
  //PEDIDOS QUE SE ENVIARAN AL ADMIN
  private pedidosIndividuales:PedidoIndividual[]=[];
  //PEDIDO QUE SE ENVIARA YA A LAS VENTAS DEL DIA DEL ADMIN
  private ventas:Foods[]=[];
  private ventaTotalAdmin: number[]=[];
  private cantidadVentaTotal: number=0;

  constructor() { 
    const savedFood = localStorage.getItem('platillos');
    //localStorage.setItem('pedidosAdmin', JSON.stringify(this.pedidoAdmin));
    if (savedFood) {
      this.food = JSON.parse(savedFood);
    }

    const savedPrices = localStorage.getItem('precios');
    if(savedPrices){
      this.precios = JSON.parse(savedPrices);
    }
  }

  addBreakfasts(names: string, condiments:string, price:number){
      const desayunos: Foods = {names, condimentos:condiments, precio:price }
      this.food.push(desayunos);
      localStorage.setItem("desayunos", JSON.stringify(this.food));
      console.log(this.food);
      
  }

  addDinners(names: string, condiments:string, price:number){
    const cena: Foods = {names, condimentos:condiments, precio:price }
    this.foodDinner.push(cena);
    localStorage.setItem("cenas", JSON.stringify(this.foodDinner));
  }

  addCar(names:string, condimentos:string, price:number){
    const car: Foods = {names, condimentos, precio:price}
    this.carrito.push(car);
    localStorage.setItem("carrito",JSON.stringify(this.carrito));
  }

  priceTotal(price: number) {
    this.precios.push(price);
    console.log(this.precios)
    this.total = 0;

    for (let i = 0; i < this.precios.length; i++) {
        this.total += this.precios[i]; 
    }
    return this.total;
  }
  
  addPedidoIndividual(nombreComida:string, condimentos:string, precio:number, persona:string, domicilio:string){
      const pedidoIndividual:PedidoIndividual={nameFood:nombreComida, condimentos:condimentos, price:precio, namePeople:persona, addres:domicilio}
      this.pedidosIndividuales.push(pedidoIndividual);
      localStorage.setItem("pedidoEnviado", JSON.stringify(pedidoIndividual))
  }
  
  deletedProductCar(index:number){
    this.carrito.splice(index,1);
  }

  deletedPedidoAdmin(index:number, nombre:string, condimentos:string, price:number){
    this.pedidosIndividuales.splice(index, 1)
    const ventas:Foods={names:nombre, condimentos:condimentos, precio:price}
    this.ventas.push(ventas);
    console.log("eliminado esta comida xd")
  }

  ventaTotal(price:number){
    this.ventaTotalAdmin.push(price);
    this.cantidadVentaTotal = 0;

    for(let i=0; this.ventaTotalAdmin.length; i++){
      this.cantidadVentaTotal += this.ventaTotalAdmin[i];
    }
    return this.cantidadVentaTotal;
  }
  
  subtrackPrices(price : number){
    this.total = this.total - price;
    return this.total;
  }

  getBreakfasts(){
    return this.food;
  }

  getDinners(){
    return this.foodDinner;
  }

  getCarrito(){
    return this.carrito;
  }

  getPedidoIndividual(){
    return this.pedidosIndividuales;
  }

  getVentas(){
    return this.ventas;
  }

}
export interface Foods{
    names:string;
    condimentos:string;
    precio:number;
}

export interface Pedidos{
    nombre:string;
    domicilio:string;
}

export interface PedidoIndividual{
    nameFood:string;
    condimentos:string;
    price:number;
    namePeople:string;
    addres:string;
}
