import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetialComponent } from './recipes/recipes-detial/recipes-detial.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { AuthGuard } from './auth/auth-guard.service';
import { SignupComponent } from './auth/user/Usersignup/signup.component';
import { SigninComponent } from './auth/user/Usersignin/signin.component';
import { AdminSigninComponent } from './auth/admin/Adminsignin/signin.component';
import { AdminSignupComponent } from './auth/admin/Adminsignup/signup.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { BuyComponent } from './buy/buy.component';


const routes: Routes = [
 {path:'',redirectTo:'/recipes',pathMatch:'full'},
 { path:'recipes',component:RecipesComponent,children:[
   
   {path:'',component:RecipeStartComponent},
   {path:'new',component:RecipeEditComponent,canActivate:[AuthGuard]},
  //  {path:':id',component:RecipesDetialComponent},
  {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuard]},
  ]
},
{path:'cart',component:CartComponent},
{path:'recipes/:id',component:RecipesDetialComponent},
 { path:'shopping-List',component:ShoppingListComponent},
 {path:'signup',component:SignupComponent},
 {path:'signin',component:SigninComponent},
 {path:'adminSignin',component:AdminSigninComponent},
{path:'adminsignup',component:AdminSignupComponent},
{path:'buy',component:BuyComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
