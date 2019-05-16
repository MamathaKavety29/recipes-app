import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../user.auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-Adminsignup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router) { }
 
  ngOnInit() {
  }
  onsubmit(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.auth.adminSignupUser(email,password);
    this.router.navigate(['/adminSignin']);
  }

  

}
