import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataStorageComponent } from './shared/data.storage.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
 
  ngOnInit() {
     firebase.initializeApp({
      apiKey:  "AIzaSyC8vhsBZkzoXxAm5m2lt0usu8nOEAQz9xI",
      authDomain: "ng-recipebook-889d3.firebaseapp.com",
     });
  }
  
 
  title = 'my-dream';
  loadedFeature='recipe';

  constructor(private datacomponent:DataStorageComponent){
    console.log("constructor called");
  } 


  onNavigate(feature:string)
  {
    this.loadedFeature=feature;
    
  }
}
