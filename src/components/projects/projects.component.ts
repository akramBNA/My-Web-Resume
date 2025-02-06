import { Component } from '@angular/core';
import { SafeUrlPipe } from './safe-url.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[SafeUrlPipe, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  files = [
    { path: 'assets/Complete web dev Certificate.pdf', type: 'pdf', name: 'Complete web dev Certificate' },
    { path: 'assets/Docker Beginner Certificate.pdf', type: 'pdf', name: 'Docker Beginner Certificate' },
    { path: 'assets/Kubernetes Beginner Certificate.pdf', type: 'pdf', name: 'Kubernetes Beginner Certificate' },
    { path: 'assets/RBK Certificate.jpeg', type: 'image', name: 'RBK Certificate' },
    { path: 'assets/Scrum Study Certificate.jpeg', type: 'image', name: 'Scrum Study Certificate' }
  ];

  openFullscreen(path: string) {
    window.open(path, '_blank');
  }
}
