import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn:"root"
})
export class UserService{
    userAddress : User[]=[new User({
        FirstName : 'amn',
        LastName : 'agf',
        Email :'da@gmail.com',
        Password:'sgg',
        Number:'4364768',
        Address1:'jaegjsfda',
        Address2:'ysgdaj'
    }),new User({
        FirstName : 'amn',
        LastName : 'agf',
        Email :'da@gmail.com',
        Password:'sgg',
        Number:'4364768',
        Address1:'jaegjsfda',
        Address2:'ysgdaj'
    }),new User({
        FirstName : 'amn',
        LastName : 'agf',
        Email :'da@gmail.com',
        Password:'sgg',
        Number:'4364768',
        Address1:'jaegjsfda',
        Address2:'ysgdaj'
    })];

    constructor(private http : HttpClient){}

    addAdress(newAdress : User ) {
        this.userAddress.push(newAdress);
        
    }

    storeAddress(){
       return this.http.put('https://ng-recipebook-889d3.firebaseio.com/address.json',this.userAddress);
    }
   
    getAddress(){
       return this.http.get('https://ng-recipebook-889d3.firebaseio.com/address.json');
    }

    
}