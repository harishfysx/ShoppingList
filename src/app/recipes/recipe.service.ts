import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  private recipes: Recipe[]= [
    new Recipe('A Test Recipe1','This is simple test1 ','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',[new Ingredient('Meat',1),new Ingredient('Chilli',10)]),
    new Recipe('A Test Recipe2','This is simple test2 ','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',[new Ingredient('Flour',12),new Ingredient('carrot',100)])
  ];
  constructor(private slService:ShoppingListService){}

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
   }

   addIngredientsSlList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);
   }
}
