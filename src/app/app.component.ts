import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroEGPComponent } from './registro-e-g-p/registro-e-g-p.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroEGPComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pweb1';
}
