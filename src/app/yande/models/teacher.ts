import {Account} from '../../core/models/account';

export class Teacher {
  userName: string;
  account: Account;
  skillSet: string[];
  salutation: string;
  profilePictureURL: string;
  indemnitySigned: boolean;
  backgroundVerified: boolean;
  identityVerified: boolean;
}
