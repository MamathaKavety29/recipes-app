import * as firebase from 'firebase';
import {  Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    token:string;
    adminMode=false;
    userMode=false;
    signup=false;
    signin=false;
    constructor(private router:Router){
    }

    signupUser(email: string, password: string) {
        this.userMode=true;
        this.signup=true;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            try {
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        });
    }

    adminSignupUser(email: string, password: string) {
        this.adminMode=true;
        firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
            try {
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    

    singinUser(email:string,password:string){
        this.userMode=true;
        this.signin=true;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then(
                (token:string)=> this.token=token
            )
                
            }
            
        ).catch(error=>console.log(error));
    
    }

    adminSinginUser(email:string,password:string){
        this.adminMode=true;
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response=>{
                this.router.navigate(['/']);
            firebase.auth().currentUser.getIdToken()
            .then(
                (token:string)=> this.token=token
            )
                
            }
            
        ).catch(error=>console.log(error));
    
    }

    
    
    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=>{
                this.token=token;
            }
        );
        return this.token;
    }

    isAuthenticated(){
      return  this.token!=null;
    }

    userLogout(){
        firebase.auth().signOut();
        this.token=null;
    }

    adminLogout(){
        firebase.auth().signOut();
        this.token=null;
    } 
    
}