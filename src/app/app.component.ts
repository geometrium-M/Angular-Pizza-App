import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  
  public imgCard : string = "https://reqres.in/img/faces/9-image.jpg";
  public Title : string = "titlu";
  public Text: string = "SomeSubtitle";
  public Price: number = 10;
}
