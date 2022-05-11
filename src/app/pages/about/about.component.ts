import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
  
  name: string = 'about us';

  imgEllipse: string = 'assets/img/Ellipse2.svg';
  
  imgPizza1: string = 'assets/img/pizza1.svg';
  imgPizza2: string = 'assets/img/pizza2.svg';

  text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing fermentum maecenas nunc diam at. Justo, justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus vitae est."
  text2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum odio aliquet sapien neque, porttitor tellus pellentesque interdum sit. Vitae cras porta viverra ut pulvinar lorem. Aliquet faucibus semper pretium vitae morbi elit fermentum. Egestas tempus nec arcu, adipiscing fermentum maecenas nunc diam at. Justo, justo, turpis suspendisse gravida a ultrices nunc ultrices nisi. Rutrum phasellus vitae est."

}
