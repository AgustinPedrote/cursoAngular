// Importaciones.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';

@NgModule({
  // Lista de componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent
  ],
  // Lista de módulos de los cuales se importan componentes,
  //directivas y pipes que son utilizados por los componentes declarados en este módulo
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// Clase AppModule, que representa este módulo y es exportada para ser utilizada en otros lugares de la aplicación
export class AppModule { }
