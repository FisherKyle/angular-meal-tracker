import {Pipe, PipeTransform} from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricRange",
  pure: false
})

export class CaloricRangePipe implements PipeTransform {
  transform(input: Food[], selectedCaloricRange) {

    var output: Food[] = [];
    if(selectedCaloricRange === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (selectedCaloricRange === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
