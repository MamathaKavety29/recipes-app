import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription, Subject } from "rxjs";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { CartService } from "./cart.service";

import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { SelectedRecipes, Items } from '../shared/items.model';
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit,OnDestroy {
  recipe: Recipe;
  cartSubcsription: Subscription;
  name: string;
  description: string;
  imagePath: string;
  itemIngredients: Ingredient[];
  itemCost: string;
  constructor(
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) {}

  items: any[] = [];
  
  cartItems: any[]=[];
  selectedItems:any;
  itemName: any;
  counter = 1;
  
  ngOnInit() 
  {
   this.cartSubcsription= this.cartService.getShoppingCart().subscribe( 
     (res:any) => {
        this.items=res;
    });
  
    let uniqueItems = new Set<any>(this.items);
    this.items=Array.from(uniqueItems);
    console.log(this.items);
  }

  countProd(filter: string, itemInCart: any)
 {
  let sameItems:any[] = [];   
  let differemtItems:any[]=[]; 
    if (filter == "add") 
    {
      this.counter = this.counter + 1;
      this.items.push(itemInCart);
      
   } 
    else 
    {
      if (this.counter > 0) 
      {
        this.counter = this.counter - 1;
      }
    }

//  const selectedItems = new SelectedRecipes({
//    sameRecipes : sameItems,
//    differentItems : differemtItems
//  });

 
//  console.log(selectedItems);
//  console.log(this.items);
 
  }

  onPlaceOrder() {
    this.router.navigate(["buy"]);
  }

  onRemoveItem(index: number) {
    this.cartService.itemsHasChanged(index);
  }

  totalAmt(): any {
    let amt = 0;

    if (this.items && this.items.length) {
      this.items.forEach(item => {
        amt = amt + item.cost;
      });
    }
    console.log(amt);
    return amt;
   
}

  ngOnDestroy()
  {
    this.cartSubcsription.unsubscribe();
    
  }
}
