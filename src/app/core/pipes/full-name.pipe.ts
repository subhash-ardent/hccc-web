import { Pipe, PipeTransform } from '@angular/core';
import {Devotee} from '../models/devotee';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(devotee: Devotee, salutation?: string): any {
    if (devotee) {
      const s = salutation ? salutation + '. ' : '';
      const f = devotee.firstName + ' ';
      const m = devotee.middleName ? devotee.middleName + ' ' : '';
      const l = devotee.lastName;
      return s + f + m + l;
    } else {
      return 'Devotee Name';
    }
  }

}
