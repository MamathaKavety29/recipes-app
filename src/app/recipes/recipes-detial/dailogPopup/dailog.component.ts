import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/shared/userAddress/user.service';

@Component({
    selector:'app-dailog',
    templateUrl:'dailog.component.html'
})
export class DailogComponent implements OnInit{
    addresslist:any[];
    constructor(public dailogRef:MatDialogRef<DailogComponent>,
        private userservice:UserService){}

        ngOnInit() {
         this.userservice.getAddress().subscribe(
            (res:any[]) => 
            {
              this.addresslist = res;
            }
         );
        }
}