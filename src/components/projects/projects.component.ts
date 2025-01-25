import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone:true,
  imports:[],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class projectsComponent {

  scrollLeft() {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  }

  scrollRight() {
    const container = document.querySelector('.scroll-container');
    if (container) {
      container.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  }
}
