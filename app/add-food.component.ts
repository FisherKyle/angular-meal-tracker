import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'add-food',
  template: `
  <form>
    <div class="form-group">
      <label>Enter New Food Name:</label>
      <input class="form-control" #newName>
      <label>Enter New Food Info:</label>
      <input class="form-control" #newInfo>
      <label>Enter New Food Calorie Amount:</label>
      <input class="form-control" type="number" #newCalories>
    </div>
    <br>
    <button class="btn btn-success" (click)="addClicked(newName.value, newInfo.value, newCalories.value);
      newName.value='';
      newInfo.value='';
      newCalories.value='';
    ">Add Food</button>
  </form>
  `
})

export class AddFoodComponent {

  @Output() newFoodSender = new EventEmitter();
  addClicked(name: string, info: string, calories: number) {
    var newFood: Food = new Food(name, info, calories);
    this.newFoodSender.emit(newFood);
  }
}
