import { Component, Input } from '@angular/core';


interface SocialLink {
  img: string;
  url: string;
}


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent  {


  @Input() isVertical = false;

  socialLinks: SocialLink[] = [
    { img : 'assets/img/facebook.svg', url: 'https://www.google.com/' },
    { img : 'assets/img/instagram.svg', url: 'https://www.google.com/' },
    { img : 'assets/img/linkedin.svg', url: 'https://www.google.com/' },
    { img : 'assets/img/google.svg', url: 'https://www.google.com/' },
    { img : 'assets/img/pinterest.svg', url: 'https://www.google.com/' }
  ];

}
 


