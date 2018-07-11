export class Course {
  courseName: string;
  imageURL?: string;
  courseEndTime: string;
  courseStartTime: string;
  courseStartDate?: string;
  courseEndDate?: string;
  tags?: string[];
  slots = 10;
  courseVenue = 'Shiva - Vishnu Temple, Livermore';
  teachers: string[];
  flyerURL?: string;
  courseId?: string;
  courseDays: string;
  courseRemarks?: string;
  ageRestrictions: string;
}
