import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/user.auth.service';



@Injectable({
    providedIn:"root"
})
export class DataStorageComponent{
    
constructor(private http:HttpClient,
    private recipeService:RecipeService,
    private authService:AuthService){}

storeRecipes(){
    const tk=this.authService.getToken();
  return this.http.put('https://ng-recipebook-889d3.firebaseio.com/recipes.json?auth='+tk,this.recipeService.getRecipes());
;
}

getRecipes(){
    const tk=this.authService.getToken();

 return this.http.get('https://ng-recipebook-889d3.firebaseio.com/recipes.json?auth='+tk).subscribe(
(recipes:Recipe[])=>{
this.recipeService.setRecipes(recipes);
}
 );
   
}



}