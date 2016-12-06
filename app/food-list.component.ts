import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h6>You can customize meals by calorie count!</h6>
  <div *ngFor="let currentFood of childFoodList">
    <food-display [food]="currentFood"></food-display>
    <button class="btn btn-xs" (click)="editButtonClicked(currentFood)">Edit</button>
    <br>
    <hr>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food[];
  @Output() clickSender = new EventEmitter();

  public filteredCalories = "all";
  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
  onCalorieChange(calorieInput) {
    this.filteredCalories = calorieInput;
  }
}
