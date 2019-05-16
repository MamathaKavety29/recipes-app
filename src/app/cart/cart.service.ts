import {  Injectable } from '@angular/core';
import { Items, SelectedRecipes } from '../shared/items.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
    providedIn:"root"
})
export class CartService{
    itemsChanged=new Subject<any[]>();
    cartItems:Recipe[]=[];
    itemsAddedIntoCart=new BehaviorSubject<any>(null);
    

    updateShoppingCart(recipe:any){
        let sameItems = [];   
        let differemtItems = [];  
        this.cartItems.push(recipe);
        this.itemsChanged.next(this.cartItems);
        this.itemsAddedIntoCart.next(this.cartItems);
        // this.cartItems.forEach((item)=>{
        //     if(item.id == recipe.id){
        //         sameItems.push(recipe);
        //     }
        //     else
        //     {
        //         differemtItems.push(recipe);
        //     }
        // });
        
        // const selectedItems = new SelectedRecipes(
            // {sameRecipes:sameItems,differentRecipes:differemtItems});
        // const itemsCart=new Items({selectedRecipes:selectedItems});
        
        // console.log(itemsCart);
        // console.log(selectedItems);
        // this.itemsAddedIntoCart.next(itemsCart);
        // //  if (true)
        // {
        //     sameItems.push(recipe);   
        //     console.log(sameItems);
        // }
        //  else 
        // {
        //     differemtItems.push(recipe);
        // }
        // const selectedItems = new SelectedRecipes({sameRecipes: sameItems, differentRecipes: differemtItems });
        // this.cartItems = new Items({selectedRecipes: selectedItems});
        // this.itemsAddedIntoCart.next(this.cartItems);

    }

    getShoppingCart(){
        console.log(this.itemsAddedIntoCart);
        return this.itemsAddedIntoCart;
    }

    itemsHasChanged(index:number){
           this.cartItems.splice(index,1);
           this.itemsChanged.next(this.cartItems);   
           this.itemsChanged.subscribe((res:any)=>{
               this.cartItems = res;
           })

    }

    

}