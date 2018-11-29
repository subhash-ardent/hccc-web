import {Devotee} from '../../core/models/devotee';

export class Teacher {
  teacherId: number;
  userName: string;
  devotee: Devotee;
  skillSets: string;
  salutation = 'Shri';
  profilePictureURL: string;
  indemnitySigned = false;
  backgroundVerified = false;
  identityVerified = false;
}
