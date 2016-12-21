import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <br>
    <h3>Edit Specific Food</h3>
    <label>Edit Food Name</label>
    <input [(ngModel)]="childSelectedFood.name">
    <label>Edit Food Details</label>
    <input [(ngModel)]="childSelectedFood.info">
    <label>Edit Food Calorie Amount</label>
    <input [(ngModel)]="childSelectedFood.calories">
    <br>
    <button (click)="doneClicked()">Done</button>
    <br>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
