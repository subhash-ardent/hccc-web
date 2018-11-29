import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.css']
})
export class LoginRedirectComponent implements OnInit {

  loginUrl: string;
  redirectUrl: string;

  constructor() {
    if (environment && environment.loginRedirect) {
      this.loginUrl = environment.loginRedirect.loginUrl;
      this.redirectUrl = environment.loginRedirect.redirectUrl;
    }
  }

  ngOnInit() {
  }

}
