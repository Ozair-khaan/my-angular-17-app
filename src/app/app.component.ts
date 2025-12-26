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
  skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Angular'];

  changeName() {
    this.myName = 'Angular Expert';
  }

  addSkill(name: string) {
    if (name) {
      this.skills.push(name);
    }
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1);
  }
}
