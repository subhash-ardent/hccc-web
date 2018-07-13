import { Pipe, PipeTransform } from '@angular/core';
import {Account} from '../models/account';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(account: Account, salutation?: string): any {
    if (account && account.name) {
      const s = salutation ? salutation + '. ' : ''
      const f = account.name.firstName + ' ';
      const m = account.name.middleName ? account.name.middleName + ' ' : '';
      const l = account.name.lastName;
      return s + f + m + l;
    } else {
      return 'Devotee Name';
    }
  }

}
