import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  usuarioLogged! :Usuario |null ;
  constructor( private router: Router) { }

  ngOnInit(){
   
  }

  toString(objeto: any){
    return objeto.toString();
  }
}
