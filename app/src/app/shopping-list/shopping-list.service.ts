import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  
  private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Mango', 6)
    ];

  getIngredients() {
      return this.ingredients.slice();
  }

  addIngredients(ingrediens: Ingredient) {
    this.ingredients.push(ingrediens);
    this.ingredientsChanged.emit(this.ingredients.slice())
    }
}