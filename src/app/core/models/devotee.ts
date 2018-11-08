import {FamilyMember} from './family-member';
import {Role} from './role';

export class Devotee {
  userName: string;
  phoneResidence: string;
  categories: Role[];
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  familyMembers: FamilyMember[];
}
