import { Component} from '@angular/core';






@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  imgLocation: string = 'assets/img/location.svg';
  imgPhone: string = 'assets/img/phone.svg';
  imgMail: string = 'assets/img/mail.svg';

  public contactInfo: string ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis facilisi adipiscing scelerisque aliquet morbi commodo, lacus"
  
  public addressInfo: string="commodo, lacus, ornare. Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.Sit leo lectus.Sit leo lectus.Sit leo lectus."
 
  }





