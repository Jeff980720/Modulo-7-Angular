import { Component, Input } from '@angular/core';
import { Estudent } from '../../Model/Estudent';

@Component({
  selector: 'tr[student-item]',
  imports: [],
  templateUrl: './student-item.html',
  // styleUrl: './student-item.css'
})
export class StudentItem {
  @Input() item!: Estudent;
}
