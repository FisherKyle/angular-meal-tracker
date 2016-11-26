import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({

  selector: 'edit-food',
  template: `

  <div *ngIf="showContent">
    <div class="form-group">
    <label>update meal title : </label>
    <input #mealTitle class="form-control">

    <label>update meal details :</label>
    <input #mealDetails class="form-control">

    <label>update meal calories :</label>
    <input #mealCalories class="form-control" type="number">
    </div>

    <button (click)="editMeal(mealTitle.value, mealDetails.value, mealCalories.value)" class="btn" type="submit">update</button>
    
  </div>
  `
})

export class EditMealComponent {

  @Input() meal: Food;
  @Input() showContent: boolean;

  editMeal(mealTitle, mealDetails, mealCalories) {

    if (mealTitle != "") {
      this.meal.name = mealTitle;
    }
    if (mealDetails != "") {
      this.meal.info = mealDetails;
    }
    if (mealCalories != "") {
      this.meal.calories = mealCalories;
    }
    this.showContent = false;
  }
}
