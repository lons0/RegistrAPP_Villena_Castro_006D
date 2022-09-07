import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    nombre:'',
    email:'',
    password:'',
    carrera:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario)
  }

}
