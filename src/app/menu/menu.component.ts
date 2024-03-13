// Importa el decorador Component y la interfaz OnInit desde '@angular/core'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu', // Selector que se utilizará en las plantillas HTML para identificar este componente
  templateUrl: './menu.component.html', // Ubicación del archivo HTML
  styleUrls: ['./menu.component.css'] // Ubicación del archivo CSS
})
// Clase del componente que implementa la interfaz OnInit
export class MenuComponent implements OnInit {

  public miToken: number;
  public nombreUsuario: string | null;

  constructor() {
    this.miToken = 0;
    this.nombreUsuario = "";
  }

  ngOnInit(): void {

    if (localStorage.getItem('miTokenPersonal')) {
      this.miToken = +localStorage.getItem('miTokenPersonal')!;
    }

    if (localStorage.getItem('miTokenPersonal')) {
      this.nombreUsuario = localStorage.getItem('nombreUsuario');
    }

  }

  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');
    }
  }

}
