"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var food_model_1 = require("./food.model");
//============================//
var AppComponent = (function () {
    function AppComponent() {
        this.masterFoodList = [
            new food_model_1.Food("Diner with Deb", "2 hashbrowns, disco-fries, chocolate milkshake", 1000),
            new food_model_1.Food("monday's netflix snackathon", "pizza rolls, 3 bags of doritos, chocolate milkshake", 2000)
        ];
        this.selectedFood = null;
    }
    AppComponent.prototype.displayDetails = function (clickedFood) {
        this.selectedFood = clickedFood;
    };
    AppComponent.prototype.finshedEditing = function () {
        this.selectedFood = null;
    };
    AppComponent.prototype.addFood = function (newFood) {
        this.masterFoodList.push(newFood);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n    <div class=\"container\">\n\n      <h3>meal tracker 2.0</h3>\n\n      <h4>Your foods</h4>\n\n      <add-food\n        (newFoodSender)=\"addFood($event)\"\n      ></add-food>\n\n      <food-list\n        [childFoodList]=\"masterFoodList\"\n        (clickSender)=\"displayDetails($event)\"\n      ></food-list>\n\n      <edit-food\n      [childSelectedFood]=\"selectedFood\"\n      (doneClickedSender)=\"finshedEditing()\"\n      ></edit-food>\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map