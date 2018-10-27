import {Teacher} from './teacher';

export class Course {
  courseName: string;
  courseImageURL?: string;
  courseEndTime: string;
  courseStartTime: string;
  courseStartDate?: string;
  courseEndDate?: string;
  tags?: string[];
  slots: number;
  courseVenue: string;
  teachers: Teacher[];
  flyerURL?: string;
  courseId?: string;
  courseDays: string;
  courseRemarks?: string;
  ageRestrictions: string;
  tagsString: string;
  teachersString: string;
}
