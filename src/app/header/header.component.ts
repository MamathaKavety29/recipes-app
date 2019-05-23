import { DataStorageComponent } from '../shared/data.storage.service';
import { AuthService } from '../auth/user.auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service';
import { CartService } from '../cart/cart.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Items } from '../shared/items.model';
import { map } from 'rxjs/operators';
;


@Component({
selector:'app-header',
templateUrl:'./header.component.html',
styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{


   
items:any
 constructor(private dataStorage:DataStorageComponent,
   private authService:AuthService,private router:Router,
   private cartService:CartService,
   private recipeService:RecipeService,public dialog: MatDialog
   ){}
    

   ngOnInit() {
this.cartService.getShoppingCart().subscribe(
    (res:any) => {
        this.items = res;
    }
)

        
}







   userMode=this.authService.userMode;
   adminMode=this.authService.adminMode;
      
    onSave(){ 
       this.dataStorage.storeRecipes().subscribe(
           (response:Response)=>{console.log(response)}
       );
    
    }

    onFetch(){
        this.dataStorage.getRecipes();
    }

   
    onUserLogout()
{
    this.authService.userLogout();
}   

onAdminLogout()
{
    this.authService.adminLogout();
} 

onCart(){
    
    this.router.navigate(['/cart']);

}

}


    




