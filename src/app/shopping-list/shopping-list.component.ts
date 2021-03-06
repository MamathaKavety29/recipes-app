import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

ingredients:Ingredient[];
subscription:Subscription;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingService.getIngredients();
    this.subscription=this.shoppingService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{this.ingredients=ingredients}
    )
  }

onEditIngredient(index:number){
 this.shoppingService.startedEditing.next(index);
}
  
}
