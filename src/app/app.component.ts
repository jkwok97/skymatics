import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Skymatics';
  time: number = 30;

  timeChange = (event) => {
    this.time = event;
  }
}
