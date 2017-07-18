import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
export class RecipeService{
  private recipes: Recipe[]= [
    new Recipe('A Test Recipe1','This is simple test1 ','http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('A Test Recipe2','This is simple test2 ','http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
   }
}
