import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-josue',
  templateUrl: './registro-josue.component.html',
  styleUrls: ['./registro-josue.component.css']
})
export class RegistroJosueComponent {
  registro = {
    username: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Datos del formulario:', this.registro);
    // Aquí puedes agregar lógica para enviar los datos a un servidor o procesarlos.
    alert('Registro exitoso: ' + JSON.stringify(this.registro));
  }
}
