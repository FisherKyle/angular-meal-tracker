import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricRange",
  pure: false
})

export class CaloricRangePipe implements PipeTransform {
  transform(input: Food[], selectedCaloricRange)  {
    var output: Food[] = [];
    selectedCaloricRange = [ "-", "0-100", "101-400", "401-800", "801-1200", ">1200" ];

    console.log(input); console.log(selectedCaloricRange);

    if (selectedCaloricRange != "-") {

      if (selectedCaloricRange === "0-100") {       //0-100
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 0 && input[i].calories <= 100) {
            output.push(input[i]);
          }
          return output;
        }
        } else {
          return input;
        }

      if (selectedCaloricRange === "101-400") {       //101-400
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 100 && input[i].calories <= 400) {
            output.push(input[i]);
          }
          return output;
        }
      } else {
        return input;
      }


      if (selectedCaloricRange === "401-800") {       //401-800
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 400 && input[i].calories <= 800) {
            output.push(input[i]);
          }
          return output;
        }
      } else {
        return input;
      }


      if (selectedCaloricRange === "801-1200") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 800 && input[i].calories <= 1200) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    } else {
      if (selectedCaloricRange === ">1200") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories > 1200) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }

    //return output;
  }
}

    // if (selectedCaloricRange === "101-400") {
    //   for (var i=0; i < input.length; i++) {
    //     if (input[i].calories > 100 && input[i].calories <= 400) {
    //       output.push(input[i]);
    //     }
    //   }
    // }
    // if (selectedCaloricRange === "401-800") {
    //   for (var i=0; i < input.length; i++) {
    //     if (input[i].calories > 400 && input[i].calories <= 800) {
    //       output.push(input[i]);
    //     }
    //   }
    // }
    // if (selectedCaloricRange === "801-1200") {
    //   for (var i=0; i < input.length; i++) {
    //     if (input[i].calories > 800 && input[i].calories <= 1200) {
    //       output.push(input[i]);
    //     }
    //   }
    // }
    // if (selectedCaloricRange === ">1200") {
    //   for (var i=0; i < input.length; i++) {
    //     if (input[i].calories > 1200) {
    //       output.push(input[i]);
    //     }
    //   }
    // }
