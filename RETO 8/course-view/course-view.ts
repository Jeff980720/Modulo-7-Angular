import { Component, Input } from '@angular/core';
import { Course } from '../learning/learning.component';

@Component({
  selector: 'course-view',
  imports: [],
  templateUrl: './course-view.html',
  // styleUrl: './course-view.css'
})
export class CourseView {
  @Input() course!: Course;
}
