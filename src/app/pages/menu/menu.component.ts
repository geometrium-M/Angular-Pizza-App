import { Component } from '@angular/core';
import { Pizza } from './pizza-interface';
import { MockPizzaList } from './mock-pizza-list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  public pizzaList: Pizza[] = [...MockPizzaList];
}
