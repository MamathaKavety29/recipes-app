import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressService } from './address.service';
import { Useraddress } from './address.model';

@Injectable({
    providedIn:"root"
})
export class AddressStorage{

    constructor(private http:HttpClient,
        private addService:AddressService){}

    storeAddress(){
     return  this.http.put('https://ng-recipebook-889d3.firebaseio.com/address.json',this.addService.getAddresses());
    }

    getAddrFrmFB(){
      return this.http.get('https://ng-recipebook-889d3.firebaseio.com/address.json');

    }


}