import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterServer implements PipeTransform {
  
  /**
   * 
   * @param array an array of objects to filter
   * @param key property to filter
   * @param value value to filter
   */
  transform(array: Array<Object>, key: string, value: string): Array<Object> {
    if(value !== '' && value !== null) {
      return array.filter((obj: Object) => (<string>obj[key]).toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);  
    }
    return array;
  }
}