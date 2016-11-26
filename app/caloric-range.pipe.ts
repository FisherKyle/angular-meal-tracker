import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricRange",
  pure: false
})

export class CaloricRangePipe implements PipeTransform {
  transform(input: Food[], selectedCaloricRange)  {

    var output: Food[] = [];
    var caloricArray = [ "-", "0-100", "101-400", "401-800", "801-1200", ">1200" ];

    if (selectedCaloricRange === "0-100") {
    }

    if (selectedCaloricRange === "101-400") {
    }

    if (selectedCaloricRange === "401-800") {
    }

    if (selectedCaloricRange === "801-100") {
    }


//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else  {
//       output.push(i);
//     }
//   }
//   return output;
// }

      return output;

    } else {

      return input;
    }
  }
}
