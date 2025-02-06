import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  files = [
    { path: 'assets/Complete web dev Certificate.pdf', type: 'pdf', name: 'Complete web dev Certificate', preview: 'assets/Preview Complete web dev Certificate.png' },
    { path: 'assets/Docker Beginner Certificate.pdf', type: 'pdf', name: 'Docker Beginner Certificate', preview: 'assets/Preview Docker Beginner Certificate.png' },
    { path: 'assets/Kubernetes Beginner Certificate.pdf', type: 'pdf', name: 'Kubernetes Beginner Certificate', preview: 'assets/Preview Kubernetes Beginner Certificate.png' },
    { path: 'assets/RBK Certificate.jpeg', type: 'image', name: 'RBK Certificate' },
    { path: 'assets/Scrum Study Certificate.jpeg', type: 'image', name: 'Scrum Study Certificate' }
  ];

  openFullscreen(path: string) {
    window.open(path, '_blank');
  }
}
