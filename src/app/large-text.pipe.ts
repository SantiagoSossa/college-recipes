import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largeText'
})
export class LargeTextPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log("aca", value, value.length);
    if(value.length>40){
      console.log("si si");
      return value.slice(0,40)+"...";
    }
    else{
      return value;
    }
  }

}
