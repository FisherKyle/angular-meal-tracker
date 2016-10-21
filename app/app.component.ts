import { Component } from '@angular/core';
import { Food } from './food.model';

//============================//

@Component({
  selector: 'my-app',
  template: `

    <div class="container">
      <h2>Meal Tracker</h2>

      <display-food [childFoodList] = "masterFoodList" (foodDisplayEmitter) = "showCaloricRange($event)">
      </display-food>

    </div>
  `
})

export class AppComponent {

  public masterFoodList: Food[] = [

    new Food("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000),

    new Food("monday's netflix snackathon", "pizza rolls, 3 bags of doritos, chocolate milkshake", 2000)

  ];

  public selectedCaloricRange: string = null;

  showCaloricRange(clickedCaloricRange: string) {

  this.selectedCaloricRange = clickedCaloricRange;
  console.log(clickedCaloricRange);

  }
}
