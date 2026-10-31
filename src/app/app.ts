import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(1);

  protected pauseMedia(): void{
    console.log(`Sua mídia foi pausada até você clicar em "Iniciar"`);
  }

  protected playMedia(): void {
    console.log(`Sua mídia foi iniciada, você pode pausar ela clicando em "Pausar"`);
  }

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
