import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';
import { InvoiceItemComponent } from '../invoice-item/invoice-item';

@Component({
  selector: 'invoice-detail',
  imports: [InvoiceItemComponent],
  templateUrl: './invoice-detail.html',
  // styleUrl: './invoice-detail.css'
})
export class InvoiceDetail {
  @Input() items!: InvoiceItem[];
}
