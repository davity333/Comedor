import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: Users[] = [];
  private logo: Boolean=false;

  constructor() {
    this.usuarios();
  }
  
  usuarios(){
    let nombre:string = "davity";
    localStorage.setItem("usuario", nombre);
  }

  addUsuario(nombre:string, pass:string){
    const nuevoUsuario: Users = { nombre, password: pass}; 
    this.users.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(this.users));
  }

  loguear(buscarNombre:string, buscarPass:string):boolean{
      const namesLocal= localStorage.getItem("usuarios");
      
      if(namesLocal){
        this.users = JSON.parse(namesLocal);
      
      const nombreEncontrado = this.users.find(people => people.nombre === buscarNombre && people.password === buscarPass);
            if(nombreEncontrado){
              return true;
            }else{
              return false;
            }    
      }
      return false;
  }

  vistaProtegidaLogo(img: boolean){
    if(img == true){
        this.logo = true;
    }else if(img == false){
        this.logo = false;
    }
  }

  getLogo(){
    return this.logo;
  }

}

export interface Users{
  nombre:string;
  password:string;
}