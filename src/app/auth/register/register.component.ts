import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registro : FormGroup;

  constructor(private usuario:UsersService, private navegar : Router){
    this.registro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  aceptar() {
    if (this.registro.valid) {
      Swal.fire("REGISTRADO ✅");
      this.usuario.addUsuario(this.registro.value.nombre, this.registro.value.password);
      this.navegar.navigate(['']);
    } else if (this.registro.hasError('passwordsMismatch')) {
      Swal.fire("Las contraseñas no coinciden ❌");
    } else {
      Swal.fire("Campos inválidos o incompletos");
    }

    
  }


}
