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


    console.log(input);
    console.log(selectedCaloricRange);
    console.log(caloricArray);

    if (selectedCaloricRange != "-") {

      for (var c = 0; c < caloricArray.length; c++) {

        for (var i = 0; i < input.length; i++) {

          if ( input[i].calories <= 100 ) { i = 0; c = 0; }

          else if ( input[i].calories > 100 && input[i].calories <= 400 ) { i = 1; c = 1; }

          else if ( input[i].calories > 400 && input[i].calories <= 800 ) { i = 2; c = 2; }

          else if ( input[i].calories > 100 && input[i].calories <= 400 ) { i = 1; c = 2; }

          else if ( input[i].calories > 1200 ) { i = 4; c = 4; }

          else { console.log("broken calories"); return input; }

          if ( c === i && caloricArray[c] === selectedCaloricRange ) {
            output.push(input[i]);
          }
        }
      }

      return output;

    } else {

      return input;
    }
  }
}
