import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(array: any, sort: boolean, key: string): Array<Object> {
    if(!sort) {
      return array;
    }
    let temp = JSON.parse(JSON.stringify(array))
    return temp.sort((a, b) => (<string>a[key]).localeCompare(b[key]));
  }

}
