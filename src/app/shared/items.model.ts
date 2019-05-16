import { Recipe } from '../recipes/recipe.model';

export class Items{
    selectedRecipes: SelectedRecipes;
    
    constructor(data?: any){
        this.selectedRecipes = data.selectedRecipes;
    }
}

export class SelectedRecipes {

    totalSelectedRecipes: Recipe[];
    sameRecipes: Recipe[];
    differentRecipes: Recipe[];

    constructor(data?: any)
    {
        this.sameRecipes = data.sameRecipes;
        this.differentRecipes = data.differentRecipes
        this.totalSelectedRecipes = this.sameRecipes.concat(this.differentRecipes);
    }
}