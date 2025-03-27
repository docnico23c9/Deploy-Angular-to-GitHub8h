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
    alert('Registro exitoso: ' + JSON.stringify(this.registro));
  }
}
