import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLogged : boolean = false;
  usuarioLogged! :Usuario |null ;
  isAdmin: boolean = false;
  isMod: boolean = false;

  constructor(private router: Router) { }

  
  ngOnInit(){

  }

  logout() {
    window.location.reload();
    this.router.navigate(['/login']);
  }

} 
