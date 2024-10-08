import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicio-domicilio',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './servicio-domicilio.component.html',
  styleUrl: './servicio-domicilio.component.css'
})
export class ServicioDomicilioComponent {

  constructor(private navegar:Router){

  }

  ordenar(){
    this.navegar.navigate(['servicio'])
  }

}
