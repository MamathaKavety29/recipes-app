import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public id:string;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:Ingredient[];
    public cost:number;

    constructor(id:string,name:string,desc:string,imagePath:string,ingredients:Ingredient[],cost:number)
    {
        this.id=id;
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
        this.cost=cost;

    }
}