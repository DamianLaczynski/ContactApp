import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private auth: AuthService, private router: Router) {}
ngOnInit(): void {
    
}
loginModel: LoginModel = {
  email: '',
  password: ''
}
onLogin(){
  this.auth.login(this.loginModel)
  .subscribe(
    response => {
      this.auth.storeToken(response.token);
      this.router.navigate(['contacts'])
    }
  )
}
}
