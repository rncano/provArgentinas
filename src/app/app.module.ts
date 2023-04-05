import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { VistaComponent } from './components/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosIngresarComponent,
    UsuariosRegistrarComponent,
    UsuariosListarComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
