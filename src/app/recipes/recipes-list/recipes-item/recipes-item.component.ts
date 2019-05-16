import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { AuthService } from 'src/app/auth/user.auth.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit{  
@Input() recipe:Recipe;
@Input() index:number;
  constructor(private auth:AuthService) {}
  adminMode=this.auth.adminMode;
  userMode=this.auth.userMode;

  ngOnInit() {}
 

 

}
