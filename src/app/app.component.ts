import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  subtitle: 'this is a subtitle';
  days: string[] =['day1','day2','day3'];
  cart: string[] = [];

  clicked($event)
}
