import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// Ensure you created this file in the previous step!
import { Skill } from './skill.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myName = 'Ozair';

  // 1. CHANGE TYPE: It holds Objects (id + name) now, not just Strings
  skills: Skill[] = [];

  errorMessage: string = '';

  private apiUrl = 'http://localhost:8080/api/skills';
  private http = inject(HttpClient);

  constructor() {
    this.fetchSkills();
  }

  fetchSkills() {
    // 2. GET RETURNS OBJECTS
    this.http.get<Skill[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.skills = data;
      },
      error: (err) => console.error('Error:', err),
    });
  }

  addSkill(name: string) {
    if (name) {
      // FIX: Send an Object with a 'name' property
      // Angular will automatically convert this to: { "name": "Java" }
      const skillObject = { name: name };

      this.http.post<Skill[]>(this.apiUrl, skillObject).subscribe({
        next: (updatedList) => {
          this.skills = updatedList;
          this.errorMessage = '';
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = 'Skill already exist.';
        },
      });
    }
  }

  // 4. DELETE BY ID (Not Index!)
  removeSkill(id: number) {
    this.http
      .delete<Skill[]>(`${this.apiUrl}/${id}`)
      .subscribe((updatedList) => {
        this.skills = updatedList;
      });
  }
}
