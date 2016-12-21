import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h6>You can customize meals by calorie count!</h6>
  <select (change)="onChange($event.target.value)">
    <option value ="all">Show All</option>
    <option value ="low">Show Low Calorie</option>
    <option value ="high">Show High Calorie</option>
  </select>
  <div *ngFor="let currentFood of childFoodList | caloricRange:selectedCaloricRange">
  <div (click)="editClicked(currentFood)">
    <h3 class="food">{{ currentFood.name }}</h3>
    <h4>Info: {{ currentFood.info }}</h4>
    <h4>Calories: {{ currentFood.calories }}</h4>
  </div>
    <button class="btn btn-xs" (click)="editClicked(currentFood)">Edit</button>
    <br>
    <hr>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();
  public selectedCaloricRange: string = "all";

  onChange(optionFromMenu) {
    this.selectedCaloricRange = optionFromMenu;
  }
  editClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
