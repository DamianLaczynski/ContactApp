import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate():boolean {
    if(this.auth.isLogginIn())
    {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
