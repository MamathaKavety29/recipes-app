import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Useraddress } from "../shared/Address/address.model";
import { AddressService } from "../shared/Address/address.service";
import { AddressStorage } from "../shared/Address/addressStorage.service";
import { MatDialog } from "@angular/material";
import { DailogFormComponent } from "./dailogform/dailogform.component";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  disabled = false;
  // deliveryForm: FormGroup;
  deliveryForm1 : FormGroup;
  deliveryForm2 : FormGroup;

  editMode = false;

  constructor(
    private addService: AddressService,
    public dialog: MatDialog,
    private addStorage: AddressStorage
  ) {}
  addresses: Useraddress[] = [];
  selectedAddress: string;
  addressData = {
    name: "",
    number: "",
    pincode: "",
    address: "",
    city: "",
    state: ""
  };

  ngOnInit() {
    this.addresses = this.addService.getAddresses();
    this.formInit();
  }

  
  index: number;

  onEdit(index: number, userAddress: Useraddress) {
    this.editMode = true;
    this.formInit(index, userAddress);
    console.log(index);

    const dialogRef = this.dialog.open(DailogFormComponent, {
      height: "800px",
      width: "800px",
      data: {
        index: index,
        address: userAddress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      userAddress = result;
      console.log(userAddress);
      this.addService.updateAddres(index, userAddress);
    });

    console.log(this.selectedAddress);
  }

  onRemove(index:number){
    this.addService.deleteAddress(index);
  }

  private formInit(index?: number, address?: Useraddress) {
    let name = "";
    let email="";
    let number = "";
    let address1 = "";
    let city = "";
    let state = "";
    let pincode = "";

    if (this.editMode) {
      if (index) {
        const address = this.addService.getAddress(index);
        name = address.name;
        email=address.email;
        number = address.number;
        address1 = address.address;
        city = address.city;
        state = address.state;
        pincode = address.pincode;
        console.log(pincode);
        console.log(address);
      }
    }

    this.deliveryForm1 = new FormGroup({
      name: new FormControl(name, Validators.required),
      email: new FormControl(email,Validators.required)
    });

    this.deliveryForm2 =new FormGroup({
      address : new FormControl(address1),
      number : new FormControl(number),
      city : new FormControl(city),
      state : new FormControl(state),
      pincode : new FormControl(pincode)
    });

  }

  onSubmit2()
  {

    console.log(this.deliveryForm2);
    
    var name = this.deliveryForm1.value.name;
    var email=this.deliveryForm1.value.email;
    var number = this.deliveryForm2.value.number;
    var pincode = this.deliveryForm2.value.pincode;
    var address = this.deliveryForm2.value.address;
    var city = this.deliveryForm2.value.city;
    var state = this.deliveryForm2.value.state;

    var newAddress: Useraddress = new Useraddress(name,email,number,pincode,address,city,state);
  

    this.addService.addAddress(newAddress);

  }

  onSubmit1()
  {
    console.log(this.deliveryForm1);
  
  }

}
