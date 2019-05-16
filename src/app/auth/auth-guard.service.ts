import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './user.auth.service';



@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  constructor(private authservice:AuthService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      return this.authservice.isAuthenticated();
  }

   


}