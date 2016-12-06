import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

//============================//

@Component({

  selector: 'my-app',
  template: `

    <div class="container">

      <h3>meal tracker 2.0</h3>

      <h4>Your foods</h4>
      <food-list
        [childFoodList]="masterFoodList"
        (clickSender)="displayDetails($event)"
      ></food-list>

    </div>
  `
})

export class AppComponent {

  public masterFoodList: Food[] = [
    new Food("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000),
    new Food("monday's netflix snackathon", "pizza rolls, 3 bags of doritos, chocolate milkshake", 2000)
  ];


  selectedFood: Food = null;
  displayDetails(clickedFood: Food) {
    this.selectedFood = clickedFood;
  }

  addMeal(newMeal) {
    this.masterFoodList.push(newMeal);
  }
}
