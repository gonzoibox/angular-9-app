import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {};

    private recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'A super tasty Schnitzel',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
            [new Ingredient('Meat', 1), new Ingredient('French Fries', 10)]),
        new Recipe(
            'Burger',
            'An awesome Burger King',
            'https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_1280.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Buns', 1)])
      ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}