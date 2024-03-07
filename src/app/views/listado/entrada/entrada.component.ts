// Importaciones
import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-entrada', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './entrada.component.html', // Ubicación del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./entrada.component.css'] // Ubicación del archivo CSS que contiene los estilos del componente
})
// Clase del componente que implementa la interfaz OnInit
export class EntradaComponent implements OnInit {
  // Propiedad de entrada, marcada como Input para recibir datos del componente padre
  @Input()
  public entrada!: Entrada;

  constructor() { }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
  }

}
