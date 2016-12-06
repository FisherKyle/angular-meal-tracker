import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { AppComponent }             from './app.component';
import { FoodListComponent }        from './food-list.component';
import { FoodComponent }            from './food.component';
import { EditFoodComponent }        from './edit-food.component';
import { AddFoodComponent }         from './add-food.component';

//============================//

@NgModule({
  imports:

  [
    BrowserModule,
    FormsModule
  ],

  declarations:
  [
    AppComponent,
    FoodComponent,
    FoodListComponent,
    EditFoodComponent,
    AddFoodComponent
  ],

  bootstrap:
  [
    AppComponent
  ]
})

//============================//

export class AppModule {}
