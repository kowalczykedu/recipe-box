import { Component, input, signal, computed } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  readonly recipe = input<RecipeModel>();
  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    const currentServings = this.servings();
    if (!currentRecipe) {
      return [];
    }
    return currentRecipe.ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * currentServings,
    }));
  });

  protected incrementServings(): void {
    this.servings.update(current => current + 1);
  }

  protected decrementServing(): void {
    this.servings.update(current => Math.max(1, current - 1));
  }
}
