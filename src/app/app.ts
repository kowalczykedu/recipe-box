import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';
import { computed } from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(1);
  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    const currentServings = this.servings();

    return currentRecipe.ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * currentServings,
    }));
  });

  protected switchRecipe(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected backRecipe(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected incrementServings(): void {
    this.servings.update(current => current + 1);
  }

  protected decrementServing(): void {
    this.servings.update(current => Math.max(1, current - 1));
  }
}
