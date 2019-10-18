import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureDisplayed = 1;
  title = 'FoodList';
  onOptionSelected(n: number) {
    this.featureDisplayed = n;
  }
}
