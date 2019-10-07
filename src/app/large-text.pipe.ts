import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeText'
})
export class LargeTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if(value.length>40){
      return value.slice(0,40)+"...";
    }
    else{
      return value;
    }
  }

}
