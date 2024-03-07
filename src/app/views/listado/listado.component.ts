// Importaciones:
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-listado', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './listado.component.html',  // Ubicación del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./listado.component.css'] // Ubicación del archivo CSS que contiene los estilos del componente
})
// Clase del componente que implementa la interfaz OnInit
export class ListadoComponent implements OnInit {
  // Arreglo de entradas
  public listadoEntradas: Entrada[];

  constructor() {
    // Inicializa el arreglo de entradas con algunos datos de ejemplo
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección realizaremos una pequeña introducción'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido por el lenguaje de Typescript'
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'Aprenderemos a usuar los componentes en Angular'
      }
    ];
  }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
  }

  // Método que muestra una alerta con el título de la entrada seleccionada
  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
