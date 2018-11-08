import {FamilyMember} from './family-member';
import {Role} from './role';

export class Devotee {
  userName: string;
  phoneNumber: string;
  roles: Role[];
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  familyMembers: FamilyMember[];
}
