import {Teacher} from './teacher';
import {IndemnityForm} from './indemnity-forms';

export class Course {
  courseId: number;
  courseName = 'NP Test 01';
  courseImageURL = '';
  courseEndTime = '12:30';
  courseStartTime = '13:30';
  courseStartDate = '2018-11-01';
  courseEndDate = '2018-11-10';
  slots = 10;
  courseVenue = 'Tirumala Hall';
  flyerURL = '';
  isArchived = false;
  isRegistrationOpen = true;
  courseDays = 'Saturdays';
  courseRemarks = 'Test Remarks';
  ageRestrictions = '11 plus';
  tags = 'abd,xyz';
  tagsArray: string[] = [];
  teachers: Teacher[] = [];
  indemnityForms: IndemnityForm[] = [];
}
