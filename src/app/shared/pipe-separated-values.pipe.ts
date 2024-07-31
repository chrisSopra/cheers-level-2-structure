import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSeparatedValues',
  standalone: true
})
export class PipeSeparatedValuesPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.reduce((accumulator, currentValue) => accumulator + `${currentValue} | `, "").slice(0, -3);
  }

}
