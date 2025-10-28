import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topsis'
})
export class TopsisPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
