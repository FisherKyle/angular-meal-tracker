import {Pipe, PipeTransform} from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricRange",
  pure: false
})

export class CaloricRangePipe implements PipeTransform {
  transform(input: Food[], desiredCaloricRange) {

    var output: Food[] = [];
    if(desiredCaloricRange === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 600) {
          output.push(input[i]);
        }
      }
      return output;

    } else if (desiredCaloricRange === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 600) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
