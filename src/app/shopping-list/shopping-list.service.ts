import {Ingredient} from "../shared/ingredients.model";
import {EventEmitter} from "@angular/core";
export class ShoppingListService{
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Mango',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
