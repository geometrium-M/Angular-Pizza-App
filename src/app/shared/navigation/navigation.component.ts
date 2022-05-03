import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent  {

  imgLogo: string = 'assets/img/logo.svg';

  constructor() {}

  public toggleMobileMenu(): any {
    document.querySelector('#burger')?.classList.toggle('active');
    document.querySelector('#menu')?.classList.toggle('active');
    
  }

}
