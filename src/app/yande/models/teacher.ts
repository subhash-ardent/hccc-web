import {Devotee} from '../../core/models/devotee';

export class Teacher {
  teacherId: number;
  userName: string;
  devotee: Devotee;
  skillSets: string;
  salutation: string;
  profilePictureURL: string;
  indemnitySigned: boolean;
  backgroundVerified: boolean;
  identityVerified: boolean;
}
