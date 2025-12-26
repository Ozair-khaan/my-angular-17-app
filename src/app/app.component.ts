import { Component, inject } from '@angular/core'; // Added 'inject'
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myName = 'Ozair';
  skills: string[] = [];

  // Define the API URL
  private apiUrl = 'http://localhost:8080/api/skills';

  // INJECT HTTP CLIENT
  // This is the modern way (v14+) to get dependencies
  private http = inject(HttpClient);

  constructor() {
    this.fetchSkills();
  }

  // 1. GET (Read)
  fetchSkills() {
    // We expect the backend to return an array of strings: <string[]>
    this.http.get<string[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.skills = data; // Update the UI with data from Java
      },
      error: (err) => {
        console.error('Error connecting to Spring Boot:', err);
      },
    });
  }

  // 2. POST (Create)
  addSkill(name: string) {
    if (name) {
      // Send the name as the body
      this.http.post<string[]>(this.apiUrl, name).subscribe((updatedList) => {
        this.skills = updatedList; // Refresh list from server response
      });
    }
  }

  // 3. DELETE (Delete)
  removeSkill(index: number) {
    this.http
      .delete<string[]>(`${this.apiUrl}/${index}`)
      .subscribe((updatedList) => {
        this.skills = updatedList;
      });
  }
}
