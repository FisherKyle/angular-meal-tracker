import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricRange",
  pure: false
})

export class CaloricRangePipe implements PipeTransform {
  transform(input: Food[], selectedCaloricRange: string)  {
    var output: Food[] = [];
    var caloricArray = [ "-", "0-100", "101-400", "401-800", "801-1200", ">1200" ];

    if (selectedCaloricRange != "-" && selectedCaloricRange === "0-100") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories <=100) {
          output.push(input[i]);
        }
      }
    }
    if (selectedCaloricRange === "101-400") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories > 100 && input[i].calories <= 400) {
          output.push(input[i]);
        }
      }
    }
    if (selectedCaloricRange === "401-800") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories > 400 && input[i].calories <= 800) {
          output.push(input[i]);
        }
      }
    }
    if (selectedCaloricRange === "801-1200") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories > 800 && input[i].calories <= 1200) {
          output.push(input[i]);
        }
      }
    }
    if (selectedCaloricRange === ">1200") {
      for (var i=0; i < input.length; i++) {
        if (input[i].calories > 1200) {
          output.push(input[i]);
        }
      }
    }

    return output;
  }
}
