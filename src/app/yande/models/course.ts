import {Teacher} from './teacher';
import {IndemnityForm} from './indemnity-forms';

export class Course {
  courseId: number;
  courseName = '';
  courseImageURL = '';
  courseEndTime = '';
  courseStartTime = '';
  courseStartDate = new Date();
  courseEndDate = new Date();
  totalSlots = 0;
  courseVenue = '';
  flyerURL = '';
  isArchived = false;
  isRegistrationOpen = true;
  courseDays = '';
  courseRemarks = '';
  ageRestrictions = '';
  tags = '';
  teachers: Teacher[] = [];
  indemnityForms: IndemnityForm[] = [];
}
