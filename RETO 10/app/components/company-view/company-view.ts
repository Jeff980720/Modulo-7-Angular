import { Component, Input } from '@angular/core';
import { Company } from '../../model/Company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.html',
  // styleUrl: './company-view.css'
})
export class CompanyView {
  @Input() company!: Company
}
