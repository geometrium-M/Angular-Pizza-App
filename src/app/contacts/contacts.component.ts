import { Component} from '@angular/core';
import { SocialItem } from '../social/socialNav';
import { Nav } from '../social/Nav';




interface Contact {
  title: string;
  address: string;
  
}

interface Address extends Contact {
  subtitle: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  Address_1 : Contact = {
    title: 'pizza gusto',
    address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis facilisi adipiscing scelerisque aliquet morbi commodo, lacus, ornare. Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.',
  }

  Address_2 : Address = {
    title: 'Address',
    subtitle: 'KK  134 ST ,   KGL Rwanda',
    address: 'commodo, lacus, ornare. Facilisis habitant vel dignissim amet, bibendum. Sit leo lectus.',
  }


  nav = Nav;


}
