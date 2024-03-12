// Importaciones:
import { Component, OnInit } from '@angular/core';
import { EntradaService } from 'src/app/shared/services/entrada.service';

@Component({
  selector: 'app-listado', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './listado.component.html',  // Ubicación del archivo HTML que contiene la plantilla del componente
  styleUrls: ['./listado.component.css'] // Ubicación del archivo CSS que contiene los estilos del componente
})
// Clase del componente que implementa la interfaz OnInit
export class ListadoComponent implements OnInit {
  // Arreglo de entradas
  public listadoEntradas: any;

  // Constructor del componente, inyecta el servicio de Entrada
  constructor(private entradaService: EntradaService) {

  }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    this.recuperarEntradas();
  }

  // Método privado para recuperar las entradas desde el servicio
  private recuperarEntradas(): void {
    // Se suscribe al Observable devuelto por el método recuperarEntradas del servicio
    this.entradaService.recuperarEntradas().subscribe(
      // En caso de éxito
      (data) => {
        this.listadoEntradas = data;
      },
      // En caso de error
      (error) => {

      },
      // En caso de completado
      () => {

      }
    )
  }

  // Método que muestra una alerta con el título de la entrada seleccionada
  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
