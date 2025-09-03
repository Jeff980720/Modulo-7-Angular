import { Injectable } from '@angular/core';
import { Tienda } from '../model/Tienda';
import { TiendaData } from '../data/tiendaData';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private shop:Tienda=TiendaData;
  constructor(){}

  //Metodo de la clase para traer los datos
  getTienda():Tienda{
    return this.shop
  }
}

// import { Injectable } from '@angular/core';
// import { Tienda } from '../model/Tienda';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Sucursales } from '../model/Sucursal';

// @Injectable({
//   providedIn: 'root'
// })
// export class TiendaService {

//   private apiUrl = 'http://localhost:3000/api';  // URL base del backend

//   constructor(private http: HttpClient) { }

//   getCompany(): Observable<Tienda> {
//     console.log('EmpresaService: solicitando datos del backend...');
//     return this.http.get<Tienda>(`${this.apiUrl}/company`);
//   }

//   getProduct(): Observable<Tienda> {
//     console.log('ProductosService: solicitando datos del backend...');
//     return this.http.get<Tienda>(`${this.apiUrl}/products`);
//   }

//   checkBackendHealth(): Observable<any> {
//     console.log('InvoiceService: verificando salud del backend...');
//     return this.http.get(`${this.apiUrl}/health`);
//   }
// }
