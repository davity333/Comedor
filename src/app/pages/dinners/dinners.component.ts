import { Component } from '@angular/core';
import { CardDinnersComponent } from '../../models/modelsDinners/card-dinners/card-dinners.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-dinners',
  standalone: true,
  imports: [HeaderComponent,CardDinnersComponent],
  templateUrl: './dinners.component.html',
  styleUrl: './dinners.component.css'
})
export class DinnersComponent {

}
