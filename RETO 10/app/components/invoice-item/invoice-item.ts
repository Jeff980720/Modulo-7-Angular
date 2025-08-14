import { Component, Input } from '@angular/core';
import { InvoiceItem } from '../../model/InvoiceItem';

@Component({
  selector: 'tr[invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
  // styleUrl: './invoice-item.css'
})
export class InvoiceItemComponent {
  @Input() item!: InvoiceItem;
}
