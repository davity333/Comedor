import { Component } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css'
})
export class IntroductionComponent {

  constructor(private user:UsersService){

  }

  ngOnInit(): void {
  }

  usuario = localStorage.getItem("logueado");

}
