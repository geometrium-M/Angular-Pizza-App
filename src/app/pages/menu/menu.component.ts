import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {

  imgPrice = 'assets/img/price.svg';

  @Input() public imgUrl: string = '';
  @Input() public name: string = '';
  @Input() public description: string = '';
  @Input() public price: string = '';
}
