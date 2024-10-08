import { Component } from '@angular/core';
import { CardsBreakfastsComponent } from '../../models/modelsBreakfast/cards-breakfasts/cards-breakfasts.component';
import { Input } from '@angular/core';
@Component({
  selector: 'app-titule',
  standalone: true,
  imports: [CardsBreakfastsComponent],
  templateUrl: './titule.component.html',
  styleUrl: './titule.component.css'
})
export class TituleComponent {
  @Input() titulos:string='';
}
