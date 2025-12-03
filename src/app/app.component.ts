import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myName = 'Ozair';
  skills = ['HTML', 'CSS', 'JavaScript', 'jQuery'];

  changeName() {
    this.myName = 'Angular Expert';
  }

  addSkill() {
    this.skills.push('Angular v17');
  }
}
