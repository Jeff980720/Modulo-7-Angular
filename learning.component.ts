import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../Model/Course';

@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.component.html',
  // styleUrl: './learning.css'
})
export class LearningComponent implements OnInit {
  course!: Course;
  constructor(private service: CourseService) { }
  ngOnInit(): void {
    this.course = this.service.getStudent();
  }
}
export { Course }
