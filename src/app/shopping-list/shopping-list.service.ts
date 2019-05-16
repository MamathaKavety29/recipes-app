import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


export class ShoppingListService{
ingredientsChanged=new Subject<Ingredient[]>();
startedEditing=new Subject<number>();
onDeleting=new Subject<number>();
private ingredients:Ingredient[]=[new Ingredient('Apples',5),
new Ingredient('WaterMelon',1),
new Ingredient('potatoes',8),
new Ingredient('Mangoes',7)];

getIngredients(){
    return this.ingredients.slice();
}

getIngredient(index:number){
    return this.ingredients[index];
}

addIngredient(ingredient:Ingredient)
{
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
}

addIngredients(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
}
updateIngredients(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
}
deleteIngredients(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
}

}