import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { AppComponent }             from './app.component';
import { MealDisplayComponent }     from './meal-display-component';


@NgModule({

  imports: [
    BrowserModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    MealDisplayComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule {

}
