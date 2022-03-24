import { Component } from '@angular/core';
import {Card} from './menu/cards-interface';
import { PizzaCard } from './menu/cards';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  
  

  public cards: Card[] = [...PizzaCard];
}
