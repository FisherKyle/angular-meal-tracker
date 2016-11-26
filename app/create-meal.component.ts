import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'create-meal',
  template: `
    <div>
      <div class="form-group">
      <label>title :</label>
      <input #mealTitle class="form-control" required>

      <label>details :</label>
      <input #mealDetails class="form-control" required>

      <label>calories :</label>
      <input #mealCalories class="form-control" type="number" required>
      </div>

      <button (click)="createMeal(mealTitle.value, mealDetails.value, mealCalories.value)" class="btn" type="submit">enter meal</button>
    </div>
  `
})

export class CreateMealComponent {
  @Output() createMealEmitter = new EventEmitter();

  createMeal(mealName, mealDetails, mealCalories) {

    var output = [];
    var newMeal = new Food (mealName, mealDetails, mealCalories);
    this.createMealEmitter.emit(newMeal);
  }
}
