import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario={
    email:'',
    password:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario)
  }

}
