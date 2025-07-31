import { Component, Input } from '@angular/core';
import { Estudent } from '../../Model/Estudent';
import { StudentItem } from '../student-item/student-item';

@Component({
  selector: 'student-detail',
  imports: [StudentItem],
  templateUrl: './student-detail.html',
  // styleUrl: './student-detail.css'
})
export class StudentDetail {
  @Input() students!: Estudent[];
}
