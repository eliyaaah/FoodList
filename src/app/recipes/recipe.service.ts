import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Breakfast Sandwich', 
            'Perfect breakfast snack', 
            'https://live.staticflickr.com/3119/3175132396_631b8e5a18_z.jpg',
            [
                new Ingredient('English Muffin', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Ham', 1)
            ]),
        new Recipe(
            'Big Breakfast', 
            'Classic breakfast', 
            'https://farm6.staticflickr.com/5150/5683889407_0ba15b4111_b.jpg',
            [
                new Ingredient('Egg', 2),
                new Ingredient('Hashbrown', 2),
                new Ingredient('Bacon', 3),
                new Ingredient('Toast', 2)
            ])
    ];  //array of Recipe objects
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}