import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../user.auth.service';



@Component({
  selector: 'app-Adminsignin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  
  constructor(private auth:AuthService,
    private router:Router) { }

  ngOnInit() {
  }
  onsignin(form:NgForm)
  {
    console.log(form);
    const email=form.value.email;
    const password=form.value.password;
    this.auth.adminSinginUser(email,password);
    this.router.navigate(['/']);
  }
}
