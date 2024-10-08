import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { AlimentosService, Foods } from '../../../services/alimentos.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-destacado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destacado.component.html',
  styleUrl: './destacado.component.css'
})
export class DestacadoComponent {
  desayunos:Foods[]=[];

  constructor(private food:AlimentosService, private navegar: Router){
  }

  ngOnInit(){
    this.desayunos=this.food.getBreakfasts();
  }

  ver(){
    this.navegar.navigate(['breakfasts'])
  }

}
