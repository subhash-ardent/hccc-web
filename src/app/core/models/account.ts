import {FamilyMember} from './family-member';
import {Name} from './name';

export class Account {
  userName: string;
  phoneNumber: string;
  roles: string[];
  email: string;
  dateOfBirth: string;
  name: Name;
  familyMembers: FamilyMember[]
}
