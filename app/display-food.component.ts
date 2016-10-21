import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Food } from './food.model';

//============================//

@Component({

  selector: 'display-food',

  template: `

    <div *ngFor="let meal of childFoodList">

      <h3> meal listing :</h3>
        <ul>

          <h5> //entry: {{meal.name}} </h5>
          <h5> //description: {{meal.info}} </h5>
          <h5> //calories: {{meal.calories}} </h5>

        </ul>
    </div>

  `
})

export class DisplayFoodComponent {
  @Input() childFoodList: Food[];
}
