import { Component } from '@angular/core';
import { RegistroJAComponent } from './registro-ja/registro-ja.component'; // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroJAComponent], // Agrégalo aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pweb1';
}