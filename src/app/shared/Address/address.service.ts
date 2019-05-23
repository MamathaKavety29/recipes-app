import {  Injectable } from '@angular/core';
import { Useraddress } from './address.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:"root"
})
export class AddressService {
    AddressChanged = new Subject<Useraddress[]>();
    userAddresses:Useraddress[]=[new Useraddress('mama','mama@gmail.com','435435','24214','jjflkasjflksa','reyt','wraw'),
    new Useraddress('mama','mama@gmail.com','435435','24214','jjflkasjflksa','reyt','wraw')];


    getAddresses(){
        return this.userAddresses;
    }

    getAddress(index:number){
        return this.userAddresses[index];
    }

    addAddress(address:Useraddress){
        this.userAddresses.push(address);
        
    }

    

    updateAddres(index:number,newAddress:Useraddress){
        this.userAddresses[index]=newAddress;
        this.AddressChanged.next(this.userAddresses);
        this.AddressChanged.subscribe((adress : any)=>{
            this.userAddresses=adress;
            console.log(this.userAddresses);

        })

    }
    
    deleteAddress(index:number){
        this.userAddresses.splice(index,1);
    }
}