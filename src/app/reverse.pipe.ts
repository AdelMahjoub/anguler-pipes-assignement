import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, sort: boolean): string {
    if(!sort) {
      return value;
    }
    let temp = value.split('');
    return temp.reverse().join('');
  }

}
