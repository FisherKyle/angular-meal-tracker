import { Component } from '@angular/core';
import { Food } from './food.model';

//============================//

@Component({

  selector: 'my-app',
  template: `

    <div class="container">

      <h3>meal tracker 2.0</h3>

      <display-food [childFoodList] = "masterFoodList" (foodDisplayEmitter) = "showCaloricRange($event)">
      </display-food>

      <create-meal (createFoodEmitter) = "createMeal($event)"></create-meal>

    </div>
  `
})

export class AppComponent {

  public masterFoodList: Food[] = [
    new Food("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000),
    new Food("monday's netflix snackathon", "pizza rolls, 3 bags of doritos, chocolate milkshake", 2000)
  ];

  addMeal(newMeal) {
    this.masterFoodList.push(newMeal);
  }
}
