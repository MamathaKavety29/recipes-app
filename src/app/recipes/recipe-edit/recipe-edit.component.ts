import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
editMode=false;
recipeForm:FormGroup;
constructor(private route:ActivatedRoute,
  private router:Router,
  private recipeService:RecipeService) { 
    console.log(route);
  }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>
    {
      this.id=+param['id'];
      this.editMode=param['id']!=null;
      console.log(this.editMode);
      this.formInit();
    })
  }

  private formInit(){
    let recipeIngredients=new FormArray([]);
    let recipename='';
    let imagePath='';
    let description='';
    if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.id);
      recipename=recipe.name;
      imagePath=recipe.imagePath;
      description=recipe.description;
      if(recipe['ingredients']){
      for(let ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name),
              'amount':new FormControl(ingredient.amount)
            }
            )
          )
         }
       }

    }
    this.recipeForm=new FormGroup({
      'name':new FormControl(recipename,Validators.required),
      'imagePath':new FormControl(imagePath,Validators.required),
      'description':new FormControl(description,Validators.required),
      'ingredients':recipeIngredients
    });
  }
  onDeleteIngredient(index:number){
    ( <FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
  onSubmit(){
    console.log(this.recipeForm);
    // const newRecipe=new Recipe(this.recipeForm.value['name'],this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],this.recipeForm.value['ingredients']);
  if(this.editMode){
       this.recipeService.updateRecipe(this.id,this.recipeForm.value);
  }
  else{
    this.recipeService.addRecipe(this.recipeForm.value);
    console.log(this.recipeForm.value);
  }
  this.recipeForm.reset();
  this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
