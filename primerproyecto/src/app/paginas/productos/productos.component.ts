import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { Producto } from '../../modelos/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
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
    {
      id: 5,
      nombre: 'Camisa de jean',
      descripcion: 'Camiisa estilo jean',
      precioan: 81990,
      precio: 81990,
      imagen: 'https://lavaindumentaria.com.ar/wp-content/uploads/2022/06/sin-tiasdatulosasd-1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    {
      id: 6,
      nombre: 'Buzo',
      descripcion: 'Buzo 100% algodon',
      precioan: 51290,
      precio: 51290,
      imagen: 'https://www.discamp.com/wp-content/uploads/2020/04/buzo-algodon-friza-gris.png', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    { 
      id: 7,
      nombre: 'Medias',
      descripcion: 'Medias de algodon',
      precioan: 11290,
      precio: 11290,
      imagen: 'https://d22fxaf9t8d39k.cloudfront.net/bf9c36d27d208502e1d26eebc68a9b6efab30a7bab913716de4f69b0317162fb110248.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },
    { 
      id: 8,
      nombre: 'Bombacha de gaucho',
      descripcion: 'Pantalon bombacha estilo gaucho',
      precioan: 33190,
      precio: 33190,
      imagen: 'https://dcdn.mitiendanube.com/stores/002/922/876/products/bombacha-beige11-06eff96900ddf0f60916805334609165-640-0.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },{ id: 9,
      nombre: 'Corbatas',
      descripcion: 'Corbatas formales',
      precioan: 5400,
      precio: 5400,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_693820-MLA31686263889_082019-O.webp', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    },{
      id: 10,
      nombre: 'Pantalon corto deportivo',
      descripcion:'Pantalon corto hecho para el deporte',
      precioan: 15400,
      precio: 15400,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_688102-MLA54025235801_022023-O.webp', // Asegúrate de que esta ruta sea correcta
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
