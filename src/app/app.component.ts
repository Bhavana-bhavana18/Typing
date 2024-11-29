import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enterText = '';

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.enterText = value;
  }
  compare(randomLetter: string, enterLetter: string) {
    if (!enterLetter) {
      return 'pending';
    }
    return randomLetter === enterLetter ? 'correct' : 'incorrect';
  }
}
