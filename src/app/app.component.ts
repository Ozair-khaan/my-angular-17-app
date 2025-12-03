import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // 👇 WE ARE SWITCHING BACK TO FILE LINKING
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // 1. The State (Data)
  myName = 'Ozair';

  // 2. The Action (Function)
  changeName() {
    this.myName = 'Angular Expert';
  }
}
