import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-mini-ts';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date|moment.Moment, args: string[]): any {

  	if (!value) return value;

		return moment().diff(value, 'years')+" Years";
  }

}
