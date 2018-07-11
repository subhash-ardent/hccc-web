import { Pipe, PipeTransform } from '@angular/core';
import {Account} from '../models/account';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(account: Account, args?: any): any {
    if (account && account.name) {
      const f = account.name.firstName;
      const m = account.name.middleName;
      const l = account.name.lastName;
      if (m) {
        return `${f} ${m} ${l}`;
      } else {
        return `${f} ${l}`;
      }
    } else {
      return 'Devotee Name';
    }
  }

}
