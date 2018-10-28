import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'hccc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
