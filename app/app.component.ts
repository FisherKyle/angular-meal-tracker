import { Component } from '@angular/core';
import { Food } from './food.model';

//============================//

@Component({
  selector: 'my-app',
  template: `

    <div class="container">
      <h2>Meal Tracker</h2>

      <display-food [childFoodList] = "masterFoodList">
      </display-food>

    </div>
  `
})

export class AppComponent {

  public masterFoodList: Food[] = [
    new Food("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000)
  ];
}
