import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda';
import { Tienda } from '../../model/Tienda';
import { CommonModule } from '@angular/common';
import { EmpresaView } from "../empresa-view/empresa-view";
import { SucursalDetalle } from "../sucursal-detalle/sucursal-detalle";

@Component({
  selector: 'app-tienda',
  imports: [CommonModule, EmpresaView, SucursalDetalle],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.css'
})
export class TiendaComponent implements OnInit {
  tienda!: Tienda;
  totalStock: number = 0;

  //private service:TiendaService=new TiendaService();
  constructor(private service: TiendaService) { }
  ngOnInit(): void {
    this.tienda = this.service.getTienda();

    // Calcular el total de stock
    this.totalStock = this.tienda.sucursales.reduce((total, sucursal) => {
      const subtotal = sucursal.productosItem.reduce((sum, item) => sum + item.cantidad, 0);
      return total + subtotal;
    }, 0);
  }
}
export { Tienda };

// import { Component, OnInit } from '@angular/core';
// import { TiendaService } from '../../services/tienda';
// import { Tienda } from '../../model/Tienda';
// import { CommonModule } from '@angular/common';
// import { EmpresaView } from "../empresa-view/empresa-view";
// import { SucursalDetalle } from "../sucursal-detalle/sucursal-detalle";
// import { Sucursales } from '../../model/Sucursal';

// @Component({
//   selector: 'app-tienda',
//   imports: [CommonModule, EmpresaView, SucursalDetalle],
//   templateUrl: './tienda.component.html',
//   styleUrl: './tienda.css',
//   // providers: [TiendaService] // <-- Add this line if not provided in root
// })
// export class TiendaComponent implements OnInit {

//   tienda!: Tienda;
//   totalStock: number = 0;

//   constructor(private service: TiendaService) { }

//   ngOnInit(): void {
//     this.service.getCompany().subscribe(
//       (data: Tienda) => {
//         this.tienda = data;
//         console.log('Datos recibidos del backend:', data);

//         // Calcular el total de stock
//         this.totalStock = this.tienda.sucursales.reduce((total, sucursal) => {
//           const subtotal = sucursal.productosItem.reduce((sum, item) => sum + item.cantidad, 0);
//           return total + subtotal;
//         }, 0);
//       },
//       (error) => {
//         console.error('Error al obtener datos del backend:', error);
//         console.error('Asegúrate de que el backend esté en puerto 3000');
//       }
//     );

//     this.service.getProduct().subscribe(
//       (data: Tienda) => {
//         this.tienda = data;
//         console.log('Productos recibidos del backend:', data);
//       },
//       (error) => {
//         console.error('Error al obtener productos del backend:', error);
//         console.error('Asegúrate de que el backend esté en puerto 3000');
//       });
//   }
// }

