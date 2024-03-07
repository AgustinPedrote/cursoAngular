// Importa el decorador Component desde el módulo '@angular/core'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './app.component.html', // Ubicación del archivo HTML
  styleUrls: ['./app.component.css'] // Ubicación del archivo CSS
})
export class AppComponent {
  title = 'cursoAngularOW'; // Propiedad del componente que almacena el título
}
