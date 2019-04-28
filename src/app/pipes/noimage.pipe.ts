import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform( image: string, args: any[], type: string ): any {
    debugger;
    if ( !image ) {
      return 'general/starwars.jpg';
    }

    if ( args.indexOf(image) > -1 ) {
      return `${type}/${image}`;
    } else {
      return 'general/starwars.jpg';
    }
  }
}
