import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    items:Recipe[]=[];
    itemAddedIntoCart = new BehaviorSubject<Recipe>(null);
    // itemAddedIntoCart$: Observable<any>;
    private recipes:Recipe[]=[
        new Recipe('0','Another Test Recipe','This is simply a Test','assets/images/aloogobi.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],300),

        new Recipe('1','BACON','This is simply a Test','assets/images/butterchicken.jpg',
        [new Ingredient('buns',6),new Ingredient('fries',8),new Ingredient('eggs',7),
    new Ingredient('banana',8)],200),
        new Recipe('2','BEEF FRY','This is simply a Test','assets/images/Beef.jpg',
        [new Ingredient('buns',6),new Ingredient('fries',8)],300),
        new Recipe('3','CARROT FRY','This is simply a Test','assets/images/carrot.jpg',
        [new Ingredient('buns',6),new Ingredient('fries',8)],100),
        new Recipe('4','CHICKEN-STIR','This is simply a Test','../assets/images/heart.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],200),
        new Recipe('5','CRISPY POTATO','basically a spicy and crunchy potato dish which is served as a side dish for rice. it is typically served as accompaniment to rasam and sambar with hot steamed rice. aloo fry recipe. ... it is simply prepared with diced potatoes which is fried with little oil and then spiced with chili powder and salt as required.','../assets/images/crispypotato.jpg',
        [new Ingredient('Potatoes',2),new Ingredient('Red chili powder',1),new Ingredient('Red chili powder',1),new Ingredient('Red chili powder',1),new Ingredient('Red chili powder',1),new Ingredient('Red chili powder',1)],300),
        new Recipe('6','HONEY CHICKEN','This is simply a Test','../assets/images/blackforest.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],800),
        new Recipe('7','GARLIC CHICKEN','This is simply a Test','../assets/images/garlicchicken.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],400),
        new Recipe('8','CHICKEN','This is simply a Test','../assets/images/kitchen.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],700),
        new Recipe('9','NEW YORK','This is simply a Test','../assets/images/newYork.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],300),
        new Recipe('10','PANCAKES','This is simply a Test','../assets/images/pancakes.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],400),
        new Recipe('11','SALAD','This is simply a Test','../assets/images/crab.jpg',
        [new Ingredient('meat',1),new Ingredient('honey',1)],100),
    ]
    
    selectedItems = new Map();
    counter:any;

       constructor(private shoppingService:ShoppingListService){
        
       }
      getRecipes()
      {
          return this.recipes.slice();
      }

      setRecipes(recipes:Recipe[])
      {
          this.recipes=recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

      getRecipe(index:number){
          return this.recipes[index];

      }
      addRecipe(recipe:Recipe){
     this.recipes.push(recipe);
     this.recipesChanged.next(this.recipes.slice());     
      }

      updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());     
     }

     deleteRecipe(index:number){
         this.recipes.splice(index,1);
         this.recipesChanged.next(this.recipes.slice());
     }


      addIngreToShopngList(ingredients:Ingredient[])
      {
          this.shoppingService.addIngredients(ingredients); 
      }

    


        getCounter()
       {
          console.log(this.counter)
          return this.counter
        }
      addItem(userEmail: any, product: any) {
          this.selectedItems.set(userEmail, product);
      }

      getSelectedItems(userEmail) {
        return this.selectedItems.get(userEmail);
    }
}