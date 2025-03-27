import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-esme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-esme.component.html',
  styleUrl: './formulario-esme.component.scss',
})
export class FormularioEsmeComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    console.log('Formulario enviado:', this.formData);
    alert('Formulario enviado con éxito');
    this.formData = { name: '', email: '', message: '' }; // Limpiar formulario
  }
}
