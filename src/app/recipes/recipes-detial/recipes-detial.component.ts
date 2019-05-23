import { Component, OnInit, Output } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "src/app/auth/user.auth.service";
import { CartService } from "src/app/cart/cart.service";
import { MatProgressButtonOptions } from "mat-progress-buttons";
import { MatBottomSheet, MatBottomSheetRef, MatDialog } from "@angular/material";



@Component({
  selector: "app-recipes-detial",
  templateUrl: "./recipes-detial.component.html",
  styleUrls: ["./recipes-detial.component.css"]
})
export class RecipesDetialComponent implements OnInit {
  recipe: Recipe;
  id: number;
  counter = 0;
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: "ADD TO CART",
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: "primary",
    spinnerColor: "accent",
    fullWidth: false,
    disabled: false,
    mode: "indeterminate",
    icon: "shopping_cart"
  };

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    
    private router: Router,public dailog:MatDialog,
    private authService: AuthService,
    private bottomSheet: MatBottomSheet,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }
  adminMode = this.authService.adminMode;
  addToShoppingList() {
    this.recipeService.addIngreToShopngList(this.recipe.ingredients);
  }
  onEditRecipe() {
    if (this.adminMode) {
      this.router.navigate(["edit"], { relativeTo: this.route });
    }
  }

  progresFunc(filter: string) {
    if (this.spinnerButtonOptions.text == "ADD TO CART") {
      this.cartService.updateShoppingCart(this.recipe);
      this.counter++;
      this.spinnerButtonOptions.active = true;
      this.spinnerButtonOptions.text = "GOING TO CART....";
      setTimeout(() => {
        this.spinnerButtonOptions.active = false;
        this.spinnerButtonOptions.text = "GO TO CART";
      }, 2000);
    } else {
      this.router.navigate(["/cart"]);
    }
  }

  countProd(filter: string, itemInCart: any) {
    if (filter == 'add') {
      this.counter = this.counter + 1;
      this.cartService.updateShoppingCart(itemInCart);
    } else {
      if (this.counter > 0) {
        this.counter = this.counter - 1;
        this.cartService.itemsHasChanged(this.id);
      }
    }
  }

  onDeleteRecipe() {
    if (this.adminMode) {
      this.recipeService.deleteRecipe(this.id);
      this.router.navigate(["/recipes"]);
    }
  }

  onBuy() {


  this.router.navigate(['/buy']);


  }
}

