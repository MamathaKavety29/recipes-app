import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetialComponent} from './recipes/recipes-detial/recipes-detial.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BasicDirective } from './directives/basic-directive';
import { BetterDirectiveDirective } from './better-directive.directive';
import { UnlessDirective } from './unless.directive';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './auth/user/Usersignup/signup.component';
import { SigninComponent } from './auth/user/Usersignin/signin.component';
import { AdminSigninComponent } from './auth/admin/Adminsignin/signin.component';
import { AdminSignupComponent } from './auth/admin/Adminsignup/signup.component';
import { CartComponent } from './cart/cart.component';
import {MatButtonModule, MatCheckboxModule, MatBottomSheetModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/mymaterial.module';
import {MatIconModule} from '@angular/material/icon';
import { BuyComponent } from './buy/buy.component';
import { HeaderComponent } from './header/header.component';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { AddressPopupComponent } from './recipes/recipes-detial/adressesPopup/addressPop.component';
import { UserService } from './shared/userAddress/user.service';
import { DailogComponent } from './recipes/recipes-detial/dailogPopup/dailog.component';
// import { UserService } from './recipes/recipes-detial/user.service';






@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetialComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicDirective,
    BetterDirectiveDirective,
    UnlessDirective,
    HeaderComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    SignupComponent,AddressPopupComponent,
    SigninComponent,
    AdminSigninComponent,DailogComponent,
    AdminSignupComponent,
    CartComponent,
    BuyComponent
  ],
  
  imports: [
    BrowserModule,
    MatIconModule,
    MatBottomSheetModule,
    MatBottomSheetModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressButtonsModule,
    AppRoutingModule,
    BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule, MatCheckboxModule
  ],
  entryComponents: [DailogComponent,AddressPopupComponent],
  providers: [
    ShoppingListService,UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
