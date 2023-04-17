import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { VistaComponent } from './components/vista/vista.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosIngresarComponent
  },
  {
    path: 'usuarios/listar',
    component: UsuariosListarComponent
  },
  {
    path:'usuarios/registrar',
    component:UsuariosRegistrarComponent
  },
  {
    path:'usuarios/ingresar',
    component:UsuariosIngresarComponent
  },
  {
    path:'usuarios/vista',
    component:VistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
