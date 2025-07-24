import { Injectable } from '@angular/core';
import { LearningComponent } from '../components/learning/learning.component';
import { Estudent } from '../Model/Estudent';
import { Course } from '../Model/Course';
import { courseData } from '../Data/Course.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course: Course = courseData;
  constructor() { }

  getStudent(): Course {
    return this.course
  }

}
