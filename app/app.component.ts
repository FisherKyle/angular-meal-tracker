import { Component } from '@angular/core';
import { Meal} from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
    </div>
  `
})

export class AppComponent {

  public masterDietLog: Meal[] = [
    new Meal("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000)
  ];
}
