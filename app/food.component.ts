import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  template: `
  <h5>{{ food.name }}</h5>
  <button class="btn btn-xs" (click)="displayDetails()">
    <span *ngIf="display === false">View More Info</span>
    <span *ngIf="display === true">Hide Info</span>
  </button>
  <div *ngIf="display === true">
    <p>{{ food.info }}</p>
    <p>calorie count - {{ food.calories }}</p>
  </div>
  `
})

export class FoodComponent {
  @Input() food: Food;
  public display: boolean = false;
  displayDetails() {
    if (this.display) {
      this.display = false;
    } else {
      this.display = true;
    }
  }
}
