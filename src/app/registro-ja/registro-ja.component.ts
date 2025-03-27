import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-ja',
  standalone: true, // ¡Añade esta línea!
  imports: [], // Ahora sí es válido (opcional: si necesitas FormsModule, etc.)
  templateUrl: './registro-ja.component.html',
  styleUrl: './registro-ja.component.scss'
})
export class RegistroJAComponent {}