import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  name : string = "our menu";

  @Input() public imgCards: string = " ";
  @Input() public title: string = '';
  @Input() public text: string = '';
  @Input() public price: number = 0;
}
