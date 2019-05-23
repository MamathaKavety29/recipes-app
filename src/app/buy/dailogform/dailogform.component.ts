import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from 'src/app/shared/Address/address.service';

@Component({
    selector:'app-dailog',
    templateUrl:'./dailogform.component.html'
})
export class DailogFormComponent implements OnInit{
    deliveryForm:FormGroup;
    constructor(  public dialogRef: MatDialogRef<DailogFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,private addService:AddressService){}

ngOnInit(){
  
    this.deliveryForm = new FormGroup({
        name:new FormControl(this.data.address.name,Validators.required),
        number:new FormControl(this.data.address.number,Validators.required),
        address:new FormControl(this.data.address.address,Validators.required),
        city:new FormControl(this.data.address.city,Validators.required),
        state:new FormControl(this.data.address.state,Validators.required),
        pincode:new FormControl(this.data.address.pincode,Validators.required)
    });
}

}