import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  // Angular tiene una propiedad que se llama Bind, esto permite que una variable sel controlador este disponible en la vista o html.
  // si se coloca true, esta login, si se coloca false, no esta esta logeado
   isLogin = false;

  componentes:Componente[] = [
    {
      icon:'information-outline',
      name:'Inicio',
      redirecTo:'/inicio',
    },

    {
      icon:'list-outline',
      name:'Lista',
      redirecTo:'/lista',
    },

    {
      icon:'qr-code-outline',
      name:'QR',
      redirecTo:'/qr',
    },

    {
      icon:'person-outline',
      name:'User',
      redirecTo:'/user',
    },
    
  ];

  
}
