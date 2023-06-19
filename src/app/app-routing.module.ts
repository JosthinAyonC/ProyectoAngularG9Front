import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BusComponent } from './pages/bus/bus.component';
import { EditarBusComponent } from './pages/bus/editar-bus/editar-bus.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { EditarDestinoComponent } from './pages/destinos/editar-destino/editar-destino.component';
import { TicketComponent } from './pages/ticket/ticket.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },  
  {
    path: 'unauthorize',
    component: UnauthorizeComponent,
  },  
  {
    path: '',
    component: HomeComponent ,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuario/editar',
    component: EditarUsuarioComponent,
  },
  {
    path: 'bus',
    component: BusComponent,
  },
  {
    path: 'bus/editar',
    component: EditarBusComponent,
  },

  {
    path: 'destinos',
    component: DestinosComponent,
  },

  { 
    path: 'viaje/editar', 
    component: EditarDestinoComponent 
  },

  { 
    path: 'mistickets', 
    component: TicketComponent 
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
