import { Component, OnInit, AfterContentInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/user.auth.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit,OnDestroy {
    recipes:Recipe[];
    subscription:Subscription
  constructor(private recipeService:RecipeService,private router:Router,
    private route:ActivatedRoute,private auth:AuthService) { }
adminMode=this.auth.adminMode;
userMode=this.auth.userMode;
  ngOnInit() {
    this.subscription=this.recipeService.recipesChanged.subscribe(
      (recipe:Recipe[])=>{this.recipes=recipe;}
    );
   this.recipes= this.recipeService.getRecipes();
   
   
  }
  newRecipe()
  {
    this.router.navigate(['new'],{relativeTo:this.route});

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
}
