// Importa el decorador Component y la interfaz OnInit desde '@angular/core'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './menu.component.html', // Ubicación del archivo HTML
  styleUrls: ['./menu.component.css'] // Ubicación del archivo CSS
})
// Clase del componente que implementa la interfaz OnInit
export class MenuComponent implements OnInit {

  constructor() { }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
  }

}
