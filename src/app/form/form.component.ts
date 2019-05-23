import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from '../shared/Address/address.service';
import { AddressStorage } from '../shared/Address/addressStorage.service';
import { Useraddress } from '../shared/Address/address.model';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
    selector:"app-form",
    templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
}