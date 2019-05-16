import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy 
{
  @ViewChild('f') slForm:NgForm;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  subscription:Subscription;
  constructor(private shoppingService:ShoppingListService) {}

ngOnInit() {
 this.subscription= this.shoppingService.startedEditing.subscribe(
   (index:number)=>{
     this.editMode=true;
     this.editedItemIndex=index;
     this.editedItem=this.shoppingService.getIngredient(index);
     this.slForm.setValue({
       name:this.editedItem.name,
       amount:this.editedItem.amount
     })

   }
 );
}
onSubmit()
{
  const value=this.slForm.value;
  const newIngredient=new Ingredient(value.name,value.amount);
if(this.editMode){
  this.shoppingService.updateIngredients(this.editedItemIndex,newIngredient);
}
else
{
  this.shoppingService.addIngredient(newIngredient);
}
this.slForm.reset();
 }
 onClear(){
   this.slForm.reset();
   this.editMode=false;
 }

 onDelete(){
   this.shoppingService.deleteIngredients(this.editedItemIndex);
   this.onClear();
 }

 ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
  
}
