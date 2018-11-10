import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'CourseFilter'
})
export class CourseFilterPipe implements PipeTransform {

  transform(courses: any, filterTag: string, filterString: string): any {
    let resultArray = [];
    if (courses.length === 0 || (filterTag === '' && filterString === '')) {
      return courses;
    } else {
      // Course-filtering by string
      if (filterString != '' || (filterString != '' && filterTag != '')) {
        resultArray = [];
        courses.forEach(course => {
          let courseString = '';
          for (const prop in course) {
            if (course.hasOwnProperty(prop)) {
              const element = course[prop];
              courseString += JSON.stringify(element).toLowerCase();
            }
          }
          if (courseString.includes(filterString.toLowerCase())) {
            resultArray.push(course);
          }
        });
      }
      // Course-filtering by tags
      if (filterTag != '' || (filterString != '' && filterTag != '')) {
        resultArray = [];
        courses.forEach(course => {
          course.tags.forEach(tag => {
            if (tag.toLowerCase() === filterTag.toLowerCase()) {
              resultArray.push(course);
            }
          });
        });
      }
    }

    return resultArray;

  }

}
