import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UnauthorizeComponent } from './pages/unauthorize/unauthorize.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BusComponent } from './pages/bus/bus.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { EditarBusComponent } from './pages/bus/editar-bus/editar-bus.component';
import { NuevoBusComponent } from './pages/bus/nuevo-bus/nuevo-bus.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NuevoDestinoComponent } from './pages/destinos/nuevo-destino/nuevo-destino.component';
import { EditarDestinoComponent } from './pages/destinos/editar-destino/editar-destino.component';
import { ComprarboletoComponent } from './pages/destinos/comprarboleto/comprarboleto.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    NavbarComponent,
    NuevoUsuarioComponent,
    ModalConfirmComponent,
    EditarUsuarioComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    UnauthorizeComponent,
    FooterComponent,
    BusComponent,
    EditarBusComponent,
    NuevoBusComponent,
    TicketComponent,
    DestinosComponent,
    NuevoDestinoComponent,
    EditarDestinoComponent,
    ComprarboletoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
