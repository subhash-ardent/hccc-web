import {Devotee} from '../../core/models/devotee';

export class Teacher {
  userName: string;
  devotee: Devotee;
  skillSet: string[];
  salutation: string;
  profilePictureURL: string;
  indemnitySigned: boolean;
  backgroundVerified: boolean;
  identityVerified: boolean;
}
