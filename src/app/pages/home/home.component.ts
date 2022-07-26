import { Component } from '@angular/core';
import { repeat } from 'rxjs';
import { List } from './List';
import { ITEMS } from './mock-list';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  

  title: string = 'Pizzalicious'
  subtitle: string = 'Enjoy your days'
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing fermentum maecenas nunc diam at. Justo, justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus vitae est.'
  textMore: string ='Lorem ipsum dolor sit amet, consectetur adipiscing Condimentum odio aliquet sapien neque, porttitor tellus...'
  imgLeaves = 'assets/img/Leaves.svg';

  imgEllipse: string ='';
  imgPizza: string = '';

  
  
  isVisible: boolean = true;

   showHide() {
    this.isVisible = !this.isVisible;
    
  }

  constructor() {
    this.imgEllipse = 'assets/img/ellipse.svg';
    this.imgPizza = 'assets/img/pizza.svg';

  

    
  }

  imgClock: string = 'assets/img/clock.svg'; 

  items = ITEMS;

  

  



  
 

  

  
  
}




