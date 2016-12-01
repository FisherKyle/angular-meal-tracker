import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

@Component({

  selector: 'display-food',

  template: `

  <form id="entrySubmit">

    <label for="title"> meal title: </label>
    <input (change)="formInputTitle($event.target.value)" type="text" class= "form-group" id= "form-input-entry" name="title" required>

    <label for="details"> food details: </label>
    <input (change)="formInputDetails($event.target.value)" type="text" class= "form-group" id= "form-input-info" name="details" required>

    <label for="calories"> calories: </label>
    <input (change)="formInputCalories($event.target.value)" type="number" class= "form-group" id= "form-input-entry" name="calories" required>

      <button (click)="createMeal(title.value, details.value, calories.value)" class="btn" type="submit">Submit</button>
  </form>


  <select (change)="filterByCaloricRange($event.target.value)">
    <option value="-"> - </option>
    <option value="0-100"> 0 - 100 </option>
    <option value="101-400"> 101 - 400 </option>
    <option value="401-800"> 401 - 800 </option>
    <option value="801-1200"> 801 - 1200 </option>
    <option value=">1200"> 1200+ </option>
  </select>

    <div *ngFor="let meal of childFoodList | caloricRange:selectedCaloricRange">

    <h3> meal listing :</h3>
      <ul>

        <h5> // entry: {{meal.name}} </h5>
        <h5> // description: {{meal.info}} </h5>
        <h5> // calories: {{meal.calories}} </h5>

      </ul>
    </div>

  `
})

export class DisplayFoodComponent {
  @Input() childFoodList: Food[];
  @Output() foodDisplayEmitter = new EventEmitter();
  @Output() newMealSender = new EventEmitter();
  public showForm: boolean = false;
  public selectedCaloricRange: string = "-";

  createMeal(title, details, calories) {
    var output = [];
    var newMeal = new Food (title, details, calories);
    this.newMealSender.emit(newMeal);
  }

  filterByCaloricRange(clickedCaloricRange) {
    this.selectedCaloricRange = clickedCaloricRange;
    console.log(clickedCaloricRange);

  }
}
