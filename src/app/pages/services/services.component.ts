import { Component } from '@angular/core';

interface ServiceDescription {
  logo: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent  {

  Service1: ServiceDescription = {
    logo: 'assets/img/servings.svg',
    title: 'Our servings',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare'
  }

  Service2: ServiceDescription = {
    logo: 'assets/img/delivery.svg',
    title: 'Fast food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare suspendisse. Eget at tincidunt neque sapien enim tristique eu.'
  }

  Service3: ServiceDescription = {
    logo: 'assets/img/fast-food.svg',
    title: 'Deliveries',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat morbi viverra bibendum in sit. Ac semper arcu facilisis ornare'
  }


  name : string = 'our services';

  public classes: string[] = ["Cards__item", "Cards__magnified"]

  imgLeaves: string = 'assets/img/Leaves.svg';
  
}







