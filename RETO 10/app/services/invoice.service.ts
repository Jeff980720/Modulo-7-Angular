// import { Injectable } from '@angular/core';
// import { invoiceData } from '../Data/invoice.data';
// import { Invoice } from '../model/Invoice';

// @Injectable({
//   providedIn: 'root'
// })
// export class InvoiceService {

//   private invoice:Invoice=invoiceData;
//   constructor(){}

//   getInvoice():Invoice{
//     return this.invoice
//   }
// }
import { Injectable } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:3000/api';  // URL base del backend

  constructor(private http: HttpClient) { }

  getInvoice(): Observable<Invoice> {
    console.log('InvoiceService: solicitando datos del backend...');
    return this.http.get<Invoice>(`${this.apiUrl}/invoice`);
  }

  checkBackendHealth(): Observable<any> {
    console.log('InvoiceService: verificando salud del backend...');
    return this.http.get(`${this.apiUrl}/health`);
  }
}
