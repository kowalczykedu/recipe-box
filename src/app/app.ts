import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected pauseMedia(): void{
    console.log(`Sua mídia foi pausada até você clicar em "Iniciar"`);
  }

  protected playMedia(): void {
    console.log(`Sua mídia foi iniciada, você pode pausar ela clicando em "Pausar"`);
  }

  protected trocarReceita(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected voltarReceita(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }
}
