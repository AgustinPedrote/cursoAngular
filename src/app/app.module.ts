// Modulo raiz.

// Importaciones de modulos y componentes.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { LoginComponent } from './views/login/login.component';

// Modulo principal, que contiene los metadatos.
@NgModule({
  // Lista de componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    LoginComponent
  ],
  // Lista de módulos de los cuales se importan componentes,
  //directivas y pipes que son utilizados por los componentes declarados en este módulo
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], // Servicios (funcionalidades extra)
  bootstrap: [AppComponent] // Solo el modulo raiz almacenará esta propiedad.
})
// Clase AppModule, que representa este módulo y es exportada para ser utilizada en otros lugares de la aplicación
export class AppModule { }
