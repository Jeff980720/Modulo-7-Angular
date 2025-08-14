import { Component, Input } from '@angular/core';
import { Coustumer } from '../../model/Coustumer';

@Component({
  selector: 'coustumer-view',
  imports: [],
  templateUrl: './coustumer-view.html',
  // styleUrl: './coustumer-view.css'
})
export class CoustumerView {
  @Input() customer!: Coustumer
}
