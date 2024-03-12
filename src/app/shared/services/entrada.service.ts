import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  // Indica que este servicio estará disponible en toda la aplicación (root)
  providedIn: 'root'
})

export class EntradaService {

  // Inyectar HttpClient en el constructor del servicio
  constructor(private htttpClient: HttpClient) { }

  // Método para recuperar entradas desde una API
  public recuperarEntradas(): Observable<any> {
    // Realizar una solicitud GET a la URL proporcionada y devolver un Observable
    return this.htttpClient.get<any>('https://jsonplaceholder.typicode.com/posts')
  }
}
