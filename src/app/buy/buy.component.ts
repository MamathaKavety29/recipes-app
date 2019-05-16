import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { emailDomain } from './Validators';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../shared/userAddress/user.service';
import { User } from '../shared/userAddress/user.model';
import * as firebase from 'firebase';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
     
  isLinear=true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
addressForm:FormGroup;

addressData = {
  FirstName:'',
  LastName:'',
  Email:'',
  Number:'',
  Password:'',
  Address1:''
};

submitted=false;
  constructor(private snackBar: MatSnackBar,
             private userservice:UserService){}


  ngOnInit() {
    let phno:string = null;
    phno="abcd";
    console.log(phno.length);
    this.addressForm=new FormGroup({
      'FirstName':new FormControl(null,[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      'LastName':new FormControl(null,[Validators.required,Validators.pattern('^[A-Za-z]*$')]),
      'Email':new FormControl(null,[Validators.required,Validators.email,emailDomain]),
      'Password':new FormControl(null,Validators.required),
      'Number':new FormControl(null,[Validators.required]),
      
    });
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.addressForm);
    console.log(this.addressForm.value.FirstName);

    const email=firebase.auth().currentUser.email;

    let userAddress = new User({
      FirstName : this.addressForm.value.FirstName,
      Email :   email,
      LastName : this.addressForm.value.LastName,
      Password : this.addressForm.value.Password,
      Number : this.addressForm.value.Number,
      
    });
    
    this.userservice.addAdress(userAddress);
  
    console.log(firebase.auth().currentUser);

    
    
    this.addressData.FirstName=this.addressForm.value.FirstName;
    this.addressData.LastName=this.addressForm.value.LastName;
    this.addressData.Email=this.addressForm.value.Email;
    this.addressData.Number=this.addressForm.value.Number;
    this.addressForm.reset();
    
  }

  openSnackBar() {
    this.snackBar.open("Your Order Hasbeen Sucessfully Placed!!!",'payment', {
      duration: 2000,
    });
    this.userservice.storeAddress().subscribe(
      (res : Response) => {
        console.log(res);
      }
    )
  }



  
  }
  



