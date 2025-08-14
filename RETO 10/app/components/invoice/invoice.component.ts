// import { Component, OnInit } from '@angular/core';
// import { InvoiceService } from '../../services/invoice.service';
// import { Invoice } from '../../model/Invoice';
// import { CompanyView } from "../company-view/company-view";
// import { CoustumerView } from "../coustumer-view/coustumer-view";
// import { InvoiceDetail } from "../invoice-detail/invoice-detail";

// @Component({
//   selector: 'app-invoice',
//   imports: [CompanyView, CoustumerView, InvoiceDetail],
//   templateUrl: './invoice.component.html',
//   // styleUrl: './invoice.css'
// })
// export class InvoiceComponent implements OnInit {
//   // private service:InvoiceService=new InvoiceService();
//   invoice!:Invoice;
//   constructor(private service:InvoiceService){}
//   ngOnInit(): void {
//    this.invoice=this.service.getInvoice();
//   }
// }
// export { Invoice };
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../model/Invoice';
import { CompanyView } from "../company-view/company-view";
import { CoustumerView } from "../coustumer-view/coustumer-view";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";

@Component({
  selector: 'app-invoice',
  imports: [CompanyView, CoustumerView, InvoiceDetail],
  templateUrl: './invoice.component.html',
  // styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService) {}

  ngOnInit(): void {
    this.service.getInvoice().subscribe(
      (data: Invoice) => {
        this.invoice = data;
        console.log('Datos recibidos del backend:', data);
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
        console.error('Asegúrate de que el backend esté en puerto 3000');
      }
    );
  }
}

