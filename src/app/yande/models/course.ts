import {Teacher} from './teacher';
import {IndemnityForm} from './indemnity-forms';

export class Course {
  courseId: number;
  courseName = '';
  courseImageURL = '';
  courseEndTime = '10:30';
  courseStartTime = '11:30';
  courseStartDate = '2018-11-01';
  courseEndDate = '2019-11-01';
  slots = 25;
  courseVenue = 'Tirumala Hall';
  flyerURL = '';
  isArchived = false;
  isRegistrationOpen = true;
  courseDays = 'Saturdays';
  courseRemarks = '';
  ageRestrictions = '';
  tags = '';
  tagsArray: string[] = [];
  teachers: Teacher[] = [];
  indemnityForms: IndemnityForm[] = [];
}
