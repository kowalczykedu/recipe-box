import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');

  protected pauseMedia(): void{
    console.log(`Sua mídia foi pausada até você clicar em "Iniciar"`);
  }

  protected playMedia(): void {
    console.log(`Sua mídia foi iniciada, você pode pausar ela clicando em "Pausar"`);
  }
}
