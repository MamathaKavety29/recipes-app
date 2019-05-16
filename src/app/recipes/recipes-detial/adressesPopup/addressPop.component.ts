import { Component, OnInit, OnChanges } from '@angular/core';

import { MatBottomSheetRef } from '@angular/material';

import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/userAddress/user.service';
import { User } from 'src/app/shared/userAddress/user.model';

// import { UserServic} from '../user.service'

@Component({
    selector: "app-address",
    templateUrl: "adress-popup.html"
  })
  export class AddressPopupComponent implements OnInit,OnChanges {
   
    listOfAddress: User[];

  
    constructor(
      private bottomSheetRef: MatBottomSheetRef,
      private router: Router,
      private userservice: UserService
    ) {
      
    }
  
    ngOnInit() {
        console.log("fril");
        this.userservice.getAddress().subscribe((res: User[]) => {
            this.listOfAddress = res;
            console.log(this.listOfAddress);

          });
    }
    ngOnChanges() {
        console.log("simple changes")
        
    }
  
    seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  ////  addressList: any[] = [{"Address1":"ss"}];
  
    onAddAdress() {
      this.router.navigate(["/buy"]);
    }
  }
  