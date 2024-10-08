import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    login:FormGroup;
    cambioTrue:boolean=true;
    cambioFalse:boolean=false;

  constructor(private userService: UsersService, private navegar: Router){
    this.login = new FormGroup({
      usuario: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.userService.usuarios();
  }

  entrar(){
    if(this.login.value.usuario === 'davity333' && this.login.value.password === 'davidreynold'){
      Swal.fire("Bienvenido administrador ✅");
      this.userService.vistaProtegidaLogo(this.cambioTrue);
      this.navegar.navigate(['homeAdmin'])
      localStorage.setItem("logueado", this.login.value.usuario)
      
    }else{
    if(this.login.valid){
      const search = this.userService.loguear(this.login.value.usuario, this.login.value.password)
      
      if(search){
        Swal.fire("Bienvenido "+this.login.value.usuario);
        localStorage.setItem("logueado", this.login.value.usuario)
        this.navegar.navigate(['home'])
      }else{
        Swal.fire("El usuario y/o contraseña no coinciden ❌");
      }

    }else{
      Swal.fire("Porfavor rellene todos los campos")
    }
  }
}
}
