import { Component } from '@angular/core';
import { CarritoService } from '../../servicio/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
Productos: Producto []=[
  {
      id: 1,
      nombre: 'Camisa de Algodón',
      descripcion: 'Camisa de algodón 100% cómoda y fresca.',
      precioan:29000,
      precio: 19000,

      imagen: 'https://www.roperialeonardoberazategui.com.ar/wp-content/uploads/2020/07/RCA-0004-Azulino_1.jpg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true

  },
  {
    
    id: 2,
    nombre: 'Pilusos',
    descripcion: 'Pilusos',
    precioan:19000,
    precio: 9000,
    imagen: 'https://rusty.com.ar/cdn/shop/files/OVERDRIVE_1_cb3b08d1-38b7-4492-a268-bf06e138b9f5.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 3,
    nombre: 'Body',
    descripcion: 'Body color negro ',
    precioan:39000,
    precio: 29000,
    imagen: 'https://selulen.vtexassets.com/arquivos/ids/179548/SL403_negro_1-selu-body-microfibra-tul-manga-larga.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },{
    id: 4,
    nombre: 'Malla',
    descripcion: 'Malla de baño veraniega ',
    precioan:40000,
    precio: 25000,
    imagen: 'https://www.clarin.com/2021/01/04/R1bezEe3h_720x0__1.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },
  {
    id: 5,
    nombre: 'Short de baño',
    descripcion: 'short de baño veraniega ',
    precioan:40000,
    precio: 25000,
    imagen: 'https://acdn.mitiendanube.com/stores/001/218/661/products/28585-13-21-ea0d5020a8cd925b7616715450968814-1024-1024.jpg', // Asegúrate de que esta ruta sea correcta
    disponibilidad: true
  },{
    id: 6,
      nombre: 'Medias',
      descripcion: 'Medias de algodon',
      precioan: 11290,
      precio: 9000,
      imagen: 'https://d22fxaf9t8d39k.cloudfront.net/bf9c36d27d208502e1d26eebc68a9b6efab30a7bab913716de4f69b0317162fb110248.jpeg', // Asegúrate de que esta ruta sea correcta
      disponibilidad: true
    }
  

]
constructor(private carritoService: CarritoService) {}

  // Método para agregar un producto al carrito
  agregar(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto);
    alert('Producto agregado al carrito'); // Muestra el mensaje
  }
}

