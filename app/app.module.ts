import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { AppComponent }             from './app.component';
import { DisplayFoodComponent }     from './display-food.component';
import { CaloricRangePipe }         from './caloric-range.pipe';

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
    DisplayFoodComponent,
    CaloricRangePipe
  ],

  bootstrap: [AppComponent]
})

//============================//

export class AppModule {}
