import { Component } from '@angular/core';
import { CardsBreakfastsComponent } from '../../models/modelsBreakfast/cards-breakfasts/cards-breakfasts.component';
import { HeaderComponent } from '../../models/header/header.component';
@Component({
  selector: 'app-breakfasts',
  standalone: true,
  imports: [HeaderComponent,CardsBreakfastsComponent],
  templateUrl: './breakfasts.component.html',
  styleUrl: './breakfasts.component.css'
})
export class BreakfastsComponent {

}
