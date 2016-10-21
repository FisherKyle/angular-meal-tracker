import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

//============================//
//TODO: begin line-15: place forms for gathering name, info, calories//
//============================//

@Component({

  selector: 'display-food',

  template: `

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

  public selectedCaloricRange: string = "-";

  filterByCaloricRange(clickedCaloricRange) {

    this.selectedCaloricRange = clickedCaloricRange;

    console.log(clickedCaloricRange);

  }
}
