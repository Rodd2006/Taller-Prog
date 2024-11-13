import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Productos: Producto[] = [
    {
      id: 1,
      nombre: 'Camisa de Algodón',
      descripcion: 'Camisa de algodón 100% cómoda y fresca.',
      precioan: 29000,
      precio: 29000,
      imagen: 'https://www.roperialeonardoberazategui.com.ar/wp-content/uploads/2020/07/RCA-0004-Azulino_1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 2,
      nombre: 'Pantalones Vaqueros',
      descripcion: 'Pantalones vaqueros de corte clásico.',
      precioan: 49990,
      precio: 49990,
      imagen: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/08/11/16602097618742.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 3,
      nombre: 'Chaqueta de Cuero',
      descripcion: 'Chaqueta de cuero genuino.',
      precioan: 89990,
      precio: 89990,
      imagen: 'https://dorianargentina.com/wp-content/uploads/2021/01/Nebraska-negro-a.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },{

      id: 4,
      nombre: 'Pantalon Buzo',
      descripcion: 'Pantalon de buzo.',
      precioan: 91990,
      precio: 91990,
      imagen: 'https://www.indy.com.ar/cdn/shop/files/pantalon-buzo-rip-curl-k-jogg-fe-poal-nino-gris-oscuro-indy-1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
  ];
constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje

  }
}
